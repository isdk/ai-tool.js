[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / Semaphore

# Class: Semaphore

Defined in: @isdk/util/dist/index.d.ts:903

计数信号量（Semaphore）实现。
扩展自二进制信号量，允许指定最大并发数（`maxConcurrency`）。
支持可选的就绪检查（`isReadyFn`）。

示例用法：

```typescript
const semaphore = new Semaphore(5); // 允许 5 个并发操作

async function fetchData(id) {
  const release = await semaphore.acquire();
  try {
    console.log(`正在获取数据 ${id}, 等待中: ${semaphore.pendingCount}`);
    // ... 异步操作
  } finally {
    release();
  }
}
```

## Extends

- [`BinarySemaphore`](BinarySemaphore.md)

## Constructors

### Constructor

> **new Semaphore**(`maxConcurrency`, `options?`): `Semaphore`

Defined in: @isdk/util/dist/index.d.ts:917

创建一个计数信号量实例。

#### Parameters

##### maxConcurrency

最大并发数，或者包含并发设置的配置对象。

`number` | [`SemaphoreOptions`](../interfaces/SemaphoreOptions.md)

##### options?

[`SemaphoreOptions`](../interfaces/SemaphoreOptions.md)

配置选项。

#### Returns

`Semaphore`

#### Throws

如果未指定有效并发数则抛出错误。

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`constructor`](BinarySemaphore.md#constructor)

## Properties

### \_activeCount

> `protected` **\_activeCount**: `number`

Defined in: @isdk/util/dist/index.d.ts:764

记录当前活跃的（已获取但未释放）操作总数。

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`_activeCount`](BinarySemaphore.md#_activecount)

***

### emitter

> `protected` **emitter**: [`EventEmitter`](EventEmitter.md)

Defined in: @isdk/util/dist/index.d.ts:752

内部事件触发器，用于协调释放和分发逻辑。

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`emitter`](BinarySemaphore.md#emitter)

***

### free

> `protected` **free**: `Deque`\<`any`\>

Defined in: @isdk/util/dist/index.d.ts:907

存储空闲令牌的队列。

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`free`](BinarySemaphore.md#free)

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

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`initTokenFn`](BinarySemaphore.md#inittokenfn)

***

### maxConcurrency

> `readonly` **maxConcurrency**: `number`

Defined in: @isdk/util/dist/index.d.ts:905

最大并发限制。

***

### paused

> `protected` **paused**: `boolean`

Defined in: @isdk/util/dist/index.d.ts:762

记录当前是否处于暂停状态。

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`paused`](BinarySemaphore.md#paused)

***

### pauseFn()?

> `protected` `optional` **pauseFn**: () => `void`

Defined in: @isdk/util/dist/index.d.ts:756

获取积压时的暂停回调。

#### Returns

`void`

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`pauseFn`](BinarySemaphore.md#pausefn)

***

### resumeFn()?

> `protected` `optional` **resumeFn**: () => `void`

Defined in: @isdk/util/dist/index.d.ts:758

恢复处理的回调。

#### Returns

`void`

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`resumeFn`](BinarySemaphore.md#resumefn)

***

### useDefaultTokens

> `protected` **useDefaultTokens**: `boolean`

Defined in: @isdk/util/dist/index.d.ts:754

标记是否使用默认的令牌初始化函数。

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`useDefaultTokens`](BinarySemaphore.md#usedefaulttokens)

***

### waiting

> `readonly` **waiting**: `Deque`\<[`SemaphoreTaskItem`](../interfaces/SemaphoreTaskItem.md) \| `undefined`\>

Defined in: @isdk/util/dist/index.d.ts:748

存储等待获取令牌的任务队列。

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`waiting`](BinarySemaphore.md#waiting)

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

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`activeCount`](BinarySemaphore.md#activecount)

***

### pendingCount

#### Get Signature

> **get** **pendingCount**(): `number`

Defined in: @isdk/util/dist/index.d.ts:880

获取当前在等待队列中的调用方数量。

##### Returns

`number`

等待中的 Promise 数量。

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`pendingCount`](BinarySemaphore.md#pendingcount)

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

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`_dispatchTask`](BinarySemaphore.md#_dispatchtask)

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

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`_newReleaser`](BinarySemaphore.md#_newreleaser)

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

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`abort`](BinarySemaphore.md#abort)

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

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`acquire`](BinarySemaphore.md#acquire)

***

### drain()

> **drain**(): `Promise`\<`any`[]\>

Defined in: @isdk/util/dist/index.d.ts:948

消耗掉所有并发槽位，确保当前没有其他操作正在运行。
常用于在关键操作前清空并发环境。

#### Returns

`Promise`\<`any`[]\>

解析为包含所有令牌数组的 Promise。

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`drain`](BinarySemaphore.md#drain)

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

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`init`](BinarySemaphore.md#init)

***

### initFree()

> **initFree**(`options`): `void`

Defined in: @isdk/util/dist/index.d.ts:922

初始化令牌池，填充至最大并发数。

#### Parameters

##### options

[`SemaphoreOptions`](../interfaces/SemaphoreOptions.md)

配置选项。

#### Returns

`void`

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`initFree`](BinarySemaphore.md#initfree)

***

### lock()

> **lock**(`options?`): `any`

Defined in: @isdk/util/dist/index.d.ts:941

从空闲令牌池中取出一个令牌。

#### Parameters

##### options?

[`BinarySemaphoreAcquireOptions`](../interfaces/BinarySemaphoreAcquireOptions.md)

获取选项。

#### Returns

`any`

如果池中不为空则返回一个令牌，否则返回 undefined。

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`lock`](BinarySemaphore.md#lock)

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

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`onReleased`](BinarySemaphore.md#onreleased)

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

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`release`](BinarySemaphore.md#release)

***

### tryAcquire()

> **tryAcquire**(`options?`): `any`

Defined in: @isdk/util/dist/index.d.ts:930

尝试获取令牌，包含就绪状态检查。
如果定义了 `isReadyFn`，将先调用它。

#### Parameters

##### options?

[`BinarySemaphoreAcquireOptions`](../interfaces/BinarySemaphoreAcquireOptions.md)

获取选项。

#### Returns

`any`

可能返回令牌、Promise（当就绪检查为异步时）或 undefined。

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`tryAcquire`](BinarySemaphore.md#tryacquire)

***

### unlock()

> **unlock**(`token?`): `void`

Defined in: @isdk/util/dist/index.d.ts:935

将令牌归还至空闲令牌池。

#### Parameters

##### token?

`any`

要归还的令牌。

#### Returns

`void`

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`unlock`](BinarySemaphore.md#unlock)
