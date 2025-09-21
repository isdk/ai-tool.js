[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / sanitizeFilepath

# Function: sanitizeFilepath()

> **sanitizeFilepath**(`filepath`, `options?`): `string`

Defined in: @isdk/util/dist/index.d.ts:427

Sanitizes each part of a file path and reassembles it, ensuring the path is valid according to provided options.

## Parameters

### filepath

`string`

The file path to sanitize, represented as a string.

### options?

[`SanitizeFilenameOptions`](../interfaces/SanitizeFilenameOptions.md)

Optional settings for sanitization, extending `SanitizeFilenameOptions`. Allows customization of replacement characters and maximum filename length.

## Returns

`string`

The sanitized file path as a string.
