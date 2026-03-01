# Command Parser (命令参数解析器)

`command-parser` 是一个功能强大的结构化参数解析工具，旨在将类命令字符串（如 `cmd(arg1, k=v, |a|b)`）解析为可直接使用的 JS 对象、数组或单值。它支持标准 JS 语法约定，并通过“处理器（Processor）协议”提供高度的语法扩展能力。

---

## 快速开始 (Quick Start)

解析器提供两个核心入口函数：`parseCommand` (解析完整命令) 和 `parseObjectArguments` (仅解析参数部分)。

### 1. 基础解析 (Level 1)

最简单的用法是解析位置参数或基础类型。

```typescript
import { parseObjectArguments } from '@isdk/ai-tool';

// 解析位置参数 -> 返回数组 (自动应用纯位置数组化)
const res1 = await parseObjectArguments('123, "hello", true');
// [123, "hello", true]

// 解析单值 -> 直接返回值 (自动应用单值化)
const res2 = await parseObjectArguments('"only-one"');
// "only-one"
```

### 2. 命名参数与自动收敛 (Level 2)

支持 `key=value` 语法。

```typescript
// 命名参数 -> 返回对象
const res3 = await parseObjectArguments('name="John", age=30');
// { name: "John", age: 30 }

// 等值对收敛：如果位置参数 0 与某个命名参数的值完全一致
// 场景：id 是位置参数，通过 idAsName 自动映射到了 kvArgs.id
const res4 = await parseObjectArguments('id', { id: 101 });
// 101 (内部形态为 {0: 101, id: 101}，被自动简化)
```

### 3. 使用作用域注入 (Level 3)

可以传入 `scope` 对象，使解析器能够识别变量。

```typescript
const scope = { user: { id: 1, name: 'Bob' }, flag: true };
const res5 = await parseObjectArguments('user.id, enabled=flag', scope);
// { 0: 1, enabled: true }
```

### 4. 完整命令解析 (Level 4)

解析形如 `cmd(args)` 的字符串。

```typescript
import { parseCommand } from '@isdk/ai-tool';

const { command, args } = await parseCommand('search(query="sky", limit=10)');
// command: "search"
// args: { query: "sky", limit: 10 }
```

### 5. 特殊参数 (Flags) (Level 5)

支持通过前缀（如 `!` 或 `#`）定义特殊参数，这些参数会与普通参数隔离。

```typescript
const options = { flagPrefix: '!' };
const { args, flags } = await parseCommand('search(query="sky", !fast, !cache=true)', {}, options);
// args: { query: "sky" }
// flags: { fast: true, cache: true } (包装后的对象，带 FLAG_SYMBOL 元数据)
```

---

## 结果形态与简化 (Simplification)

解析器的输出形态非常灵活，会根据参数的数量和命名情况自动“坍缩”为最直观的形式。

### 核心简化策略

默认情况下，解析器遵循以下三种策略（按顺序）：

1. **等值对简化 (Identical Pair)**：当结果中仅有两个条目（位置 0 和一个命名 Key）且值完全相等时，直接返回该值。
    * 例如：`age=25` -> `25`
2. **单值化 (Single Value)**：当只有一个位置参数且没有命名参数时，直接返回该值。
    * 例如：`"hello"` -> `"hello"`
3. **纯位置数组化 (Pure Positional)**：当没有任何命名参数且有多个位置参数时，返回纯数组。
    * 例如：`1, 2, 3` -> `[1, 2, 3]`

### 精细化控制

你可以通过 `simplify` 选项来调整这些行为：

```typescript
const options = {
  simplify: {
    singleValue: false,      // 禁用单值化，始终返回数组 [ "val" ]
    identicalPair: false,    // 禁用等值对简化，返回 { 0: 1, id: 1 }
    mode: 'array'            // 强制约束输出形态
  }
};
```

#### `mode` 形态强制约束

* `'auto'`: 默认的智能简化逻辑。
* `'array'`: 始终返回位置参数数组。**命名参数和特殊参数将分别作为该数组的 `.kvArgs` 和 `.flags` 非枚举属性附带。**
* `'object'`: 始终返回一个合并后的对象（包含数字索引键、字符串键和隐藏的 `flags`）。
* `'map'`: 始终返回原始结构 `{ args: any[], kvArgs: Record<string, any>, flags?: Record<string, any> }`。

---

## 工具函数 (Utilities)

### `ObjectArgsToArgsInfo`

规范化工具，将任何简化后的结果（单值、数组等）还原为标准的 `{ args, kvArgs }` 结构。这对于下游函数统一处理参数非常有用。

```typescript
import { ObjectArgsToArgsInfo } from '@isdk/ai-tool';

const info = ObjectArgsToArgsInfo(101);
// { args: [101] }

const info2 = ObjectArgsToArgsInfo({ name: 'John' });
// { args: [], kvArgs: { name: 'John' } }
```

---

## 核心语法与规则

### 1. 类型支持

* **字面量**：支持 `"`, `'`, 或 `` ` `` 包裹的字符串（支持转义）、数字、布尔值、`null`, `undefined`。
* **JS 表达式**：支持基础运算和简单语法，如 `1 + 2`, `(a, b) => a + b`。
* **变量/路径**：不带引号的文本视为变量，解析器会从 `scope` 中查找。支持 **Unicode (如中文)** 和 `$` 作为标识符。

### 2. 变量保护与错误控制

* **`preserveUnresolvedName`**: 如果变量在 `scope` 中未定义且非合法标识符，解析器会原样返回原始字符串（如 `!notAFlag`）。
* **`raiseReferenceError`**: 专门控制是否在变量未定义时抛出错误，默认遵循 `raiseError`。

---

## 高级：处理器 (Processor) 协议

处理器允许你在解析过程中拦截原始文本并按业务逻辑进行转换。

### 内置 AI 处理器 (`AIArgProcessor`)

提供了一些专为 AI 场景设计的增强语法：

* **模板插值**：`msg="Hello {{name}}"` -> 渲染后的字符串。
* **管道选择器**：`|apple|pear:2` -> 一个配置对象 `{ items: ['apple', 'pear'], maxPick: 2 }`。

### 自定义处理器

通过实现 `ArgProcessor` 函数，你可以定义自己的参数转换逻辑，甚至返回一个带有 `PROCESSOR_RESULT` Symbol 的对象来控制参数的分发策略。

---

## 配置参考 (ParserOptions)

| 选项 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `simplify` | `boolean \| SimplifyOptions` | `true` | 是否开启结果简化。 |
| `idAsName` | `boolean` | `true` | 位置参数若是标识符，是否自动映射为同名命名参数。 |
| `flagPrefix` | `string \| string[]` | - | 特殊参数前缀 (如 `!`, `#`)。 |
| `scope` | `Record` | `{}` | 变量评估的作用域。 |
| `argProcessor` | `Function` | - | 自定义参数处理器。 |
| `preserveUnresolvedName` | `boolean` | `false` | 未定义变量是否原样返回字符串。 |
| `namedExcludePositional` | `boolean` | `true` | 显式命名参数是否不占用位置索引。 |
| `raiseError` | `boolean` | `false` | 遇到语法等错误时是否抛出。 |
| `raiseReferenceError` | `boolean` | - | 变量未定义时是否抛出，默认遵循 `raiseError`。 |
