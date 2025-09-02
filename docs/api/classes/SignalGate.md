[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SignalGate

# Class: SignalGate\<T\>

Defined in: [ai-tools/packages/ai-tool/src/utils/async-signal-gate.ts:20](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-signal-gate.ts#L20)

An asynchronous signal gate that blocks operations until a signal is emitted.
This class allows multiple awaiters to wait for a signal and resolves all pending promises with the emitted value.
The gate can be reset to reuse for subsequent signals.

## Example

```typescript
// Default type is void, can call signal() without parameters
const gate = new SignalGate();
gate.signal(); // No parameters required

// Example with explicit type
const valueGate = new SignalGate<number>();
valueGate.signal(42); // Must provide a number value
```

## Type Parameters

• **T** = `void`

## Constructors

### new SignalGate()

> **new SignalGate**\<`T`\>(): [`SignalGate`](SignalGate.md)\<`T`\>

#### Returns

[`SignalGate`](SignalGate.md)\<`T`\>

## Properties

### \_isSignaled

> `protected` **\_isSignaled**: `boolean` = `false`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-signal-gate.ts:21](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-signal-gate.ts#L21)

***

### \_signalValue

> `protected` **\_signalValue**: `undefined` \| `T`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-signal-gate.ts:22](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-signal-gate.ts#L22)

***

### waitQueue

> `protected` **waitQueue**: `object`[] = `[]`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-signal-gate.ts:23](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-signal-gate.ts#L23)

#### reject()

> **reject**: (`error`) => `void`

##### Parameters

###### error

`any`

##### Returns

`void`

#### resolve()

> **resolve**: (`value`) => `void`

##### Parameters

###### value

`T`

##### Returns

`void`

## Accessors

### signaled

#### Get Signature

> **get** **signaled**(): `boolean`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-signal-gate.ts:28](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-signal-gate.ts#L28)

##### Returns

`boolean`

## Methods

### abort()

> **abort**(`reason`?): `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-signal-gate.ts:65](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-signal-gate.ts#L65)

Aborts all pending waits, rejecting their promises with an error.
This does **not** reset the signal state (the gate remains signaled or unsignaled).

#### Parameters

##### reason?

`any`

The reason for aborting the waits.

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-signal-gate.ts:53](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-signal-gate.ts#L53)

Resets the gate to its initial state, allowing a new signal to be emitted.

#### Returns

`void`

***

### signal()

> **signal**(`value`?): `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-signal-gate.ts:38](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-signal-gate.ts#L38)

Emits the signal with an optional value, resolving all pending [wait](../functions/wait.md) promises.
Subsequent calls have no effect until [reset](SignalGate.md#reset) is called.

#### Parameters

##### value?

`T`

The value to emit with the signal (only required if T is not void).

#### Returns

`void`

***

### wait()

> **wait**(): `Promise`\<`T`\>

Defined in: [ai-tools/packages/ai-tool/src/utils/async-signal-gate.ts:83](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-signal-gate.ts#L83)

Returns a promise that resolves with the emitted signal value.
If called after the signal has been emitted, resolves immediately with the stored value.

#### Returns

`Promise`\<`T`\>

A promise resolving to the signal value (type T).
