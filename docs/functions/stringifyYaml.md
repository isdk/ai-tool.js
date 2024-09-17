[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / stringifyYaml

# Function: stringifyYaml()

## stringifyYaml(value, options)

> **stringifyYaml**(`value`, `options`?): `string`

Stringify a value as a YAML document.

### Parameters

• **value**: `any`

• **options?**: `DocumentOptions` & `SchemaOptions` & `ParseOptions` & `CreateNodeOptions` & `ToStringOptions`

### Returns

`string`

Will always include `\n` as the last character, as is expected of YAML documents.

### Defined in

node\_modules/.pnpm/yaml@2.5.1/node\_modules/yaml/dist/public-api.d.ts:42

## stringifyYaml(value, replacer, options)

> **stringifyYaml**(`value`, `replacer`?, `options`?): `string`

### Parameters

• **value**: `any`

• **replacer?**: `null` \| `Replacer`

• **options?**: `string` \| `number` \| `DocumentOptions` & `SchemaOptions` & `ParseOptions` & `CreateNodeOptions` & `ToStringOptions`

### Returns

`string`

### Defined in

node\_modules/.pnpm/yaml@2.5.1/node\_modules/yaml/dist/public-api.d.ts:43
