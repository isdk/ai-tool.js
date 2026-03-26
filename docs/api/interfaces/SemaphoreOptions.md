[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SemaphoreOptions

# Interface: SemaphoreOptions

Defined in: @isdk/util/dist/index.d.ts:696

通用信号量的配置选项，继承自二进制信号量选项。

## Extends

- [`BinarySemaphoreOptions`](BinarySemaphoreOptions.md)

## Properties

### capacity?

> `optional` **capacity**: `number`

Defined in: @isdk/util/dist/index.d.ts:654

内部等待队列的初始预分配容量。
适用于高性能场景，开发者可以根据并发规模预估此值以减少动态扩容。

#### Inherited from

[`BinarySemaphoreOptions`](BinarySemaphoreOptions.md).[`capacity`](BinarySemaphoreOptions.md#capacity)

***

### initFn()?

> `optional` **initFn**: () => `any`

Defined in: @isdk/util/dist/index.d.ts:637

用于初始化令牌的函数。
当信号量释放且没有等待任务时，如果未提供令牌，将调用此函数生成新令牌。
默认为 `() => '1'`。

#### Returns

`any`

#### Inherited from

[`BinarySemaphoreOptions`](BinarySemaphoreOptions.md).[`initFn`](BinarySemaphoreOptions.md#initfn)

***

### isReadyFn?

> `optional` **isReadyFn**: [`SemaphoreIsReadyFuncType`](../type-aliases/SemaphoreIsReadyFuncType.md)

Defined in: @isdk/util/dist/index.d.ts:706

可选的就绪检查函数。
在尝试获取令牌前调用，如果返回 false（或解析为 false 的 Promise），则无法立即获取。

***

### maxConcurrency?

> `optional` **maxConcurrency**: `number`

Defined in: @isdk/util/dist/index.d.ts:701

最大并发数。
指定允许同时获取信号量的最大调用方数量。

***

### pauseFn()?

> `optional` **pauseFn**: () => `void`

Defined in: @isdk/util/dist/index.d.ts:643

可选的暂停函数。
当等待队列开始积压（第一个任务进入队列）时调用，用于通知上游停止发送数据，
以避免产生过多的等待 Promise 导致内存溢出。

#### Returns

`void`

#### Inherited from

[`BinarySemaphoreOptions`](BinarySemaphoreOptions.md).[`pauseFn`](BinarySemaphoreOptions.md#pausefn)

***

### resumeFn()?

> `optional` **resumeFn**: () => `void`

Defined in: @isdk/util/dist/index.d.ts:649

可选的恢复函数。
当信号量有空闲槽位且之前已调用过 `pauseFn` 时调用。
如果定义了 `pauseFn`，则必须同时定义此函数。

#### Returns

`void`

#### Inherited from

[`BinarySemaphoreOptions`](BinarySemaphoreOptions.md).[`resumeFn`](BinarySemaphoreOptions.md#resumefn)
