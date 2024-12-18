[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / formatTextWithSpace

# Function: formatTextWithSpace()

> **formatTextWithSpace**(`input`, `options`?): `string`

Formats the input text by replacing delimiters with spaces and optionally capitalizing the first letter of each word.

## Parameters

• **input**: `string`

The input string to be formatted.

• **options?**

Optional configuration for formatting.

• **options.capitalize?**: `boolean`

Whether to capitalize the first letter of each word. Defaults to `true`.

• **options.delimiter?**: `string` \| `RegExp`

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

## Defined in

[packages/ai-tool/src/utils/format-text-with-space.ts:25](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/format-text-with-space.ts#L25)
