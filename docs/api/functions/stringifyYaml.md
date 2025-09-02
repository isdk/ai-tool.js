[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / stringifyYaml

# Function: stringifyYaml()

> **stringifyYaml**(`content`, `options`?): `string`

Defined in: util/dist/index.d.ts:317

Converts a JavaScript object into a YAML string with optional custom tags.

## Parameters

### content

`any`

The JavaScript object to convert to YAML.

### options?

`DocumentOptions` & `SchemaOptions` & `ParseOptions` & `CreateNodeOptions` & `ToStringOptions`

Optional stringification options, including custom tags.

## Returns

`string`

The YAML string representation of the input object.

## Example

```typescript
import { stringifyYaml } from './yaml';

const data = {
  example: 'value',
};
const yamlString = stringifyYaml(data);
console.log(yamlString); // "example: value\n"
```
