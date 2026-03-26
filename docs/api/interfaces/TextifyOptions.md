[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / TextifyOptions

# Interface: TextifyOptions

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:53](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L53)

文本化配置选项

## Description

该工具旨在生成易于人类阅读的、类 YAML 格式的文本表示。

**核心渲染规则：**
1. **对象数组 (Object Array)**: 采用 YAML 风格的紧凑模式。
   当对象作为数组项时，会忽略对象自身的 `objectPrefix`，并将第一个键值对紧跟在数组前缀 `-` 后。
   示例：`[{a: 1, b: 2}]` -> `- a: 1\n  b: 2`

2. **嵌套数组 (Nested Array)**: 采用阶梯式 (Block Style)。
   内层数组会从新的一行开始，并相对于父级缩进。
   示例：`[[1, 2]]` -> `-\n  - 1\n  - 2`

3. **多行字符串对齐**: 自动计算前缀和键名的长度，确保多行文本的后续行与首行左对齐。

**高级特性：**
- **智能行内化 (Inline Style)**: 自动将短对象或数组转换为 `{a: 1}` 格式。
- **混合模式 (Mixed Mode)**: 根据内容长度自动决定嵌套项是行内还是块状显示。
- **自动引用 (Auto Quoting)**: 智能识别需要引号包裹的字符串（包含特殊字符、保留字或数字外观）。

## Properties

### arrayPrefix?

> `optional` **arrayPrefix**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:57](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L57)

数组项前缀 (默认：'-')

***

### ensureNewLineForMultiline?

> `optional` **ensureNewLineForMultiline**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:66](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L66)

是否确保多行字符串强制换行
(默认：false)

***

### indent?

> `optional` **indent**: `string` \| `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:55](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L55)

缩进单位，可以是空格数或具体的字符串 (默认：2 个空格)

***

### inlineStyle?

> `optional` **inlineStyle**: [`TextifyInlineStyleMode`](../type-aliases/TextifyInlineStyleMode.md) \| [`TextifyInlineOptions`](TextifyInlineOptions.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:73](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L73)

行内化配置
- 'auto': 基于阈值自动切换 (默认)
- 'always': 强制行内化 (遇到换行符除外)
- 'never': 强制块状化

***

### maxDepth?

> `optional` **maxDepth**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:61](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L61)

最大递归深度，防止过深 (默认：10)

***

### objectPrefix?

> `optional` **objectPrefix**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:59](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L59)

对象键值对前缀 (默认：'*')

***

### stringQuoting?

> `optional` **stringQuoting**: [`TextifyStringQuoting`](../type-aliases/TextifyStringQuoting.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:80](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L80)

字符串引用策略 (是否加双引号)
- 'auto': 遇到特殊字符 (:, #, [, ], {, }, *, -, ")、首尾空格、保留字或数字外观时自动加引号 (默认)
- 'always': 所有字符串始终加引号
- 'never': 除非结构必须，否则不加引号
