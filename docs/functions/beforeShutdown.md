[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / beforeShutdown

# Function: beforeShutdown()

> **beforeShutdown**(`listener`): `undefined` \| [`BeforeShutdownListener`](../type-aliases/BeforeShutdownListener.md)

Defined in: [packages/ai-tool/src/utils/node/before-shutdown.ts:95](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/node/before-shutdown.ts#L95)

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
