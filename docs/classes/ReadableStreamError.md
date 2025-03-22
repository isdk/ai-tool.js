[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ReadableStreamError

# Class: ReadableStreamError

Defined in: [packages/ai-tool/src/utils/stream/error-readable-stream.ts:6](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/stream/error-readable-stream.ts#L6)

BaseError class that extends the Error class.

## Example

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

## Description

This class is used to create custom errors that extend the built-in Error class. It provides a way to define custom error codes and additional data associated with the error.

## Method

toJSON - Returns a JSON representation of the error.

## Method

fromJSON - Creates a new BaseError instance from a JSON representation.

## Extends

- [`BaseError`](BaseError.md)

## Constructors

### new ReadableStreamError()

> **new ReadableStreamError**(`msg`, `code`): [`ReadableStreamError`](ReadableStreamError.md)

Defined in: [packages/ai-tool/src/utils/stream/error-readable-stream.ts:7](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/stream/error-readable-stream.ts#L7)

#### Parameters

##### msg

`string`

##### code

`number` = `RStreamErrCode`

#### Returns

[`ReadableStreamError`](ReadableStreamError.md)

#### Overrides

[`BaseError`](BaseError.md).[`constructor`](BaseError.md#constructors)

## Properties

### caller

> **caller**: `string`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:63

The name of the function that threw the error.

#### Inherited from

[`BaseError`](BaseError.md).[`caller`](BaseError.md#caller)

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

[`BaseError`](BaseError.md).[`cause`](BaseError.md#cause)

***

### code

> **code**: `ErrorCodeType`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:64

the error code

#### Inherited from

[`BaseError`](BaseError.md).[`code`](BaseError.md#code-1)

***

### data?

> `optional` **data**: `any`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:65

Additional data associated with the error.

#### Inherited from

[`BaseError`](BaseError.md).[`data`](BaseError.md#data)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`BaseError`](BaseError.md).[`message`](BaseError.md#message-1)

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`BaseError`](BaseError.md).[`name`](BaseError.md#name-1)

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`BaseError`](BaseError.md).[`stack`](BaseError.md#stack)

***

### code

> `static` **code**: `ErrorCodeType`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:62

The error code associated with the error.

#### Inherited from

[`BaseError`](BaseError.md).[`code`](BaseError.md#code-2)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/.pnpm/@types+node@22.10.5/node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`BaseError`](BaseError.md).[`prepareStackTrace`](BaseError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.10.5/node\_modules/@types/node/globals.d.ts:145

#### Inherited from

[`BaseError`](BaseError.md).[`stackTraceLimit`](BaseError.md#stacktracelimit)

## Methods

### fromJSON()

> **fromJSON**(`json`): [`BaseError`](BaseError.md)

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:93

Creates a new BaseError instance from a JSON representation.

#### Parameters

##### json

`any`

A JSON representation of the error.

#### Returns

[`BaseError`](BaseError.md)

A new BaseError instance.

#### Inherited from

[`BaseError`](BaseError.md).[`fromJSON`](BaseError.md#fromjson)

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:86

Returns a JSON representation of the error.

#### Returns

`any`

A JSON representation of the error.

#### Inherited from

[`BaseError`](BaseError.md).[`toJSON`](BaseError.md#tojson)

***

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: node\_modules/.pnpm/@types+node@22.10.5/node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

[`BaseError`](BaseError.md).[`captureStackTrace`](BaseError.md#capturestacktrace)

***

### create()

> `static` **create**(`__namedParameters`): [`BaseError`](BaseError.md)

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:67

#### Parameters

##### \_\_namedParameters

###### code?

`string` \| `number`

###### data?

`any`

###### error

`string`

###### name?

`string`

#### Returns

[`BaseError`](BaseError.md)

#### Inherited from

[`BaseError`](BaseError.md).[`create`](BaseError.md#create)

***

### createErrorClass()

> `static` **createErrorClass**(`aType`, `aErrorCode`?, `ParentErrorClass`?): *typeof* [`BaseError`](BaseError.md)

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:66

Create an Error Class

#### Parameters

##### aType

`string`

the error type(class) name

##### aErrorCode?

`string` | `number` | *typeof* `AbstractError`

##### ParentErrorClass?

*typeof* [`BaseError`](BaseError.md)

the parent error class. defaults to AbstractError

#### Returns

*typeof* [`BaseError`](BaseError.md)

the new Error Class

#### Inherited from

[`BaseError`](BaseError.md).[`createErrorClass`](BaseError.md#createerrorclass)
