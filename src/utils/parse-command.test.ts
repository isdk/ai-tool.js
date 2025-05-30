import { parseObjectArguments, parseCommand, ChoiceArgProcessor, TemplateArgProcessor, AIArgProcessor, ObjectArgsToArgsInfo } from './parse-command';
import { replaceWithPlaceholder, restoreFromPlacehoders } from './parse-command';

describe('parseObjectArguments', async () => {
  test('should parse choices argument', async () => {
    const argsStr = ' |plant|animal, "arg2", "arg3"';
    const result = await parseObjectArguments(argsStr, undefined, {argProcessor: ChoiceArgProcessor});
    expect(result).toEqual({choice:{items: ['plant', 'animal']}, 1:"arg2", 2:"arg3"});
  });
  test('should parse choices argument with options', async () => {
    let result = await parseObjectArguments('|plant|animal:2, "arg2", "arg3"', undefined, {argProcessor: ChoiceArgProcessor});
    expect(result).toEqual({choice:{items: ['plant', 'animal'], maxPick: 2}, 1:"arg2", 2:"arg3"});
    result = await parseObjectArguments('|plant|animal:2:";":minPick= 1: prefix= "- ": suffix="|"', undefined, {argProcessor: ChoiceArgProcessor});
    expect(result).toEqual({choice:{items: ['plant', 'animal'], minPick:1, maxPick: 2, separator: ';', prefix: "- ", suffix: "|"}});
  });

  test('should parse bool arguments', async () => {
    const argsStr = 'TRUE, arg2= False';
    const result = await parseObjectArguments(argsStr);
    expect(result).toStrictEqual({0: true, arg2: false});
  });

  test('should parse arguments with template string', async () => {
    const argsStr = '{{ test }}, arg2= "value2"';
    const result = await parseObjectArguments(argsStr, {test: 'value1'}, {argProcessor: TemplateArgProcessor});
    expect(result).toEqual({0: "value1", arg2: 'value2'});
  });

  test('should parse arguments with template string and without unescape template data', async () => {
    const argsStr = '{{ test }}, arg2= "value2"';
    const result = await parseObjectArguments(argsStr, {test: '\\value1'}, {argProcessor: TemplateArgProcessor});
    expect(result).toEqual({0: "\\value1", arg2: 'value2'});
  });

  test('should parse arguments with complex template string', async () => {
    const argsStr = `{{ test + '\n' + b }}, arg2= "value2"`;
    const result = await parseObjectArguments(argsStr, {test: 'value1', b: '3'}, {argProcessor: TemplateArgProcessor});
    expect(result).toEqual({0: "value1\n3", arg2: 'value2'});
  });

  test('should parse named arguments with template string', async () => {
    const argsStr = 'arg1= {{ test }}, arg2= "value2"';
    const result = await parseObjectArguments(argsStr, {test: 'value1'}, {argProcessor: TemplateArgProcessor});
    expect(result).toEqual({arg1: "value1", arg2: 'value2'});
  });

  test('should parse named arguments with AIArgProcessor', async () => {
    const argsStr = 'arg1= {{ test }}, |plant|animal:2';
    const result = await parseObjectArguments(argsStr, {test: 'value1'}, {argProcessor: AIArgProcessor});
    expect(result).toEqual({arg1: "value1", choice:{items: ['plant', 'animal'], maxPick: 2}});
  });

  test('should parse simple arguments', async () => {
    const argsStr = '"arg1", "arg2", "arg3", 6';
    const result = await parseObjectArguments(argsStr);
    expect(result).toEqual(["arg1", "arg2", "arg3", 6]);
  });

  test('should parse simple arguments with templateData', async () => {
    const argsStr = '"arg1", "arg2: {{a}}", "arg3", 6';
    const result = await parseObjectArguments(argsStr, undefined, {templateData:{a:1}, argProcessor: TemplateArgProcessor});
    expect(result).toEqual(["arg1", "arg2: 1", "arg3", 6]);
  });

  test('should parse one argument', async () => {
    const argsStr = 'arg1';
    const result = await parseObjectArguments(argsStr, {arg1: '123'});
    expect(result).toEqual('123');
  });

  test('should parse expression argument', async () => {
    const argsStr = '"This is " + a';
    const result = await parseObjectArguments(argsStr, {a: 'apple'});
    expect(result).toEqual('This is apple');
  });

  test('should parse expression arguments', async () => {
    const argsStr = '"This is " + a, msg';
    const result = await parseObjectArguments(argsStr, {a: 'apple', msg: true});
    expect(result).toEqual({'0': 'This is apple', '1': true, msg: true});
  });

  test('should parse expression arguments and preserveUnresolvedName', async () => {
    const argsStr = '"This is " + a, test11';
    const result = await parseObjectArguments(argsStr, {a: 'apple'}, {preserveUnresolvedName: true});
    expect(result).toEqual(['This is apple', 'test11']);
  });

  test('should parse expression arguments and preserveUnresolvedName 2', async () => {
    const argsStr = '@test(2, "This is " + a, test11), @better("This is " + b, private)';
    const result = await parseObjectArguments(argsStr, {a: 'apple'}, {preserveUnresolvedName: true});
    expect(result).toEqual(['@test(2, "This is " + a, test11)', '@better("This is " + b, private)']);
  });

  test('should parse expression argument with skipExpression', async () => {
    const argsStr = '"This is " + a';
    const result = await parseObjectArguments(argsStr, {a: 'apple'}, {skipExpression: true});
    expect(result).toEqual('"This is " + a');
  });

  test('should parse expression argument2', async () => {
    const argsStr = `format=(answer) => answer ? 'yes' : 'no'`;
    const result = await parseObjectArguments(argsStr);
    expect(result).toHaveProperty('format')
    expect(result.format.toString()).toBe(`(answer) => answer ? 'yes' : 'no'`);
  });

  test('should parse expression argument3', async () => {
    const argsStr = `format=result + "\\nPlease select what you want to know:"`;
    const result = await parseObjectArguments(argsStr, {result: 'hi'});
    expect(result).toMatchObject({format: 'hi\nPlease select what you want to know:'})
  });

  test('should parse one argument with scope', async () => {
    const argsStr = 'arg1';
    const result = await parseObjectArguments(argsStr, {arg1: '123'});
    expect(result).toEqual('123');
  });

  test('should parse one argument with scope and do not extract', async () => {
    const argsStr = 'arg1';
    const result = await parseObjectArguments(argsStr, {arg1: '123'}, {returnArrayOnly: true});
    expect(result).toEqual({0: '123', arg1: '123'});
  });

  test('should parse named arguments', async () => {
    const argsStr = 'arg1= "value1", arg2= "value2"';
    const result = await parseObjectArguments(argsStr);
    expect(result).toEqual({arg1: "value1", arg2: 'value2'});
  });

  test('should parse json arguments', async () => {
    const argsStr = '{a:1,b:2,c:"hello\\""}, arg2= {b: "value2"},arg3={c: "{xx}"}';
    const result = await parseObjectArguments(argsStr);
    expect(result).toEqual({0: {a:1,b:2,c:"hello\""}, arg2: {b: "value2"}, arg3: {c: "{xx}"}});
  });

  test('should parse json complex arguments', async () => {
    const argsStr = '{a:1,b:2,c:"hello\\""}, arg2= {b: "value2"},arg3 = {c:{s:{b:2}}}';
    const result = await parseObjectArguments(argsStr);
    expect(result).toEqual({0: {a:1,b:2,c:"hello\""}, arg2: {b: "value2"}, arg3: {c: {s: {b:2}}}});
  });

  test('should parse json path arguments', async () => {
    const argsStr = '{a: test.a}, arg2= {b: test.b}';
    const result = await parseObjectArguments(argsStr, {test: {a:1,b:2}});
    expect(result).toEqual({0: {a:1}, arg2: {b: 2}});
  });

  test('should parse json path arguments and without unescape from arg', async () => {
    const argsStr = '{a: test.a}, arg2= {b: test.b}';
    const result = await parseObjectArguments(argsStr, {test: {a:"c:\\User", b: "C:\\Windows"}});
    expect(result).toEqual({0: {a: "c:\\User"}, arg2: {b: "C:\\Windows"}});
  });

  test('should parse path arguments', async () => {
    const argsStr = 'test.a';
    let result = await parseObjectArguments(argsStr, {test: {a:1,b:2}});
    expect(result).toEqual(1);
    result = await parseObjectArguments(argsStr, {test: {a:1,b:2}}, {returnArrayOnly: true});
    expect(result).toEqual({0: 1, "test.a": 1});
    result = ObjectArgsToArgsInfo(result)
    expect(result.args).toMatchObject([1])
    expect(result.kvArgs).toMatchObject({})
  });

  test('should parse json func expression arguments', async () => {
    const argsStr = '()=>({a:1,b:2}), arg2= (a,$b2) => a+$b2';
    const result = await parseObjectArguments(argsStr);
    expect(result[0].toString()).toEqual('()=>({a:1,b:2})');
    expect(result.arg2.toString()).toEqual('(a,$b2) => a+$b2');
  });

  test('should handle quoted arguments', async () => {
    const argsStr = '"\\"quoted arg1\\"", "\'quoted arg2\'"';
    const result = await parseObjectArguments(argsStr);
    expect(result).toEqual(['"quoted arg1"', "'quoted arg2'"]);
  });

  test('should handle escaped quotes', async () => {
    const argsStr = '"escaped \\"quote\\"\\"", "\'escaped \'quote\'"';
    const result = await parseObjectArguments(argsStr);
    expect(result).toEqual(['escaped "quote""', "'escaped 'quote'"]);
  });

  test('should handle named arguments with default value', async () => {
    const argsStr = 'arg1= "value1", arg2= "value2",arg3= ';
    const result = await parseObjectArguments(argsStr);
    expect(result).toEqual({arg1: 'value1', arg2: 'value2', arg3:undefined});
  });

  test('should handle arguments with scope', async () => {
    const argsStr = '"arg1,f", arg2, arg3,arg4=random, random';
    const scope = { arg2: 'value2', arg3: 'value3', random: 'random1' };
    let result = await parseObjectArguments(argsStr, scope);
    expect(result).toEqual({0:'arg1,f', 1: "value2", arg2: 'value2', 2: 'value3', arg3: 'value3', arg4: 'random1', 4: 'random1', random: 'random1'});
    result = ObjectArgsToArgsInfo(result)
    expect(result.args).toStrictEqual(['arg1,f', 'value2', 'value3', 'random1'])
    expect(result.kvArgs).toMatchObject({arg4: 'random1'})
  });

  test('should return undefined if no arguments are provided', async () => {
    const argsStr = '';
    const result = await parseObjectArguments(argsStr);
    expect(result).toBeUndefined();
  });

  test('should handle arguments with scope and ignoreIndexNamed', async () => {
    const argsStr = '"arg1", arg2, arg3,arg4=random, random';
    const scope = { arg2: 'value2', arg3: 'value3', random: 'random1' };
    const result = await parseObjectArguments(argsStr, scope, {ignoreIndexNamed: true});
    expect(result).toEqual({"0": "arg1", arg2: 'value2', arg3: 'value3', arg4: 'random1', random: 'random1'});
  });

  test('should handle arguments with custom delimiter and assigner', async () => {
    const argsStr = '"arg1"; arg2; arg3;arg4:random; random';
    const scope = { arg2: 'value2', arg3: 'value3', random: 'random1' };
    const result = await parseObjectArguments(argsStr, scope, {ignoreIndexNamed: true, delimiter: ';', assigner: ':'});
    expect(result).toEqual({"0": "arg1", arg2: 'value2', arg3: 'value3', arg4: 'random1', random: 'random1'});
  });

});

