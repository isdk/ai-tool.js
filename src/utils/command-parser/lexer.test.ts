import { describe, it, expect } from 'vitest';
import { Lexer } from './lexer';
import { TokenType } from './types';

describe('Lexer', () => {
  it('should tokenize basic symbols and text', () => {
    const lexer = new Lexer('a, b=1, [2]');
    const tokens = [];
    let t;
    while ((t = lexer.nextToken()).type !== TokenType.EOF) {
      tokens.push(t);
    }
    expect(tokens.map(t => t.type)).toEqual([
      TokenType.RAW, TokenType.COMMA, 
      TokenType.RAW, TokenType.ASSIGN, TokenType.RAW, 
      TokenType.COMMA, 
      TokenType.L_BRACKET, TokenType.RAW, TokenType.R_BRACKET
    ]);
    expect(tokens[0].value).toBe('a');
    expect(tokens[2].value).toBe('b');
    expect(tokens[4].value).toBe('1');
  });

  it('should handle double-quoted strings with escapes', () => {
    const lexer = new Lexer('"quoted \\"string\\""');
    const t = lexer.nextToken();
    expect(t.type).toBe(TokenType.STRING);
    expect(t.value).toBe('"quoted \\"string\\""');
  });

  it('should handle single-quoted strings with escapes', () => {
    const lexer = new Lexer("'it\\'s a string'");
    const t = lexer.nextToken();
    expect(t.type).toBe(TokenType.STRING);
    expect(t.value).toBe("'it\\'s a string'");
  });

  it('should support custom delimiter and assigner', () => {
    const lexer = new Lexer('a; b:1', { delimiter: ';', assigner: ':' });
    const tokens = [];
    let t;
    while ((t = lexer.nextToken()).type !== TokenType.EOF) {
      tokens.push(t);
    }
    expect(tokens.map(t => t.type)).toEqual([
      TokenType.RAW, TokenType.COMMA, TokenType.RAW, TokenType.ASSIGN, TokenType.RAW
    ]);
    expect(tokens[1].value).toBe(';');
    expect(tokens[3].value).toBe(':');
  });

  it('should correctly skip whitespace', () => {
    const lexer = new Lexer('  a  ,  b  ');
    expect(lexer.nextToken().value).toBe('a');
    expect(lexer.nextToken().type).toBe(TokenType.COMMA);
    expect(lexer.nextToken().value).toBe('b');
  });

  it('should peek token without consuming', () => {
    const lexer = new Lexer('a,b');
    const t1 = lexer.peekToken();
    const t2 = lexer.nextToken();
    expect(t1).toEqual(t2);
    expect(lexer.nextToken().type).toBe(TokenType.COMMA);
  });
});
