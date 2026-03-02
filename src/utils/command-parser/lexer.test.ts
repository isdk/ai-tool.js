import { describe, it, expect } from 'vitest';
import { CmdArgLexer } from './lexer';
import { CmdArgTokenType } from './types';

describe('Lexer', () => {
  it('should tokenize basic symbols and text', () => {
    const lexer = new CmdArgLexer('a, b=1, [2]');
    const tokens = [];
    let t;
    while ((t = lexer.nextToken()).type !== CmdArgTokenType.EOF) {
      tokens.push(t);
    }
    expect(tokens.map(t => t.type)).toEqual([
      CmdArgTokenType.RAW, CmdArgTokenType.COMMA,
      CmdArgTokenType.RAW, CmdArgTokenType.ASSIGN, CmdArgTokenType.RAW,
      CmdArgTokenType.COMMA,
      CmdArgTokenType.L_BRACKET, CmdArgTokenType.RAW, CmdArgTokenType.R_BRACKET
    ]);
    expect(tokens[0].value).toBe('a');
    expect(tokens[2].value).toBe('b');
    expect(tokens[4].value).toBe('1');
  });

  it('should handle double-quoted strings with escapes', () => {
    const lexer = new CmdArgLexer('"quoted \\"string\\""');
    const t = lexer.nextToken();
    expect(t.type).toBe(CmdArgTokenType.STRING);
    expect(t.value).toBe('"quoted \\"string\\""');
  });

  it('should handle single-quoted strings with escapes', () => {
    const lexer = new CmdArgLexer("'it\\'s a string'");
    const t = lexer.nextToken();
    expect(t.type).toBe(CmdArgTokenType.STRING);
    expect(t.value).toBe("'it\\'s a string'");
  });

  it('should support custom delimiter and assigner', () => {
    const lexer = new CmdArgLexer('a; b:1', { delimiter: ';', assigner: ':' });
    const tokens = [];
    let t;
    while ((t = lexer.nextToken()).type !== CmdArgTokenType.EOF) {
      tokens.push(t);
    }
    expect(tokens.map(t => t.type)).toEqual([
      CmdArgTokenType.RAW, CmdArgTokenType.COMMA, CmdArgTokenType.RAW, CmdArgTokenType.ASSIGN, CmdArgTokenType.RAW
    ]);
    expect(tokens[1].value).toBe(';');
    expect(tokens[3].value).toBe(':');
  });

  it('should correctly skip whitespace', () => {
    const lexer = new CmdArgLexer('  a  ,  b  ');
    expect(lexer.nextToken().value).toBe('a');
    expect(lexer.nextToken().type).toBe(CmdArgTokenType.COMMA);
    expect(lexer.nextToken().value).toBe('b');
  });

  it('should peek CmdArgToken without consuming', () => {
    const lexer = new CmdArgLexer('a,b');
    const t1 = lexer.peekToken();
    const t2 = lexer.nextToken();
    expect(t1).toEqual(t2);
    expect(lexer.nextToken().type).toBe(CmdArgTokenType.COMMA);
  });
});
