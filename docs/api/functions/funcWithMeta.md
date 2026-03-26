[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / funcWithMeta

# Function: funcWithMeta()

> **funcWithMeta**(`fn`, `meta`, `ignoreExists?`): `Function` \| [`ToolFunc`](../classes/ToolFunc.md) \| `undefined`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:994

Attaches metadata to a function or `ToolFunc` object.

This utility merges the provided metadata with any existing metadata on the target.

## Parameters

### fn

The function or `ToolFunc` instance to which metadata will be added.

`Function` | [`ToolFunc`](../classes/ToolFunc.md)

### meta

`any`

The metadata object to attach. The operation is skipped if this is not a non-null object.

### ignoreExists?

`boolean`

If `true`, new metadata overwrites existing keys. If `false`, it merges deeply, preserving existing values.

## Returns

`Function` \| [`ToolFunc`](../classes/ToolFunc.md) \| `undefined`

The updated function or `ToolFunc` with metadata, or `undefined` if the operation was skipped.
