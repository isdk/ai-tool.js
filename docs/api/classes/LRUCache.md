[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / LRUCache

# Class: LRUCache

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:40

Least Recently Used (LRU) Cache.

## Example

```ts
const cache = new LRUCache({
    capacity: 100,
    expires: 30000, // 30 seconds
    cleanInterval: 60 // 1 minute
  });
  cache.set('key1', 'value1', 5000); // add an item with expiration time of 5 seconds
  cache.set('key2', 'value2'); // add an item with default expiration time
  cache.get('key1'); // returns 'value1'
  cache.forEach((value, key, cache) => console.log(key, value)); // iterates over each item in the cache
  cache.delete('key1'); // removes the item with key 'key1'
  cache.clear(); // removes all items from the cache
  cache.free(); // frees up the memory used by the cache
```

## Constructors

### Constructor

> **new LRUCache**(`options?`): `LRUCache`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:69

Represents a Least Recently Used (LRU) Cache.

#### Parameters

##### options?

Optional the configuration options object for the cache or the max capacity number.

`number` | `ILRUCacheOptions`

#### Returns

`LRUCache`

#### Example

```ts
const cache = new LRUCache({
    capacity: 100,
    expires: 30000, // 30 seconds
    cleanInterval: 60 // 1 minute
  });
  cache.set('key1', 'value1', 5000); // add an item with expiration time of 5 seconds
  cache.set('key2', 'value2'); // add an item with default expiration time
  cache.get('key1'); // returns 'value1'
  cache.forEach((value, key, cache) => console.log(key, value)); // iterates over each item in the cache
  cache.delete('key1'); // removes the item with key 'key1'
  cache.clear(); // removes all items from the cache
  cache.free(); // frees up the memory used by the cache
```

## Properties

### \_cacheLRU

> **\_cacheLRU**: `Object`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:45

***

### \_lruQueue

> **\_lruQueue**: `LRUQueue`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:46

***

### cleanInterval

> **cleanInterval**: `number`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:43

***

### maxAge

> **maxAge**: `number`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:42

***

### maxCapacity

> **maxCapacity**: `number`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:41

## Methods

### clear()

> **clear**(): `LRUCache`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:154

Deletes all items from the cache.

#### Returns

`LRUCache`

- Returns the cache instance.

#### Example

```ts
cache.clear(); // removes all items from the cache
```

***

### clearExpires()

> **clearExpires**(): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:180

Deletes all expires items from the cache.

#### Returns

`any`

- Returns the cache instance.

#### Example

```ts
cache.clearExpires(); // removes all expires items from the cache
```

***

### del()

> **del**(`id`, `isInternal?`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:110

Alias for `delete()`.

#### Parameters

##### id

`any`

The key of the item to delete.

##### isInternal?

`boolean`

Indicates whether the function is called internally.

#### Returns

`boolean`

- Returns `true` if the item was deleted, or `false` if the item was not found in the cache.

#### Example

```ts
cache.del('key1'); // removes the item with key 'key1'
```

***

### delete()

> **delete**(`id`, `isInternal?`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:100

Deletes an item from the cache.

#### Parameters

##### id

`any`

The key of the item to delete.

##### isInternal?

`boolean`

Indicates whether the function is called internally.

#### Returns

`boolean`

- Returns `true` if the item was deleted, or `false` if the item was not found in the cache.

#### Example

```ts
cache.delete('key1'); // removes the item with key 'key1'
```

***

### delListener()

> **delListener**(`type`, `listener`): `LRUCache`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:70

#### Parameters

##### type

`string`

##### listener

`Function`

#### Returns

`LRUCache`

***

### forEach()

> **forEach**(`callback`, `thisArg?`): `void`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:172

Iterates over each item in the cache and calls a function for each item.

#### Parameters

##### callback

(`value`, `id`, `thisArg`) => `void`

The function to call for each item. The function should accept three arguments: `value`, `id`, and `this`.

##### thisArg?

`any`

The `this` value to use when calling the function.

#### Returns

`void`

#### Example

```ts
cache.forEach((value, key, cache) => console.log(key, value));
```

***

### free()

> **free**(): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:163

Frees up the memory used by the cache.

#### Returns

`any`

- Returns the timestamp of the last cleanup operation.

#### Example

```ts
cache.free(); // frees up the memory used by the cache
```

***

### get()

> **get**(`id`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:134

Returns the value of an item in the cache and updates its last-used time.

#### Parameters

##### id

`any`

The key of the item to retrieve.

#### Returns

`any`

- Returns the value of the item, or `undefined` if the item was not found in the cache or has expired.

#### Example

```ts
const value = cache.get('key1');
```

***

### has()

> **has**(`id`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:80

Checks whether an item exists in the cache.

#### Parameters

##### id

`any`

the id to check

#### Returns

`boolean`

- True if the item exists in the cache, false otherwise.

#### Example

```ts
const exists = cache.has("someItem");
```

***

### isExist()

> **isExist**(`id`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:85

Wether the id is in the cache

#### Parameters

##### id

`any`

the id to check

#### Returns

`boolean`

***

### isExists()

> **isExists**(`id`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:90

Wether the id is in the cache

#### Parameters

##### id

`any`

the id to check

#### Returns

`boolean`

***

### isExpired()

> **isExpired**(`item`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:116

Check the item whether already expired, the item will be removed from the cache if expired

#### Parameters

##### item

`LRUCacheItem`

the item to check

#### Returns

`boolean`

***

### length()

> **length**(): `number`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:192

Get the number of items in the cache.

#### Returns

`number`

The number of items in the LRUCache.

***

### off()

> **off**(`type`, `listener`): `LRUCache`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:72

#### Parameters

##### type

`string`

##### listener

`Function`

#### Returns

`LRUCache`

***

### on()

> **on**(`type`, `listener`): `LRUCache`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:71

#### Parameters

##### type

`string`

##### listener

`Function`

#### Returns

`LRUCache`

***

### peek()

> **peek**(`id`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:125

Returns the value of an item in the cache without updating its last-used time.

#### Parameters

##### id

`any`

The key of the item to retrieve.

#### Returns

`any`

- Returns the value of the item, or `undefined` if the item was not found in the cache or has expired.

#### Example

```ts
const value = cache.peek('key1');
```

***

### reset()

> **reset**(`options?`): `LRUCache`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:155

#### Parameters

##### options?

`number` | `ILRUCacheOptions`

#### Returns

`LRUCache`

***

### set()

> **set**(`id`, `value`, `expires?`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:146

Adds or updates an item in the cache.

#### Parameters

##### id

`any`

The key of the item to add or update.

##### value

`any`

The value of the item.

##### expires?

`number`

The expiration time for the item, in milliseconds. A value of 0 means no expiration  time.

#### Returns

`any`

- Returns the new value of the item, or `undefined` if the item was not found in the cache or has  expired.

#### Example

```ts
cache.set('key1', 'value1', 5000); // add an item with expiration time of 5 seconds
  cache.set('key2', 'value2'); // add an item with default expiration time
```

***

### setDefaultOptions()

> **setDefaultOptions**(`options?`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/secondary-cache@2.0.1/node\_modules/secondary-cache/lib/lru-cache.d.ts:187

Sets the default options for LRUCache.

#### Parameters

##### options?

The options for LRUCache, which can be of type ILRUCacheOptions or number.
                 If the options is a number, it represents the maxCapacity of the cache

`number` | `ILRUCacheOptions`

#### Returns

`any`
