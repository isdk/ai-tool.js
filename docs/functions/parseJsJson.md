[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / parseJsJson

# Function: parseJsJson()

> **parseJsJson**(`input`, `scope`?): `Promise`\<`any`\>

Parses a JavaScript string into a JSON object.

## Parameters

• **input**: `string`

The string to be parsed into JSON.

• **scope?**: `Record`\<`string`, `any`\>

## Returns

`Promise`\<`any`\>

The parsed JSON object. If parsing fails, undefined is returned.

## Example

```ts
// This will return a JSON object with key 'name' and value 'John'.
const jsonString = '({name: "John"})';
const json = parseJsJson(jsonString);
console.log(json); // { name: 'John' }
```

## Defined in

[packages/ai-tool/src/utils/parse-js-json.ts:16](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/parse-js-json.ts#L16)