describe('parseCommand function', async () => {
  it('should correctly parse a simple command with no arguments', async () => {
    const commandStr = 'command()';
    expect(await parseCommand(commandStr)).toEqual({ command: 'command', args: undefined });
  });

  it('should correctly parse a simple command with no arguments2', async () => {
    const commandStr = 'command';
    expect(await parseCommand(commandStr)).toEqual({ command: 'command', args: undefined });
  });

  it('should correctly parse a command with numeric and string arguments', async () => {
    const commandStr = 'command(arg1=123, arg2="test")';
    expect(await parseCommand(commandStr)).toEqual({ command: 'command', args: {arg1:123, arg2:"test"} });
  });

  it('should handle arguments containing commas within quotes', async () => {
    const commandStr = 'command(arg1=123, arg2="a,b", arg3=\'c,d\')';
    expect(await parseCommand(commandStr)).toEqual({ command: 'command', args: {arg1:123, arg2:"a,b", arg3:'c,d' } });
  });

  it('should correctly parse mixed types including numbers in strings', async () => {
    const commandStr = 'command(arg1="123", arg2=456)';
    expect(await parseCommand(commandStr)).toEqual({ command: 'command', args: {arg1:"123", arg2:456} });
  });

  it('should handle empty argument values', async () => {
    const commandStr = 'command(arg1="", arg2= )';
    expect(await parseCommand(commandStr)).toEqual({ command: 'command', args: {arg1:"", arg2: undefined} });
  });

  it('should handle commands with only whitespace in arguments', async () => {
    const commandStr = 'command(arg1="  ", arg2=" \\"  ")';
    expect(await parseCommand(commandStr)).toEqual({ command: 'command', args: {arg1: "  ", arg2:' "  ' } });
  });

  it('should handle commands with scope', async () => {
    const scope = {name: 'John', age: 20}
    const commandStr = 'command(arg1=name, age, arg2=" \\"  ")';
    expect(await parseCommand(commandStr, scope)).toEqual({ command: 'command', args: {arg1: scope.name, 1: scope.age, age: scope.age, arg2:' "  ' } });
  });

  it('should handle commands with undefined property', async () => {
    const scope = {name: 'John', age: 20}
    const commandStr = 'command(arg1=noname, age, arg2=" \\"  ")';
    expect(await parseCommand(commandStr, scope)).toEqual({ command: 'command', args: {arg1: undefined, 1: scope.age, age: scope.age, arg2:' "  ' } });
  });
});

