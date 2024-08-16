[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / ResServerFuncParams

# Interface: ResServerFuncParams

Convention: Always pass _req, _res

## Hierarchy

- [`ServerFuncParams`](ServerFuncParams.md)

  ↳ **`ResServerFuncParams`**

## Table of contents

### Properties

- [\_req](ResServerFuncParams.md#_req)
- [\_res](ResServerFuncParams.md#_res)
- [act](ResServerFuncParams.md#act)
- [id](ResServerFuncParams.md#id)
- [val](ResServerFuncParams.md#val)

## Properties

### \_req

• `Optional` **\_req**: `IncomingMessage`

#### Inherited from

[ServerFuncParams](ServerFuncParams.md).[_req](ServerFuncParams.md#_req)

#### Defined in

[packages/ai-tool/src/server-tools.ts:9](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/server-tools.ts#L9)

___

### \_res

• `Optional` **\_res**: `ServerResponse`\<`IncomingMessage`\>

#### Inherited from

[ServerFuncParams](ServerFuncParams.md).[_res](ServerFuncParams.md#_res)

#### Defined in

[packages/ai-tool/src/server-tools.ts:10](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/server-tools.ts#L10)

___

### act

• `Optional` **act**: `string`

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:11](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/res-server-tools.ts#L11)

___

### id

• `Optional` **id**: `string` \| `number`

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:8](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/res-server-tools.ts#L8)

___

### val

• `Optional` **val**: `any`

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:10](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/res-server-tools.ts#L10)
