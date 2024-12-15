[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / FStringPromptTemplate

# Class: FStringPromptTemplate

## Extends

- [`PromptTemplate`](PromptTemplate.md)

## Constructors

### new FStringPromptTemplate()

> **new FStringPromptTemplate**(`template`?, `options`?): [`FStringPromptTemplate`](FStringPromptTemplate.md)

#### Parameters

• **template?**: `string` \| [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

• **options?**: [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

[`FStringPromptTemplate`](FStringPromptTemplate.md)

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`constructor`](PromptTemplate.md#constructors)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:69](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/prompt-template.ts#L69)

## Properties

### compiledTemplate

> **compiledTemplate**: [`FStringPromptTemplateNode`](../type-aliases/FStringPromptTemplateNode.md)[]

#### Overrides

[`PromptTemplate`](PromptTemplate.md).[`compiledTemplate`](PromptTemplate.md#compiledtemplate)

#### Defined in

[packages/ai-tool/src/utils/prompt/f-string-prompt-template.ts:16](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/f-string-prompt-template.ts#L16)

***

### data

> **data**: `undefined` \| `Record`\<`string`, `any`\>

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`data`](PromptTemplate.md#data)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:24](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/prompt-template.ts#L24)

***

### inputVariables

> **inputVariables**: `undefined` \| `string`[]

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`inputVariables`](PromptTemplate.md#inputvariables)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:25](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/prompt-template.ts#L25)

***

### template

> **template**: `string`

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`template`](PromptTemplate.md#template)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:22](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/prompt-template.ts#L22)

***

### templateFormat

> **templateFormat**: `undefined` \| `string`

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`templateFormat`](PromptTemplate.md#templateformat)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:23](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/prompt-template.ts#L23)

***

### \_aliases

> `abstract` `static` **\_aliases**: [`string`]

**`Internal`**

the registered alias items object.
the key is alias name, the value is the registered name

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`_aliases`](PromptTemplate.md#_aliases)

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

[`PromptTemplate`](PromptTemplate.md).[`_baseNameOnly`](PromptTemplate.md#_basenameonly)

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

[`PromptTemplate`](PromptTemplate.md).[`_children`](PromptTemplate.md#_children)

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

[`PromptTemplate`](PromptTemplate.md).[`_Factory`](PromptTemplate.md#_factory)

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

[`PromptTemplate`](PromptTemplate.md).[`aliases`](PromptTemplate.md#aliases)

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:200

***

### Factory

> `get` `static` **Factory**(): *typeof* `BaseFactory`

The Root Factory class

#### Returns

*typeof* `BaseFactory`

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`Factory`](PromptTemplate.md#factory)

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:63

## Methods

### \_format()

> **\_format**(`data`): `string`

#### Parameters

• **data**: `Record`\<`string`, `any`\>

#### Returns

`string`

#### Overrides

[`PromptTemplate`](PromptTemplate.md).[`_format`](PromptTemplate.md#_format)

#### Defined in

[packages/ai-tool/src/utils/prompt/f-string-prompt-template.ts:56](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/f-string-prompt-template.ts#L56)

***

### \_initialize()

> **\_initialize**(`options`?): `void`

#### Parameters

• **options?**: [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

`void`

#### Overrides

[`PromptTemplate`](PromptTemplate.md).[`_initialize`](PromptTemplate.md#_initialize)

#### Defined in

[packages/ai-tool/src/utils/prompt/f-string-prompt-template.ts:47](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/f-string-prompt-template.ts#L47)

***

### filterData()

> **filterData**(`data`): `Record`\<`string`, `any`\>

Validate/filter the data in inputVariables

#### Parameters

• **data**: `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`filterData`](PromptTemplate.md#filterdata)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:62](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/prompt-template.ts#L62)

***

### format()

> **format**(`data`?): `Promise`\<`string`\>

#### Parameters

• **data?**: `Record`\<`string`, `any`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`format`](PromptTemplate.md#format)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:109](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/prompt-template.ts#L109)

***

### getVariables()

> **getVariables**(`template`): `string`[]

#### Parameters

• **template**: [`FStringPromptTemplateNode`](../type-aliases/FStringPromptTemplateNode.md)[] = `...`

#### Returns

`string`[]

#### Defined in

[packages/ai-tool/src/utils/prompt/f-string-prompt-template.ts:43](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/f-string-prompt-template.ts#L43)

***

### initialize()

> `abstract` **initialize**(`options`?): `void`

**`Internal`**

initialize instance method

#### Parameters

• **options?**: [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

`void`

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`initialize`](PromptTemplate.md#initialize)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:96](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/prompt-template.ts#L96)

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

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`partial`](PromptTemplate.md#partial)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:139](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/prompt-template.ts#L139)

***

### toJSON()

> **toJSON**(`options`): [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Parameters

• **options**: [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md) = `...`

#### Returns

[`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`toJSON`](PromptTemplate.md#tojson)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:147](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/prompt-template.ts#L147)

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

[`PromptTemplate`](PromptTemplate.md).[`_findRootFactory`](PromptTemplate.md#_findrootfactory)

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

[`PromptTemplate`](PromptTemplate.md).[`_get`](PromptTemplate.md#_get)

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

[`PromptTemplate`](PromptTemplate.md).[`_register`](PromptTemplate.md#_register)

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

[`PromptTemplate`](PromptTemplate.md).[`cleanAliases`](PromptTemplate.md#cleanaliases)

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

[`PromptTemplate`](PromptTemplate.md).[`createObject`](PromptTemplate.md#createobject)

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

[`PromptTemplate`](PromptTemplate.md).[`findRootFactory`](PromptTemplate.md#findrootfactory)

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

[`PromptTemplate`](PromptTemplate.md).[`forEach`](PromptTemplate.md#foreach)

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:227

***

### format()

> `static` **format**(`options`): `Promise`\<`string`\>

#### Parameters

• **options**: [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`format`](PromptTemplate.md#format-1)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:31](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/prompt-template.ts#L31)

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

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`formatIf`](PromptTemplate.md#formatif)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:41](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/prompt-template.ts#L41)

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

[`PromptTemplate`](PromptTemplate.md).[`formatName`](PromptTemplate.md#formatname)

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

[`PromptTemplate`](PromptTemplate.md).[`formatNameFromClass`](PromptTemplate.md#formatnamefromclass)

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

#### Inherited from

[`PromptTemplate`](PromptTemplate.md).[`from`](PromptTemplate.md#from)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:27](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/prompt-template.ts#L27)

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

[`PromptTemplate`](PromptTemplate.md).[`get`](PromptTemplate.md#get)

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

[`PromptTemplate`](PromptTemplate.md).[`getAliases`](PromptTemplate.md#getaliases)

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

[`PromptTemplate`](PromptTemplate.md).[`getDisplayName`](PromptTemplate.md#getdisplayname)

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

[`PromptTemplate`](PromptTemplate.md).[`getNameFrom`](PromptTemplate.md#getnamefrom)

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

[`PromptTemplate`](PromptTemplate.md).[`getRealName`](PromptTemplate.md#getrealname)

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

[`PromptTemplate`](PromptTemplate.md).[`getRealNameFromAlias`](PromptTemplate.md#getrealnamefromalias)

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:106

***

### isTemplate()

> `static` **isTemplate**(`templateOpt`): `boolean`

#### Parameters

• **templateOpt**: `string` \| [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

`boolean`

#### Overrides

[`PromptTemplate`](PromptTemplate.md).[`isTemplate`](PromptTemplate.md#istemplate)

#### Defined in

[packages/ai-tool/src/utils/prompt/f-string-prompt-template.ts:18](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/f-string-prompt-template.ts#L18)

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

[`PromptTemplate`](PromptTemplate.md).[`register`](PromptTemplate.md#register)

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

[`PromptTemplate`](PromptTemplate.md).[`registeredClass`](PromptTemplate.md#registeredclass)

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

[`PromptTemplate`](PromptTemplate.md).[`removeAlias`](PromptTemplate.md#removealias)

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

[`PromptTemplate`](PromptTemplate.md).[`setAlias`](PromptTemplate.md#setalias)

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

[`PromptTemplate`](PromptTemplate.md).[`setAliases`](PromptTemplate.md#setaliases)

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

[`PromptTemplate`](PromptTemplate.md).[`setDisplayName`](PromptTemplate.md#setdisplayname)

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

[`PromptTemplate`](PromptTemplate.md).[`unregister`](PromptTemplate.md#unregister)

#### Defined in

node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:157
