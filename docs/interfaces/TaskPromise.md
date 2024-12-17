[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / TaskPromise

# Interface: TaskPromise\<T\>

## Extends

- `Promise`\<`T`\>

## Type Parameters

• **T** = `any`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

#### Inherited from

`Promise.[toStringTag]`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:176

***

### task?

> `optional` **task**: [`TaskAbortController`](../classes/TaskAbortController.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:51](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/cancelable-ability.ts#L51)

## Methods

### catch()

> **catch**\<`TResult`\>(`onrejected`?): `Promise`\<`T` \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

• **TResult** = `never`

#### Parameters

• **onrejected?**: `null` \| (`reason`) => `TResult` \| `PromiseLike`\<`TResult`\>

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.catch`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1557

***

### finally()

> **finally**(`onfinally`?): `Promise`\<`T`\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

• **onfinally?**: `null` \| () => `void`

The callback to execute when the Promise is settled (fulfilled or rejected).

#### Returns

`Promise`\<`T`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.finally`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2018.promise.d.ts:29

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled`?, `onrejected`?): `Promise`\<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

• **TResult1** = `T`

• **TResult2** = `never`

#### Parameters

• **onfulfilled?**: `null` \| (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\>

The callback to execute when the Promise is resolved.

• **onrejected?**: `null` \| (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\>

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

`Promise.then`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1550
