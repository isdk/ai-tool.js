import { CmdArgToken, CmdArgTokenType, CmdArgParserOptions } from './types';

/**
 * Lexical analyzer for command arguments.
 * Responsible for breaking down the raw input string into a sequence of basic tokens.
 */
export class CmdArgLexer {
  public input: string;
  private pos: number = 0;
  private delimiter: string;
  private assigner: string;

  constructor(input: string, options?: CmdArgParserOptions) {
    this.input = input;
    this.delimiter = options?.delimiter ?? ',';
    this.assigner = options?.assigner ?? '=';
  }

  /**
   * Peeks at the next CmdArgToken without consuming it.
   */
  peekToken(): CmdArgToken {
    const savedPos = this.pos;
    const CmdArgToken = this.nextToken();
    this.pos = savedPos;
    return CmdArgToken;
  }

  /**
   * Retrieves the next CmdArgToken and advances the position pointer.
   */
  nextToken(): CmdArgToken {
    this.skipWhitespace();
    if (this.pos >= this.input.length) {
      return { type: CmdArgTokenType.EOF, value: '', start: this.pos, end: this.pos };
    }

    const char = this.input[this.pos];
    const start = this.pos;

    // 1. Handle quoted strings (supports escaping)
    if (char === '"' || char === "'" || char === '`') {
      return this.readString(char);
    }

    // 2. Handle single-character symbols
    if (char === '(') { this.pos++; return { type: CmdArgTokenType.L_PAREN, value: '(', start, end: this.pos }; }
    if (char === ')') { this.pos++; return { type: CmdArgTokenType.R_PAREN, value: ')', start, end: this.pos }; }
    if (char === '[') { this.pos++; return { type: CmdArgTokenType.L_BRACKET, value: '[', start, end: this.pos }; }
    if (char === ']') { this.pos++; return { type: CmdArgTokenType.R_BRACKET, value: ']', start, end: this.pos }; }
    if (char === '{') { this.pos++; return { type: CmdArgTokenType.L_BRACE, value: '{', start, end: this.pos }; }
    if (char === '}') { this.pos++; return { type: CmdArgTokenType.R_BRACE, value: '}', start, end: this.pos }; }

    // 3. Handle custom delimiter
    if (char === this.delimiter) {
      this.pos++;
      return { type: CmdArgTokenType.COMMA, value: char, start, end: this.pos };
    }

    // 4. Handle custom assigner
    if (char === this.assigner) {
      this.pos++;
      return { type: CmdArgTokenType.ASSIGN, value: char, start, end: this.pos };
    }

    // 5. Default to reading as RAW text (until a symbol or whitespace is encountered)
    return this.readRaw();
  }

  /**
   * Reads a quoted string with escape support.
   */
  private readString(quote: string): CmdArgToken {
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
    return { type: CmdArgTokenType.STRING, value, start, end: this.pos };
  }

  /**
   * Reads a raw text segment.
   */
  private readRaw(): CmdArgToken {
    const start = this.pos;
    // Stop characters: any symbol that could start a new CmdArgToken
    const symbols = ['(', ')', '[', ']', '{', '}', this.delimiter, this.assigner, '"', "'", '`'];

    while (this.pos < this.input.length) {
      const char = this.input[this.pos];
      if (symbols.includes(char) || /\s/.test(char)) break;
      this.pos++;
    }

    let value = this.input.substring(start, this.pos);
    // Note: 'value' remains in its raw form, to be processed further by the Evaluator.
    return { type: CmdArgTokenType.RAW, value, start, end: this.pos };
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
