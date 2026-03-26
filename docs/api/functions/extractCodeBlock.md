[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / extractCodeBlock

# Function: extractCodeBlock()

> **extractCodeBlock**(`text`, `langOrOptions?`): `string` \| `CodeString` \| (`string` \| `CodeString`)[]

Defined in: @isdk/util/dist/index.d.ts:1278

Extracts fenced code block(s) from the input `text`, with support for nested path selectors.

This function acts as a query engine for Markdown code blocks. It can extract
single blocks, multiple blocks, or drill down into nested structures using
CSS-like syntax.

## Parameters

### text

`string`

The input string containing Markdown.

### langOrOptions?

Either a language/selector string or a full ExtractCodeBlockOptions object.

`string` | `ExtractCodeBlockOptions`

## Returns

`string` \| `CodeString` \| (`string` \| `CodeString`)[]

A single CodeString, an array of CodeStrings (if `all: true`),
         or the original `text` if no matches are found at the specified index.

## Example

```ts
// Simple extraction (last block)
const code = extractCodeBlock(input, 'js');

// Nested extraction
const inner = extractCodeBlock(input, 'md > ts');

// Extract all matching blocks
const all = extractCodeBlock(input, { lang: 'container > item', all: true });
```
