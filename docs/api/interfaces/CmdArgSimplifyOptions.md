[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CmdArgSimplifyOptions

# Interface: CmdArgSimplifyOptions

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:147](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L147)

Detailed configuration for result simplification (convergence).

## Properties

### identicalPairSingular?

> `optional` **identicalPairSingular**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:163](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L163)

[Identical Pair Singularization]
If there are exactly two entries (index 0 and a named key) and their values are identical,
collapse them into a single value. This often happens when `idAsName` is enabled.

#### Example

```ts
parse("name=John") -> "John" (instead of {0: "John", name: "John"})
```

#### Default

```ts
true
```

***

### mode?

> `optional` **mode**: `"object"` \| `"auto"` \| `"map"` \| `"array"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:181](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L181)

[Output Mode]
- 'auto': Apply the simplification flags above (default).
- 'array': Always return an array of positional args. Named args are hidden in the '.namedArgs' property.
- 'object': Always return a merged object with both numeric and string keys.
- 'map': Always return the full structure { args: [], namedArgs: {}, flags: {} }.

#### Default

```ts
'auto'
```

***

### purePositionalAsArray?

> `optional` **purePositionalAsArray**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:171](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L171)

[Pure Positional as Array]
If there are multiple positional arguments and no named arguments, return a pure array.

#### Example

```ts
parse("1, 2, 3") -> [1, 2, 3] (instead of {0: 1, 1: 2, 2: 3})
```

#### Default

```ts
true
```

***

### singleValue?

> `optional` **singleValue**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:154](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L154)

[Single Value Simplification]
If there is exactly one positional argument and no named arguments, return the value directly.

#### Example

```ts
parse("123") -> 123 (instead of [123])
```

#### Default

```ts
true
```
