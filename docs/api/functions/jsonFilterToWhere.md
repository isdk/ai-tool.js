[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / jsonFilterToWhere

# Function: jsonFilterToWhere()

> **jsonFilterToWhere**(`filter`, `wrapKey?`): `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/json-filter.ts:123](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/json-filter.ts#L123)

Converts a filter object to a SQLite WHERE clause.

## Parameters

### filter

The filter object to convert.

[`JsonFilter`](../interfaces/JsonFilter.md) | [`JsonFilter`](../interfaces/JsonFilter.md)[]

### wrapKey?

(`k`) => `string`

## Returns

`string`

The generated WHERE clause.

## Example

```ts
const jsonFilter: Filter = {
  $and: [
    { age: { $gt: 18, $lt: 30 } },
    { name: { $like: 'John%', $nlike: 'Doe%' } },
    { hobbies: { $in: ['reading', 'writing'] } },
    { $or: [{ gender: 'male' }, { country: 'USA' }] },
    { $and: [{ status: 'active' }, { registered: new Date('2020-01-01') }] },
  ],
};

console.log(jsonFilterToWhere(jsonFilter)); // Outputs a WHERE clause based on the given filter
```
