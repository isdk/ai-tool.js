[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / defaultsWithConcat

# Function: defaultsWithConcat()

> **defaultsWithConcat**(`target`, ...`source`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/merge-with-concat.ts:60](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/merge-with-concat.ts#L60)

Merges multiple source objects into the target object with a custom merging strategy.

## Parameters

### target

`any`

The target object, whose properties will be overridden or merged by source object values.

### source

...`any`[]

Source objects, whose properties will be merged into the target object.

## Returns

`any`

The merged target object.

This function performs deep merging using the following rules:
- For non-array properties, standard deep merging is applied.
- For arrays, a custom merging strategy is used based on the first element of the target array:
  - **`@inheritMerge(.start)`** or no marker: Prepend the target array to the source array. defaults to this.
  - **`@inheritMerge(.end)`**: Append the source array to the end of the target array.
  - **`@inheritMerge(false)`**, **`@inheritMerge(no)`**, or **`@inheritMerge(not)`**: Replace the target array with the source array.

## Example

```typescript
// Example 1: Default behavior (.start)
const target = {
  items: ['item1', 'item2']
};
const source = {
  items: ['item3', 'item4']
};
console.log(defaultsWithConcat(target, source).items);
// Output: ['item3', 'item4', 'item1', 'item2']

// Example 2: Append behavior (.end)
const target = {
  items: ['@inheritMerge(.end)', 'item1', 'item2']
};
const source = {
  items: ['item3', 'item4']
};
console.log(defaultsWithConcat(target, source).items);
// Output: ['item1', 'item2', 'item3', 'item4']

// Example 3: Replace behavior (false)
const target = {
  items: ['@inheritMerge(false)', 'item1', 'item2']
};
const source = {
  items: ['item3', 'item4']
};
console.log(defaultsWithConcat(target, source).items);
// Output: ['item3', 'item4']
```
