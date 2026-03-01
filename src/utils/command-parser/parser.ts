import { Lexer } from './lexer';
import { Token, TokenType, ParserOptions, ParseResult, PROCESSOR_RESULT, ArgContext, UNRESOLVED_SYMBOL, ProcessorResultOptions } from './types';
import { isIdentifier, isPathIdentifier, wrapFlagValue } from './utils';
import { evaluate } from './evaluator';

/**
 * Structured command argument parser.
 * Supports positional arguments, named arguments (k=v), nested structures, 
 * and Symbol-based extension protocols.
 */
export class Parser {
  private lexer: Lexer;
  private options: ParserOptions;

  constructor(lexer: Lexer, options?: ParserOptions) {
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
   * 5. Distribute results to 'args' and 'kvArgs', maintaining index consistency.
   */
  async parse(): Promise<ParseResult> {
    const args: any[] = [];
    const kvArgs: Record<string, any> = {};
    const flags: Record<string, any> = {};
    const namedIndices = new Set<number>();
    let positionalIndex = 0;

    while (true) {
      const nextToken = this.lexer.peekToken();
      if (nextToken.type === TokenType.EOF) break;

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
      if (this.options.flagPrefix && tokens.length === 1 && tokens[0].type === TokenType.RAW) {
          const raw = tokens[0].value;
          const prefixes = Array.isArray(this.options.flagPrefix) ? this.options.flagPrefix : [this.options.flagPrefix];
          const prefix = prefixes.find(p => raw.startsWith(p));
          if (prefix && isIdentifier(raw, { flagPrefix: this.options.flagPrefix })) {
              const flagName = raw.slice(prefix.length);
              flags[flagName] = wrapFlagValue(true, prefix);
              if (this.consumeDelimiter() === TokenType.EOF) break;
              continue;
          }
      }

      // 2. Attempt to identify named argument (k=v) or special assignment (!k=v)
      const { name, valueTokens, flagPrefix } = this.splitNamedArgument(tokens);
      const isNamed = name !== undefined;
      const isFlag = flagPrefix !== undefined;
      
      // 3. Pre-check if a positional argument matches identifier/path format (for idAsName)
      let potentialId: string | undefined;
      if (!isNamed && valueTokens.length === 1 && valueTokens[0].type === TokenType.RAW) {
        const val = valueTokens[0].value;
        if (isPathIdentifier(val)) {
          potentialId = val;
        }
      }

      let value: any = undefined;
      if (valueTokens.length > 0) {
          const startToken = valueTokens[0];
          const endToken = valueTokens[valueTokens.length - 1];
          // Capture raw text for Processor usage
          const rawValue = this.lexer.input.substring(startToken.start, endToken.end).trim();

          const context: ArgContext = {
            isNamed,
            name,
            potentialId,
            rawValue,
            tokens: valueTokens,
            index: positionalIndex,
            scope: this.options.scope,
            options: this.options,
            parser: this
          };

          // 4. Execute evaluation logic
          value = await evaluate(context);
      }

      // 5. Unpack Symbol Protocols (PROCESSOR_RESULT or UNRESOLVED_SYMBOL)
      let finalValue = value;
      let processorSuggestedName: string | undefined;
      let processorOptions: ProcessorResultOptions | undefined;
      let isUnresolved = false;

      /** Internal helper: Recursively unwrap unresolved marker produced by ReferenceError */
      const unwrapUnresolved = (val: any) => {
          if (val && typeof val === 'object' && val[UNRESOLVED_SYMBOL]) {
              isUnresolved = true;
              return val[UNRESOLVED_SYMBOL];
          }
          return val;
      }

      if (value && typeof value === 'object') {
        if (value[PROCESSOR_RESULT]) {
          [finalValue, processorSuggestedName, processorOptions] = value[PROCESSOR_RESULT];
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
            kvArgs[effectiveName] = finalValue;
            
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
                if (this.options.idAsName && potentialId && !isUnresolved) {
                  kvArgs[potentialId] = finalValue;
                  namedIndices.add(positionalIndex);
                }

                positionalIndex++;
            }
          }
      }

      if (this.consumeDelimiter() === TokenType.EOF) break;
    }

    return { args, kvArgs, flags, namedIndices };
  }

  /**
   * Collects tokens until a top-level delimiter is encountered.
   */
  private collectUntilDelimiter(): Token[] {
    const tokens: Token[] = [];
    let depth = 0;

    while (true) {
      const token = this.lexer.peekToken();
      if (token.type === TokenType.EOF) break;
      if (token.type === TokenType.COMMA && depth === 0) break;

      if (this.isLeftBracket(token.type)) depth++;
      if (this.isRightBracket(token.type)) {
        depth--;
        if (depth < 0) depth = 0;
      }

      tokens.push(this.lexer.nextToken());
    }
    return tokens;
  }

  /**
   * Attempts to split a named key (k=v) or flag (!k=v) from the token sequence.
   */
  private splitNamedArgument(tokens: Token[]): { name?: string, valueTokens: Token[], flagPrefix?: string } {
    if (tokens.length >= 2 && tokens[0].type === TokenType.RAW && tokens[1].type === TokenType.ASSIGN) {
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

  private isLeftBracket(type: TokenType): boolean {
    return type === TokenType.L_PAREN || type === TokenType.L_BRACKET || type === TokenType.L_BRACE;
  }

  private isRightBracket(type: TokenType): boolean {
    return type === TokenType.R_PAREN || type === TokenType.R_BRACKET || type === TokenType.R_BRACE;
  }

  /**
   * Consumes the current delimiter token.
   */
  private consumeDelimiter(): TokenType {
    const token = this.lexer.peekToken();
    if (token.type === TokenType.COMMA) {
      this.lexer.nextToken();
    }
    return token.type;
  }
}

