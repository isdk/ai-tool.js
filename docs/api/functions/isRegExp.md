[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / isRegExp

# Function: isRegExp()

> **isRegExp**(`value`): `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/isRegExp.ts:21](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/isRegExp.ts#L21)

Checks if the provided value is a regular expression.

This function determines whether the given value is a regular expression
by using both string-based and object-based validation methods.

## Parameters

### value

`any`

The value to be checked for being a regular expression

## Returns

`boolean`

`true` if the value is a regular expression, otherwise `false`

## Example

```typescript
isRegExp(/abc/); // true
isRegExp(new RegExp('abc')); // true
isRegExp('/abc/'); // true
isRegExp('abc'); // false
isRegExp(123); // false
```
