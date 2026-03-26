[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CmdArgParserOptions

# Interface: CmdArgParserOptions

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:187](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L187)

Configuration options for the CmdArgParser and main API functions.

## Properties

### argProcessor?

> `optional` **argProcessor**: [`ArgProcessor`](../type-aliases/ArgProcessor.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:206](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L206)

Custom logic to process each argument before standard evaluation

***

### assigner?

> `optional` **assigner**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:199](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L199)

Character used for name-value assignment.

#### Example

```ts
assigner: ':' -> "key:value"
```

#### Default

```ts
'='
```

***

### delimiter?

> `optional` **delimiter**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:193](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L193)

Character used to separate arguments.

#### Example

```ts
delimiter: ';' -> "arg1; arg2"
```

#### Default

```ts
','
```

***

### excludeAutoNamedFromPositional?

> `optional` **excludeAutoNamedFromPositional**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:218](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L218)

If true, the positional index of an argument that has been automatically
mapped as a named argument (via `idAsName`) will be excluded from the
merged result object.

#### Example

```ts
parse("John") -> {John: "John"} (instead of {0: "John", John: "John"})
```

***

### flagPrefix?

> `optional` **flagPrefix**: `string` \| `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:204](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L204)

Prefix(es) for special parameters (Flags).

#### Example

```ts
flagPrefix: '!' -> "!debug, !verbose=false"
```

***

### idAsName?

> `optional` **idAsName**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:232](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L232)

If true, a positional argument that is a valid identifier (e.g., "John")
is automatically mapped as a named argument (e.g., {John: "John"}).

#### Default

```ts
true
```

***

### isInternal?

> `optional` **isInternal**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:244](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L244)

**`Internal`**

Used to prevent infinite recursion in internal calls

***

### namedExcludePositional?

> `optional` **namedExcludePositional**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:226](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L226)

If true, explicitly named arguments (e.g., `k=v`) do not occupy a slot
in the positional `args` array.

#### Default

```ts
true
```

***

### preserveUnresolvedName?

> `optional` **preserveUnresolvedName**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:220](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L220)

If true, return the variable name as a string when it's not found in scope instead of undefined

***

### raiseError?

> `optional` **raiseError**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:238](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L238)

If true, any parsing or evaluation error will be thrown

***

### raiseReferenceError?

> `optional` **raiseReferenceError**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:240](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L240)

If true, ReferenceErrors (missing variables) will be thrown. Defaults to `raiseError`.

***

### scope?

> `optional` **scope**: `Record`\<`string`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:242](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L242)

An object containing variables accessible to expressions in the input string

***

### simplify?

> `optional` **simplify**: `boolean` \| [`CmdArgSimplifyOptions`](CmdArgSimplifyOptions.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:236](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L236)

Control the simplification of the final result. Set to `false` to disable (returns a merged object).

***

### skipExpression?

> `optional` **skipExpression**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:234](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L234)

If true, JS expressions (like arithmetic or function calls) are not evaluated

***

### templateData?

> `optional` **templateData**: `Record`\<`string`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:210](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L210)

Additional data for template variable substitution

***

### templateFormat?

> `optional` **templateFormat**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:208](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L208)

Format used by TemplateArgProcessor (e.g., 'mustache')
