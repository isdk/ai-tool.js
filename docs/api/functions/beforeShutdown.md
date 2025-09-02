[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / beforeShutdown

# Function: beforeShutdown()

> **beforeShutdown**(`listener`): `undefined` \| [`BeforeShutdownListener`](../type-aliases/BeforeShutdownListener.md)

Defined in: [ai-tools/packages/ai-tool/src/utils/node/before-shutdown.ts:95](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/node/before-shutdown.ts#L95)

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
