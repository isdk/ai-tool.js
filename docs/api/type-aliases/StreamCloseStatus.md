[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / StreamCloseStatus

# Type Alias: StreamCloseStatus

> **StreamCloseStatus** = `"final"` \| `"error"` \| `"cancel"`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:12

Status indicating how the stream was closed.
- 'final': Stream completed successfully (flush/close).
- 'error': Stream closed due to an internal or upstream error.
- 'cancel': Stream was explicitly aborted by the reader/consumer.
