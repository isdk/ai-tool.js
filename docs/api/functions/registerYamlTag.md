[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / registerYamlTag

# Function: registerYamlTag()

> **registerYamlTag**(`tags`): `void`

Defined in: @isdk/util/dist/index.d.ts:281

Registers custom YAML tags to be used in parsing and stringifying YAML content.

## Parameters

### tags

A single tag or an array of tags to register.

`"map"` | `"null"` | `"binary"` | `ScalarTag` | `CollectionTag` | `"bool"` | `"float"` | `"floatExp"` | `"floatNaN"` | `"floatTime"` | `"int"` | `"intHex"` | `"intOct"` | `"intTime"` | `"merge"` | `"omap"` | `"pairs"` | `"seq"` | `"set"` | `"timestamp"` | `Tags`

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
