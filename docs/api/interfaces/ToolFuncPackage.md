[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ToolFuncPackage

# Interface: ToolFuncPackage

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:216](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L216)

Describes a package of tool functions, including methods for registration and unregistration.

## Properties

### name

> **name**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:221](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L221)

The name of the tool function package.

***

### register()

> **register**: (`data?`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:226](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L226)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:230](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L230)

An optional method to unregister all functions within the package.

#### Returns

`void`
