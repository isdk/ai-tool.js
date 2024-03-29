## @isdk/ai-tool

所有的Tool Function 参数都是Obj参数，而不是位置参数
准备同时支持Obj参数和位置参数。

在API上如何支持传递位置参数?

`run?p=[id1,id2]`
`run?p={users:[id1,id2]}`

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

EventSource`addEventListener(evtType: string, listener)` 只能接收指定的事件类型, 而`EventSource`的`onmessage`则只能接收无名事件。
所以,只能约定发送无名事件，在data中传递事件类型(data.event)。
它的作用实质是中转器,在本地事件与远程事件之间中转。

~~目前可能潜在的问题,因为使用的是自定义的无名事件,导致所有的服务器事件都下发到客户端,在客户端做的过滤,可能有性能问题.~~
已经搞定用`addEventListener`

```ts
const sse = new EventSource('/stream');
sse.addEventListener('test', (e) =>{
  // event.type 总是 test
})

sse.onmessage = (e) => {
  // event.type 总是 message
  // event.data
  const event = JSON.parse(e.data);
  const eventType = event.event;
  const data = event.data
}

class EventSourceEx extends EventSource {
  //  没有作用!
  dispatchEvent(e) {
    console.log('TCL:: ~ dispatchEvent e:', arguments);
    super.dispatchEvent.apply(this, arguments)
  }
}

```

#### EventClient

作用有2

1. 将本地事件转发到服务器,通过特定的`Post` API
2. 通过`GET`API 以SSE的方式接收服务器事件,并服务器事件转发到Event-Bus

* initEventSource(events): 告诉服务器只接收指定的events,如果events存在,否则接收全部
* subscribeSSE(events): 订阅服务器SSE消息,并转发到Event-Bus
  * 注意区分是本地消息,还是来自服务器的消息,来自服务器的消息如果是forward的本地消息,就不要再次转发到Event-Bus,不然就要无限循环
* unsubscribeSSE(events): 取消订阅服务器SSE消息
* forwardEvent(events): 将指定的本地事件(通过本地订阅)转发到服务器
* unforwardEvent(events): 取消转发指定的本地事件

本地事件需要转发到服务器上的有哪些?是和订阅服务器的事件一样?
现在是可以不一样,单独通过forwardEvent来决定要转发的本地事件

还有在哪里启用事件化? ToolFunc?  还是EventClient?

我以为是在ToolFunc,这样所有的ToolFunc都支持事件! 但是作为一个基类,ToolFunc应该不关心事件,只关心执行体。

这样,还是在我的ai-tools上执行初始化的时候,加载核心函数,以及将ToolFunc事件化. 这样基类具有更大的灵活性.

#### EventServer

func: 没有act,或者只传入events则是供服务器使用,有events则是限制在events范围内.

act有:

* pub:  发布sse事件
* sub: 转发服务器上的事件
* unsub: 撤销转发服务器上的事件
