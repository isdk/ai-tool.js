# Textify - 文本化工具详细说明

`textify` 是一个将 JavaScript 对象、数组等数据结构转换为易读、类 YAML 格式字符串的工具。它在保持 YAML 极简风格的同时，引入了智能的行内化决策。

## 核心设计理念

### 1. 智能行内化 (Inline Style / Flow Style)

该工具会根据内容的复杂度自动决定是采用“块状结构 (Block Style)”还是“行内化结构 (Flow Style)”。

* **判定标准**：默认情况下，如果一个对象或数组序列化后的字符数 $\le 40$ 且不含换行符，它将自动变为行内化形式（如 `{a: 1, b: 2}`）。
* **一票否决原则**：只要内容中包含换行符（如多行字符串），该项及其所有祖先级容器都将被强制回退到块状模式，以保证视觉结构的清晰。

### 2. 混合模式 (Mixed Mode)

这是 `textify` 最强大的特性之一。在处理深层嵌套数据时，它会自底向上逐层评估。

**示例：**
当父级对象由于内容过多不得不采用块状模式显示时，它的短小项（如短数组或对象）依然会保持行内化：

```yaml
- { id: 1, tags: [work, urgent] }
- id: 2
  long_msg: |
    这是多行内容
    强制开启块状模式
```

### 3. 字符串引用策略 (String Quoting)

为了避免生成无歧义的文本，`textify` 提供智能的引号策略：

* **自动引号 (auto)**：当字符串内容包含特殊字符（如 `:`, `#`, `,`, `[`, `]`, `{`, `}`, `*`, `-`, `"`）、首尾包含空格、内容为保留字（`true`, `null` 等）或看起来像数字时，会自动包裹双引号并处理内部转义。
* **前缀感知**：仅当字符串开头与当前配置的 `arrayPrefix` 或 `objectPrefix` 冲突时才触发行首引号。

## 配置项详解

| 配置项 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `inlineStyle` | `string \| object` | `'auto'` | 行内化模式。可设置 `threshold` (阈值)、`spaceAfterSeparator` (逗号冒号后空格)、`spaceInBraces` (括号内空格) |
| `stringQuoting` | `string` | `'auto'` | 引用策略：`auto`, `always`, `never` |
| `indent` | `string \| number` | `'  '` | 缩进单位 |
| `arrayPrefix` | `string` | `'-'` | 数组项前缀 |
| `objectPrefix` | `string` | `'*'` | 对象键值对前缀 |
| `ensureNewLineForMultiline` | `boolean` | `false` | 若结果有多行，确保以换行符开头 |

## 路线图 (Roadmap)

### 待实现特性 (Upcoming)

* **紧凑嵌套式 (Dash-Dash Style)**:
    目前嵌套数组会产生“阶梯式”换行：

    ```yaml
    -
      - item
    ```

    未来计划支持更紧凑的 `dash-dash` 风格：

    ```yaml
    - - item
    ```

    *(注：实现该特性需要调整前缀对齐逻辑，确保多行内容依然能正确左对齐。)*

---

*最后更新：2024-05*
