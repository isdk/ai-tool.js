[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / CommonError

# Class: CommonError

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

- [`BaseError`](BaseError.md)

  ↳ **`CommonError`**

  ↳↳ [`NotImplementationError`](NotImplementationError.md)

  ↳↳ [`NotFoundError`](NotFoundError.md)

  ↳↳ [`AlreadyExistsError`](AlreadyExistsError.md)

  ↳↳ [`AbortError`](AbortError.md)

## Table of contents

### Constructors

- [constructor](CommonError.md#constructor)

### Properties

- [caller](CommonError.md#caller)
- [cause](CommonError.md#cause)
- [code](CommonError.md#code)
- [data](CommonError.md#data)
- [message](CommonError.md#message)
- [name](CommonError.md#name)
- [stack](CommonError.md#stack)
- [code](CommonError.md#code-1)
- [prepareStackTrace](CommonError.md#preparestacktrace)
- [stackTraceLimit](CommonError.md#stacktracelimit)

### Methods

- [fromJSON](CommonError.md#fromjson)
- [toJSON](CommonError.md#tojson)
- [captureStackTrace](CommonError.md#capturestacktrace)
- [createErrorClass](CommonError.md#createerrorclass)

## Constructors

### constructor

• **new CommonError**(`message`, `name?`, `status?`): [`CommonError`](CommonError.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `undefined` |
| `name?` | `string` \| `Record`\<`string`, `any`\> | `undefined` |
| `status` | [`ErrorCodeType`](../modules.md#errorcodetype) | `InternalErrorCode` |

#### Returns

[`CommonError`](CommonError.md)

#### Overrides

[BaseError](BaseError.md).[constructor](BaseError.md#constructor)

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:143](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/base-error.ts#L143)

## Properties

### caller

• **caller**: `string`

The name of the function that threw the error.

#### Inherited from

[BaseError](BaseError.md).[caller](BaseError.md#caller)

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:66](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/base-error.ts#L66)

___

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[BaseError](BaseError.md).[cause](BaseError.md#cause)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### code

• **code**: [`ErrorCodeType`](../modules.md#errorcodetype)

#### Inherited from

[BaseError](BaseError.md).[code](BaseError.md#code)

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:67](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/base-error.ts#L67)

___

### data

• `Optional` **data**: `any`

Additional data associated with the error.

#### Inherited from

[BaseError](BaseError.md).[data](BaseError.md#data)

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:68](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/base-error.ts#L68)

___

### message

• **message**: `string`

#### Inherited from

[BaseError](BaseError.md).[message](BaseError.md#message)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1077

___

### name

• **name**: `string`

#### Inherited from

[BaseError](BaseError.md).[name](BaseError.md#name)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1076

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[BaseError](BaseError.md).[stack](BaseError.md#stack)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1078

___

### code

▪ `Static` **code**: [`ErrorCodeType`](../modules.md#errorcodetype)

The error code associated with the error.

#### Inherited from

[BaseError](BaseError.md).[code](BaseError.md#code-1)

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:65](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/base-error.ts#L65)

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

[BaseError](BaseError.md).[prepareStackTrace](BaseError.md#preparestacktrace)

#### Defined in

node_modules/.pnpm/@types+node@20.14.2/node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[BaseError](BaseError.md).[stackTraceLimit](BaseError.md#stacktracelimit)

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

#### Inherited from

[BaseError](BaseError.md).[fromJSON](BaseError.md#fromjson)

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:131](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/base-error.ts#L131)

___

### toJSON

▸ **toJSON**(): `any`

Returns a JSON representation of the error.

#### Returns

`any`

A JSON representation of the error.

#### Inherited from

[BaseError](BaseError.md).[toJSON](BaseError.md#tojson)

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:111](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/base-error.ts#L111)

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

[BaseError](BaseError.md).[captureStackTrace](BaseError.md#capturestacktrace)

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

#### Inherited from

[BaseError](BaseError.md).[createErrorClass](BaseError.md#createerrorclass)

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:70](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/base-error.ts#L70)
