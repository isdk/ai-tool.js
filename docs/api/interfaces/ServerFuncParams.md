[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ServerFuncParams

# Interface: ServerFuncParams

Defined in: [@isdk/ai-tools/packages/ai-tool/src/server-tools.ts:10](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/server-tools.ts#L10)

Defines the structure for parameters passed to a `ServerTools` function.
By convention, it includes optional `_req` and `_res` properties for direct
access to the underlying transport's request and response objects (e.g., from Node.js http).

## Extended by

- [`EventServerFuncParams`](EventServerFuncParams.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### \_req?

> `optional` **\_req**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/server-tools.ts:15](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/server-tools.ts#L15)

The underlying request object from the transport layer (e.g., `IncomingMessage`).

***

### \_res?

> `optional` **\_res**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/server-tools.ts:20](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/server-tools.ts#L20)

The underlying response or reply object from the transport layer (e.g., `ServerResponse`).
