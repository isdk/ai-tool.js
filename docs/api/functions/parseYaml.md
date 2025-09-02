[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / parseYaml

# Function: parseYaml()

> **parseYaml**(`content`, `options`?): `any`

Defined in: util/dist/index.d.ts:298

Parses a YAML string into a JavaScript object with optional custom tags.

## Parameters

### content

`string`

The YAML string to parse.

### options?

`ParseOptions` & `DocumentOptions` & `SchemaOptions` & `ToJSOptions`

Optional parsing options, including custom tags.

## Returns

`any`

The parsed JavaScript object.

## Example

```typescript
import { parseYaml } from './yaml';

const yamlContent = `
  example: !custom value
`;
const result = parseYaml(yamlContent);
console.log(result); // { example: 'resolved-value' }
```
