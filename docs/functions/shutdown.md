[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / shutdown

# Function: shutdown()

> **shutdown**(`signalOrEvent`, `exitCode`): `Promise`\<`undefined`\>

Defined in: [packages/ai-tool/src/utils/node/before-shutdown.ts:64](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/node/before-shutdown.ts#L64)

Main process shutdown handler. Will invoke every previously registered async shutdown listener
in the queue and exit with a code of `0`. Any `Promise` rejections from any listener will
be logged out as a warning, but won't prevent other callbacks from executing.

## Parameters

### signalOrEvent

The exit signal or event name received on the process, defaults to shutdown.

`string` | `number`

### exitCode

The optional exit code, defaults to 0.

`null` | `string` | `number`

## Returns

`Promise`\<`undefined`\>
