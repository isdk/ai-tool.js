import { describe, it, expect } from 'vitest';
import { textify } from './textify';

describe('textify', () => {
  describe('Primitive Types - serializePrimitive', () => {
    it('should handle null', () => {
      expect(textify(null)).toBe('null');
    });

    it('should handle undefined', () => {
      expect(textify(undefined)).toBe('undefined');
    });

    it('should handle boolean', () => {
      expect(textify(true)).toBe('true');
      expect(textify(false)).toBe('false');
    });

    it('should handle number', () => {
      expect(textify(123)).toBe('123');
      expect(textify(-0.5)).toBe('-0.5');
    });

    it('should handle string', () => {
      expect(textify('hello')).toBe('hello');
      expect(textify('')).toBe('');
    });

    it('should handle symbol', () => {
      const sym = Symbol('test');
      expect(textify(sym)).toBe('Symbol(test)');
    });

    it('should handle function', () => {
      const fn = function myFunc() {};
      expect(textify(fn)).toContain('[Function: myFunc]');

      // 直接传递匿名函数，确保触发 'anonymous' 回退逻辑
      expect(textify(() => {})).toContain('[Function: anonymous]');
    });

    it('should handle Date', () => {
      const date = new Date('2023-01-01T00:00:00.000Z');
      expect(textify(date)).toBe('2023-01-01T00:00:00.000Z');
    });
  });

  describe('Array Types - serializeArray', () => {
    it('should handle empty array', () => {
      expect(textify([])).toBe('[]');
    });

    it('should handle simple array', () => {
      const res = textify([1, 2, 3]);
      expect(res).toBe('- 1\n- 2\n- 3');
    });

    it('should handle nested array (Block Style)', () => {
      const res = textify([[1], [2]]);
      // 期望：
      // -
      //   - 1
      // -
      //   - 2
      const lines = res.split('\n');
      expect(lines[0]).toBe('-');
      expect(lines[1]).toBe('  - 1');
      expect(lines[2]).toBe('-');
      expect(lines[3]).toBe('  - 2');
    });

    it('should handle array with simple objects (YAML Style)', () => {
      const res = textify([{ a: 1 }]);
      // 期望：- a: 1 (不再是 - * a: 1)
      expect(res).toBe('- a: 1');
    });

    it('should handle array with nested objects', () => {
      const res = textify([{ a: { b: 1 } }]);
      // 期望：
      // - a:
      //     * b: 1
      const lines = res.split('\n');
      expect(lines[0]).toBe('- a:');
      expect(lines[1]).toBe('    * b: 1');
    });

    it('should handle array with mixed types', () => {
      const res = textify([1, 'str', { a: 1 }, [2]]);
      const lines = res.split('\n');
      expect(lines[0]).toBe('- 1');
      expect(lines[1]).toBe('- str');
      expect(lines[2]).toBe('- a: 1'); // YAML 风格
      expect(lines[3]).toBe('-');      // 嵌套数组阶梯式
      expect(lines[4]).toBe('  - 2');
    });
  });

  describe('Object Types - serializeObject', () => {
    it('should handle empty object', () => {
      expect(textify({})).toBe('{}');
    });

    it('should handle simple object', () => {
      const res = textify({ a: 1, b: 2 });
      expect(res).toBe('* a: 1\n* b: 2');
    });

    it('should handle nested object', () => {
      const res = textify({ user: { name: 'Alice' } });
      const lines = res.split('\n');
      expect(lines[0]).toBe('* user:');
      expect(lines[1]).toBe('  * name: Alice');
    });

    it('should handle deeply nested object', () => {
      const data = {
        level1: {
          level2: {
            level3: {
              val: 'deep'
            }
          }
        }
      };
      const res = textify(data);
      const lines = res.split('\n');
      expect(lines[0]).toBe('* level1:');
      expect(lines[1]).toBe('  * level2:');
      expect(lines[2]).toBe('    * level3:');
      expect(lines[3]).toBe('      * val: deep');
    });

    it('should handle object with array value', () => {
      const res = textify({ items: [1, 2] });
      const lines = res.split('\n');
      expect(lines[0]).toBe('* items:');
      expect(lines[1]).toBe('  - 1');
      expect(lines[2]).toBe('  - 2');
    });

    it('should handle object with empty container values', () => {
      const res = textify({ emptyObj: {}, emptyArr: [] });
      expect(res).toBe('* emptyObj: {}\n* emptyArr: []');
    });
  });

  describe('Indentation & Multiline Alignment', () => {
    it('should support custom indent (number)', () => {
      const res = textify({ a: { b: 1 } }, { indent: 4 });
      const lines = res.split('\n');
      expect(lines[0]).toBe('* a:');
      expect(lines[1]).toBe('    * b: 1');
    });

    it('should align multiline values correctly (Smart Alignment)', () => {
      const data = { note: 'line1\nline2' };
      const res = textify(data);
      const lines = res.split('\n');
      // "* note: " 长度为 8
      expect(lines[0]).toBe('* note: line1');
      expect(lines[1]).toBe('        line2'); // 应补齐 8 个空格实现左对齐
    });
  });

  describe('Safety & Edge Cases', () => {
    it('should handle circular references', () => {
      const obj: any = { a: 1 };
      obj.self = obj;
      const res = textify(obj);
      expect(res).toContain('[Circular]');
    });

    it('should allow same object in different branches (Non-circular)', () => {
      const item = { name: 'reusable' };
      const data = [item, item];
      const res = textify(data);
      const lines = res.split('\n');
      expect(lines[0]).toBe('- name: reusable');
      expect(lines[1]).toBe('- name: reusable'); // 不应显示为 [Circular]
    });

    it('should handle maxDepth', () => {
      const deep = { a: { b: { c: 1 } } };
      const res = textify(deep, { maxDepth: 1 });
      expect(res).toContain('[Max Depth Exceeded]');
    });
  });

  describe('Configuration Options', () => {
    it('should support custom arrayPrefix', () => {
      const res = textify([1], { arrayPrefix: '+ ' });
      expect(res).toBe('+ 1');
    });

    it('should support custom objectPrefix', () => {
      const res = textify({ a: 1 }, { objectPrefix: '# ' });
      expect(res).toBe('# a: 1');
    });
  });

  describe('ensureNewLineForMultiline Feature', () => {
    it('should add newline when option is true and result is multiline', () => {
      const data = { a: 1, b: 2 };
      const res = textify(data, { ensureNewLineForMultiline: true });
      expect(res.startsWith('\n')).toBe(true);
      expect(res).toBe('\n* a: 1\n* b: 2');
    });
  });

  describe('Comprehensive Stress Tests', () => {
    it('should handle complex mixed nesting with multiline strings', () => {
      const data = [
        {
          id: 1,
          meta: {
            tags: ['a', 'b'],
            note: 'first\nsecond',
          },
        },
        [{ item: 'nested-obj' }],
      ];
      const res = textify(data);
      // 验证逻辑：
      // - id: 1
      //   meta:
      //     * tags:
      //       - a
      //       - b
      //     * note: first
      //             second
      // -
      //   - item: nested-obj
      const lines = res.split('\n');
      expect(lines[0]).toBe('- id: 1');
      expect(lines[1]).toBe('  meta:');
      expect(lines[2]).toBe('    * tags:');
      expect(lines[3]).toBe('      - a');
      expect(lines[4]).toBe('      - b');
      expect(lines[5]).toBe('    * note: first');
      expect(lines[6]).toBe('            second'); // 补齐 "* note: " 的长度
      expect(lines[7]).toBe('-');
      expect(lines[8]).toBe('  - item: nested-obj');
    });

    it('should handle BigInt and rare primitives', () => {
      const data = {
        big: BigInt(9007199254740991),
        inf: Infinity,
        nan: NaN,
      };
      const res = textify(data);
      expect(res).toContain('* big: 9007199254740991');
      expect(res).toContain('* inf: Infinity');
      expect(res).toContain('* nan: NaN');
    });

    it('should handle empty containers in deep structures', () => {
      const data = {
        a: [[], {}],
        b: { c: [] },
      };
      const res = textify(data);
      expect(res).toBe('* a:\n  - []\n  - {}\n* b:\n  * c: []');
    });
  });
});
