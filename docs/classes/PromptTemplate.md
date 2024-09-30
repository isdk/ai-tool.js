[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / PromptTemplate

# Class: PromptTemplate

## Extends

- `BaseFactory`

## Extended by

- [`HfPromptTemplate`](HfPromptTemplate.md)
- [`FStringPromptTemplate`](FStringPromptTemplate.md)
- [`GolangPromptTemplate`](GolangPromptTemplate.md)
- [`FewShotPromptTemplate`](FewShotPromptTemplate.md)

## Constructors

### new PromptTemplate()

> **new PromptTemplate**(`template`?, `options`?): [`PromptTemplate`](PromptTemplate.md)

#### Parameters

• **template?**: `string` \| [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

• **options?**: [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

[`PromptTemplate`](PromptTemplate.md)

#### Overrides

`BaseFactory.constructor`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:69](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L69)

## Properties

### compiledTemplate

> **compiledTemplate**: `any`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:21](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L21)

***

### data

> **data**: `undefined` \| `Record`\<`string`, `any`\>

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:24](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L24)

***

### inputVariables

> **inputVariables**: `undefined` \| `string`[]

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:25](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L25)

***

### template

> **template**: `string`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:22](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L22)

***

### templateFormat

> **templateFormat**: `undefined` \| `string`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:23](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L23)

***

### \_aliases

> `abstract` `static` **\_aliases**: [`string`]

**`Internal`**

the registered alias items object.
the key is alias name, the value is the registered name

#### Inherited from

`BaseFactory._aliases`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:59

***

### \_baseNameOnly

> `static` **\_baseNameOnly**: `number`

**`Internal`**

Extracts a specified number of words from a PascalCase class name to use as a base name for registration,
only if no `name` is specified. The parameter value indicates the maximum depth of the word extraction.

In JavaScript, class names use `PascalCase` convention where each word starts with a capital letter.
The baseNameOnly parameter is a number that specifies which words to extract from the class name as the base name.
If the value is 1, it extracts the first word, 2 extracts the first two words, and 0 uses the entire class name.
The base name is used to register the class to the factory.

#### Example

```ts
such as "JsonTextCodec" if baseNameOnly is 1, the first word "Json" will be extracted from "JsonTextCodec" as
  the base name. If baseNameOnly is 2, the first two words "JsonText" will be extracted as the base name. If
  baseNameOnly is 0, the entire class name "JsonTextCodec" will be used as the base name.
```

#### Name

_baseNameOnly

#### Default

```ts
1
@internal
```

#### Inherited from

`BaseFactory._baseNameOnly`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:82

***

### \_children

> `abstract` `static` **\_children**: `object`

**`Internal`**

The registered classes in the Factory

#### Index Signature

 \[`name`: `string`\]: `any`

#### Name

_children

#### Inherited from

`BaseFactory._children`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:49

***

### \_Factory

> `abstract` `static` **\_Factory**: *typeof* `BaseFactory`

**`Internal`**

The Root Factory class

#### Name

_Factory

#### Inherited from

`BaseFactory._Factory`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:41

## Accessors

### aliases

> `get` `static` **aliases**(): `string`[]

the aliases of itself

> `set` `static` **aliases**(`value`): `void`

#### Parameters

• **value**: `string`[]

#### Returns

`string`[]

#### Inherited from

`BaseFactory.aliases`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:200

***

### Factory

> `get` `static` **Factory**(): *typeof* `BaseFactory`

The Root Factory class

#### Returns

*typeof* `BaseFactory`

#### Inherited from

`BaseFactory.Factory`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:63

## Methods

### \_format()

> **\_format**(`data`): `string` \| `Promise`\<`string`\>

#### Parameters

• **data**: `Record`\<`string`, `any`\>

#### Returns

`string` \| `Promise`\<`string`\>

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:105](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L105)

***

### \_initialize()

> **\_initialize**(`options`?): `void`

#### Parameters

• **options?**: [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:92](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L92)

***

### filterData()

> **filterData**(`data`): `Record`\<`string`, `any`\>

Validate/filter the data in inputVariables

#### Parameters

