[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SSEClient

# Type Alias: SSEClient

> **SSEClient** = `object`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:37

Represents a client connected to the SSE channel.

## Properties

### clientId

> **clientId**: `string`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:47

A unique identifier for the client.

***

### events?

> `optional` **events**: `Events`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:43

An array of event names or patterns that the client is subscribed to.

***

### req

> **req**: `IncomingMessage`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:39

The incoming HTTP request from the client.

***

### res

> **res**: `ServerResponse`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:41

The server response object used to send events to the client.
