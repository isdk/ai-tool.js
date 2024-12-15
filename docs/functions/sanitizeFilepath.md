[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / sanitizeFilepath

# Function: sanitizeFilepath()

> **sanitizeFilepath**(`filepath`, `options`): `string`

Sanitizes each part of a file path and reassembles it, ensuring the path is valid according to provided options.

## Parameters

• **filepath**: `string`

The file path to sanitize, represented as a string.

• **options**: [`SanitizeFilenameOptions`](../interfaces/SanitizeFilenameOptions.md) = `{}`

Optional settings for sanitization, extending `SanitizeFilenameOptions`. Allows customization of replacement characters and maximum filename length.

## Returns

`string`

The sanitized file path as a string.

## Defined in

[packages/ai-tool/src/utils/filename.ts:149](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/filename.ts#L149)