describe('replaceWithPlaceholder', () => {
  test('replaces double-quoted strings', () => {
    const content = 'Hello "World", welcome to "the site"!';
    const [result, placeholders] = replaceWithPlaceholder(content);
    expect(result).toBe('Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!');
    expect(placeholders).toEqual(['"World"', '"the site"']);
  });

  test('replaces single-quoted strings', () => {
    const content = "Hello 'World', welcome to 'the site'!";
    const [result, placeholders] = replaceWithPlaceholder(content, { startChar: "'", endChar: "'" });
    expect(result).toBe("Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!");
    expect(placeholders).toEqual(["'World'", "'the site'"]);
  });

  test('replaces mixed quotes', () => {
    const content = 'Hello "World", welcome to \'the site\'!';
    const [result, placeholders] = replaceWithPlaceholder(content, { startChar: ['"', "'"], endChar: ['"', "'"] });
    expect(result).toBe('Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!');
    expect(placeholders).toEqual(['"World"', "'the site'"]);
  });

  test('throws error if start and end chars have different lengths', () => {
    expect(() => replaceWithPlaceholder('Hello "World"', { startChar: ['"', "'"], endChar: ['"'] })).toThrow('start and end characters must have the same length');
  });

  test('replaces double-quoted strings with escape characters', () => {
    const content = 'Hello "World", welcome to "the \\"site\\"!"';
    const [result, placeholders] = replaceWithPlaceholder(content);
    expect(result).toBe('Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1');
    expect(placeholders).toEqual(['"World"', '"the \\"site\\"!"']);
  });

  test('replaces single-quoted strings with escape characters', () => {
    const content = "Hello 'World\\', welcome to \\'the \\'site\\'!'?";
    const [result, placeholders] = replaceWithPlaceholder(content, { startChar: "'", endChar: "'" });
    expect(result).toBe("Hello __PlacEhoLdeR_0?");
    expect(placeholders).toEqual(["'World\\', welcome to \\'the \\'site\\'!'"]);
  });

  test('replaces strings with custom start and end chars', () => {
    const content = 'Hello <World>, welcome to <the site>!';
    const [result, placeholders] = replaceWithPlaceholder(content, { startChar: '<', endChar: '>' });
    expect(result).toBe('Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!');
    expect(placeholders).toEqual(['<World>', '<the site>']);
  });

  test('replaces strings with mixed custom start and end chars', () => {
    const content = 'Hello <World>, welcome to [the site]!';
    const [result, placeholders] = replaceWithPlaceholder(content, { startChar: ['<', '['], endChar: ['>', ']'] });
    expect(result).toBe('Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!');
    expect(placeholders).toEqual(['<World>', '[the site]']);
  });
});

