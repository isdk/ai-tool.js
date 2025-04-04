[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / formatTextWithSpace

# Function: formatTextWithSpace()

> **formatTextWithSpace**(`input`, `options`?): `string`

Defined in: [packages/ai-tool/src/utils/format-text-with-space.ts:25](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/format-text-with-space.ts#L25)

Formats the input text by replacing delimiters with spaces and optionally capitalizing the first letter of each word.

## Parameters

### input

`string`

The input string to be formatted.

### options?

Optional configuration for formatting.

#### capitalize?

`boolean`

Whether to capitalize the first letter of each word. Defaults to `true`.

#### delimiter?

`string` \| `RegExp`

The delimiter used to split the words. Defaults to `/[_-]/g`.

## Returns

`string`

## Examples

```ts
// Returns "Hello World"
formatTextWithSpace("hello_world");
```

```ts
// Returns "This Is A Test"
formatTextWithSpace("this-is-a-test", { delimiter: /-/g });
```

```ts
// Returns "hello world"
formatTextWithSpace("hello_world", { capitalize: false });
```

```ts
// Returns "Hello World This Is A Test"
formatTextWithSpace("hello-world_this_is_a_test");
```
