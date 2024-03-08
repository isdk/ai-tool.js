## @isdk/ai-tool

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
