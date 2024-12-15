[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / AbortError

# Class: AbortError

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

- [`CommonError`](CommonError.md)

## Constructors

### new AbortError()

> **new AbortError**(`what`?, `name`?): [`AbortError`](AbortError.md)

#### Parameters

• **what?**: `string`

• **name?**: `string` \| `Record`\<`string`, `any`\>

#### Returns

[`AbortError`](AbortError.md)

#### Overrides

[`CommonError`](CommonError.md).[`constructor`](CommonError.md#constructors)

#### Defined in

node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:144

## Properties

### caller

> **caller**: `string`

The name of the function that threw the error.

#### Inherited from

[`CommonError`](CommonError.md).[`caller`](CommonError.md#caller)

#### Defined in

node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:63

***

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

[`CommonError`](CommonError.md).[`cause`](CommonError.md#cause)

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### code

> **code**: `ErrorCodeType`

the error code

#### Inherited from

[`CommonError`](CommonError.md).[`code`](CommonError.md#code)

#### Defined in

node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:64

***

### data?

> `optional` **data**: `any`

Additional data associated with the error.

#### Inherited from

[`CommonError`](CommonError.md).[`data`](CommonError.md#data)

#### Defined in

node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:65

***

### message

> **message**: `string`

#### Inherited from

[`CommonError`](CommonError.md).[`message`](CommonError.md#message)

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

[`CommonError`](CommonError.md).[`name`](CommonError.md#name)

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`CommonError`](CommonError.md).[`stack`](CommonError.md#stack)

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### code

> `static` **code**: [`ErrorCode`](../enumerations/ErrorCode.md)

The error code associated with the error.

#### Overrides

[`CommonError`](CommonError.md).[`code`](CommonError.md#code-1)

#### Defined in

node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:143

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`CommonError`](CommonError.md).[`prepareStackTrace`](CommonError.md#preparestacktrace)

#### Defined in

node\_modules/.pnpm/@types+node@22.7.6/node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`CommonError`](CommonError.md).[`stackTraceLimit`](CommonError.md#stacktracelimit)

#### Defined in

node\_modules/.pnpm/@types+node@22.7.6/node\_modules/@types/node/globals.d.ts:145

## Methods

### fromJSON()

> **fromJSON**(`json`): [`BaseError`](BaseError.md)

Creates a new BaseError instance from a JSON representation.

#### Parameters

• **json**: `any`

A JSON representation of the error.

#### Returns

[`BaseError`](BaseError.md)

A new BaseError instance.

#### Inherited from

[`CommonError`](CommonError.md).[`fromJSON`](CommonError.md#fromjson)

#### Defined in

node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:93

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON representation of the error.

#### Returns

`any`

A JSON representation of the error.

#### Inherited from

[`CommonError`](CommonError.md).[`toJSON`](CommonError.md#tojson)

#### Defined in

node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:86

***

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

[`CommonError`](CommonError.md).[`captureStackTrace`](CommonError.md#capturestacktrace)

#### Defined in

node\_modules/.pnpm/@types+node@22.7.6/node\_modules/@types/node/globals.d.ts:136

***

### create()

> `static` **create**(`__namedParameters`): [`CommonError`](CommonError.md)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.code?**: `string` \| `number`

• **\_\_namedParameters.data?**: `any`

• **\_\_namedParameters.error**: `string`

• **\_\_namedParameters.name?**: `string`

#### Returns

[`CommonError`](CommonError.md)

#### Inherited from

[`CommonError`](CommonError.md).[`create`](CommonError.md#create)

#### Defined in

node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:96

***

### createErrorClass()

> `static` **createErrorClass**(`aType`, `aErrorCode`?, `ParentErrorClass`?): *typeof* [`BaseError`](BaseError.md)

Create an Error Class

#### Parameters

• **aType**: `string`

the error type(class) name

• **aErrorCode?**: `string` \| `number` \| *typeof* `AbstractError`

• **ParentErrorClass?**: *typeof* [`BaseError`](BaseError.md)

the parent error class. defaults to AbstractError

#### Returns

*typeof* [`BaseError`](BaseError.md)

the new Error Class

#### Inherited from

[`CommonError`](CommonError.md).[`createErrorClass`](CommonError.md#createerrorclass)

#### Defined in

node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:66
