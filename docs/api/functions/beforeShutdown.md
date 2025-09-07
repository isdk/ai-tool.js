[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / beforeShutdown

# Function: beforeShutdown()

> **beforeShutdown**(`listener`): `undefined` \| [`BeforeShutdownListener`](../type-aliases/BeforeShutdownListener.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/node/before-shutdown.ts:95](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/node/before-shutdown.ts#L95)

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
