import { joinSplitWords, splitWords } from './split-words';

describe('joinSplitWords', () => {
  it('should split on lowercase to uppercase transition with default separator', () => {
    expect(joinSplitWords('helloWorldExample')).toBe('hello World Example');
  });

  it('should split on lowercase to uppercase transition with custom separator', () => {
    expect(joinSplitWords('helloWorldExample', '-')).toBe('hello-World-Example');
  });

  it('should not split if there is no case change', () => {
    expect(joinSplitWords('alllowercase')).toBe('alllowercase');
    expect(joinSplitWords('ALLUPPERCASE')).toBe('ALLUPPERCASE');
  });

  it('should handle numbers and special characters correctly', () => {
    expect(joinSplitWords('item1Label24Value')).toBe('item1 Label24 Value');
  });

  it('should handle empty string', () => {
    expect(joinSplitWords('')).toBe('');
  });

  it('should handle single character input', () => {
    expect(joinSplitWords('A')).toBe('A');
  });

  it('should handle multiple consecutive uppercase letters', () => {
    expect(joinSplitWords('HTTPRequest')).toBe('HTTP Request');
  });

  it('should handle mixtures', () => {
    expect(joinSplitWords('Hi GoodHTTPRequest Item12lable46', '-')).toBe('Hi-Good-HTTP-Request-Item12-lable46');
  });
});

describe('splitWords', () => {
  // Basic cases
  it('should split camelCase words', () => {
    expect(splitWords('helloWorld')).toEqual(['hello', 'World']);
    expect(splitWords('itemName')).toEqual(['item', 'Name']);
  });

  it('should split PascalCase words', () => {
    expect(splitWords('HelloWorld')).toEqual(['Hello', 'World']);
    expect(splitWords('ItemName')).toEqual(['Item', 'Name']);
  });

  // Alphanumeric cases
  it('should split alphanumeric boundaries', () => {
    expect(splitWords('item1')).toEqual(['item1']);
    expect(splitWords('item1Label')).toEqual(['item1', 'Label']);
    expect(splitWords('version2Update')).toEqual(['version2', 'Update']);
    expect(splitWords('apiV2Endpoint')).toEqual(['api', 'V2', 'Endpoint']);
  });

  // Acronym cases
  it('should handle acronyms and uppercase sequences', () => {
    expect(splitWords('HTTPRequest')).toEqual(['HTTP', 'Request']);
    expect(splitWords('HTTPServer')).toEqual(['HTTP', 'Server']);
    expect(splitWords('XMLHttpRequest')).toEqual(['XML', 'Http', 'Request']);
    expect(splitWords('JSONData')).toEqual(['JSON', 'Data']);
  });

  // Mixed cases
  it('should handle mixed patterns', () => {
    expect(splitWords('item1label21Good')).toEqual(['item1', 'label21', 'Good']);
    expect(splitWords('userID42Token')).toEqual(['user', 'ID42', 'Token']);
    expect(splitWords('CSS3Animation')).toEqual(['CSS3', 'Animation']);
  });

  // Space handling
  it('should split on whitespace', () => {
    expect(splitWords('hello world')).toEqual(['hello', 'world']);
    expect(splitWords('Good morning')).toEqual(['Good', 'morning']);
    expect(splitWords('split  multiple   spaces')).toEqual(['split', 'multiple', 'spaces']);
  });

  // Edge cases
  it('should handle empty string', () => {
    expect(splitWords('')).toEqual([]);
  });

  it('should handle single word', () => {
    expect(splitWords('hello')).toEqual(['hello']);
    expect(splitWords('HELLO')).toEqual(['HELLO']);
    expect(splitWords('item1')).toEqual(['item1']);
  });

  it('should handle numbers only', () => {
    expect(splitWords('123')).toEqual(['123']);
    expect(splitWords('1 2 3')).toEqual(['1', '2', '3']);
  });

  // Special characters
  it('should preserve special characters within words', () => {
    expect(splitWords('user-name')).toEqual(['user-name']);
    expect(splitWords('email@domain.com')).toEqual(['email@domain.com']);
    expect(splitWords('price$100')).toEqual(['price$100']);
  });

  it('should handle underline', () => {
    expect(splitWords('hello_World')).toEqual(['hello', 'World']);
    expect(splitWords('hello _world')).toEqual(['hello', 'world']);
  });

});
