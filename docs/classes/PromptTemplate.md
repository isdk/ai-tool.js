[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / PromptTemplate

# Class: PromptTemplate

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:20](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L20)

## Extends

- `BaseFactory`

## Extended by

- [`HfPromptTemplate`](HfPromptTemplate.md)
- [`FStringPromptTemplate`](FStringPromptTemplate.md)
- [`GolangPromptTemplate`](GolangPromptTemplate.md)
- [`EnvPromptTemplate`](EnvPromptTemplate.md)
- [`FewShotPromptTemplate`](FewShotPromptTemplate.md)

## Constructors

### new PromptTemplate()

> **new PromptTemplate**(`template`?, `options`?): [`PromptTemplate`](PromptTemplate.md)

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:69](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L69)

#### Parameters

##### template?

`string` | [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

##### options?

[`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

[`PromptTemplate`](PromptTemplate.md)

#### Overrides

`BaseFactory.constructor`

## Properties

### compiledTemplate

> **compiledTemplate**: `any`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:21](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L21)

***

### data

> **data**: `undefined` \| `Record`\<`string`, `any`\>

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:24](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L24)

***

### inputVariables

> **inputVariables**: `undefined` \| `string`[]

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:25](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L25)

***

### template

> **template**: `string`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:22](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L22)

***

### templateFormat

> **templateFormat**: `undefined` \| `string`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:23](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L23)

***

### \_aliases

> `abstract` `static` **\_aliases**: \[`string`\]

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:59

**`Internal`**

the registered alias items object.
the key is alias name, the value is the registered name

#### Inherited from

`BaseFactory._aliases`

***

### \_baseNameOnly

> `static` **\_baseNameOnly**: `number`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:82

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

***

### \_children

> `abstract` `static` **\_children**: `object`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:49

**`Internal`**

The registered classes in the Factory

#### Index Signature

\[`name`: `string`\]: `any`

#### Name

_children

#### Inherited from

`BaseFactory._children`

***

### \_Factory

> `abstract` `static` **\_Factory**: *typeof* `BaseFactory`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:41

**`Internal`**

The Root Factory class

#### Name

_Factory

#### Inherited from

`BaseFactory._Factory`

## Accessors

### aliases

#### Get Signature

> **get** `static` **aliases**(): `string`[]

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:200

the aliases of itself

##### Returns

`string`[]

#### Set Signature

> **set** `static` **aliases**(`value`): `void`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:196

##### Parameters

###### value

`string`[]

##### Returns

`void`

#### Inherited from

`BaseFactory.aliases`

***

### Factory

#### Get Signature

> **get** `static` **Factory**(): *typeof* `BaseFactory`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:63

The Root Factory class

##### Returns

*typeof* `BaseFactory`

#### Inherited from

`BaseFactory.Factory`

## Methods

### \_format()

> **\_format**(`data`): `string` \| `Promise`\<`string`\>

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:105](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L105)

#### Parameters

##### data

`Record`\<`string`, `any`\>

#### Returns

`string` \| `Promise`\<`string`\>

***

### \_initialize()

> **\_initialize**(`options`?): `void`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:92](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L92)

#### Parameters

##### options?

[`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

`void`

***

### filterData()

> **filterData**(`data`): `Record`\<`string`, `any`\>

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:62](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L62)

Validate/filter the data in inputVariables

#### Parameters

##### data

`Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

***

### format()

> **format**(`data`?): `Promise`\<`string`\>

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:109](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L109)

#### Parameters

##### data?

`Record`\<`string`, `any`\>

#### Returns

`Promise`\<`string`\>

***

### initialize()

> `abstract` **initialize**(`options`?): `void`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:96](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L96)

**`Internal`**

initialize instance method

#### Parameters

##### options?

[`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

`void`

#### Overrides

`BaseFactory.initialize`

***

### partial()

> **partial**(`data`): [`PromptTemplate`](PromptTemplate.md)

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:139](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L139)

it can make sense to "partial" a prompt template - eg pass in a subset of the required values, as to create a new prompt template which expects only the remaining subset of values.

#### Parameters

##### data

`Record`\<`string`, `any`\>

the partial data

#### Returns

[`PromptTemplate`](PromptTemplate.md)

the new partial PromptTemplate instance

***

### toJSON()

