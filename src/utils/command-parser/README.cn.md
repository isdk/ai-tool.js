# Command Parser (命令参数解析器)

`command-parser` 是一个功能强大的结构化参数解析工具，旨在将类命令字符串（如 `cmd(arg1, k=v, |a|b)`）解析为可直接使用的 JS 对象或数组。它在支持标准 JS 语法约定的基础上，通过“处理器（Processor）协议”提供了高度的类型扩展能力。

## 核心业务逻辑

解析器遵循一套严谨的解析与分发逻辑，确保参数的识别既符合 JS 直觉又兼顾 DSL 的灵活性。

### 1. 类型约定与评估

解析器对参数值的评估遵循“统一样律”：

* **引号即字符串**：任何被 `"`, `'`, 或 `` ` `` 包裹的内容均视为字符串常量（字面量）。解析器会自动处理内部转义。
* **标识符与变量**：不带引号且符合 JS 标识符格式（支持 Unicode）的内容视为变量名或路径。
  * 如果在 `scope` 中存在，则评估为其对应的值。
  * 如果不存在，默认评估为 `undefined`。
* **表达式运算**：支持复杂的 JS 表达式（如 `1 + 2`, `(a, b) => a + b`）和 JSON 风格的对象/数组。
* **字面量常量**：`true`, `false`, `null`, `undefined`, `NaN`, `Infinity` 等按 JS 语义处理，不作为标识符映射。

### 2. 参数分发规则

解析结果包含 `args` (位置参数数组) 和 `kvArgs` (命名参数键值对)。

* **显式命名 (`namedExcludePositional: true`)**：
  * 形如 `key=value` 的参数直接存入 `kvArgs.key`。
  * **默认不占用**位置索引位，确保位置参数索引的稳定性。
* **位置标识符自动映射 (`idAsName: true`)**：
  * 如果一个位置参数是简单的标识符（如 `user`）且成功解析为变量值，它会同时存入 `args[i]` 和 `kvArgs.user`。
* **未解析变量保护 (`preserveUnresolvedName`)**：
  * 当开启此选项且 JS 变量未定义时，解析器不再返回 `undefined`，而是原样返回原始字符串（例如 `hello-world` 这种原本会被视为减法表达式的文本）。
  * **重要**：被保护的未解析标识符**不会**触发 `idAsName` 映射，确保其仅作为字符串常量存在。

### 3. 结果简化 (Simplification)

当开启 `simplify` 选项（默认开启）时，解析器会根据以下规则收敛结果：

* **同值收敛**：如果结果中仅有两个 entry，一个是数字索引 `0`，另一个是字符串键（如 `name`），且它们的值**严格相等**，则直接返回该单值。
* **单值收敛**：如果没有任何命名参数且只有一个位置参数，返回该单值。
* **多值收敛**：如果没有命名参数但有多个位置参数，返回 `args` 数组。

---

## 处理器 (Processor) 协议规范

处理器允许在解析过程中拦截原始文本并按特定业务逻辑转换类型。

### 1. 处理器输入：`ArgContext`

每个参数在评估前都会封装为上下文对象传递给处理器：

```typescript
{
  isNamed: boolean;      // 是否是显式命名参数 (k=v)
  rawValue: string;      // 原始文本字符串
  name?: string;         // 显式指定的名称 (k)
  potentialId?: string;  // 潜在的标识符名称
  tokens: Token[];       // 词法标记序列
  index: number;         // 当前位置索引
  scope?: Record<string, any>;
  parser: Parser;        // Parser 实例，支持递归调用
}
```

### 2. 处理器输出与二次评估

处理器可以控制返回结果的类型和分发策略：

#### 形态 A：直接返回值 (Direct Value)

* 返回 **非字符串类型**（如数字、对象、null）：解析器将其作为**最终解析结果**，不再进行任何处理。
* 返回 **字符串类型**：解析器将其视为一个**“待评估的表达式字符串”**。解析器会对其再次应用上述的**类型约定**进行二次评估（例如：带引号则视为字符串常量，不带引号则尝试作为变量解析）。

#### 形态 B：带协议的结果对象 (`PROCESSOR_RESULT`)

返回 `{ [PROCESSOR_RESULT]: [value, name?, options?] }` 以获得精细控制：

* **`value`**：可以是最终值，也可以是待评估的表达式字符串（逻辑同上）。
* **`name` (建议名称)**：为参数建议一个 Key。**优先级**：显式名称 > 处理器建议名称 > 自动标识符映射。
* **`options.excludePositional`**：如果为 `true`，该参数即使是位置形态也不进入 `args` 数组且不增加索引。

---

## 内置处理器说明

### 1. ChoiceArgProcessor (选项选择器)

解析特殊的管道符语法：`|apple|pear:2:separator=";"`

* **行为**：自动将结果映射到命名参数 `choice` 中，且**不占用**位置索引。
* **结果**：返回解析后的配置对象。由于返回的是对象，它被视为**最终值**。

### 2. TemplateArgProcessor (模板处理器)

处理字符串插值：`msg="Hello {{user.name}}"`

* **行为**：使用 `PromptTemplate` 渲染。
* **核心约定**：如果渲染结果是纯文本且不带引号，它会自动为其包裹引号（使用 `JSON.stringify`）。
* **逻辑**：它返回的是一个带引号的**表达式字符串**。根据二次评估规则，它最终会被解析为字符串字面量常量，从而避免被误认为未定义的变量。

### 3. AIArgProcessor (AI 综合处理器)

组合处理器，依次尝试 `Choice` 和 `Template` 逻辑。

---

## 使用示例

### 基础解析

```typescript
const { args, kvArgs } = await parseCommand('login(user, token="abc")');
// args: [ userValue ], kvArgs: { user: userValue, token: "abc" }
```

### 自动简化

```typescript
const result = await parseObjectArguments('age', { age: 25 });
// 内部中间态: { 0: 25, age: 25 } -> 最终输出: 25
```
