import { jsonToMarkdownStr } from './json-to-markdown-str';

describe('jsonToMarkdownStr', () => {
  it('should convert a simple object to markdown string', () => {
    const obj = { key1: 'value1', key2: 'value2' };
    const result = jsonToMarkdownStr(obj);
    expect(result).toEqual('* `key1`: value1\n* `key2`: value2');
  });

  it('should convert an array to markdown string', () => {
    const arr = ['value1', 'value2'];
    const result = jsonToMarkdownStr(arr);
    expect(result).toEqual('- value1\n- value2');
  });

  it('should handle circular references', () => {
    const obj: any = { key1: 'value1', key2: 'value2' };
    obj.circular = obj; // create circular reference
    const result = jsonToMarkdownStr(obj);
    expect(result).toEqual('* `key1`: value1\n* `key2`: value2\n* `circular`:\n  [Circular]');
  });

  it('should handle different levels of nesting', () => {
    const obj = { key1: 'value1', key2: { nestedKey: 'nestedValue' } };
    const result = jsonToMarkdownStr(obj);
    expect(result).toEqual('* `key1`: value1\n* `key2`:\n  * `nestedKey`: nestedValue');
  });

  it('should handle complex nesting', () => {
    const obj: any = { key1: 'value1', key2: { nestedKey: 'nestedValue', nestedArray: ['value3', 'value4', { nestedKey: 'nestedValue' }] } };
    const result = jsonToMarkdownStr(obj);
    expect(result).toEqual(`* \`key1\`: value1
* \`key2\`:
  * \`nestedKey\`: nestedValue
  * \`nestedArray\`:
    - value3
    - value4
    -
      * \`nestedKey\`: nestedValue`)
  })

  it('should return null string for null input', () => {
    const result = jsonToMarkdownStr(null);
    expect(result).toEqual('null');
  });

  it('should handle nesting array with title', () => {
    const obj: any = [{name: 'John', age: 30}, {name: 'Jane', age: 28}];
    const result = jsonToMarkdownStr(obj, {title: 'name'});
    expect(result).toEqual('- John\n  * `age`: 30\n- Jane\n  * `age`: 28');
  });

});
