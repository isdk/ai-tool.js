[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / RateLimit

# Function: RateLimit()

> **RateLimit**(`rps`, `__namedParameters`): () => `Promise`\<`void`\>

Defined in: [packages/ai-tool/src/utils/async-semaphore.ts:476](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/async-semaphore.ts#L476)

Creates a rate limiter function that blocks with a promise whenever the rate limit is hit and resolves the promise once the call rate is within the limit set by rps. The second argument is optional.

## Parameters

### rps

`number`

### \_\_namedParameters

#### timeUnit?

`number` = `1000`

#### uniformDistribution?

`boolean` = `false`

## Returns

`Function`

### Returns

`Promise`\<`void`\>
