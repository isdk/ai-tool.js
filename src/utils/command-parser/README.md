# Command Parser

`command-parser` is a powerful structured argument parsing tool designed to parse command-like strings (e.g., `cmd(arg1, k=v, |a|b)`) into directly usable JS objects, arrays, or single values. It supports standard JS syntax conventions and provides high extensibility through the "Processor protocol."

---

## Quick Start

The parser provides two core entry functions: `parseCommand` (for full commands) and `parseObjectArguments` (for argument strings only).

### 1. Basic Parsing (Level 1)

Parse positional arguments or primitive types.

```typescript
import { parseObjectArguments } from '@isdk/ai-tool';

// Positional args -> Returns an array (Pure Positional simplification)
const res1 = await parseObjectArguments('123, "hello", true');
// [123, "hello", true]

// Single value -> Returns the value directly (Single Value simplification)
const res2 = await parseObjectArguments('"only-one"');
// "only-one"
```

### 2. Named Arguments & Auto-convergence (Level 2)

Supports `key=value` syntax.

```typescript
// Named args -> Returns an object
const res3 = await parseObjectArguments('name="John", age=30');
// { name: "John", age: 30 }

// Identical Pair convergence: If positional arg 0 matches a named arg
// Scene: 'id' is a positional arg, automatically mapped to namedArgs.id via idAsName
const res4 = await parseObjectArguments('id', { id: 101 });
// 101 (Internal form: {0: 101, id: 101}, simplified to 101)
```

### 3. Using Scopes (Level 3)

Pass a `scope` object to let the parser recognize variables.

```typescript
const scope = { user: { id: 1, name: 'Bob' }, flag: true };
const res5 = await parseObjectArguments('user.id, enabled=flag', scope);
// { 0: 1, enabled: true }
```

### 4. Full Command Parsing (Level 4)

```typescript
import { parseCommand } from '@isdk/ai-tool';

const { command, args } = await parseCommand('search(query="sky", limit=10)');
// command: "search"
// args: { query: "sky", limit: 10 }
```

### 5. Special Parameters (Flags) (Level 5)

Support for defining special parameters with prefixes (e.g., `!` or `#`), isolated from normal arguments.

```typescript
const options = { flagPrefix: '!' };
const { args, flags } = await parseCommand('search(query="sky", !fast, !cache=true)', {}, options);
// args: { query: "sky" }
// flags: { fast: true, cache: true } (Boxed primitives with FLAG_SYMBOL metadata)
```

---

## Result Shapes & Simplification

The output shape is flexible and automatically "collapses" into the most intuitive form.

### Core Simplification Strategies

By default, the parser follows these strategies in order:

1. **Identical Pair Singularization**: If there are only two entries (positional 0 and a named Key) and their values are strictly equal, it collapses them into a single value.
2. **Single Value**: If there is only one positional argument and no named arguments, it returns the value directly.
3. **Pure Positional**: If there are no named arguments and multiple positional arguments, it returns an array.

### Granular Control

You can adjust these behaviors via the `simplify` option:

```typescript
const options = {
  simplify: {
    singleValue: false,              // Always return [ "val" ]
    identicalPairSingular: false,    // Return { 0: 1, id: 1 }
    mode: 'array'                    // Constraint output mode
  }
};
```

#### `mode` Constraints

* `'auto'`: Default smart simplification logic.
* `'array'`: Always return a positional arguments array. **Named and flag arguments are attached as `.namedArgs` and `.flags` non-enumerable properties.**
* `'object'`: Always return a merged object (indexed + named + hidden flags).
* `'map'`: Always return the original structure `{ args: any[], namedArgs: Record<string, any>, flags?: Record<string, any> }`.

---

## Utilities

### `ObjectArgsToArgsInfo`

A normalization utility that converts any simplified result (single value, array, etc.) back into a standard `{ args, namedArgs }` structure.

```typescript
import { ObjectArgsToArgsInfo } from '@isdk/ai-tool';

const info = ObjectArgsToArgsInfo(101);
// { args: [101] }

const info2 = ObjectArgsToArgsInfo({ name: 'John' });
// { args: [], namedArgs: { name: 'John' } }
```

---

## Core Syntax & Rules

### 1. Type Support

* **Literals**: Strings (three quote types), numbers, booleans, `null`, `undefined`.
* **JS Expressions**: Basic math and simple logic supported (e.g., `1 + 2`).
* **Variables/Paths**: Unquoted text is treated as a variable, searched in `scope`. Supports **Unicode (e.g., Chinese)** and `$` as identifiers.

### 2. Variable Protection & Error Control

* **`preserveUnresolvedName`**: If a variable is undefined in `scope` and is not a valid identifier, the parser returns the original string (e.g., `!notAFlag`).
* **`raiseReferenceError`**: Specifically controls whether to throw an error when a variable is undefined, defaults to `raiseError`.

---

## Advanced: Processors

### Built-in `AIArgProcessor`

* **Templates**: `msg="Hello {{name}}"`
* **Pipes**: `|apple|pear:2` -> `{ items: ['apple', 'pear'], maxPick: 2 }`

---

## Configuration (ParserOptions)

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `simplify` | `boolean \| SimplifyOptions` | `true` | Enable result simplification. If `false`, returns a merged object with indices and names. |
| `idAsName` | `boolean` | `true` | Auto-map positional identifier to named argument. |
| `excludeAutoNamedFromPositional` | `boolean` | `false` | **Auto-mapping Exclusion**: If `true`, exclude numeric indices from auto-mapped arguments. |
| `namedExcludePositional` | `boolean` | `true` | **Explicit Name Exclusion**: If `true`, explicit `k=v` args don't occupy slots in `args` array. |
| `delimiter` | `string` | `','` | Argument separator. e.g., set to `;` for `arg1; arg2`. |
| `assigner` | `string` | `'='` | Assignment operator. e.g., set to `:` for `key:value`. |
| `flagPrefix` | `string \| string[]` | - | Special parameter prefixes (e.g., `!`, `#`). |
| `scope` | `Record` | `{}` | Evaluation scope for resolving variables. |
| `argProcessor` | `Function` | - | Custom logic to process each argument (supports async). |
| `preserveUnresolvedName` | `boolean` | `false` | Return variable name as string if not found in scope. |
| `skipExpression` | `boolean` | `false` | Disable JS expression evaluation (e.g., math, functions). |
| `raiseError` | `boolean` | `false` | Throw on syntax or evaluation errors. |
| `raiseReferenceError` | `boolean` | - | Throw on undefined variables, defaults to `raiseError`. |
