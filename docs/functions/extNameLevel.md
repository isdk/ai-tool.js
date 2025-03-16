[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / extNameLevel

# Function: extNameLevel()

> **extNameLevel**(`extName`): `number`

Defined in: [packages/ai-tool/src/utils/filename.ts:209](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/filename.ts#L209)

Calculates the level of an extension name.

The level represents the number of dots ('.') in the extension name, excluding the first dot which separates
the base filename from the extension. For example, the level of ".txt" is 1, and the level of ".tar.gz" is 2.

## Parameters

### extName

`string`

The extension name to analyze. It should start with a dot ('.').

## Returns

`number`

The level of the extension name, which is the count of dots minus one.

## Example

```typescript
// Returns 0
extNameLevel("no-file-ext");

// Returns 2
extNameLevel(".tar.gz");

// Returns 1
extNameLevel(".json5");
```