> **toJSON**(`options`): [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:147](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L147)

#### Parameters

##### options

[`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md) = `...`

#### Returns

[`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

***

### \_findRootFactory()

> `static` **\_findRootFactory**(`aClass`): `undefined` \| *typeof* `BaseFactory`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:99

**`Internal`**

find the real root factory

#### Parameters

##### aClass

*typeof* `BaseFactory`

the abstract root factory class

#### Returns

`undefined` \| *typeof* `BaseFactory`

#### Inherited from

`BaseFactory._findRootFactory`

***

### \_get()

> `static` **\_get**(`name`): `any`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:234

#### Parameters

##### name

`any`

#### Returns

`any`

#### Inherited from

`BaseFactory._get`

***

### \_register()

> `static` **\_register**(`aClass`, `aOptions`?): `boolean`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:145

**`Internal`**

register the aClass to the factory

#### Parameters

##### aClass

*typeof* `BaseFactory`

the class to register the Factory

##### aOptions?

`any`

the options for the class and the factory

#### Returns

`boolean`

return true if successful.

#### Inherited from

`BaseFactory._register`

***

### cleanAliases()

> `static` **cleanAliases**(`aName`): `void`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:162

remove all aliases of the registered item or itself

#### Parameters

##### aName

the registered item or name

`undefined` | `string` | *typeof* `BaseFactory`

#### Returns

`void`

#### Inherited from

`BaseFactory.cleanAliases`

***

### createObject()

> `static` **createObject**(`aName`, `aOptions`): `undefined` \| `BaseFactory`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:241

Create a new object instance of Factory

#### Parameters

##### aName

`string` | `BaseFactory`

##### aOptions

`any`

#### Returns

`undefined` \| `BaseFactory`

#### Inherited from

`BaseFactory.createObject`

***

### findRootFactory()

> `abstract` `static` **findRootFactory**(): `undefined` \| *typeof* `BaseFactory`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:92

**`Internal`**

find the real root factory

You can overwrite it to specify your root factory class
or set _Factory directly.

#### Returns

`undefined` \| *typeof* `BaseFactory`

the root factory class

#### Inherited from

`BaseFactory.findRootFactory`

***

### forEach()

> `static` **forEach**(`cb`): `any`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:227

executes a provided callback function once for each registered element.

#### Parameters

##### cb

(`ctor`, `name`) => `undefined` \| `string`

the forEach callback function

#### Returns

`any`

#### Inherited from

`BaseFactory.forEach`

***

### format()

> `static` **format**(`options`): `Promise`\<`string`\>

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:31](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L31)

#### Parameters

##### options

[`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

`Promise`\<`string`\>

***

### formatIf()

> `static` **formatIf**(`options`): `Promise`\<`undefined` \| `string`\>

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:41](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L41)

If the given options.template is the template, perform formatting using that template.

#### Parameters

##### options

[`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

The options object to check for being a template and to format.

#### Returns

`Promise`\<`undefined` \| `string`\>

A Promise that resolves to the formatted result if options is a template; otherwise, no value is returned.

***

### formatName()

> `abstract` `static` **formatName**(`aName`): `string`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:116

**`Internal`**

format(transform) the name to be registered.

defaults to returning the name unchanged. By overloading this method, case-insensitive names can be achieved.

#### Parameters

##### aName

`string`

#### Returns

`string`

#### Inherited from

`BaseFactory.formatName`

***

### formatNameFromClass()

> `static` **formatNameFromClass**(`aClass`, `aBaseNameOnly`?): `string`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:130

**`Internal`**

format(transform) the name to be registered for the aClass

#### Parameters

##### aClass

`any`

##### aBaseNameOnly?

`number`

#### Returns

`string`

the name to register

#### Inherited from

`BaseFactory.formatNameFromClass`

***

### from()

> `static` **from**(`template`?, `options`?): [`PromptTemplate`](PromptTemplate.md)

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:27](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L27)

#### Parameters

##### template?

