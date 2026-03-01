import { Token, TokenType, ParserOptions } from './types';

/**
 * 命令参数词法分析器。
 * 负责将原始字符串分解为基本的 Token 序列。
 */
export class Lexer {
  public input: string;
  private pos: number = 0;
  private delimiter: string;
  private assigner: string;

  constructor(input: string, options?: ParserOptions) {
    this.input = input;
    this.delimiter = options?.delimiter ?? ',';
    this.assigner = options?.assigner ?? '=';
  }

  /**
   * 查看下一个 Token 但不消耗位置。
   */
  peekToken(): Token {
    const savedPos = this.pos;
    const token = this.nextToken();
    this.pos = savedPos;
    return token;
  }

  /**
   * 获取下一个 Token 并移动位置指针。
   */
  nextToken(): Token {
    this.skipWhitespace();
    if (this.pos >= this.input.length) {
      return { type: TokenType.EOF, value: '', start: this.pos, end: this.pos };
    }

    const char = this.input[this.pos];
    const start = this.pos;

    // 1. 处理引号字符串 (支持转义)
    if (char === '"' || char === "'" || char === '`') {
      return this.readString(char);
    }

    // 2. 处理单字符符号
    if (char === '(') { this.pos++; return { type: TokenType.L_PAREN, value: '(', start, end: this.pos }; }
    if (char === ')') { this.pos++; return { type: TokenType.R_PAREN, value: ')', start, end: this.pos }; }
    if (char === '[') { this.pos++; return { type: TokenType.L_BRACKET, value: '[', start, end: this.pos }; }
    if (char === ']') { this.pos++; return { type: TokenType.R_BRACKET, value: ']', start, end: this.pos }; }
    if (char === '{') { this.pos++; return { type: TokenType.L_BRACE, value: '{', start, end: this.pos }; }
    if (char === '}') { this.pos++; return { type: TokenType.R_BRACE, value: '}', start, end: this.pos }; }
    
    // 3. 处理自定义分隔符
    if (char === this.delimiter) { 
      this.pos++; 
      return { type: TokenType.COMMA, value: char, start, end: this.pos }; 
    }
    
    // 4. 处理自定义赋值符
    if (char === this.assigner) {
      this.pos++;
      return { type: TokenType.ASSIGN, value: char, start, end: this.pos };
    }

    // 5. 默认作为 RAW 文本读取 (直至遇到符号或空白)
    return this.readRaw();
  }

  /**
   * 读取带转义支持的引号字符串。
   */
  private readString(quote: string): Token {
    const start = this.pos;
    let value = quote;
    this.pos++; // 跳过起始引号
    
    while (this.pos < this.input.length) {
      const char = this.input[this.pos];
      if (char === '\\') {
        value += char;
        this.pos++;
        if (this.pos < this.input.length) {
          value += this.input[this.pos];
          this.pos++;
        }
      } else if (char === quote) {
        value += char;
        this.pos++;
        break;
      } else {
        value += char;
        this.pos++;
      }
    }
    return { type: TokenType.STRING, value, start, end: this.pos };
  }

  /**
   * 读取原始文本段。
   */
  private readRaw(): Token {
    const start = this.pos;
    // 停止字符：任何可能开启新 Token 的符号
    const symbols = ['(', ')', '[', ']', '{', '}', this.delimiter, this.assigner, '"', "'", '`'];
    
    while (this.pos < this.input.length) {
      const char = this.input[this.pos];
      if (symbols.includes(char) || /\s/.test(char)) break;
      this.pos++;
    }
    
    let value = this.input.substring(start, this.pos);
    // 注意：这里的 value 会保持其原始形态，由 Evaluator 进一步处理
    return { type: TokenType.RAW, value, start, end: this.pos };
  }

  private skipWhitespace() {
    while (this.pos < this.input.length && /\s/.test(this.input[this.pos])) {
      this.pos++;
    }
  }

  reset() {
    this.pos = 0;
  }
}
