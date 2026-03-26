[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / TextifyInlineOptions

# Interface: TextifyInlineOptions

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:20](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L20)

行内化详细配置

## Properties

### mode?

> `optional` **mode**: [`TextifyInlineStyleMode`](../type-aliases/TextifyInlineStyleMode.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:22](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L22)

模式 (默认：'auto')

***

### spaceAfterSeparator?

> `optional` **spaceAfterSeparator**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:26](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L26)

逗号和冒号后是否保留空格 (默认：true)

***

### spaceInBraces?

> `optional` **spaceInBraces**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:28](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L28)

括号/大括号内侧是否保留空格 (默认：false)

***

### threshold?

> `optional` **threshold**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:24](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L24)

自动行内化的字符长度阈值 (默认：40)
