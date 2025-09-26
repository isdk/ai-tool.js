[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / TaskPromise

# Interface: TaskPromise\<T\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:70](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/utils/cancelable-ability.ts#L70)

## Extends

- `Promise`\<`T`\>

## Type Parameters

### T

`T` = `any`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:176

#### Inherited from

`Promise.[toStringTag]`

***

### task?

> `optional` **task**: [`TaskAbortController`](../classes/TaskAbortController.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:71](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/utils/cancelable-ability.ts#L71)

## Methods

### catch()

> **catch**\<`TResult`\>(`onrejected?`): `Promise`\<`T` \| `TResult`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1557

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

##### TResult

`TResult` = `never`

#### Parameters

##### onrejected?

The callback to execute when the Promise is rejected.

`null` | (`reason`) => `TResult` \| `PromiseLike`\<`TResult`\>

#### Returns

`Promise`\<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.catch`

***

### finally()

> **finally**(`onfinally?`): `Promise`\<`T`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2018.promise.d.ts:29

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

##### onfinally?

The callback to execute when the Promise is settled (fulfilled or rejected).

`null` | () => `void`

#### Returns

`Promise`\<`T`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.finally`

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`\<`TResult1` \| `TResult2`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1550

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

##### TResult1

`TResult1` = `T`

##### TResult2

`TResult2` = `never`

#### Parameters

##### onfulfilled?

The callback to execute when the Promise is resolved.

`null` | (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\>

##### onrejected?

The callback to execute when the Promise is rejected.

`null` | (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\>

#### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

`Promise.then`