`string` | [`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

##### options?

[`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

[`PromptTemplate`](PromptTemplate.md)

***

### get()

> `static` **get**(`name`): `undefined` \| *typeof* `BaseFactory`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:233

Get the registered class via name

#### Parameters

##### name

`any`

#### Returns

`undefined` \| *typeof* `BaseFactory`

return the registered class if found the name

#### Inherited from

`BaseFactory.get`

***

### getAliases()

> `static` **getAliases**(`aClass`): `string`[]

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:195

get the aliases of the aClass

#### Parameters

##### aClass

the class or name to get aliases, means itself if no aClass specified

`undefined` | `string` | *typeof* `BaseFactory`

#### Returns

`string`[]

aliases

#### Inherited from

`BaseFactory.getAliases`

***

### getDisplayName()

> `static` **getDisplayName**(`aClass`): `undefined` \| `string`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:206

Get the display name from aClass

#### Parameters

##### aClass

the class, name or itself, means itself if no aClass

`undefined` | `string` | `Function`

#### Returns

`undefined` \| `string`

#### Inherited from

`BaseFactory.getDisplayName`

***

### getNameFrom()

> `static` **getNameFrom**(`aClass`): `string`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:122

Get the unique(registered) name in the factory

#### Parameters

##### aClass

`string` | `Function`

#### Returns

`string`

the unique name in the factory

#### Inherited from

`BaseFactory.getNameFrom`

***

### getRealName()

> `static` **getRealName**(`name`): `any`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:100

#### Parameters

##### name

`any`

#### Returns

`any`

#### Inherited from

`BaseFactory.getRealName`

***

### getRealNameFromAlias()

> `static` **getRealNameFromAlias**(`alias`): `undefined` \| `string`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:106

get the unique name in the factory from an alias name

#### Parameters

##### alias

`string`

the alias name

#### Returns

`undefined` \| `string`

the unique name in the factory

#### Inherited from

`BaseFactory.getRealNameFromAlias`

***

### isTemplate()

> `static` **isTemplate**(`templateOpt`): `any`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:48](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/prompt-template.ts#L48)

#### Parameters

##### templateOpt

[`PromptTemplateOptions`](../interfaces/PromptTemplateOptions.md)

#### Returns

`any`

***

### register()

> `static` **register**(...`args`): `boolean`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:137

register the aClass to the factory

#### Parameters

##### args

...`any`[]

#### Returns

`boolean`

return true if successful.

#### Inherited from

`BaseFactory.register`

***

### registeredClass()

> `static` **registeredClass**(`aName`): `false` \| *typeof* `BaseFactory`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:151

Check the name, alias or itself whether registered.

#### Parameters

##### aName

the class name

`undefined` | `string`

#### Returns

`false` \| *typeof* `BaseFactory`

the registered class if registered, otherwise returns false

#### Inherited from

`BaseFactory.registeredClass`

***

### removeAlias()

> `static` **removeAlias**(...`aliases`): `void`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:167

remove specified aliases

#### Parameters

##### aliases

...`string`[]

the aliases to remove

#### Returns

`void`

#### Inherited from

`BaseFactory.removeAlias`

***

### setAlias()

> `static` **setAlias**(`aClass`, `alias`): `void`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:189

set alias to a class

#### Parameters

##### aClass

the class to set alias

`undefined` | `string` | *typeof* `BaseFactory`

##### alias

`string`

#### Returns

`void`

#### Inherited from

`BaseFactory.setAlias`

***

### setAliases()

> `static` **setAliases**(`aClass`, ...`aAliases`): `void`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:183

set aliases to a class

#### Parameters

##### aClass

the class to set aliases

`undefined` | `string` | *typeof* `BaseFactory`

##### aAliases

...`any`[]

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

***

### setDisplayName()

> `static` **setDisplayName**(`aClass`, `aDisplayName`): `void`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:212

Set the display name to the aClass

#### Parameters

##### aClass

the class, name or itself, means itself if no aClass

`undefined` | `string` | `Function`

##### aDisplayName

the display name to set

`string` | \{ `displayName`: `string`; \}

#### Returns

`void`

#### Inherited from

`BaseFactory.setDisplayName`

***

### unregister()

> `static` **unregister**(`aName`): `boolean`

Defined in: node\_modules/.pnpm/custom-factory@2.3.0/node\_modules/custom-factory/lib/base-factory.d.ts:157

unregister this class in the factory

#### Parameters

##### aName

the registered name or class, no name means unregister itself.

`undefined` | `string` | `Function`

#### Returns

`boolean`

true means successful

#### Inherited from

`BaseFactory.unregister`
