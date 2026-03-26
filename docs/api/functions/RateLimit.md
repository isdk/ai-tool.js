[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / RateLimit

# Function: RateLimit()

> **RateLimit**(`rps`, `options?`): () => `Promise`\<`void`\>

Defined in: @isdk/util/dist/index.d.ts:976

创建一个速率限制器函数（Rate Limiter）。
当调用频率超过设定的 `rps`（每秒请求数）时，该函数会通过 Promise 阻塞调用方，
并在调用率回到限制范围内时解析。

## Parameters

### rps

`number`

限制的速率。默认单位时间内允许的请求数。

### options?

配置项。

#### timeUnit?

`number`

时间窗口大小（毫秒）。默认为 1000ms。

#### uniformDistribution?

`boolean`

是否强制离散均匀分布。
   - 若为 `false`（默认）：允许在时间窗口开始时立即耗尽所有配额，然后暂停直到窗口结束。
   - 若为 `true`：将配额均匀分配到时间窗口内（例如 5 rps 会每 200ms 允许一次请求）。
     在流量持续且快速的场景下（如读取文件）建议开启，以避免瞬时突发流量。

## Returns

返回一个异步限流函数，调用该函数即可实现限流。

示例：
```ts
const lim = RateLimit(5); // 限制为 5 次/秒

async function processItems(items) {
  for (const item of items) {
    await lim(); // 可能会在这里阻塞
    await handle(item);
  }
}
```

> (): `Promise`\<`void`\>

### Returns

`Promise`\<`void`\>
