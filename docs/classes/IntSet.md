[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / IntSet

# Class: IntSet

Represents a set of integers using a bit field.
Each bit in the bit field represents an integer starting from 0,
where the flag value 0 represents the 0th bit, 1 represents the 1st bit, and so on.

## Table of contents

### Constructors

- [constructor](IntSet.md#constructor)

### Properties

- [bitField](IntSet.md#bitfield)

### Methods

- [add](IntSet.md#add)
- [clear](IntSet.md#clear)
- [delete](IntSet.md#delete)
- [has](IntSet.md#has)
- [toJSON](IntSet.md#tojson)
- [toString](IntSet.md#tostring)
- [valueOf](IntSet.md#valueof)
- [add](IntSet.md#add-1)
- [delete](IntSet.md#delete-1)
- [has](IntSet.md#has-1)

## Constructors

### constructor

• **new IntSet**(`bitField?`): [`IntSet`](IntSet.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bitField` | `number` | `0` |

#### Returns

[`IntSet`](IntSet.md)

#### Defined in

[packages/ai-tool/src/utils/intset.ts:21](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/intset.ts#L21)

## Properties

### bitField

• `Private` **bitField**: `number` = `0`

#### Defined in

[packages/ai-tool/src/utils/intset.ts:21](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/intset.ts#L21)

## Methods

### add

▸ **add**(`flag`): [`IntSet`](IntSet.md)

Adds an element to the set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `flag` | `number` | The flag value representing the bit position to set. Note: the flag value 0 represents the 0th bit, and so on. |

#### Returns

[`IntSet`](IntSet.md)

#### Defined in

[packages/ai-tool/src/utils/intset.ts:29](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/intset.ts#L29)

___

### clear

▸ **clear**(): [`IntSet`](IntSet.md)

Clears all elements from the set.

#### Returns

[`IntSet`](IntSet.md)

#### Defined in

[packages/ai-tool/src/utils/intset.ts:57](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/intset.ts#L57)

___

### delete

▸ **delete**(`flag`): [`IntSet`](IntSet.md)

Removes an element from the set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `flag` | `number` | The flag value representing the bit position to set. 0 represents the 0th bit |

#### Returns

[`IntSet`](IntSet.md)

#### Defined in

[packages/ai-tool/src/utils/intset.ts:39](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/intset.ts#L39)

___

### has

▸ **has**(`flag`): `boolean`

Determines whether an element is in the set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `flag` | `number` | The flag value representing the bit position to set. 0 represents the 0th bit |

#### Returns

`boolean`

true if the element is in the set; otherwise, false.

#### Defined in

[packages/ai-tool/src/utils/intset.ts:50](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/intset.ts#L50)

___

### toJSON

▸ **toJSON**(): `number`

#### Returns

`number`

#### Defined in

[packages/ai-tool/src/utils/intset.ts:70](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/intset.ts#L70)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/intset.ts:66](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/intset.ts#L66)

___

### valueOf

▸ **valueOf**(): `number`

#### Returns

`number`

#### Defined in

[packages/ai-tool/src/utils/intset.ts:62](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/intset.ts#L62)

___

### add

▸ **add**(`bitField`, `flag`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitField` | `number` |
| `flag` | `number` |

#### Returns

`number`

#### Defined in

[packages/ai-tool/src/utils/intset.ts:12](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/intset.ts#L12)

___

### delete

▸ **delete**(`bitField`, `flag`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitField` | `number` |
| `flag` | `number` |

#### Returns

`number`

#### Defined in

[packages/ai-tool/src/utils/intset.ts:16](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/intset.ts#L16)

___

### has

▸ **has**(`bitField`, `flag`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitField` | `number` |
| `flag` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/ai-tool/src/utils/intset.ts:8](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/intset.ts#L8)
