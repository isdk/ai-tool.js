[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / canonicalize

# Function: canonicalize()

> **canonicalize**(`obj`, `allowCircular?`): `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/json-canonicalize@2.0.0/node\_modules/json-canonicalize/types/canonicalize.d.ts:8

The main function for JSON canonicalization. It takes a JavaScript object and returns its canonical string representation.

## Parameters

### obj

`any`

The JavaScript object to canonicalize.

### allowCircular?

`boolean`

If `true`, the function will handle circular references in the object by replacing them with `null`. Defaults to `false`.

## Returns

`string`

The canonical string representation of the object.