• **data**: `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:62](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L62)

***

### format()

> **format**(`data`?): `Promise`\<`string`\>

#### Parameters

• **data?**: `Record`\<`string`, `any`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:109](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L109)

***

### initialize()

> `abstract` **initialize**(`options`?): `void`

**`Internal`**

initialize instance method

#### Parameters

• **options?**: [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

`void`

#### Overrides

`BaseFactory.initialize`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:96](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L96)

***

### partial()

> **partial**(`data`): [`PromptTemplate`](PromptTemplate.md)

it can make sense to "partial" a prompt template - eg pass in a subset of the required values, as to create a new prompt template which expects only the remaining subset of values.

#### Parameters

• **data**: `Record`\<`string`, `any`\>

the partial data

#### Returns

[`PromptTemplate`](PromptTemplate.md)

the new partial PromptTemplate instance

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:139](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L139)

***

### toJSON()

> **toJSON**(`options`): [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Parameters

• **options**: [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md) = `...`

#### Returns

[`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:147](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L147)

***

### \_findRootFactory()

> `static` **\_findRootFactory**(`aClass`): `undefined` \| *typeof* `BaseFactory`

**`Internal`**

find the real root factory

#### Parameters

• **aClass**: *typeof* `BaseFactory`

the abstract root factory class

#### Returns

`undefined` \| *typeof* `BaseFactory`

#### Inherited from

`BaseFactory._findRootFactory`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:99

***

### \_get()

> `static` **\_get**(`name`): `any`

#### Parameters

• **name**: `any`

#### Returns

`any`

#### Inherited from

`BaseFactory._get`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:234

***

### \_register()

> `static` **\_register**(`aClass`, `aOptions`?): `boolean`

**`Internal`**

register the aClass to the factory

#### Parameters

• **aClass**: *typeof* `BaseFactory`

the class to register the Factory

• **aOptions?**: `any`

the options for the class and the factory

#### Returns

`boolean`

return true if successful.

#### Inherited from

`BaseFactory._register`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:145

***

### cleanAliases()

> `static` **cleanAliases**(`aName`): `void`

remove all aliases of the registered item or itself

#### Parameters

• **aName**: `undefined` \| `string` \| *typeof* `BaseFactory`

the registered item or name

#### Returns

`void`

#### Inherited from

`BaseFactory.cleanAliases`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:162

***

### createObject()

> `static` **createObject**(`aName`, `aOptions`): `undefined` \| `BaseFactory`

Create a new object instance of Factory

#### Parameters

• **aName**: `string` \| `BaseFactory`

• **aOptions**: `any`

#### Returns

`undefined` \| `BaseFactory`

#### Inherited from

`BaseFactory.createObject`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:241

***

### findRootFactory()

> `abstract` `static` **findRootFactory**(): `undefined` \| *typeof* `BaseFactory`

**`Internal`**

find the real root factory

You can overwrite it to specify your root factory class
or set _Factory directly.

#### Returns

`undefined` \| *typeof* `BaseFactory`

the root factory class

#### Inherited from

`BaseFactory.findRootFactory`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:92

***

### forEach()

> `static` **forEach**(`cb`): `any`

executes a provided callback function once for each registered element.

#### Parameters

• **cb**

the forEach callback function

#### Returns

`any`

#### Inherited from

`BaseFactory.forEach`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:227

***

### format()

> `static` **format**(`options`): `Promise`\<`string`\>

#### Parameters

• **options**: [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:31](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L31)

***

### formatIf()

> `static` **formatIf**(`options`): `Promise`\<`undefined` \| `string`\>

If the given options.template is the template, perform formatting using that template.

#### Parameters

• **options**: [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

The options object to check for being a template and to format.

#### Returns

`Promise`\<`undefined` \| `string`\>

A Promise that resolves to the formatted result if options is a template; otherwise, no value is returned.

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:41](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L41)

***

### formatName()

> `abstract` `static` **formatName**(`aName`): `string`

**`Internal`**

format(transform) the name to be registered.

defaults to returning the name unchanged. By overloading this method, case-insensitive names can be achieved.

#### Parameters

• **aName**: `string`

#### Returns

`string`

#### Inherited from

`BaseFactory.formatName`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:116

***

### formatNameFromClass()

> `static` **formatNameFromClass**(`aClass`, `aBaseNameOnly`?): `string`

**`Internal`**

format(transform) the name to be registered for the aClass

#### Parameters

• **aClass**: `any`

• **aBaseNameOnly?**: `number`

#### Returns

`string`

the name to register

#### Inherited from

`BaseFactory.formatNameFromClass`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:130

***

### from()

> `static` **from**(`template`?, `options`?): [`PromptTemplate`](PromptTemplate.md)

#### Parameters

