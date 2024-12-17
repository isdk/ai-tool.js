[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / RateLimit

# Function: RateLimit()

> **RateLimit**(`rps`, `__namedParameters`): () => `Promise`\<`void`\>

Creates a rate limiter function that blocks with a promise whenever the rate limit is hit and resolves the promise once the call rate is within the limit set by rps. The second argument is optional.

## Parameters

• **rps**: `number`

• **\_\_namedParameters** = `{}`

• **\_\_namedParameters.timeUnit?**: `number` = `1000`

• **\_\_namedParameters.uniformDistribution?**: `boolean` = `false`

## Returns

`Function`

### Returns

`Promise`\<`void`\>

## Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:347](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/async-semaphore.ts#L347)
