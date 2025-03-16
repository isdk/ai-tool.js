[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ConfigFile

# Class: ConfigFile

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:28

## Constructors

### new ConfigFile()

> **new ConfigFile**(`aOptions`?): [`ConfigFile`](ConfigFile.md)

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:42

#### Parameters

##### aOptions?

`IConfigOptions`

#### Returns

[`ConfigFile`](ConfigFile.md)

### new ConfigFile()

> **new ConfigFile**(`aPath`, `aOptions`?): [`ConfigFile`](ConfigFile.md)

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:43

#### Parameters

##### aPath

`string`

##### aOptions?

`IConfigOptions`

#### Returns

[`ConfigFile`](ConfigFile.md)

## Properties

### configurators

> **configurators**: `IConfigurator`

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:37

***

### fs

> **fs**: `IFileSystem`

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:38

***

### path

> **path**: `any`

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:39

***

### readFile

> **readFile**: `any`

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:40

## Methods

### load()

#### Call Signature

> **load**(`aPath`, `done`): `void`

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:44

##### Parameters

###### aPath

`string`

###### done

`ConfigCallBackFn`

##### Returns

`void`

#### Call Signature

> **load**(`done`): `void`

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:45

##### Parameters

###### done

`ConfigCallBackFn`

##### Returns

`void`

#### Call Signature

> **load**(`aPath`, `aOptions`, `done`): `void`

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:46

##### Parameters

###### aPath

`string`

###### aOptions

`IConfigOptions`

###### done

`ConfigCallBackFn`

##### Returns

`void`

#### Call Signature

> **load**(`aPath`, `aOptions`?): `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:47

##### Parameters

###### aPath

`string`

###### aOptions?

`IConfigOptions`

##### Returns

`Promise`\<`any`\>

#### Call Signature

> **load**(`aOptions`?): `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:48

##### Parameters

###### aOptions?

`IConfigOptions`

##### Returns

`Promise`\<`any`\>

***

### loadSync()

#### Call Signature

> **loadSync**(`aPath`, `aOptions`?): `any`

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:49

##### Parameters

###### aPath

`string`

###### aOptions?

`IConfigOptions`

##### Returns

`any`

#### Call Signature

> **loadSync**(`aOptions`?): `any`

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:50

##### Parameters

###### aOptions?

`IConfigOptions`

##### Returns

`any`

***

### load()

#### Call Signature

> `static` **load**(`aPath`, `aOptions`?): `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:32

##### Parameters

###### aPath

`string`

###### aOptions?

`IConfigOptions`

##### Returns

`Promise`\<`any`\>

#### Call Signature

> `static` **load**(`aPath`, `aOptions`, `done`): `void` \| `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:33

##### Parameters

###### aPath

`string`

###### aOptions

`IConfigOptions`

###### done

`true` | `ConfigCallBackFn`

##### Returns

`void` \| `Promise`\<`any`\>

#### Call Signature

> `static` **load**(`aPath`, `done`): `void` \| `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:34

##### Parameters

###### aPath

`string`

###### done

`true` | `ConfigCallBackFn`

##### Returns

`void` \| `Promise`\<`any`\>

***

### loadSync()

> `static` **loadSync**(`aPath`, `aOptions`?): `any`

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:35

#### Parameters

##### aPath

`string`

##### aOptions?

`IConfigOptions`

#### Returns

`any`

***

### register()

> `static` **register**(`aExts`, `aProcess`, `aConfigurators`?): `any`

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:29

#### Parameters

##### aExts

`string` | `string`[]

##### aProcess

`ConfigAsyncProcessFn`

##### aConfigurators?

`IConfigurator`

#### Returns

`any`

***

### setFileSystem()

> `static` **setFileSystem**(`aFileSystem`): `any`

Defined in: node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:30

#### Parameters

##### aFileSystem

`IFileSystem`

#### Returns

`any`
