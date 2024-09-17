[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / ConfigFile

# Class: ConfigFile

## Constructors

### new ConfigFile()

> **new ConfigFile**(`aOptions`?): [`ConfigFile`](ConfigFile.md)

#### Parameters

• **aOptions?**: `IConfigOptions`

#### Returns

[`ConfigFile`](ConfigFile.md)

#### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:42

### new ConfigFile()

> **new ConfigFile**(`aPath`, `aOptions`?): [`ConfigFile`](ConfigFile.md)

#### Parameters

• **aPath**: `string`

• **aOptions?**: `IConfigOptions`

#### Returns

[`ConfigFile`](ConfigFile.md)

#### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:43

## Properties

### configurators

> **configurators**: `IConfigurator`

#### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:37

***

### fs

> **fs**: `IFileSystem`

#### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:38

***

### path

> **path**: `any`

#### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:39

***

### readFile

> **readFile**: `any`

#### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:40

## Methods

### load()

#### load(aPath, done)

> **load**(`aPath`, `done`): `void`

##### Parameters

• **aPath**: `string`

• **done**: `ConfigCallBackFn`

##### Returns

`void`

##### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:44

#### load(done)

> **load**(`done`): `void`

##### Parameters

• **done**: `ConfigCallBackFn`

##### Returns

`void`

##### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:45

#### load(aPath, aOptions, done)

> **load**(`aPath`, `aOptions`, `done`): `void`

##### Parameters

• **aPath**: `string`

• **aOptions**: `IConfigOptions`

• **done**: `ConfigCallBackFn`

##### Returns

`void`

##### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:46

#### load(aPath, aOptions)

> **load**(`aPath`, `aOptions`?): `Promise`\<`any`\>

##### Parameters

• **aPath**: `string`

• **aOptions?**: `IConfigOptions`

##### Returns

`Promise`\<`any`\>

##### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:47

#### load(aOptions)

> **load**(`aOptions`?): `Promise`\<`any`\>

##### Parameters

• **aOptions?**: `IConfigOptions`

##### Returns

`Promise`\<`any`\>

##### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:48

***

### loadSync()

#### loadSync(aPath, aOptions)

> **loadSync**(`aPath`, `aOptions`?): `any`

##### Parameters

• **aPath**: `string`

• **aOptions?**: `IConfigOptions`

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:49

#### loadSync(aOptions)

> **loadSync**(`aOptions`?): `any`

##### Parameters

• **aOptions?**: `IConfigOptions`

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:50

***

### load()

#### load(aPath, aOptions)

> `static` **load**(`aPath`, `aOptions`?): `Promise`\<`any`\>

##### Parameters

• **aPath**: `string`

• **aOptions?**: `IConfigOptions`

##### Returns

`Promise`\<`any`\>

##### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:32

#### load(aPath, aOptions, done)

> `static` **load**(`aPath`, `aOptions`, `done`): `void` \| `Promise`\<`any`\>

##### Parameters

• **aPath**: `string`

• **aOptions**: `IConfigOptions`

• **done**: `true` \| `ConfigCallBackFn`

##### Returns

`void` \| `Promise`\<`any`\>

##### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:33

#### load(aPath, done)

> `static` **load**(`aPath`, `done`): `void` \| `Promise`\<`any`\>

##### Parameters

• **aPath**: `string`

• **done**: `true` \| `ConfigCallBackFn`

##### Returns

`void` \| `Promise`\<`any`\>

##### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:34

***

### loadSync()

> `static` **loadSync**(`aPath`, `aOptions`?): `any`

#### Parameters

• **aPath**: `string`

• **aOptions?**: `IConfigOptions`

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:35

***

### register()

> `static` **register**(`aExts`, `aProcess`, `aConfigurators`?): `any`

#### Parameters

• **aExts**: `string` \| `string`[]

• **aProcess**: `ConfigAsyncProcessFn`

• **aConfigurators?**: `IConfigurator`

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:29

***

### setFileSystem()

> `static` **setFileSystem**(`aFileSystem`): `any`

#### Parameters

• **aFileSystem**: `IFileSystem`

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/load-config-file@2.0.0/node\_modules/load-config-file/lib/index.d.ts:30
