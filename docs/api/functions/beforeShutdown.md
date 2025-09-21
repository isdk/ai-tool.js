[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / beforeShutdown

# Function: beforeShutdown()

> **beforeShutdown**(`listener`): `undefined` \| [`BeforeShutdownListener`](../type-aliases/BeforeShutdownListener.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/node/before-shutdown.ts:95](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/node/before-shutdown.ts#L95)

Registers a new shutdown listener to be invoked before exiting
the main process. Listener handlers are guaranteed to be called in the order
they were registered.

## Parameters

### listener

[`BeforeShutdownListener`](../type-aliases/BeforeShutdownListener.md)

The shutdown listener to register.

## Returns

`undefined` \| [`BeforeShutdownListener`](../type-aliases/BeforeShutdownListener.md)

Echoes back the supplied `listener`.
