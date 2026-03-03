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
      expect(textify('', { stringQuoting: 'never' })).toBe('');
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
      expect(textify([], { inlineStyle: 'never' })).toBe('[]');
    });

    it('should handle simple array', () => {
      const res = textify([1, 2, 3], { inlineStyle: 'never'});
      expect(res).toBe('- 1\n- 2\n- 3');
    });

    it('should handle nested array (Block Style)', () => {
      const res = textify([[1], [2]], { inlineStyle: 'never'});
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
      const res = textify([{ a: 1 }], { inlineStyle: 'never'});
      // 期望：- a: 1 (不再是 - * a: 1)
      expect(res).toBe('- a: 1');
    });

    it('should handle array with nested objects', () => {
      const res = textify([{ a: { b: 1 } }], { inlineStyle: 'never'});
      // 期望：
      // - a:
      //     * b: 1
      const lines = res.split('\n');
      expect(lines[0]).toBe('- a:');
      expect(lines[1]).toBe('    * b: 1');
    });

    it('should handle array with mixed types', () => {
      const res = textify([1, 'str', { a: 1 }, [2]], { inlineStyle: 'never'});
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
      const res = textify({ a: 1, b: 2 }, { inlineStyle: 'never' });
      expect(res).toBe('* a: 1\n* b: 2');
    });

    it('should handle nested object', () => {
      const res = textify({ user: { name: 'Alice' } }, { inlineStyle: 'never' });
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
      const res = textify(data, { inlineStyle: 'never' });
      const lines = res.split('\n');
      expect(lines[0]).toBe('* level1:');
      expect(lines[1]).toBe('  * level2:');
      expect(lines[2]).toBe('    * level3:');
      expect(lines[3]).toBe('      * val: deep');
    });

    it('should handle object with array value', () => {
      const res = textify({ items: [1, 2] }, { inlineStyle: 'never' });
      const lines = res.split('\n');
      expect(lines[0]).toBe('* items:');
      expect(lines[1]).toBe('  - 1');
      expect(lines[2]).toBe('  - 2');
    });

    it('should handle object with empty container values', () => {
      const res = textify({ emptyObj: {}, emptyArr: [] }, { inlineStyle: 'never' });
      expect(res).toBe('* emptyObj: {}\n* emptyArr: []');
    });
  });

  describe('Indentation & Multiline Alignment', () => {
    it('should support custom indent (number)', () => {
      const res = textify({ a: { b: 1 } }, { indent: 4, inlineStyle: 'never' });
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
      const res = textify(data, { inlineStyle: 'never' });
      const lines = res.split('\n');
      expect(lines[0]).toBe('- name: reusable');
      expect(lines[1]).toBe('- name: reusable'); // 不应显示为 [Circular]
    });

    it('should handle maxDepth', () => {
      const deep = { a: { b: { c: 1 } } };
      const res = textify(deep, { maxDepth: 1, inlineStyle: 'never' });
      expect(res).toContain('[Max Depth Exceeded]');
    });
  });

  describe('Configuration Options', () => {
    it('should support custom arrayPrefix', () => {
      const res = textify([1], { arrayPrefix: '+ ', inlineStyle: 'never' });
      expect(res).toBe('+ 1');
    });

    it('should support custom objectPrefix', () => {
      const res = textify({ a: 1 }, { objectPrefix: '# ', inlineStyle: 'never' });
      expect(res).toBe('# a: 1');
    });
  });

  describe('ensureNewLineForMultiline Feature', () => {
    it('should add newline when option is true and result is multiline', () => {
      const data = { a: 1, b: 2 };
      const res = textify(data, { ensureNewLineForMultiline: true, inlineStyle: 'never' });
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
      const res = textify(data, {inlineStyle: 'never', stringQuoting: 'never'});
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
      const res = textify(data, {inlineStyle: 'never'});
      expect(res).toBe('* a:\n  - []\n  - {}\n* b:\n  * c: []');
    });
  });

  describe('Inline Style - Flow Style', () => {
    it('should handle auto inline by threshold (success)', () => {
      const data = { a: 1, b: 2 };
      // "{a: 1, b: 2}" 长度为 12 <= 40
      expect(textify(data, { inlineStyle: 'auto' })).toBe('{a: 1, b: 2}');
    });

    it('should handle auto inline by threshold (fallback)', () => {
      const data = { a: 1, b: 2 };
      // 阈值设小一点强制触发块状
      expect(textify(data, { inlineStyle: { threshold: 5 } })).toBe('* a: 1\n* b: 2');
    });

    it('should handle always inline', () => {
      const data = { a: [1, 2, 3], b: { c: 4 } };
      expect(textify(data, { inlineStyle: 'always' })).toBe('{a: [1, 2, 3], b: {c: 4}}');
    });

    it('should fallback to block style if content contains newline', () => {
      const data = { a: 1, b: 'line1\nline2' };
      // 虽然长度很短，但因为有 \n，必须是块状
      const res = textify(data, { inlineStyle: 'always' });
      expect(res).toContain('* a: 1');
      expect(res).toContain('* b: line1');
    });

    it('should handle nested auto inlining (Mixed Mode / Option B)', () => {
      const data = {
        list: [
          { id: 1, msg: 'ok' }, 
          { id: 2, msg: 'error' }, 
          { id: 3, msg: 'retry' },
          { id: 4, msg: 'fail' }
        ],
        long_item: { text: 'this is a very long text that will exceed the default threshold' }
      };
      // 此时 list 序列化后的总长度肯定超过 40，会回退到块状模式
      // 但每个对象项长度约 16，会保持行内化
      const res = textify(data);
      const lines = res.split('\n');
      
      expect(lines[0]).toBe('* list:');
      expect(lines[1]).toBe('  - {id: 1, msg: ok}');
      expect(lines[2]).toBe('  - {id: 2, msg: error}');
      expect(lines[3]).toBe('  - {id: 3, msg: retry}');
      expect(lines[4]).toBe('  - {id: 4, msg: fail}');
      
      expect(lines[5]).toBe('* long_item:');
      expect(lines[6]).toBe('  * text: this is a very long text that will exceed the default threshold');
    });

    it('should support spaceAfterSeparator configuration', () => {
      const data = { a: 1, b: 2 };
      expect(textify(data, {
        inlineStyle: { mode: 'always', spaceAfterSeparator: false }
      })).toBe('{a:1,b:2}');
    });

    it('should support spaceInBraces configuration', () => {
      const data = [1, 2];
      expect(textify(data, {
        inlineStyle: { mode: 'always', spaceInBraces: true }
      })).toBe('[ 1, 2 ]');
    });
  });

  describe('String Quoting Strategy', () => {
    it('should quote special characters in auto mode', () => {
      expect(textify('user: admin')).toBe('"user: admin"');
      expect(textify('a,b')).toBe('"a,b"');
      expect(textify('[test]')).toBe('"[test]"');
      expect(textify('{test}')).toBe('"{test}"');
      expect(textify('#comment')).toBe('"#comment"');
      expect(textify('*star')).toBe('"*star"');
      expect(textify('-dash')).toBe('"-dash"');
    });

    it('should quote reserved words in auto mode', () => {
      expect(textify('true')).toBe('"true"');
      expect(textify('NULL')).toBe('"NULL"');
      expect(textify('NaN')).toBe('"NaN"');
    });

    it('should quote numeric strings in auto mode', () => {
      expect(textify('123')).toBe('"123"');
      expect(textify('-0.5')).toBe('"-0.5"');
    });

    it('should quote strings with leading/trailing spaces', () => {
      expect(textify('  space  ')).toBe('"  space  "');
    });

    it('should handle always quoting', () => {
      expect(textify('hello', { stringQuoting: 'always' })).toBe('"hello"');
    });

    it('should handle never quoting (unless forced by structure)', () => {
      // 在块状模式下，never 应该生效
      expect(textify('123', { stringQuoting: 'never' })).toBe('123');
      // 但在行内模式下，如果包含逗号，为了结构正确，内部实现可能会选择加引号
      // 目前我们的 serializeInline 调用 serializePrimitive，它遵循 shouldQuote。
      // 如果 shouldQuote 遵循 never，则不加引号。
      expect(textify(['a,b'], {
        stringQuoting: 'never',
        inlineStyle: 'always'
      })).toBe('[a,b]');
      // 注意：[a,b] 在某些 YAML 解析器中会有歧义，但用户选择了 never，我们尊重。
    });

    it('should escape double quotes inside strings', () => {
      expect(textify('He said "Hello"')).toBe('"He said \\"Hello\\""');
    });
  });

  describe('Parameter Combinations & Edge Cases', () => {
    it('should respect custom prefixes when deciding to quote', () => {
      const options = { arrayPrefix: '>> ', objectPrefix: '!! ' };
      // 默认的 - 不再触发引号，而 >> 触发
      expect(textify('- item', options)).toBe('- item');
      expect(textify('>> item', options)).toBe('">> item"');
      expect(textify('!! item', options)).toBe('"!! item"');
    });

    it('should support extreme compactness (No spaces, No quotes, No inlining)', () => {
      const data = { a: [1, 2], b: { c: 3 } };
      const res = textify(data, {
        indent: '',
        objectPrefix: '',
        arrayPrefix: '-',
        inlineStyle: { mode: 'never', spaceAfterSeparator: false },
        stringQuoting: 'never'
      });
      // 期望：
      // a:
      // -1
      // -2
      // b:
      // c:3
      expect(res).toBe('a:\n-1\n-2\nb:\nc:3');
    });

    it('should trigger "one-vote veto" for inlining on deep newlines', () => {
      const data = {
        level1: {
          level2: {
            level3: 'deep\nnewline'
          }
        }
      };
      // 虽然层级深但数据量小，如果没有 \n 它本该被行内化
      const res = textify(data, { inlineStyle: 'always' });
      expect(res).toContain('* level3: deep');
      expect(res).not.toContain('{level1:'); // 整个祖先链都应该是块状
    });

    it('should handle circular references in inline mode', () => {
      const obj: any = { name: 'circular' };
      obj.self = obj;
      // 即使是 always inline，遇到循环引用也应安全渲染
      expect(textify(obj, { inlineStyle: 'always' })).toBe('{name: circular, self: [Circular]}');
    });

    it('should handle maxDepth in inline mode', () => {
      const data = { a: { b: { c: 1 } } };
      const res = textify(data, { inlineStyle: 'always', maxDepth: 1 });
      expect(res).toBe('{a: [Max Depth Exceeded]}');
    });

    it('should combine ensureNewLineForMultiline with mixed inline styles', () => {
      const data = { short: [1], long: 'line1\nline2' };
      const res = textify(data, { ensureNewLineForMultiline: true });
      // 应该既有前导换行，又有混合模式（short项行内化）
      expect(res.startsWith('\n')).toBe(true);
      expect(res).toContain('* short: [1]');
      expect(res).toContain('* long: line1');
    });

    it('should handle very large threshold with complex data', () => {
      const data = { a: 1, b: [1, 2, { c: 3 }] };
      const res = textify(data, { inlineStyle: { threshold: 1000 } });
      expect(res).toBe('{a: 1, b: [1, 2, {c: 3}]}');
    });
  });
});
