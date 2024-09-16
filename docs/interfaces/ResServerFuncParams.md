[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / ResServerFuncParams

# Interface: ResServerFuncParams

## Hierarchy

- `RpcMethodsServerFuncParams`

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

RpcMethodsServerFuncParams.\_req

#### Defined in

[packages/ai-tool/src/server-tools.ts:9](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/server-tools.ts#L9)

___

### \_res

• `Optional` **\_res**: `ServerResponse`\<`IncomingMessage`\>

#### Inherited from

RpcMethodsServerFuncParams.\_res

#### Defined in

[packages/ai-tool/src/server-tools.ts:10](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/server-tools.ts#L10)

___

### act

• `Optional` **act**: `string`

#### Inherited from

RpcMethodsServerFuncParams.act

#### Defined in

[packages/ai-tool/src/rpc-methods-server-tool.ts:7](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/rpc-methods-server-tool.ts#L7)

___

### id

• `Optional` **id**: `string` \| `number`

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:6](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/res-server-tools.ts#L6)

___

### val

• `Optional` **val**: `any`

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:8](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/res-server-tools.ts#L8)
