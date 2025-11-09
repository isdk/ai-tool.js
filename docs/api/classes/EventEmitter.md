[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / EventEmitter

# Class: EventEmitter

Defined in: @isdk/util/node\_modules/.pnpm/events-ex@2.1.1/node\_modules/events-ex/lib/event-emitter.d.ts:6

Class that represents an event emitter.

## Constructors

### Constructor

> **new EventEmitter**(): `EventEmitter`

#### Returns

`EventEmitter`

## Properties

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

Defined in: @isdk/util/node\_modules/.pnpm/events-ex@2.1.1/node\_modules/events-ex/lib/event-emitter.d.ts:7

## Methods

### emit()

> **emit**(`eventName`, ...`args`): `any`

Defined in: @isdk/util/node\_modules/.pnpm/events-ex@2.1.1/node\_modules/events-ex/lib/event-emitter.d.ts:48

Emits the specified event type with the given arguments.

#### Parameters

##### eventName

`string`

##### args

...`any`[]

The event type followed by any number of arguments to be passed to the listener functions.

#### Returns

`any`

The result of the event.

***

### emitAsync()

> **emitAsync**(`eventName`, ...`args`): `Promise`\<`any`\>

Defined in: @isdk/util/node\_modules/.pnpm/events-ex@2.1.1/node\_modules/events-ex/lib/event-emitter.d.ts:54

Asynchronously emits the specified event type with the given arguments.

#### Parameters

##### eventName

`string`

##### args

...`any`[]

The event type followed by any number of arguments to be passed to the listener functions.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the result of the event.

***

### listenerCount()

> **listenerCount**(`eventName`): `number`

Defined in: @isdk/util/node\_modules/.pnpm/events-ex@2.1.1/node\_modules/events-ex/lib/event-emitter.d.ts:83

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

##### eventName

The name of the event to get the listeners for.

`string` | `RegExp`

#### Returns

`number`

- the listeners count

***

### listeners()

> **listeners**(`eventName`): `Function`[]

Defined in: @isdk/util/node\_modules/.pnpm/events-ex@2.1.1/node\_modules/events-ex/lib/event-emitter.d.ts:76

Returns an array of functions that are registered to listen for the specified event.

#### Parameters

##### eventName

The name of the event to get the listeners for.

`string` | `RegExp`

#### Returns

`Function`[]

- An array of functions that are registered to listen for the specified event.

***

### off()

> **off**(`eventName`, `listener`): `EventEmitter`

Defined in: @isdk/util/node\_modules/.pnpm/events-ex@2.1.1/node\_modules/events-ex/lib/event-emitter.d.ts:33

Removes a listener function from the specified event type.

#### Parameters

##### eventName

`string` | `RegExp`

##### listener

`Function`

The listener function to be removed.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### See

[removeListener](#removelistener)

***

### on()

> **on**(`eventName`, `listener`): `EventEmitter`

Defined in: @isdk/util/node\_modules/.pnpm/events-ex@2.1.1/node\_modules/events-ex/lib/event-emitter.d.ts:16

Adds a listener function to the specified event type.

#### Parameters

##### eventName

`string` | `RegExp`

##### listener

`Function`

The listener function to be called when the event is emitted.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

***

### once()

> **once**(`eventName`, `listener`): `EventEmitter`

Defined in: @isdk/util/node\_modules/.pnpm/events-ex@2.1.1/node\_modules/events-ex/lib/event-emitter.d.ts:24

Adds a one-time listener function to the specified event type.

#### Parameters

##### eventName

`string` | `RegExp`

##### listener

`Function`

The listener function to be called once when the event is emitted.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

***

### removeAllListeners()

> **removeAllListeners**(`eventName?`): `EventEmitter`

Defined in: @isdk/util/node\_modules/.pnpm/events-ex@2.1.1/node\_modules/events-ex/lib/event-emitter.d.ts:61

Removes all listeners for a specific event or all events from an event emitter.

#### Parameters

##### eventName?

The event to remove listeners for. If not provided, all listeners for all events will be removed.

`string` | `RegExp`

#### Returns

`EventEmitter`

- The event emitter with all listeners removed.

***

### removeListener()

> **removeListener**(`eventName`, `listener`): `EventEmitter`

Defined in: @isdk/util/node\_modules/.pnpm/events-ex@2.1.1/node\_modules/events-ex/lib/event-emitter.d.ts:42

Removes a listener function from the specified event type.

#### Parameters

##### eventName

`string` | `RegExp`

##### listener

`Function`

The listener function to be removed.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### See

[off](#off)

***

### setMaxListeners()

> **setMaxListeners**(`n`): `EventEmitter`

Defined in: @isdk/util/node\_modules/.pnpm/events-ex@2.1.1/node\_modules/events-ex/lib/event-emitter.d.ts:69

Sets the maximum number of listeners allowed for the event emitter.

#### Parameters

##### n

`number`

The maximum number of listeners to set. Must be a positive integer.

#### Returns

`EventEmitter`

The EventEmitter instance for method chaining.

#### Throws

If `n` is not a positive integer.

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

Defined in: @isdk/util/node\_modules/.pnpm/events-ex@2.1.1/node\_modules/events-ex/lib/event-emitter.d.ts:91

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

##### emitter

`EventEmitter`

##### eventName

`string` | `RegExp`

#### Returns

`number`

#### Deprecated

use emitter.listenerCount instead
