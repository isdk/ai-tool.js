[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / BinarySemaphore

# Class: BinarySemaphore

Defined in: @isdk/util/dist/index.d.ts:746

二进制信号量（Binary Semaphore）实现。
二进制信号量在任何时刻只允许一个调用方获取成功（类似于互斥锁）。
它提供了获取（acquire）、释放（release）以及管理等待队列的机制，并支持背压控制（通过 pauseFn/resumeFn）。

示例用法：

```typescript
const semaphore = new BinarySemaphore();

async function performTask(data) {
  const release = await semaphore.acquire();
  try {
    console.log('正在处理:', data);
    // 执行异步操作...
  } finally {
    release(); // 或者使用 semaphore.release();
  }
}
```

## Extended by

- [`Semaphore`](Semaphore.md)

## Constructors

### Constructor

> **new BinarySemaphore**(`options?`): `BinarySemaphore`

Defined in: @isdk/util/dist/index.d.ts:771

创建一个二进制信号量实例。

#### Parameters

##### options?

[`BinarySemaphoreOptions`](../interfaces/BinarySemaphoreOptions.md)

配置选项。

#### Returns

`BinarySemaphore`

#### Throws

如果只提供了 pauseFn 而未提供 resumeFn，或者反之，则抛出错误。

## Properties

### \_activeCount

> `protected` **\_activeCount**: `number`

Defined in: @isdk/util/dist/index.d.ts:764

记录当前活跃的（已获取但未释放）操作总数。

***

### emitter

> `protected` **emitter**: [`EventEmitter`](EventEmitter.md)

Defined in: @isdk/util/dist/index.d.ts:752

内部事件触发器，用于协调释放和分发逻辑。

***

### free

> `protected` **free**: `any`

Defined in: @isdk/util/dist/index.d.ts:750

当前空闲的令牌。对于二进制信号量，只能持有一个令牌。

***

### initTokenFn()

> `protected` **initTokenFn**: (`token?`) => `void`

Defined in: @isdk/util/dist/index.d.ts:760

令牌初始化函数。

#### Parameters

##### token?

`any`

#### Returns

`void`

***

### paused

> `protected` **paused**: `boolean`

Defined in: @isdk/util/dist/index.d.ts:762

记录当前是否处于暂停状态。

***

### pauseFn()?

> `protected` `optional` **pauseFn**: () => `void`

Defined in: @isdk/util/dist/index.d.ts:756

获取积压时的暂停回调。

#### Returns

`void`

***

### resumeFn()?

> `protected` `optional` **resumeFn**: () => `void`

Defined in: @isdk/util/dist/index.d.ts:758

恢复处理的回调。

#### Returns

`void`

***

### useDefaultTokens

> `protected` **useDefaultTokens**: `boolean`

Defined in: @isdk/util/dist/index.d.ts:754

标记是否使用默认的令牌初始化函数。

***

### waiting

> `readonly` **waiting**: `Deque`\<[`SemaphoreTaskItem`](../interfaces/SemaphoreTaskItem.md) \| `undefined`\>

Defined in: @isdk/util/dist/index.d.ts:748

存储等待获取令牌的任务队列。

## Accessors

### activeCount

#### Get Signature

> **get** **activeCount**(): `number`

Defined in: @isdk/util/dist/index.d.ts:874

获取所有活跃操作的总数。
包含：
- 正在队列中等待获取信号量的操作（`pendingCount`）。
- 已经成功获取信号量但尚未释放的操作。

##### Returns

`number`

活跃操作的总数。

***

### pendingCount

#### Get Signature

> **get** **pendingCount**(): `number`

Defined in: @isdk/util/dist/index.d.ts:880

获取当前在等待队列中的调用方数量。

##### Returns

`number`

等待中的 Promise 数量。

## Methods

### \_dispatchTask()

> **\_dispatchTask**(`task`, `options?`): `void`

Defined in: @isdk/util/dist/index.d.ts:805

**`Internal`**

将令牌分发给等待的任务。

#### Parameters

##### task

[`SemaphoreTaskItem`](../interfaces/SemaphoreTaskItem.md)

等待中的任务项。

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

释放时传递的选项。

#### Returns

`void`

***

### \_newReleaser()

> **\_newReleaser**(`options?`): `BinarySemaphoreReleaserFunc`

Defined in: @isdk/util/dist/index.d.ts:797

**`Internal`**

创建一个新的释放函数。
确保释放逻辑只被执行一次，并携带相关的释放选项。

#### Parameters

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

释放选项。

#### Returns

`BinarySemaphoreReleaserFunc`

返回一个可调用的释放函数。

***

### abort()

> **abort**(`reason?`): `void`

Defined in: @isdk/util/dist/index.d.ts:865

中止所有正在等待的任务。
所有在等待队列中的 Promise 将被拒绝并抛出 `AbortError`。

#### Parameters

##### reason?

`any`

中止的原因。

#### Returns

`void`

***

### acquire()

> **acquire**(`options?`): `Promise`\<`BinarySemaphoreReleaserFunc`\>

Defined in: @isdk/util/dist/index.d.ts:842

获取信号量。
如果信号量当前可用，将立即解析。否则，调用方将被加入等待队列，
直到有令牌被释放。

逻辑流程：
1. 增加活跃计数。
2. 尝试通过 `tryAcquire` 立即获取令牌。
3. 如果 `tryAcquire` 返回的是异步结果（通过 `isAsync` 判断），则等待其解析。
4. 如果最终未获得令牌，则将任务推入 `waiting` 队列，并处理可选的 `AbortSignal`。
5. 如果此时是队列中的第一个任务且定义了 `pauseFn`，则触发暂停回调。

#### Parameters

##### options?

[`BinarySemaphoreAcquireOptions`](../interfaces/BinarySemaphoreAcquireOptions.md)

获取选项，可包含 `signal` 用于取消。

#### Returns

`Promise`\<`BinarySemaphoreReleaserFunc`\>

解析为释放函数（`BinarySemaphoreReleaserFunc`）的 Promise。

***

### drain()

> **drain**(): `Promise`\<`any`[]\>

Defined in: @isdk/util/dist/index.d.ts:858

等待所有当前活跃的操作完成。
它通过尝试获取一次信号量来确保之前的操作已经释放。
在进程终止前使用此方法以确保没有挂起的异步任务。

#### Returns

`Promise`\<`any`[]\>

解析为包含已获取令牌的数组的 Promise。

***

### init()

> **init**(`options`): `void`

Defined in: @isdk/util/dist/index.d.ts:788

初始化事件监听。在构造函数中被调用。

#### Parameters

##### options

[`BinarySemaphoreOptions`](../interfaces/BinarySemaphoreOptions.md)

配置选项。

#### Returns

`void`

***

### initFree()

> **initFree**(`options?`): `void`

Defined in: @isdk/util/dist/index.d.ts:776

初始化空闲令牌。在构造函数中被调用。

#### Parameters

##### options?

[`BinarySemaphoreOptions`](../interfaces/BinarySemaphoreOptions.md)

配置选项。

#### Returns

`void`

***

### lock()

> **lock**(`options?`): `any`

Defined in: @isdk/util/dist/index.d.ts:812

锁定信号量。尝试从空闲池中提取令牌。

#### Parameters

##### options?

[`BinarySemaphoreAcquireOptions`](../interfaces/BinarySemaphoreAcquireOptions.md)

获取选项。

#### Returns

`any`

如果有可用令牌则返回该令牌，否则返回 undefined。

***

### onReleased()

> **onReleased**(`options?`): `void`

Defined in: @isdk/util/dist/index.d.ts:783

当信号量被释放时执行的内部处理逻辑。
检查等待队列，如果有任务则分发令牌；否则将令牌归还至空闲池，并视情况调用 `resumeFn`。

#### Parameters

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

释放选项，可能包含令牌。

#### Returns

`void`

***

### release()

> **release**(`options?`): `void`

Defined in: @isdk/util/dist/index.d.ts:850

释放信号量，增加可用执行槽位。
如果等待队列中有任务，将触发下一个任务的执行。
此方法会减少 `activeCount` 并发出 'release' 事件。

#### Parameters

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

释放选项。

#### Returns

`void`

***

### tryAcquire()

> **tryAcquire**(`options?`): `any`

Defined in: @isdk/util/dist/index.d.ts:826

尝试立即获取令牌。
如果信号量当前不可用，则立即返回 `undefined` 而不进入等待队列。

#### Parameters

##### options?

[`BinarySemaphoreAcquireOptions`](../interfaces/BinarySemaphoreAcquireOptions.md)

获取选项。

#### Returns

`any`

如果获取成功则返回令牌，否则返回 `undefined`。

***

### unlock()

> **unlock**(`token?`): `void`

Defined in: @isdk/util/dist/index.d.ts:818

解锁信号量。将令牌归还至空闲池。

#### Parameters

##### token?

`any`

要归还的令牌。如果未提供，则使用初始化函数生成。

#### Returns

`void`
