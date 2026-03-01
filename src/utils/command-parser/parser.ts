import { Lexer } from './lexer';
import { Token, TokenType, ParserOptions, ParseResult, PROCESSOR_RESULT, ArgContext, UNRESOLVED_SYMBOL, ProcessorResultOptions } from './types';
import { isIdentifier, isPathIdentifier } from './utils';
import { evaluate } from './evaluator';

/**
 * 结构化命令参数解析器。
 * 支持位置参数、命名参数 (k=v)、嵌套结构以及基于 Symbol 的扩展协议。
 */
export class Parser {
  private lexer: Lexer;
  private options: ParserOptions;

  constructor(lexer: Lexer, options?: ParserOptions) {
    this.lexer = lexer;
    // 默认开启直觉化的配置
    this.options = { 
      namedExcludePositional: true, 
      idAsName: true, 
      ...options 
    };
  }

  /**
   * 执行解析流程。
   * 
   * 核心逻辑优先级：
   * 1. 分割顶层参数（考虑括号嵌套深度）。
   * 2. 识别显式命名参数 (k=v)。
   * 3. 预检位置参数是否符合标识符/路径格式。
   * 4. 调用评估器 (Evaluator) 获取结果，并解包 PROCESSOR_RESULT 协议。
   * 5. 分发结果到 args 和 kvArgs，并维护索引计数。
   */
  async parse(): Promise<ParseResult> {
    const args: any[] = [];
    const kvArgs: Record<string, any> = {};
    const namedIndices = new Set<number>();
    let positionalIndex = 0;

    while (true) {
      const nextToken = this.lexer.peekToken();
      if (nextToken.type === TokenType.EOF) break;

      // 1. 收集直到下一个分隔符的所有 Token（保持括号平衡）
      const tokens = this.collectUntilDelimiter();
      if (tokens.length === 0) {
        // 空参数：占位并增加索引
        args[positionalIndex] = undefined;
        this.consumeDelimiter();
        positionalIndex++;
        continue;
      }

      // 2. 尝试识别命名参数形态 (k=v)
      const { name, valueTokens } = this.splitNamedArgument(tokens);
      const isNamed = name !== undefined;
      
      // 3. 预检位置参数是否符合标识符/路径格式 (用于 idAsName)
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
          // 截取原始文本以便 Processor 使用
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

          // 4. 执行评估逻辑
          value = await evaluate(context);
      }

      // 5. 解包 Symbol 协议 (PROCESSOR_RESULT 或 UNRESOLVED_SYMBOL)
      let finalValue = value;
      let processorSuggestedName: string | undefined;
      let processorOptions: ProcessorResultOptions | undefined;
      let isUnresolved = false;

      /** 内部辅助：递归解包由 ReferenceError 产生的未解析标记 */
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

      // 6. 最终分发逻辑
      const effectiveName = name || processorSuggestedName;
      const excludePositional = processorOptions?.excludePositional;

      if (effectiveName) {
        // A. 显式指定了名称（直接赋值或通过 Processor）
        kvArgs[effectiveName] = finalValue;
        
        if (!this.options.namedExcludePositional && !excludePositional) {
          // 如果选项允许，同时存入位置索引
          args[positionalIndex] = finalValue;
          namedIndices.add(positionalIndex);
          positionalIndex++;
        }
        // 注意：若命名参数不占位，positionalIndex 不增加
      } else {
        // B. 纯位置参数
        if (!excludePositional) {
            args[positionalIndex] = finalValue;
            
            // 自动映射：如果位置参数是 Id 且未发生 ReferenceError 降级
            if (this.options.idAsName && potentialId && !isUnresolved) {
              kvArgs[potentialId] = finalValue;
              namedIndices.add(positionalIndex);
            }

            positionalIndex++;
        }
      }

      if (this.consumeDelimiter() === TokenType.EOF) break;
    }

    return { args, kvArgs, namedIndices };
  }

  /**
   * 收集 Token 直到遇到顶层分隔符
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
   * 尝试从 Token 序列中拆分出命名的 Key (k=v)
   */
  private splitNamedArgument(tokens: Token[]): { name?: string, valueTokens: Token[] } {
    if (tokens.length >= 2 && tokens[0].type === TokenType.RAW && tokens[1].type === TokenType.ASSIGN) {
      const name = tokens[0].value;
      if (isIdentifier(name)) {
        return { name, valueTokens: tokens.slice(2) };
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
   * 消费掉当前分隔符
   */
  private consumeDelimiter(): TokenType {
    const token = this.lexer.peekToken();
    if (token.type === TokenType.COMMA) {
      this.lexer.nextToken();
    }
    return token.type;
  }
}
