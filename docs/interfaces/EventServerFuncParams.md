[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / EventServerFuncParams

# Interface: EventServerFuncParams

Convention: Always pass _req, _res

## Hierarchy

- [`ServerFuncParams`](ServerFuncParams.md)

  ↳ **`EventServerFuncParams`**

## Table of contents

### Properties

- [\_req](EventServerFuncParams.md#_req)
- [\_res](EventServerFuncParams.md#_res)
- [act](EventServerFuncParams.md#act)
- [data](EventServerFuncParams.md#data)
- [event](EventServerFuncParams.md#event)

## Properties

### \_req

• `Optional` **\_req**: `IncomingMessage`

#### Inherited from

[ServerFuncParams](ServerFuncParams.md).[_req](ServerFuncParams.md#_req)

#### Defined in

[packages/ai-tool/src/server-tools.ts:9](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/server-tools.ts#L9)

___

### \_res

• `Optional` **\_res**: `ServerResponse`\<`IncomingMessage`\>

#### Inherited from

[ServerFuncParams](ServerFuncParams.md).[_res](ServerFuncParams.md#_res)

#### Defined in

[packages/ai-tool/src/server-tools.ts:10](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/server-tools.ts#L10)

___

### act

• `Optional` **act**: ``"sub"`` \| ``"pub"`` \| ``"unsub"``

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:15](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L15)

___

### data

• `Optional` **data**: `any`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:14](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L14)

___

### event

• `Optional` **event**: `string` \| `string`[]

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:13](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L13)
