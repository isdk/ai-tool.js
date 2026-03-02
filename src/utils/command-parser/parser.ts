import { CmdArgLexer } from './lexer';
import { CmdArgToken, CmdArgTokenType, CmdArgParserOptions, CmdArgParseResult, CMD_ARG_PROCESSOR_RESULT, CmdArgContext, CMD_ARG_UNRESOLVED_SYMBOL, CmdArgProcessorResultOptions } from './types';
import { isIdentifier, isPathIdentifier, wrapFlagValue } from './utils';
import { cmdArgEvaluate } from './evaluator';

/**
 * Structured command argument CmdArgParser.
 * Supports positional arguments, named arguments (k=v), nested structures,
 * and Symbol-based extension protocols.
 */
export class CmdArgParser {
  private lexer: CmdArgLexer;
  private options: CmdArgParserOptions;

  constructor(lexer: CmdArgLexer, options?: CmdArgParserOptions) {
    this.lexer = lexer;
    // Default to intuitive configurations
    this.options = {
      namedExcludePositional: true,
      idAsName: true,
      ...options
    };
  }

  /**
   * Executes the parsing process.
   *
   * Core logic priority:
   * 1. Collect top-level arguments (respecting bracket nesting depth).
   * 2. Identify explicit named arguments (k=v) or flag shorthands.
   * 3. Pre-check if a positional argument fits identifier/path format for auto-mapping.
   * 4. Invoke Evaluator to get the value and unpack any Symbol Protocols.
   * 5. Distribute results to 'args' and 'namedArgs', maintaining index consistency.
   */
  async parse(): Promise<CmdArgParseResult> {
    const args: any[] = [];
    const namedArgs: Record<string, any> = {};
    const flags: Record<string, any> = {};
    const namedIndices = new Set<number>();
    let positionalIndex = 0;

    while (true) {
      const nextToken = this.lexer.peekToken();
      if (nextToken.type === CmdArgTokenType.EOF) break;

      // 1. Collect all tokens until the next delimiter (balancing brackets)
      const tokens = this.collectUntilDelimiter();
      if (tokens.length === 0) {
        // Empty argument: placehold with undefined and increment index
        args[positionalIndex] = undefined;
        this.consumeDelimiter();
        positionalIndex++;
        continue;
      }

      // 1.5 Identify special parameter shorthands (e.g., !debug)
      if (this.options.flagPrefix && tokens.length === 1 && tokens[0].type === CmdArgTokenType.RAW) {
          const raw = tokens[0].value;
          const prefixes = Array.isArray(this.options.flagPrefix) ? this.options.flagPrefix : [this.options.flagPrefix];
          const prefix = prefixes.find(p => raw.startsWith(p));
          if (prefix && isIdentifier(raw, { flagPrefix: this.options.flagPrefix })) {
              const flagName = raw.slice(prefix.length);
              flags[flagName] = wrapFlagValue(true, prefix);
              if (this.consumeDelimiter() === CmdArgTokenType.EOF) break;
              continue;
          }
      }

      // 2. Attempt to identify named argument (k=v) or special assignment (!k=v)
      const { name, valueTokens, flagPrefix } = this.splitNamedArgument(tokens);
      const isNamed = name !== undefined;
      const isFlag = flagPrefix !== undefined;

      // 3. Pre-check if a positional argument matches identifier/path format (for idAsName)
      let identifierAsName: string | undefined;
      if (!isNamed && valueTokens.length === 1 && valueTokens[0].type === CmdArgTokenType.RAW) {
        const val = valueTokens[0].value;
        if (isPathIdentifier(val)) {
          identifierAsName = val;
        }
      }

      let value: any = undefined;
      if (valueTokens.length > 0) {
          const startToken = valueTokens[0];
          const endToken = valueTokens[valueTokens.length - 1];
          // Capture raw text for Processor usage
          const rawValue = this.lexer.input.substring(startToken.start, endToken.end).trim();

          const context: CmdArgContext = {
            isNamed,
            name,
            identifierAsName,
            rawValue,
            tokens: valueTokens,
            index: positionalIndex,
            scope: this.options.scope,
            options: this.options,
            CmdArgParser: this
          };

          // 4. Execute evaluation logic
          value = await cmdArgEvaluate(context);
      }

      // 5. Unpack Symbol Protocols (CMD_ARG_PROCESSOR_RESULT or CMD_ARG_UNRESOLVED_SYMBOL)
      let finalValue = value;
      let processorSuggestedName: string | undefined;
      let processorOptions: CmdArgProcessorResultOptions | undefined;
      let isUnresolved = false;

      /** Internal helper: Recursively unwrap unresolved marker produced by ReferenceError */
      const unwrapUnresolved = (val: any) => {
          if (val && typeof val === 'object' && val[CMD_ARG_UNRESOLVED_SYMBOL]) {
              isUnresolved = true;
              return val[CMD_ARG_UNRESOLVED_SYMBOL];
          }
          return val;
      }

      if (value && typeof value === 'object') {
        if (value[CMD_ARG_PROCESSOR_RESULT]) {
          [finalValue, processorSuggestedName, processorOptions] = value[CMD_ARG_PROCESSOR_RESULT];
          finalValue = unwrapUnresolved(finalValue);
        } else {
          finalValue = unwrapUnresolved(value);
        }
      }

      // 6. Final distribution logic
      if (isFlag && name) {
          flags[name] = wrapFlagValue(finalValue, flagPrefix);
      } else {
          const effectiveName = name || processorSuggestedName;
          const excludePositional = processorOptions?.excludePositional;

          if (effectiveName) {
            // A. Explicit name specified (direct assignment or via Processor)
            namedArgs[effectiveName] = finalValue;

            if (!this.options.namedExcludePositional && !excludePositional) {
              // If options allow, also store in the positional index
              args[positionalIndex] = finalValue;
              namedIndices.add(positionalIndex);
              positionalIndex++;
            }
            // Note: If named arguments do not occupy a position, positionalIndex does not increment
          } else {
            // B. Pure positional argument
            if (!excludePositional) {
                args[positionalIndex] = finalValue;

                // Auto-mapping: If positional argument is an Id and no ReferenceError fallback occurred
                if (this.options.idAsName && identifierAsName && !isUnresolved) {
                  namedArgs[identifierAsName] = finalValue;
                  namedIndices.add(positionalIndex);
                }

                positionalIndex++;
            }
          }
      }

      if (this.consumeDelimiter() === CmdArgTokenType.EOF) break;
    }

    return { args, namedArgs, flags, namedIndices };
  }

