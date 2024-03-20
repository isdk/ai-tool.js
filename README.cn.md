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

如果在Client和Server都要用到的，就在ToolFunc上注册，比如lruCache

另外，Client的API来自Server,应该有一个地方从server上获取所有的API.
调整结构，本地执行的在ToolFunc上，server的只不过是将所有的需要导出的API汇集在这里，注册在这里的才远程调用。

### ToolFunc

所有本地执行的，注册在这里

* func: 执行的工具函数主体
* name： 工具函数的名称
* params: 工具函数的参数描述schema
* result: 工具函数返回结果类型
* scope: 作用域
* description: 工具函数说明
* setup: 将在ctor ToolFunc实例的时候被执行
* depends: `{[name: string]: ToolFunc}`, 放在这里的将会被自动注册

### ServerTools

服务器端至少需要两个入口，一个获得所有tools api，另一个执行指定的tool api.
未来再加一个EventSource入口，感知tool注册变动。

所有需要暴露给服务器的，注册在这里，实质就是ToolFunc

* 增加 `static toJSON()` 导出所有的服务API定义

特点： 允许导出func,使得函数功能可以本地执行。

属性：

```ts
interface ServerFuncItem extends FuncItem {
  apiRoot?: string
  /**
   * API request method, can be 'get' or 'post'
   */
  action?: 'get'|'post'
  // Options for the Node.js fetch function
  fetchOptions?: any
  // Whether to allow exporting the func body itself, default to false
  allowExportFunc?: boolean
}
```

如果是`get`那么参数应该被放在query string(`p`): `p=${encodeURIComponent(JSON.stringify(objParams))}`
如果是`post`参数在body中，同样是json格式。

### ClientTools

所有的远程调用没有真正的执行体，都是统一的远程API调用。

* 增加 `static loadFromSync(items)` 加载所有的远程调用，如果有item上有func，那么就是server调用的本地化，还是注册在ClientTools上。
  * `static async loadFrom()` 如果没有items,那么从 `ClientTools.apiRoot` 上 fetch items. 所以是异步
* 本地执行优先：先找本地调用，没有再找远程调用

特有属性:

```ts
interface ClientFuncItem extends FuncItem {
  apiRoot?: string
  action?: 'get'|'post'
  fetchOptions?: any
}
```


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

### SSE

https://github.com/vercel/next.js/discussions/48427
https://michaelangelo.io/blog/server-sent-events
https://github.com/michaelangeloio/ts-sse/blob/main/examples/next-app/app/stream/route.ts

