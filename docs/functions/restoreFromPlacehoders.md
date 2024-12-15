[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / restoreFromPlacehoders

# Function: restoreFromPlacehoders()

> **restoreFromPlacehoders**(`content`, `placehoders`, `options`?): `string`

Restores the original substrings from placeholders in the given content.

## Parameters

• **content**: `string`

The string content containing placeholders to be restored.

• **placehoders**: `string`[]

An array of the original substrings that were replaced by placeholders.

• **options?**: [`ReplacePlacehoderOptions`](../interfaces/ReplacePlacehoderOptions.md)

Optional configuration object with the following properties:
  - `placeholder` - The prefix for the placeholder names. Defaults to `__PlacEhoLdeR_`.

## Returns

`string`

The modified content with the original substrings restored.

## Example

```typescript
const contentWithPlaceholders = "Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!";
const originalSubstrings = ["World", "the site"];
const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
console.log(restoredContent); // Output: "Hello World, welcome to the site!"
```

## Defined in

[packages/ai-tool/src/utils/parse-command.ts:489](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/parse-command.ts#L489)
