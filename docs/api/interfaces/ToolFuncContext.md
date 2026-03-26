[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ToolFuncContext

# Interface: ToolFuncContext

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:113

Execution context for a tool function.

## Indexable

\[`key`: `string`\]: `any`

Allows users to extend arbitrary properties.

## Properties

### binding?

> `optional` **binding**: `"auto"` \| `"early"` \| `"late"`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:125

The binding strategy for internal dependencies (runAsSync).
- 'early': Always use pre-bound instances from 'depends'.
- 'late': Always resolve from rootRegistry (forced polymorphism).
- 'auto': Use 'late' if rootRegistry shadows the dependency, else 'early' (Safe Default).

***

### inheritContext?

> `optional` **inheritContext**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:135

Whether to allow context inheritance/propagation in nested calls.
Defaults to true.

***

### isolated?

> `optional` **isolated**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:130

Whether to enable independent execution scope.
If true, a temporary instance will be created via Object.create(this) to isolate concurrency.

***

### rootRegistry?

> `optional` **rootRegistry**: *typeof* [`ToolFunc`](../classes/ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:118

The entry-point registry class that initiated the call chain.
Used for late-binding dependency resolution in hierarchical registries.

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:139

Standard Web AbortSignal for propagating cancellation signals.
