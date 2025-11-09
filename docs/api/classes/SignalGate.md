[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SignalGate

# Class: SignalGate\<T\>

Defined in: @isdk/util/dist/index.d.ts:894

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

### T

`T` = `void`

## Constructors

### Constructor

> **new SignalGate**\<`T`\>(): `SignalGate`\<`T`\>

#### Returns

`SignalGate`\<`T`\>

## Properties

### \_isSignaled

> `protected` **\_isSignaled**: `boolean`

Defined in: @isdk/util/dist/index.d.ts:895

***

### \_signalValue

> `protected` **\_signalValue**: `undefined` \| `T`

Defined in: @isdk/util/dist/index.d.ts:896

***

### waitQueue

> `protected` **waitQueue**: `object`[]

Defined in: @isdk/util/dist/index.d.ts:897

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

Defined in: @isdk/util/dist/index.d.ts:901

##### Returns

`boolean`

## Methods

### abort()

> **abort**(`reason?`): `void`

Defined in: @isdk/util/dist/index.d.ts:919

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

Defined in: @isdk/util/dist/index.d.ts:912

Resets the gate to its initial state, allowing a new signal to be emitted.

#### Returns

`void`

***

### signal()

> **signal**(`value?`): `void`

Defined in: @isdk/util/dist/index.d.ts:908

Emits the signal with an optional value, resolving all pending [wait](../variables/wait.md) promises.
Subsequent calls have no effect until [reset](#reset) is called.

#### Parameters

##### value?

`T`

The value to emit with the signal (only required if T is not void).

#### Returns

`void`

***

### wait()

> **wait**(): `Promise`\<`T`\>

Defined in: @isdk/util/dist/index.d.ts:926

Returns a promise that resolves with the emitted signal value.
If called after the signal has been emitted, resolves immediately with the stored value.

#### Returns

`Promise`\<`T`\>

A promise resolving to the signal value (type T).
