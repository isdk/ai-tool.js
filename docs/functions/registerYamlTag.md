[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / registerYamlTag

# Function: registerYamlTag()

> **registerYamlTag**(`tags`): `void`

Defined in: node\_modules/.pnpm/@isdk+util@0.3.0/node\_modules/@isdk/util/dist/index.d.ts:252

Registers custom YAML tags to be used in parsing and stringifying YAML content.

## Parameters

### tags

A single tag or an array of tags to register.

`"map"` | `"binary"` | `"null"` | `ScalarTag` | `CollectionTag` | `"bool"` | `"float"` | `"floatExp"` | `"floatNaN"` | `"floatTime"` | `"int"` | `"intHex"` | `"intOct"` | `"intTime"` | `"merge"` | `"omap"` | `"pairs"` | `"seq"` | `"set"` | `"timestamp"` | `Tags`

## Returns

`void`

## Example

```typescript
import { registerYamlTag } from './yaml';

const customTag = {
  tag: '!custom',
  resolve: (value) => `resolved-${value}`,
};
registerYamlTag(customTag);
```
