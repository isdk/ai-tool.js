[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / TextifyStringQuoting

# Type Alias: TextifyStringQuoting

> **TextifyStringQuoting** = `"auto"` \| `"always"` \| `"never"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:15](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L15)

字符串引用策略 (是否用引号包裹)
- 'auto': 遇到特殊字符、保留字或数字外观时自动加引号
- 'always': 所有字符串始终加引号
- 'never': 尽可能不加引号
