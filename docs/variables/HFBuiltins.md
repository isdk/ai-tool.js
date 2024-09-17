[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / HFBuiltins

# Variable: HFBuiltins

> `const` **HFBuiltins**: `object`

## Type declaration

### randomInt()

> **randomInt**: (`to`, `from`) => `number`

#### Parameters

• **to**: `number`

• **from**: `number` = `0`

#### Returns

`number`

### select()

> **select**: (`obj`, `index`?) => `any`

Selects an element from the given object, array, or string.

#### Parameters

• **obj**: `any`

Can be an object, array, or string to select from.

• **index?**: `string` \| `number`

Optional, specifies the index or key to select. Negative values indicate indices from the end.

#### Returns

`any`

The selected element, or `undefined` if the input is empty or not provided.

#### Examples

```ts
// Selecting an element from an array
const array = ['apple', 'banana', 'cherry']
console.log(select(array)) // Random element from the array
console.log(select(array, 1)) // Second element
console.log(select(array, -1)) // Last element
```

```ts
// Selecting a property from an object
const obj = { fruit1: 'apple', fruit2: 'banana', fruit3: 'cherry' }
console.log(select(obj)) // Random property from the object
console.log(select(obj, 'fruit2')) // Property with key 'fruit2'
```

```ts
// Selecting a character from a string
const str = 'hello'
console.log(select(str)) // Random character from the string
console.log(select(str, 1)) // Second character
console.log(select(str, -1)) // Last character
```

### tojson()

> **tojson**: (`value`, `indent`?, `depth`?) => `string`

#### Parameters

• **value**: `any`

• **indent?**: `number` \| `object`

• **depth?**: `number`

#### Returns

`string`

## Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/builtins.ts:61](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/prompt/template/jinja/src/builtins.ts#L61)
