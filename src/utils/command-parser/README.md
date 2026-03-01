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
// Scene: 'id' is a positional arg, automatically mapped to kvArgs.id via idAsName
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

---

## Result Shapes & Simplification

The output shape is flexible and automatically "collapses" into the most intuitive form.

### Core Simplification Strategies

By default, the parser follows these strategies in order:

1. **Identical Pair**: If there are only two entries (positional 0 and a named Key) and their values are strictly equal, it returns the value directly.
2. **Single Value**: If there is only one positional argument and no named arguments, it returns the value directly.
3. **Pure Positional**: If there are no named arguments and multiple positional arguments, it returns an array.

### Granular Control

You can adjust these behaviors via the `simplify` option:

```typescript
const options = {
  simplify: {
    singleValue: false,      // Always return [ "val" ]
    identicalPair: false,    // Return { 0: 1, id: 1 }
    mode: 'array'            // Constraint output mode
  }
};
```

#### `mode` Constraints

* `'auto'`: Default smart simplification logic.
* `'array'`: Always return a positional arguments array. **Named arguments are attached as a `.kvArgs` non-enumerable property.**
* `'object'`: Always return a merged object (indexed + named).
* `'map'`: Always return the original structure `{ args: any[], kvArgs: Record<string, any> }`.

---

## Utilities

### `ObjectArgsToArgsInfo`

A normalization utility that converts any simplified result (single value, array, etc.) back into a standard `{ args, kvArgs }` structure.

```typescript
import { ObjectArgsToArgsInfo } from '@isdk/ai-tool';

const info = ObjectArgsToArgsInfo(101);
// { args: [101] }

const info2 = ObjectArgsToArgsInfo({ name: 'John' });
// { args: [], kvArgs: { name: 'John' } }
```

---

## Core Syntax & Rules

* **Literals**: Strings (three quote types), numbers, booleans, `null`, `undefined`.
* **JS Expressions**: Basic math and simple logic supported (e.g., `1 + 2`).
* **Variable Protection**: Use `preserveUnresolvedName` to return raw strings for undefined variables.

---

## Advanced: Processors

### Built-in `AIArgProcessor`

* **Templates**: `msg="Hello {{name}}"`
* **Pipes**: `|apple|pear:2` -> `{ items: ['apple', 'pear'], maxPick: 2 }`
