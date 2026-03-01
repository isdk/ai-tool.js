import { Token, TokenType, ParserOptions } from './types';

/**
 * Lexical analyzer for command arguments.
 * Responsible for breaking down the raw input string into a sequence of basic tokens.
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
   * Peeks at the next token without consuming it.
   */
  peekToken(): Token {
    const savedPos = this.pos;
    const token = this.nextToken();
    this.pos = savedPos;
    return token;
  }

  /**
   * Retrieves the next token and advances the position pointer.
   */
  nextToken(): Token {
    this.skipWhitespace();
    if (this.pos >= this.input.length) {
      return { type: TokenType.EOF, value: '', start: this.pos, end: this.pos };
    }

    const char = this.input[this.pos];
    const start = this.pos;

    // 1. Handle quoted strings (supports escaping)
    if (char === '"' || char === "'" || char === '`') {
      return this.readString(char);
    }

    // 2. Handle single-character symbols
    if (char === '(') { this.pos++; return { type: TokenType.L_PAREN, value: '(', start, end: this.pos }; }
    if (char === ')') { this.pos++; return { type: TokenType.R_PAREN, value: ')', start, end: this.pos }; }
    if (char === '[') { this.pos++; return { type: TokenType.L_BRACKET, value: '[', start, end: this.pos }; }
    if (char === ']') { this.pos++; return { type: TokenType.R_BRACKET, value: ']', start, end: this.pos }; }
    if (char === '{') { this.pos++; return { type: TokenType.L_BRACE, value: '{', start, end: this.pos }; }
    if (char === '}') { this.pos++; return { type: TokenType.R_BRACE, value: '}', start, end: this.pos }; }
    
    // 3. Handle custom delimiter
    if (char === this.delimiter) { 
      this.pos++; 
      return { type: TokenType.COMMA, value: char, start, end: this.pos }; 
    }
    
    // 4. Handle custom assigner
    if (char === this.assigner) {
      this.pos++;
      return { type: TokenType.ASSIGN, value: char, start, end: this.pos };
    }

    // 5. Default to reading as RAW text (until a symbol or whitespace is encountered)
    return this.readRaw();
  }

  /**
   * Reads a quoted string with escape support.
   */
  private readString(quote: string): Token {
    const start = this.pos;
    let value = quote;
    this.pos++; // Skip opening quote
    
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
   * Reads a raw text segment.
   */
  private readRaw(): Token {
    const start = this.pos;
    // Stop characters: any symbol that could start a new token
    const symbols = ['(', ')', '[', ']', '{', '}', this.delimiter, this.assigner, '"', "'", '`'];
    
    while (this.pos < this.input.length) {
      const char = this.input[this.pos];
      if (symbols.includes(char) || /\s/.test(char)) break;
      this.pos++;
    }
    
    let value = this.input.substring(start, this.pos);
    // Note: 'value' remains in its raw form, to be processed further by the Evaluator.
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
