[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / jsonFilterToWhere

# Function: jsonFilterToWhere()

> **jsonFilterToWhere**(`filter`, `wrapKey`?): `string`

Defined in: [packages/ai-tool/src/utils/json-filter.ts:123](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/json-filter.ts#L123)

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
