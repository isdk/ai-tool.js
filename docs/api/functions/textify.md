[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / textify

# Function: textify()

> **textify**(`data`, `options?`): `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/textify.ts:438](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/textify.ts#L438)

将任意数据转换为易读的类 YAML 文本

## Parameters

### data

`any`

要转换的数据

### options?

[`TextifyOptions`](../interfaces/TextifyOptions.md)

配置选项

## Returns

`string`

格式化后的文本字符串

## Example

```ts
const text = textify([{ name: 'Alice', age: 20 }, { name: 'Bob' }]);
// 输出:
// - name: Alice
//   age: 20
// - name: Bob
```
