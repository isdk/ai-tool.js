[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / ServerFuncParams

# Interface: ServerFuncParams

Convention: Always pass _req, _res

## Hierarchy

- **`ServerFuncParams`**

  ↳ [`EventServerFuncParams`](EventServerFuncParams.md)

## Indexable

▪ [name: `string`]: `any`

## Table of contents

### Properties

- [\_req](ServerFuncParams.md#_req)
- [\_res](ServerFuncParams.md#_res)

## Properties

### \_req

• `Optional` **\_req**: `IncomingMessage`

#### Defined in

[packages/ai-tool/src/server-tools.ts:9](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/server-tools.ts#L9)

___

### \_res

• `Optional` **\_res**: `ServerResponse`\<`IncomingMessage`\>

#### Defined in

[packages/ai-tool/src/server-tools.ts:10](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/server-tools.ts#L10)
