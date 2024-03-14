## @isdk/ai-tool

所有的Tool Function 参数都是Obj参数，而不是位置参数
准备同时支持Obj参数和位置参数。

在API上如何支持传递位置参数?

`run?params=[id1,id2]`
`run?params={users:[id1,id2]}`

全部序列化成json，不好，只有位置参数才序列化，obj参数不用

`run`: 对象参数执行
`runWithPos`: 位置参数执行

为了适合服务器 内部 run/runSync 改为对象参数函数，原有函数更名`runWithPos/runWithPosSync`
对象参数函数为第一优先

run/runSync

发现jest下，`transformers.js`调用的是`onnxruntime-web`而不是`onnxruntime-node`
这是因为没有装`onnxruntime-node`! `onnxruntime-node`无法在bun下使用，报告错误:https://github.com/oven-sh/bun/issues/4619
bun只能在`onnxruntime-web`下使用，不过有一个bug`wasm does not work on node right now with multiple threads`，需要workaround:
https://github.com/oven-sh/bun/issues/7877

```ts
import * as ONNX_NODE from 'onnxruntime-node';
const ONNX = (ONNX_NODE as any).default ?? ONNX_NODE;
// wasm does not work on node right now with multiple threads
ONNX.env.wasm.numThreads = 1;
```
