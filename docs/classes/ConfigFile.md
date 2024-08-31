[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / ConfigFile

# Class: ConfigFile

## Table of contents

### Constructors

- [constructor](ConfigFile.md#constructor)

### Properties

- [configurators](ConfigFile.md#configurators)
- [fs](ConfigFile.md#fs)
- [path](ConfigFile.md#path)
- [readFile](ConfigFile.md#readfile)

### Methods

- [load](ConfigFile.md#load)
- [loadSync](ConfigFile.md#loadsync)
- [load](ConfigFile.md#load-1)
- [loadSync](ConfigFile.md#loadsync-1)
- [register](ConfigFile.md#register)
- [setFileSystem](ConfigFile.md#setfilesystem)

## Constructors

### constructor

• **new ConfigFile**(`aOptions?`): [`ConfigFile`](ConfigFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | `IConfigOptions` |

#### Returns

[`ConfigFile`](ConfigFile.md)

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:42

• **new ConfigFile**(`aPath`, `aOptions?`): [`ConfigFile`](ConfigFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | `IConfigOptions` |

#### Returns

[`ConfigFile`](ConfigFile.md)

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:43

## Properties

### configurators

• **configurators**: `IConfigurator`

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:37

___

### fs

• **fs**: `IFileSystem`

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:38

___

### path

• **path**: `any`

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:39

___

### readFile

• **readFile**: `any`

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:40

## Methods

### load

▸ **load**(`aPath`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `done` | `ConfigCallBackFn` |

#### Returns

`void`

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:44

▸ **load**(`done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `done` | `ConfigCallBackFn` |

#### Returns

`void`

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:45

▸ **load**(`aPath`, `aOptions`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | `IConfigOptions` |
| `done` | `ConfigCallBackFn` |

#### Returns

`void`

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:46

▸ **load**(`aPath`, `aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | `IConfigOptions` |

#### Returns

`Promise`\<`any`\>

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:47

▸ **load**(`aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | `IConfigOptions` |

#### Returns

`Promise`\<`any`\>

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:48

___

### loadSync

▸ **loadSync**(`aPath`, `aOptions?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | `IConfigOptions` |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:49

▸ **loadSync**(`aOptions?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | `IConfigOptions` |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:50

___

### load

▸ **load**(`aPath`, `aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | `IConfigOptions` |

#### Returns

`Promise`\<`any`\>

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:32

▸ **load**(`aPath`, `aOptions`, `done`): `void` \| `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | `IConfigOptions` |
| `done` | ``true`` \| `ConfigCallBackFn` |

#### Returns

`void` \| `Promise`\<`any`\>

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:33

▸ **load**(`aPath`, `done`): `void` \| `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `done` | ``true`` \| `ConfigCallBackFn` |

#### Returns

`void` \| `Promise`\<`any`\>

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:34

___

### loadSync

▸ **loadSync**(`aPath`, `aOptions?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | `IConfigOptions` |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:35

___

### register

▸ **register**(`aExts`, `aProcess`, `aConfigurators?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aExts` | `string` \| `string`[] |
| `aProcess` | `ConfigAsyncProcessFn` |
| `aConfigurators?` | `IConfigurator` |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:29

___

### setFileSystem

▸ **setFileSystem**(`aFileSystem`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aFileSystem` | `IFileSystem` |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/load-config-file@2.0.0/node_modules/load-config-file/lib/index.d.ts:30
