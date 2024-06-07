[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / PromptTemplate

# Class: PromptTemplate

## Hierarchy

- `BaseFactory`

  ↳ **`PromptTemplate`**

  ↳↳ [`HfPromptTemplate`](HfPromptTemplate.md)

  ↳↳ [`FStringPromptTemplate`](FStringPromptTemplate.md)

  ↳↳ [`GolangPromptTemplate`](GolangPromptTemplate.md)

  ↳↳ [`FewShotPromptTemplate`](FewShotPromptTemplate.md)

## Table of contents

### Constructors

- [constructor](PromptTemplate.md#constructor)

### Properties

- [compiledTemplate](PromptTemplate.md#compiledtemplate)
- [data](PromptTemplate.md#data)
- [inputVariables](PromptTemplate.md#inputvariables)
- [template](PromptTemplate.md#template)
- [templateFormat](PromptTemplate.md#templateformat)
- [\_Factory](PromptTemplate.md#_factory)
- [\_aliases](PromptTemplate.md#_aliases)
- [\_baseNameOnly](PromptTemplate.md#_basenameonly)
- [\_children](PromptTemplate.md#_children)

### Accessors

- [Factory](PromptTemplate.md#factory)
- [aliases](PromptTemplate.md#aliases)

### Methods

- [\_format](PromptTemplate.md#_format)
- [\_initialize](PromptTemplate.md#_initialize)
- [filterData](PromptTemplate.md#filterdata)
- [format](PromptTemplate.md#format)
- [initialize](PromptTemplate.md#initialize)
- [partial](PromptTemplate.md#partial)
- [toJSON](PromptTemplate.md#tojson)
- [\_findRootFactory](PromptTemplate.md#_findrootfactory)
- [\_get](PromptTemplate.md#_get)
- [\_register](PromptTemplate.md#_register)
- [cleanAliases](PromptTemplate.md#cleanaliases)
- [createObject](PromptTemplate.md#createobject)
- [findRootFactory](PromptTemplate.md#findrootfactory)
- [forEach](PromptTemplate.md#foreach)
- [format](PromptTemplate.md#format-1)
- [formatIf](PromptTemplate.md#formatif)
- [formatName](PromptTemplate.md#formatname)
- [formatNameFromClass](PromptTemplate.md#formatnamefromclass)
- [from](PromptTemplate.md#from)
- [get](PromptTemplate.md#get)
- [getAliases](PromptTemplate.md#getaliases)
- [getDisplayName](PromptTemplate.md#getdisplayname)
- [getNameFrom](PromptTemplate.md#getnamefrom)
- [getRealName](PromptTemplate.md#getrealname)
- [getRealNameFromAlias](PromptTemplate.md#getrealnamefromalias)
- [isTemplate](PromptTemplate.md#istemplate)
- [register](PromptTemplate.md#register)
- [registeredClass](PromptTemplate.md#registeredclass)
- [removeAlias](PromptTemplate.md#removealias)
- [setAlias](PromptTemplate.md#setalias)
- [setAliases](PromptTemplate.md#setaliases)
- [setDisplayName](PromptTemplate.md#setdisplayname)
- [unregister](PromptTemplate.md#unregister)

## Constructors

### constructor

• **new PromptTemplate**(`template?`, `options?`): [`PromptTemplate`](PromptTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `template?` | `string` \| [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md) |
| `options?` | [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md) |

#### Returns

[`PromptTemplate`](PromptTemplate.md)

#### Overrides

BaseFactory.constructor

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:69](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L69)

## Properties

### compiledTemplate

• **compiledTemplate**: `any`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:21](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L21)

___

### data

• **data**: `undefined` \| `Record`\<`string`, `any`\>

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:24](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L24)

___

### inputVariables

• **inputVariables**: `undefined` \| `string`[]

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:25](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L25)

___

### template

• **template**: `string`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:22](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L22)

___

### templateFormat

• **templateFormat**: `undefined` \| `string`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:23](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L23)

___

### \_Factory

▪ `Static` **\_Factory**: typeof `BaseFactory`

The Root Factory class

**`Name`**

_Factory

**`Abstract`**

#### Inherited from

BaseFactory.\_Factory

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:41

___

### \_aliases

▪ `Static` **\_aliases**: [alias: string]

the registered alias items object.
the key is alias name, the value is the registered name

**`Abstract`**

#### Inherited from

BaseFactory.\_aliases

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:59

___

### \_baseNameOnly

▪ `Static` **\_baseNameOnly**: `number`

Extracts a specified number of words from a PascalCase class name to use as a base name for registration,
only if no `name` is specified. The parameter value indicates the maximum depth of the word extraction.

In JavaScript, class names use `PascalCase` convention where each word starts with a capital letter.
The baseNameOnly parameter is a number that specifies which words to extract from the class name as the base name.
If the value is 1, it extracts the first word, 2 extracts the first two words, and 0 uses the entire class name.
The base name is used to register the class to the factory.

**`Example`**

```ts
such as "JsonTextCodec" if baseNameOnly is 1, the first word "Json" will be extracted from "JsonTextCodec" as
  the base name. If baseNameOnly is 2, the first two words "JsonText" will be extracted as the base name. If
  baseNameOnly is 0, the entire class name "JsonTextCodec" will be used as the base name.
```

**`Name`**

_baseNameOnly

**`Default`**

```ts
1
@internal
```

#### Inherited from

BaseFactory.\_baseNameOnly

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:82

___

### \_children

▪ `Static` **\_children**: `Object`

The registered classes in the Factory

**`Name`**

_children

**`Abstract`**

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

BaseFactory.\_children

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:49

## Accessors

### Factory

• `get` **Factory**(): typeof `BaseFactory`

The Root Factory class

#### Returns

typeof `BaseFactory`

#### Inherited from

BaseFactory.Factory

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:63

___

### aliases

• `get` **aliases**(): `string`[]

the aliases of itself

#### Returns

`string`[]

#### Inherited from

BaseFactory.aliases

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:200

• `set` **aliases**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string`[] |

#### Returns

`void`

#### Inherited from

BaseFactory.aliases

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:196

## Methods

### \_format

▸ **_format**(`data`): `string` \| `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`\<`string`, `any`\> |

#### Returns

`string` \| `Promise`\<`string`\>

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:105](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L105)

___

### \_initialize

▸ **_initialize**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md) |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:92](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L92)

___

### filterData

▸ **filterData**(`data`): `Record`\<`string`, `any`\>

Validate/filter the data in inputVariables

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`\<`string`, `any`\> |

#### Returns

`Record`\<`string`, `any`\>

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:62](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L62)

___

### format

▸ **format**(`data?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Record`\<`string`, `any`\> |

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:109](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L109)

___

### initialize

▸ **initialize**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md) |

#### Returns

`void`

#### Overrides

BaseFactory.initialize

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:96](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L96)

___

### partial

▸ **partial**(`data`): [`PromptTemplate`](PromptTemplate.md)

it can make sense to "partial" a prompt template - eg pass in a subset of the required values, as to create a new prompt template which expects only the remaining subset of values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Record`\<`string`, `any`\> | the partial data |

#### Returns

[`PromptTemplate`](PromptTemplate.md)

the new partial PromptTemplate instance

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:139](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L139)

___

### toJSON

▸ **toJSON**(`options?`): [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md) |

#### Returns

[`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:147](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L147)

___

### \_findRootFactory

▸ **_findRootFactory**(`aClass`): `undefined` \| typeof `BaseFactory`

find the real root factory

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClass` | typeof `BaseFactory` | the abstract root factory class |

#### Returns

`undefined` \| typeof `BaseFactory`

#### Inherited from

BaseFactory.\_findRootFactory

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:99

___

### \_get

▸ **_get**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

`any`

#### Inherited from

BaseFactory.\_get

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:234

___

### \_register

▸ **_register**(`aClass`, `aOptions?`): `boolean`

register the aClass to the factory

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClass` | typeof `BaseFactory` | the class to register the Factory |
| `aOptions?` | `any` | the options for the class and the factory |

#### Returns

`boolean`

return true if successful.

#### Inherited from

BaseFactory.\_register

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:145

___

### cleanAliases

▸ **cleanAliases**(`aName`): `void`

remove all aliases of the registered item or itself

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aName` | `undefined` \| `string` \| typeof `BaseFactory` | the registered item or name |

#### Returns

`void`

#### Inherited from

BaseFactory.cleanAliases

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:162

___

### createObject

▸ **createObject**(`aName`, `aOptions`): `undefined` \| `BaseFactory`

Create a new object instance of Factory

#### Parameters

| Name | Type |
| :------ | :------ |
| `aName` | `string` \| `BaseFactory` |
| `aOptions` | `any` |

#### Returns

`undefined` \| `BaseFactory`

#### Inherited from

BaseFactory.createObject

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:241

___

### findRootFactory

▸ **findRootFactory**(): `undefined` \| typeof `BaseFactory`

find the real root factory

You can overwrite it to specify your root factory class
or set _Factory directly.

#### Returns

`undefined` \| typeof `BaseFactory`

the root factory class

**`Abstract`**

#### Inherited from

BaseFactory.findRootFactory

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:92

___

### forEach

▸ **forEach**(`cb`): `any`

executes a provided callback function once for each registered element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | (`ctor`: typeof `BaseFactory`, `name`: `string`) => `undefined` \| `string` | the forEach callback function |

#### Returns

`any`

#### Inherited from

BaseFactory.forEach

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:227

___

### format

▸ **format**(`options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:31](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L31)

___

### formatIf

▸ **formatIf**(`options`): `Promise`\<`undefined` \| `string`\>

If the given options.template is the template, perform formatting using that template.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md) | The options object to check for being a template and to format. |

#### Returns

`Promise`\<`undefined` \| `string`\>

A Promise that resolves to the formatted result if options is a template; otherwise, no value is returned.

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:41](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L41)

___

### formatName

▸ **formatName**(`aName`): `string`

format(transform) the name to be registered.

defaults to returning the name unchanged. By overloading this method, case-insensitive names can be achieved.

#### Parameters

| Name | Type |
| :------ | :------ |
| `aName` | `string` |

#### Returns

`string`

**`Abstract`**

#### Inherited from

BaseFactory.formatName

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:116

___

### formatNameFromClass

▸ **formatNameFromClass**(`aClass`, `aBaseNameOnly?`): `string`

format(transform) the name to be registered for the aClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `aClass` | `any` |
| `aBaseNameOnly?` | `number` |

#### Returns

`string`

the name to register

#### Inherited from

BaseFactory.formatNameFromClass

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:130

___

### from

▸ **from**(`template?`, `options?`): [`PromptTemplate`](PromptTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `template?` | `string` \| [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md) |
| `options?` | [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md) |

#### Returns

[`PromptTemplate`](PromptTemplate.md)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:27](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L27)

___

### get

▸ **get**(`name`): `undefined` \| typeof `BaseFactory`

Get the registered class via name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

`undefined` \| typeof `BaseFactory`

return the registered class if found the name

#### Inherited from

BaseFactory.get

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:233

___

### getAliases

▸ **getAliases**(`aClass`): `string`[]

get the aliases of the aClass

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClass` | `undefined` \| `string` \| typeof `BaseFactory` | the class or name to get aliases, means itself if no aClass specified |

#### Returns

`string`[]

aliases

#### Inherited from

BaseFactory.getAliases

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:195

___

### getDisplayName

▸ **getDisplayName**(`aClass`): `undefined` \| `string`

Get the display name from aClass

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClass` | `undefined` \| `string` \| `Function` | the class, name or itself, means itself if no aClass |

#### Returns

`undefined` \| `string`

#### Inherited from

BaseFactory.getDisplayName

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:206

___

### getNameFrom

▸ **getNameFrom**(`aClass`): `string`

Get the unique(registered) name in the factory

#### Parameters

| Name | Type |
| :------ | :------ |
| `aClass` | `string` \| `Function` |

#### Returns

`string`

the unique name in the factory

#### Inherited from

BaseFactory.getNameFrom

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:122

___

### getRealName

▸ **getRealName**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

`any`

#### Inherited from

BaseFactory.getRealName

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:100

___

### getRealNameFromAlias

▸ **getRealNameFromAlias**(`alias`): `undefined` \| `string`

get the unique name in the factory from an alias name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | the alias name |

#### Returns

`undefined` \| `string`

the unique name in the factory

#### Inherited from

BaseFactory.getRealNameFromAlias

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:106

___

### isTemplate

▸ **isTemplate**(`templateOpt`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `templateOpt` | [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md) |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:48](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/prompt/prompt-template.ts#L48)

___

### register

▸ **register**(`...args`): `boolean`

register the aClass to the factory

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`boolean`

return true if successful.

#### Inherited from

BaseFactory.register

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:137

___

### registeredClass

▸ **registeredClass**(`aName`): ``false`` \| typeof `BaseFactory`

Check the name, alias or itself whether registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aName` | `undefined` \| `string` | the class name |

#### Returns

``false`` \| typeof `BaseFactory`

the registered class if registered, otherwise returns false

#### Inherited from

BaseFactory.registeredClass

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:151

___

### removeAlias

▸ **removeAlias**(`...aliases`): `void`

remove specified aliases

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...aliases` | `string`[] | the aliases to remove |

#### Returns

`void`

#### Inherited from

BaseFactory.removeAlias

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:167

___

### setAlias

▸ **setAlias**(`aClass`, `alias`): `void`

set alias to a class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClass` | `undefined` \| `string` \| typeof `BaseFactory` | the class to set alias |
| `alias` | `string` |  |

#### Returns

`void`

#### Inherited from

BaseFactory.setAlias

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:189

___

### setAliases

▸ **setAliases**(`aClass`, `...aAliases`): `void`

set aliases to a class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClass` | `undefined` \| `string` \| typeof `BaseFactory` | the class to set aliases |
| `...aAliases` | `any`[] | - |

#### Returns

`void`

**`Example`**

```ts
import { BaseFactory } from 'custom-factory'
  class Factory extends BaseFactory {}
  const register = Factory.register.bind(Factory)
  const aliases = Factory.setAliases.bind(Factory)
  class MyFactory {}
  register(MyFactory)
  aliases(MyFactory, 'my', 'MY')
```

#### Inherited from

BaseFactory.setAliases

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:183

___

### setDisplayName

▸ **setDisplayName**(`aClass`, `aDisplayName`): `void`

Set the display name to the aClass

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClass` | `undefined` \| `string` \| `Function` | the class, name or itself, means itself if no aClass |
| `aDisplayName` | `string` \| \{ `displayName`: `string`  } | the display name to set |

#### Returns

`void`

#### Inherited from

BaseFactory.setDisplayName

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:212

___

### unregister

▸ **unregister**(`aName`): `boolean`

unregister this class in the factory

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aName` | `undefined` \| `string` \| `Function` | the registered name or class, no name means unregister itself. |

#### Returns

`boolean`

true means successful

#### Inherited from

BaseFactory.unregister

#### Defined in

node_modules/.pnpm/custom-factory@2.3.0-alpha.6/node_modules/custom-factory/lib/base-factory.d.ts:157
