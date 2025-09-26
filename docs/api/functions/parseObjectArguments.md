[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / parseObjectArguments

# Function: parseObjectArguments()

> **parseObjectArguments**(`argsStr`, `scope?`, `options?`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/parse-command.ts:71](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/utils/parse-command.ts#L71)

Asynchronously parses a string of object arguments into an actual object.

## Parameters

### argsStr

`string`

The string of arguments to be parsed.

### scope?

`Record`\<`string`, `any`\>

An optional scope object that provides values for variables during parsing.

### options?

[`ParseObjectArgumentOptions`](../interfaces/ParseObjectArgumentOptions.md)

An optional configuration object containing the delimiter and argument processor.

## Returns

`Promise`\<`any`\>

The parsed object or undefined.

This function first parses the argument string into an object string and then converts it
into a proper JavaScript/JSON object based on the parsing results and configuration options.
It handles the conversion of single objects, arrays, and key-value pairs. The default delimiter
between parameters is a comma (`,`), but this can be customized using the `options.delimiter`.
Parameter assignment always uses an equal sign (`=`) and cannot be modified.

The function returns:
- An object if the input string represents a set of key-value pairs.
- An array if the input string represents a sequence of elements, where each element can be
  parsed as a number (indices are used as keys).
- A single value if the input string represents a single value or a single key-value pair.
- `undefined` if the input string is empty or cannot be parsed into a valid object.

## Example

```typescript
// Example call with default delimiter
const result = await parseObjectArguments("name=John,age=30");
console.log(result); // Output: { name: 'John', age: '30' }

// Example call with custom delimiter
const resultCustomDelimiter = await parseObjectArguments("name=John|age=30", undefined, { delimiter: '|' });
console.log(resultCustomDelimiter); // Output: { name: 'John', age: '30' }

// Example with a single value
const singleValue = await parseObjectArguments("42");
console.log(singleValue); // Output: 42

// Example with an array
const arrayResult = await parseObjectArguments("1,2,3");
console.log(arrayResult); // Output: [1, 2, 3]
```
