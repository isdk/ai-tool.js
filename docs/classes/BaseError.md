[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / BaseError

# Class: BaseError

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:58

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

- `AbstractError`

## Extended by

- [`CommonError`](CommonError.md)
- [`ReadableStreamError`](ReadableStreamError.md)

## Constructors

### new BaseError()

> **new BaseError**(`message`, `code`?, `name`?): [`BaseError`](BaseError.md)

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:80

Constructs a new BaseError instance.

#### Parameters

##### message

`string`

The error message.

##### code?

`ErrorCodeType`

The error code.

##### name?

The error name or additional properties.

`string` | `Record`\<`string`, `any`\>

#### Returns

[`BaseError`](BaseError.md)

#### Overrides

`AbstractError.constructor`

## Properties

### caller

> **caller**: `string`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:63

The name of the function that threw the error.

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`AbstractError.cause`

***

### code

> **code**: `ErrorCodeType`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:64

the error code

#### Overrides

`AbstractError.code`

***

### data?

> `optional` **data**: `any`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:65

Additional data associated with the error.

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`AbstractError.message`

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`AbstractError.name`

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`AbstractError.stack`

***

### code

> `static` **code**: `ErrorCodeType`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:62

The error code associated with the error.

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

`AbstractError.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.10.5/node\_modules/@types/node/globals.d.ts:145

#### Inherited from

`AbstractError.stackTraceLimit`

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

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:86

Returns a JSON representation of the error.

#### Returns

`any`

A JSON representation of the error.

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

`AbstractError.captureStackTrace`

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

#### Overrides

`AbstractError.createErrorClass`
