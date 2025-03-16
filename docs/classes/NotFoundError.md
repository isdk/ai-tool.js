[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / NotFoundError

# Class: NotFoundError

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:125

Represents an error when a requested resource is not found.
Inherits from BaseError.

## Example

```ts
throw new NotFoundError('user', { id: 123 })
```

## Extends

- [`CommonError`](CommonError.md)

## Constructors

### new NotFoundError()

> **new NotFoundError**(`what`, `name`?): [`NotFoundError`](NotFoundError.md)

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:127

#### Parameters

##### what

`string` | `number`

##### name?

`string` | `Record`\<`string`, `any`\>

#### Returns

[`NotFoundError`](NotFoundError.md)

#### Overrides

[`CommonError`](CommonError.md).[`constructor`](CommonError.md#constructors)

## Properties

### caller

> **caller**: `string`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:63

The name of the function that threw the error.

#### Inherited from

[`CommonError`](CommonError.md).[`caller`](CommonError.md#caller)

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

[`CommonError`](CommonError.md).[`cause`](CommonError.md#cause)

***

### code

> **code**: `ErrorCodeType`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:64

the error code

#### Inherited from

[`CommonError`](CommonError.md).[`code`](CommonError.md#code)

***

### data?

> `optional` **data**: `any`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:65

Additional data associated with the error.

#### Inherited from

[`CommonError`](CommonError.md).[`data`](CommonError.md#data)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`CommonError`](CommonError.md).[`message`](CommonError.md#message-1)

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`CommonError`](CommonError.md).[`name`](CommonError.md#name-1)

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`CommonError`](CommonError.md).[`stack`](CommonError.md#stack)

***

### code

> `static` **code**: [`ErrorCode`](../enumerations/ErrorCode.md)

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:126

The error code associated with the error.

#### Overrides

[`CommonError`](CommonError.md).[`code`](CommonError.md#code-1)

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

[`CommonError`](CommonError.md).[`prepareStackTrace`](CommonError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.10.5/node\_modules/@types/node/globals.d.ts:145

#### Inherited from

[`CommonError`](CommonError.md).[`stackTraceLimit`](CommonError.md#stacktracelimit)

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

[`CommonError`](CommonError.md).[`fromJSON`](CommonError.md#fromjson)

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:86

Returns a JSON representation of the error.

#### Returns

`any`

A JSON representation of the error.

#### Inherited from

[`CommonError`](CommonError.md).[`toJSON`](CommonError.md#tojson)

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

[`CommonError`](CommonError.md).[`captureStackTrace`](CommonError.md#capturestacktrace)

***

### create()

> `static` **create**(`__namedParameters`): [`CommonError`](CommonError.md)

Defined in: node\_modules/.pnpm/@isdk+common-error@0.1.3/node\_modules/@isdk/common-error/dist/index.d.ts:96

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

[`CommonError`](CommonError.md)

#### Inherited from

[`CommonError`](CommonError.md).[`create`](CommonError.md#create)

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

[`CommonError`](CommonError.md).[`createErrorClass`](CommonError.md#createerrorclass)
