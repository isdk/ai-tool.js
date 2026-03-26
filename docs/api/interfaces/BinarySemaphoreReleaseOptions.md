[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / BinarySemaphoreReleaseOptions

# Interface: BinarySemaphoreReleaseOptions

Defined in: @isdk/util/dist/index.d.ts:673

释放信号量时的选项。

## Indexable

\[`n`: `string`\]: `any`

允许扩展其他自定义选项。

## Properties

### token?

> `optional` **token**: `any`

Defined in: @isdk/util/dist/index.d.ts:677

可选的令牌。如果使用了自定义的 `initFn`，释放时应归还对应的令牌。
