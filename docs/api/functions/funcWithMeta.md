[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / funcWithMeta

# Function: funcWithMeta()

> **funcWithMeta**(`fn`, `meta`, `ignoreExists?`): `undefined` \| `Function` \| [`ToolFunc`](../classes/ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:886](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/tool-func.ts#L886)

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

`boolean` = `true`

If `true`, new metadata overwrites existing keys. If `false`, it merges deeply, preserving existing values.

## Returns

`undefined` \| `Function` \| [`ToolFunc`](../classes/ToolFunc.md)

The updated function or `ToolFunc` with metadata, or `undefined` if the operation was skipped.
