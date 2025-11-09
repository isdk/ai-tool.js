[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / mergeArray

# Function: mergeArray()

> **mergeArray**(`targetArr`, `srcArr`): `any`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/merge-with-concat.ts:100](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/merge-with-concat.ts#L100)

Merges two arrays based on a custom strategy defined by the first element of the target array.

The first element of the target array can contain a special marker (`@inheritMerge`) to control the merging behavior:
- `@inheritMerge(false)` or `@inheritMerge(no)` or `@inheritMerge(not)`: Replace the target array with the source array.
- `@inheritMerge(.end)`: Append the source array to the end of the target array.
- `@inheritMerge(.start)` or no marker: Prepend the target array to the source array.

## Parameters

### targetArr

`any`[]

The target array to be merged.

### srcArr

`any`[]

The source array to merge into the target array.

## Returns

`any`[]

The merged array based on the specified strategy.

## Example

```typescript
// Example 1: Default behavior (.start)
const target = ['item1', 'item2'];
const source = ['item3', 'item4'];
console.log(mergeArray(target, source)); // Output: ['item3', 'item4', 'item1', 'item2']

// Example 2: Append behavior (.end)
const target = ['@inheritMerge(.end)', 'item1', 'item2'];
const source = ['item3', 'item4'];
console.log(mergeArray(target, source)); // Output: ['item1', 'item2', 'item3', 'item4']

// Example 3: Replace behavior (false)
const target = ['@inheritMerge(false)', 'item1', 'item2'];
const source = ['item3', 'item4'];
console.log(mergeArray(target, source)); // Output: ['item3', 'item4']
```
