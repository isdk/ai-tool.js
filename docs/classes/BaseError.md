[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / BaseError

# Class: BaseError

BaseError class that extends the Error class.

**`Example`**

```ts
// Create a custom error
class CustomError extends BaseError {
  static code = 'customError';
  constructor(message: string) {
    super(message);
  }
}

// Throw the custom error
throw new CustomError('This is a custom error');
```

**`Description`**

This class is used to create custom errors that extend the built-in Error class. It provides a way to define custom error codes and additional data associated with the error.

**`Method`**

toJSON - Returns a JSON representation of the error.

**`Method`**

fromJSON - Creates a new BaseError instance from a JSON representation.

## Hierarchy

- `AbstractError`

  ↳ **`BaseError`**

  ↳↳ [`CommonError`](CommonError.md)

  ↳↳ [`ReadableStreamError`](ReadableStreamError.md)

## Table of contents

### Constructors

- [constructor](BaseError.md#constructor)

### Properties

- [caller](BaseError.md#caller)
- [cause](BaseError.md#cause)
- [code](BaseError.md#code)
- [data](BaseError.md#data)
- [message](BaseError.md#message)
- [name](BaseError.md#name)
- [stack](BaseError.md#stack)
- [code](BaseError.md#code-1)
- [prepareStackTrace](BaseError.md#preparestacktrace)
- [stackTraceLimit](BaseError.md#stacktracelimit)

### Methods

- [fromJSON](BaseError.md#fromjson)
- [toJSON](BaseError.md#tojson)
- [captureStackTrace](BaseError.md#capturestacktrace)
- [createErrorClass](BaseError.md#createerrorclass)

## Constructors

### constructor

• **new BaseError**(`message`, `code?`, `name?`): [`BaseError`](BaseError.md)

Constructs a new BaseError instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The error message. |
| `code?` | [`ErrorCodeType`](../modules.md#errorcodetype) | The error code. |
| `name?` | `string` \| `object` | The error name or additional properties. |

#### Returns

[`BaseError`](BaseError.md)

#### Overrides

AbstractError.constructor

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:81](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/base-error.ts#L81)

## Properties

### caller

• **caller**: `string`

The name of the function that threw the error.

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:66](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/base-error.ts#L66)

___

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

AbstractError.cause

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### code

• **code**: [`ErrorCodeType`](../modules.md#errorcodetype)

#### Overrides

AbstractError.code

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:67](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/base-error.ts#L67)

___

### data

• `Optional` **data**: `any`

Additional data associated with the error.

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:68](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/base-error.ts#L68)

___

### message

• **message**: `string`

#### Inherited from

AbstractError.message

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1077

___

### name

• **name**: `string`

#### Inherited from

AbstractError.name

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1076

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

AbstractError.stack

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1078

___

### code

▪ `Static` **code**: [`ErrorCodeType`](../modules.md#errorcodetype)

The error code associated with the error.

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:65](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/base-error.ts#L65)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

AbstractError.prepareStackTrace

#### Defined in

node_modules/.pnpm/@types+node@20.14.2/node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

AbstractError.stackTraceLimit

#### Defined in

node_modules/.pnpm/@types+node@20.14.2/node_modules/@types/node/globals.d.ts:30

## Methods

### fromJSON

▸ **fromJSON**(`json`): [`BaseError`](BaseError.md)

Creates a new BaseError instance from a JSON representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `any` | A JSON representation of the error. |

#### Returns

[`BaseError`](BaseError.md)

A new BaseError instance.

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:131](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/base-error.ts#L131)

___

### toJSON

▸ **toJSON**(): `any`

Returns a JSON representation of the error.

#### Returns

`any`

A JSON representation of the error.

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:111](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/base-error.ts#L111)

___

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

AbstractError.captureStackTrace

#### Defined in

node_modules/.pnpm/@types+node@20.14.2/node_modules/@types/node/globals.d.ts:21

___

### createErrorClass

▸ **createErrorClass**(`aType`, `aErrorCode?`, `ParentErrorClass?`): typeof [`BaseError`](BaseError.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `aType` | `string` | `undefined` |
| `aErrorCode?` | `string` \| `number` \| typeof `AbstractError` | `undefined` |
| `ParentErrorClass` | typeof [`BaseError`](BaseError.md) | `BaseError` |

#### Returns

typeof [`BaseError`](BaseError.md)

#### Overrides

AbstractError.createErrorClass

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:70](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/base-error.ts#L70)
