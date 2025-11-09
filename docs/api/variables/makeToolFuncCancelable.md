[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / makeToolFuncCancelable

# Variable: makeToolFuncCancelable()

> `const` **makeToolFuncCancelable**: \<`T`\>(`targetClass?`, `options?`) => `T` & *typeof* [`CancelableAbility`](../classes/CancelableAbility.md) & `T` *extends* (...`args`) => `any` ? `InstanceType`\<`T`\> : `T` & [`CancelableAbility`](../classes/CancelableAbility.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:113

## Type Parameters

### T

`T` *extends* `Function` \| (...`args`) => `any`

## Parameters

### targetClass?

`T`

### options?

`AbilityOptions`

## Returns

`T` & *typeof* [`CancelableAbility`](../classes/CancelableAbility.md) & `T` *extends* (...`args`) => `any` ? `InstanceType`\<`T`\> : `T` & [`CancelableAbility`](../classes/CancelableAbility.md)
