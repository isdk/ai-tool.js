[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / jsonFilterToWhere

# Function: jsonFilterToWhere()

> **jsonFilterToWhere**(`filter`, `wrapKey`?): `string`

Converts a filter object to a SQLite WHERE clause.

## Parameters

• **filter**: [`JsonFilter`](../interfaces/JsonFilter.md) \| [`JsonFilter`](../interfaces/JsonFilter.md)[]

The filter object to convert.

• **wrapKey?**

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

## Defined in

[packages/ai-tool/src/utils/json-filter.ts:123](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/json-filter.ts#L123)
