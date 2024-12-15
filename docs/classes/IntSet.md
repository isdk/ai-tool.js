[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / IntSet

# Class: IntSet

Represents a set of integers using a bit field.
Each bit in the bit field represents an integer starting from 0,
where the flag value 0 represents the 0th bit, 1 represents the 1st bit, and so on.

## Constructors

### new IntSet()

> **new IntSet**(`bitField`): [`IntSet`](IntSet.md)

#### Parameters

• **bitField**: `number` = `0`

#### Returns

[`IntSet`](IntSet.md)

#### Defined in

[packages/ai-tool/src/utils/intset.ts:21](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/intset.ts#L21)

## Methods

### add()

> **add**(`flag`): [`IntSet`](IntSet.md)

Adds an element to the set.

#### Parameters

• **flag**: `number`

The flag value representing the bit position to set.
             Note: the flag value 0 represents the 0th bit, and so on.

#### Returns

[`IntSet`](IntSet.md)

#### Defined in

[packages/ai-tool/src/utils/intset.ts:29](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/intset.ts#L29)

***

### clear()

> **clear**(): [`IntSet`](IntSet.md)

Clears all elements from the set.

#### Returns

[`IntSet`](IntSet.md)

#### Defined in

[packages/ai-tool/src/utils/intset.ts:57](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/intset.ts#L57)

***

### delete()

> **delete**(`flag`): [`IntSet`](IntSet.md)

Removes an element from the set.

#### Parameters

• **flag**: `number`

The flag value representing the bit position to set. 0 represents the 0th bit

#### Returns

[`IntSet`](IntSet.md)

#### Defined in

[packages/ai-tool/src/utils/intset.ts:39](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/intset.ts#L39)

***

### has()

> **has**(`flag`): `boolean`

Determines whether an element is in the set.

#### Parameters

• **flag**: `number`

The flag value representing the bit position to set. 0 represents the 0th bit

#### Returns

`boolean`

true if the element is in the set; otherwise, false.

#### Defined in

[packages/ai-tool/src/utils/intset.ts:50](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/intset.ts#L50)

***

### toJSON()

> **toJSON**(): `number`

#### Returns

`number`

#### Defined in

[packages/ai-tool/src/utils/intset.ts:70](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/intset.ts#L70)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/intset.ts:66](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/intset.ts#L66)

***

### valueOf()

> **valueOf**(): `number`

#### Returns

`number`

#### Defined in

[packages/ai-tool/src/utils/intset.ts:62](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/intset.ts#L62)

***

### add()

> `static` **add**(`bitField`, `flag`): `number`

#### Parameters

• **bitField**: `number`

• **flag**: `number`

#### Returns

`number`

#### Defined in

[packages/ai-tool/src/utils/intset.ts:12](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/intset.ts#L12)

***

### delete()

> `static` **delete**(`bitField`, `flag`): `number`

#### Parameters

• **bitField**: `number`

• **flag**: `number`

#### Returns

`number`

#### Defined in

[packages/ai-tool/src/utils/intset.ts:16](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/intset.ts#L16)

***

### has()

> `static` **has**(`bitField`, `flag`): `boolean`

#### Parameters

• **bitField**: `number`

• **flag**: `number`

#### Returns

`boolean`

#### Defined in

[packages/ai-tool/src/utils/intset.ts:8](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/intset.ts#L8)
