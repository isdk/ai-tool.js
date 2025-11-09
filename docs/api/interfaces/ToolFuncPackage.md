[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ToolFuncPackage

# Interface: ToolFuncPackage

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:316

Describes a package of tool functions, including methods for registration and unregistration.

## Properties

### name

> **name**: `string`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:321

The name of the tool function package.

***

### register()

> **register**: (`data?`) => `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:326

A method to register all functions within the package.

#### Parameters

##### data?

`any`

Optional data to pass to the registration process.

#### Returns

`void`

***

### unregister()?

> `optional` **unregister**: () => `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:330

An optional method to unregister all functions within the package.

#### Returns

`void`
