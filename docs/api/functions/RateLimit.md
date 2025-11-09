[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / RateLimit

# Function: RateLimit()

> **RateLimit**(`rps`, `__namedParameters?`): () => `Promise`\<`void`\>

Defined in: @isdk/util/dist/index.d.ts:872

Creates a rate limiter function that blocks with a promise whenever the rate limit is hit and resolves the promise once the call rate is within the limit set by rps. The second argument is optional.

## Parameters

### rps

`number`

### \_\_namedParameters?

#### timeUnit?

`number`

#### uniformDistribution?

`boolean`

## Returns

> (): `Promise`\<`void`\>

### Returns

`Promise`\<`void`\>
