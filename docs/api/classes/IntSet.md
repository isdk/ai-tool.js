[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IntSet

# Class: IntSet

Defined in: @isdk/util/dist/index.d.ts:558

Represents a set of integers using a bit field.
Each bit in the bit field represents an integer starting from 0,
where the flag value 0 represents the 0th bit, 1 represents the 1st bit, and so on.

## Constructors

### Constructor

> **new IntSet**(`bitField?`): `IntSet`

Defined in: @isdk/util/dist/index.d.ts:563

#### Parameters

##### bitField?

`number`

#### Returns

`IntSet`

## Methods

### add()

> **add**(`flag`): `this`

Defined in: @isdk/util/dist/index.d.ts:570

Adds an element to the set.

#### Parameters

##### flag

`number`

The flag value representing the bit position to set.
             Note: the flag value 0 represents the 0th bit, and so on.

#### Returns

`this`

***

### clear()

> **clear**(): `this`

Defined in: @isdk/util/dist/index.d.ts:587

Clears all elements from the set.

#### Returns

`this`

***

### delete()

> **delete**(`flag`): `this`

Defined in: @isdk/util/dist/index.d.ts:576

Removes an element from the set.

#### Parameters

##### flag

`number`

The flag value representing the bit position to set. 0 represents the 0th bit

#### Returns

`this`

***

### has()

> **has**(`flag`): `boolean`

Defined in: @isdk/util/dist/index.d.ts:583

Determines whether an element is in the set.

#### Parameters

##### flag

`number`

The flag value representing the bit position to set. 0 represents the 0th bit

#### Returns

`boolean`

true if the element is in the set; otherwise, false.

***

### toJSON()

> **toJSON**(): `number`

Defined in: @isdk/util/dist/index.d.ts:590

#### Returns

`number`

***

### toString()

> **toString**(): `string`

Defined in: @isdk/util/dist/index.d.ts:589

#### Returns

`string`

***

### valueOf()

> **valueOf**(): `number`

Defined in: @isdk/util/dist/index.d.ts:588

#### Returns

`number`

***

### add()

> `static` **add**(`bitField`, `flag`): `number`

Defined in: @isdk/util/dist/index.d.ts:561

#### Parameters

##### bitField

`number`

##### flag

`number`

#### Returns

`number`

***

### delete()

> `static` **delete**(`bitField`, `flag`): `number`

Defined in: @isdk/util/dist/index.d.ts:562

#### Parameters

##### bitField

`number`

##### flag

`number`

#### Returns

`number`

***

### has()

> `static` **has**(`bitField`, `flag`): `boolean`

Defined in: @isdk/util/dist/index.d.ts:560

#### Parameters

##### bitField

`number`

##### flag

`number`

#### Returns

`boolean`
