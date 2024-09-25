[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / createEmptyReadableStream

# Function: createEmptyReadableStream()

> **createEmptyReadableStream**(): `ReadableStream`

Creates an empty ReadableStream that immediately closes upon creation.
This function is used as a fallback for creating a ReadableStream when the response body is null or undefined,
ensuring that the subsequent pipeline processing doesn't fail due to a lack of a stream.

## Returns

`ReadableStream`

An empty and closed ReadableStream instance.

## Defined in

[packages/ai-tool/src/utils/stream/create-empty-stream.ts:8](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/stream/create-empty-stream.ts#L8)