describe('restoreFromPlacehoders', () => {
  test('restores double-quoted strings', () => {
    const contentWithPlaceholders = 'Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!';
    const originalSubstrings = ['"World"', '"the site"'];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
    expect(restoredContent).toBe('Hello "World", welcome to "the site"!');
  });

  test('restores single-quoted strings', () => {
    const contentWithPlaceholders = "Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!";
    const originalSubstrings = ["'World'", "'the site'"];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
    expect(restoredContent).toBe("Hello 'World', welcome to 'the site'!");
  });

  test('restores mixed quotes', () => {
    const contentWithPlaceholders = 'Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!';
    const originalSubstrings = ['"World"', "'the site'"];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
    expect(restoredContent).toBe('Hello "World", welcome to \'the site\'!');
  });

  test('restores with custom placeholder name', () => {
    const contentWithPlaceholders = 'Hello CUSTOM_PLACEHOLDER_0, welcome to CUSTOM_PLACEHOLDER_1!';
    const originalSubstrings = ['"World"', '"the site"'];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings, { placeholder: 'CUSTOM_PLACEHOLDER_' });
    expect(restoredContent).toBe('Hello "World", welcome to "the site"!');
  });

  test('restores double-quoted strings with escape characters', () => {
    const contentWithPlaceholders = 'Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!';
    const originalSubstrings = ['"World\\""', '"the \\"site\\""'];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
    expect(restoredContent).toBe('Hello "World\\"", welcome to "the \\"site\\""!');
  });

  test('restores single-quoted strings with escape characters', () => {
    const contentWithPlaceholders = "Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!";
    const originalSubstrings = ["'World\\''", "'the \\'site\\'"];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
    expect(restoredContent).toBe("Hello 'World\\'', welcome to 'the \\'site\\'!");
  });

  test('restores no palceholders', () => {
    const contentWithPlaceholders = "Hello world!";
    const originalSubstrings = [];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
    expect(restoredContent).toBe("Hello world!");
  });
});