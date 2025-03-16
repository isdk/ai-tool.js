[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IntSet

# Class: IntSet

Defined in: [packages/ai-tool/src/utils/intset.ts:6](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/intset.ts#L6)

Represents a set of integers using a bit field.
Each bit in the bit field represents an integer starting from 0,
where the flag value 0 represents the 0th bit, 1 represents the 1st bit, and so on.

## Constructors

### new IntSet()

> **new IntSet**(`bitField`): [`IntSet`](IntSet.md)

Defined in: [packages/ai-tool/src/utils/intset.ts:21](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/intset.ts#L21)

#### Parameters

##### bitField

`number` = `0`

#### Returns

[`IntSet`](IntSet.md)

## Methods

### add()

> **add**(`flag`): [`IntSet`](IntSet.md)

Defined in: [packages/ai-tool/src/utils/intset.ts:29](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/intset.ts#L29)

Adds an element to the set.

#### Parameters

##### flag

`number`

The flag value representing the bit position to set.
             Note: the flag value 0 represents the 0th bit, and so on.

#### Returns

[`IntSet`](IntSet.md)

***

### clear()

> **clear**(): [`IntSet`](IntSet.md)

Defined in: [packages/ai-tool/src/utils/intset.ts:57](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/intset.ts#L57)

Clears all elements from the set.

#### Returns

[`IntSet`](IntSet.md)

***

### delete()

> **delete**(`flag`): [`IntSet`](IntSet.md)

Defined in: [packages/ai-tool/src/utils/intset.ts:39](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/intset.ts#L39)

Removes an element from the set.

#### Parameters

##### flag

`number`

The flag value representing the bit position to set. 0 represents the 0th bit

#### Returns

[`IntSet`](IntSet.md)

***

### has()

> **has**(`flag`): `boolean`

Defined in: [packages/ai-tool/src/utils/intset.ts:50](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/intset.ts#L50)

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

Defined in: [packages/ai-tool/src/utils/intset.ts:70](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/intset.ts#L70)

#### Returns

`number`

***

### toString()

> **toString**(): `string`

Defined in: [packages/ai-tool/src/utils/intset.ts:66](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/intset.ts#L66)

#### Returns

`string`

***

### valueOf()

> **valueOf**(): `number`

Defined in: [packages/ai-tool/src/utils/intset.ts:62](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/intset.ts#L62)

#### Returns

`number`

***

### add()

> `static` **add**(`bitField`, `flag`): `number`

Defined in: [packages/ai-tool/src/utils/intset.ts:12](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/intset.ts#L12)

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

Defined in: [packages/ai-tool/src/utils/intset.ts:16](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/intset.ts#L16)

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

Defined in: [packages/ai-tool/src/utils/intset.ts:8](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/intset.ts#L8)

#### Parameters

##### bitField

`number`

##### flag

`number`

#### Returns

`boolean`