• **template?**: `string` \| [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

• **options?**: [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

[`PromptTemplate`](PromptTemplate.md)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:27](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L27)

***

### get()

> `static` **get**(`name`): `undefined` \| *typeof* `BaseFactory`

Get the registered class via name

#### Parameters

• **name**: `any`

#### Returns

`undefined` \| *typeof* `BaseFactory`

return the registered class if found the name

#### Inherited from

`BaseFactory.get`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:233

***

### getAliases()

> `static` **getAliases**(`aClass`): `string`[]

get the aliases of the aClass

#### Parameters

• **aClass**: `undefined` \| `string` \| *typeof* `BaseFactory`

the class or name to get aliases, means itself if no aClass specified

#### Returns

`string`[]

aliases

#### Inherited from

`BaseFactory.getAliases`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:195

***

### getDisplayName()

> `static` **getDisplayName**(`aClass`): `undefined` \| `string`

Get the display name from aClass

#### Parameters

• **aClass**: `undefined` \| `string` \| `Function`

the class, name or itself, means itself if no aClass

#### Returns

`undefined` \| `string`

#### Inherited from

`BaseFactory.getDisplayName`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:206

***

### getNameFrom()

> `static` **getNameFrom**(`aClass`): `string`

Get the unique(registered) name in the factory

#### Parameters

• **aClass**: `string` \| `Function`

#### Returns

`string`

the unique name in the factory

#### Inherited from

`BaseFactory.getNameFrom`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:122

***

### getRealName()

> `static` **getRealName**(`name`): `any`

#### Parameters

• **name**: `any`

#### Returns

`any`

#### Inherited from

`BaseFactory.getRealName`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:100

***

### getRealNameFromAlias()

> `static` **getRealNameFromAlias**(`alias`): `undefined` \| `string`

get the unique name in the factory from an alias name

#### Parameters

• **alias**: `string`

the alias name

#### Returns

`undefined` \| `string`

the unique name in the factory

#### Inherited from

`BaseFactory.getRealNameFromAlias`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:106

***

### isTemplate()

> `static` **isTemplate**(`templateOpt`): `any`

#### Parameters

• **templateOpt**: [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:48](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-template.ts#L48)

***

### register()

> `static` **register**(...`args`): `boolean`

register the aClass to the factory

#### Parameters

• ...**args**: `any`[]

#### Returns

`boolean`

return true if successful.

#### Inherited from

`BaseFactory.register`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:137

***

### registeredClass()

> `static` **registeredClass**(`aName`): `false` \| *typeof* `BaseFactory`

Check the name, alias or itself whether registered.

#### Parameters

• **aName**: `undefined` \| `string`

the class name

#### Returns

`false` \| *typeof* `BaseFactory`

the registered class if registered, otherwise returns false

#### Inherited from

`BaseFactory.registeredClass`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:151

***

### removeAlias()

> `static` **removeAlias**(...`aliases`): `void`

remove specified aliases

#### Parameters

• ...**aliases**: `string`[]

the aliases to remove

#### Returns

`void`

#### Inherited from

`BaseFactory.removeAlias`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:167

***

### setAlias()

> `static` **setAlias**(`aClass`, `alias`): `void`

set alias to a class

#### Parameters

• **aClass**: `undefined` \| `string` \| *typeof* `BaseFactory`

the class to set alias

• **alias**: `string`

#### Returns

`void`

#### Inherited from

`BaseFactory.setAlias`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:189

***

### setAliases()

> `static` **setAliases**(`aClass`, ...`aAliases`): `void`

set aliases to a class

#### Parameters

• **aClass**: `undefined` \| `string` \| *typeof* `BaseFactory`

the class to set aliases

• ...**aAliases**: `any`[]

#### Returns

`void`

#### Example

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

`BaseFactory.setAliases`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:183

***

### setDisplayName()

> `static` **setDisplayName**(`aClass`, `aDisplayName`): `void`

Set the display name to the aClass

#### Parameters

• **aClass**: `undefined` \| `string` \| `Function`

the class, name or itself, means itself if no aClass

• **aDisplayName**: `string` \| `object`

the display name to set

#### Returns

`void`

#### Inherited from

`BaseFactory.setDisplayName`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:212

***

### unregister()

> `static` **unregister**(`aName`): `boolean`

unregister this class in the factory

#### Parameters

• **aName**: `undefined` \| `string` \| `Function`

the registered name or class, no name means unregister itself.

#### Returns

`boolean`

true means successful

#### Inherited from

`BaseFactory.unregister`

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:157
