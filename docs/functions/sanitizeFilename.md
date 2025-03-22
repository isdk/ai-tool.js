[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / sanitizeFilename

# Function: sanitizeFilename()

> **sanitizeFilename**(`filename`, `options`): `string`

Defined in: [packages/ai-tool/src/utils/filename.ts:97](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/filename.ts#L97)

Sanitizes a given filename by replacing invalid characters with a specified replacement character or a default.

## Parameters

### filename

`string`

The filename to sanitize, represented as a string.

### options

[`SanitizeFilenameOptions`](../interfaces/SanitizeFilenameOptions.md) = `{}`

An optional object containing configuration options:
  - `replacement` {string} - The character to replace invalid characters with. Default is '!'. Cannot contain reserved filename characters.
  - `maxLength` {number} - The maximum length of the sanitized filename. Default is `MAX_FILENAME_LENGTH`.

## Returns

`string`

The sanitized filename.

## Throws

- If the `replacement` contains reserved filename characters or control characters.