  /**
   * Collects tokens until a top-level delimiter is encountered.
   */
  private collectUntilDelimiter(): CmdArgToken[] {
    const tokens: CmdArgToken[] = [];
    let depth = 0;

    while (true) {
      const CmdArgToken = this.lexer.peekToken();
      if (CmdArgToken.type === CmdArgTokenType.EOF) break;
      if (CmdArgToken.type === CmdArgTokenType.COMMA && depth === 0) break;

      if (this.isLeftBracket(CmdArgToken.type)) depth++;
      if (this.isRightBracket(CmdArgToken.type)) {
        depth--;
        if (depth < 0) depth = 0;
      }

      tokens.push(this.lexer.nextToken());
    }
    return tokens;
  }

  /**
   * Attempts to split a named key (k=v) or flag (!k=v) from the CmdArgToken sequence.
   */
  private splitNamedArgument(tokens: CmdArgToken[]): { name?: string, valueTokens: CmdArgToken[], flagPrefix?: string } {
    if (tokens.length >= 2 && tokens[0].type === CmdArgTokenType.RAW && tokens[1].type === CmdArgTokenType.ASSIGN) {
      const rawName = tokens[0].value;
      if (isIdentifier(rawName, { flagPrefix: this.options.flagPrefix })) {
        let name = rawName;
        let flagPrefix: string | undefined;
        if (this.options.flagPrefix) {
          const prefixes = Array.isArray(this.options.flagPrefix) ? this.options.flagPrefix : [this.options.flagPrefix];
          flagPrefix = prefixes.find(p => rawName.startsWith(p));
          if (flagPrefix) {
            name = rawName.slice(flagPrefix.length);
          }
        }
        return { name, valueTokens: tokens.slice(2), flagPrefix };
      }
    }
    return { valueTokens: tokens };
  }

  private isLeftBracket(type: CmdArgTokenType): boolean {
    return type === CmdArgTokenType.L_PAREN || type === CmdArgTokenType.L_BRACKET || type === CmdArgTokenType.L_BRACE;
  }

  private isRightBracket(type: CmdArgTokenType): boolean {
    return type === CmdArgTokenType.R_PAREN || type === CmdArgTokenType.R_BRACKET || type === CmdArgTokenType.R_BRACE;
  }

  /**
   * Consumes the current delimiter CmdArgToken.
   */
  private consumeDelimiter(): CmdArgTokenType {
    const CmdArgToken = this.lexer.peekToken();
    if (CmdArgToken.type === CmdArgTokenType.COMMA) {
      this.lexer.nextToken();
    }
    return CmdArgToken.type;
  }
}

