import { env, pipeline, cos_sim } from '@xenova/transformers';
import path from 'path';
// import { fileURLToPath } from 'url';
// import * as ONNX_NODE from 'onnxruntime-node';
import * as ONNX_WEB from 'onnxruntime-web';

export {env, pipeline, cos_sim}

// Currently the Bun can not load onnxruntime-node https://github.com/oven-sh/bun/issues/4619：
if (typeof Bun !== "undefined") {
  console.log("Bun detected, using onnxruntime-web");
  const ONNX = env.backends.onnx = ONNX_WEB as any;
  // wasm does not work on node right now with multiple threads
  // https://github.com/oven-sh/bun/issues/7877
  ONNX.env.wasm.numThreads = 1;
}

// const ONNX = (ONNX_NODE as any).default ?? ONNX_NODE;

// wasm does not work on node right now with multiple threads
// ONNX.env.wasm.numThreads = 1;

// const ___filename = fileURLToPath(import.meta.url);
// const ___dirname = path.dirname(___filename);
// const resourcesPath = (process as any).resourcesPath || ___dirname;
const cachePath = path.join(__dirname, '..', '.cache')
env.cacheDir = cachePath
