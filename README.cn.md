## @isdk/ai-tool

抽象封装AI工具函数(ToolFunc),并提供一系列方便使用的 helper 函数.

注意: 所有的Tool Function 参数都是Obj参数，而不是位置参数

### ToolFunc

AI工具函数(ToolFunc), 将普通函数注册为`ToolFunc`.

所有本地执行的工具函数，在这里注册.

例如:

```ts
import {ToolFunc} from '@isdk/ai-tool'

// 直接注册一个函数
ToolFunc.register({
  name: 'add',
  decription: 'return a+b',
  params: {"a": {type: "number"}, b: {type: "number"}},
  result: 'number',
  func: ({a, b}: {a: number, b: number}) => a+b
})

console.log('return', ToolFunc.runSync('add', {a: 1, b: 2}))
// return 3

```

* `func`: 执行的工具函数主体
* `name`: 工具函数的名称
* `params`: 工具函数的参数描述schema
* `result`: 工具函数返回结果类型
* `scope`: 作用域
* `description`: 工具函数说明
* `setup`: 将在ctor ToolFunc实例的时候被执行
* `depends`: `{[name: string]: ToolFunc}`, 放在这里的将会被自动注册


### ServerTools(ToolFunc)

服务器端的AI工具函数.

注: 如果手工开发服务器,那么服务器上至少要两个API入口，一个API用于获得服务器上的所有tools，另一个API执行指定的tool.
未来再加一个EventSource API入口，感知tool注册变动。

所有需要暴露给服务器的，注册在这里，实质就是ToolFunc

* 增加 `static toJSON()` 导出所有的服务API定义

特点： 允许导出func string,使得服务器端函数功能可以迁移到本地执行。

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

### ClientTools(ToolFunc)

用于调用远程服务器上的AI工具函数(ServerTools).
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

~~stream 参数~~(已经废弃,使用`isStream()`方法代替,这样更加灵活,因为后面的ResAPI中会有多个方法,有的支持流,有的不支持)加上,但是没有想好,如何在 ClientTools 上使用,因为ClientTools是抽象的,而stream需要有具体的值.
除非我这里约定为 Object stream, 一次发送一个object. 这样才能在 ClientTools 实现流.

另外如果是stream,是否能固化headers为:

```js
  headers.Connection = 'keep-alive' // 已加上
  headers.Accept = 'text/event-stream' // 这个可能不必要
```

如果是stream,则func直接返回res,留待后代处理.

### ResServerTools

TODO: 需要约定方法是否为stream?,而不是Func是否为stream.

基于资源CRUD的ServerTools, 资源是ToolFunc的名称。如果是资源Func,那么就会存在如下的(可选的)方法:

* GET /api/res/[resID]: 获取资源 `get({_req, _res, id, options?})`
* GET /api/res: 获取资源列表      `list({_req, _res, options?})`
* POST /api/res: 创建资源         `post({_req, _res, id, options?})`
* PUT /api/res/[resID]: 更新资源   `put({_req, _res, id, options?})`
* DELETE /api/res/[resID]: 删除资源 `delete({_req, _res, id, options?})`

约定的params:

* action: 'res' 则表示是资源函数

传入的参数在某些方法中可能会有`id`和`options`

RES基本都是约定,可以没有实质的类?还是需要一个类,来告诉后代get,list,post,put,delete方法的存在?

新增约定，以`$`打头的方法为供客户端调用的自定义资源方法method, 然后它们的HTTP Method统一为`POST`

```ts
class TestResTool extends ResServerTools {
  items: any = {}
  params: FuncParams = {
    'id': {type: 'number'},
    'val': {type: 'any'},
  }
  $customMethod({id}: ResServerFuncParams) {
    if (id) {
      const item = this.items[id]
      if (!item) {
        throw new NotFoundError(id, 'res')
      }
      return {name: 'customMethod', id, item}
    }
  }
  get({id}: ResServerFuncParams) {
    if (id) {
      const item = this.items[id]
      if (!item) {
        throw new NotFoundError(id, 'res')
      }
      return item
    }
  }
  post({id, val}: ResServerFuncParams) {
    if (id !== undefined && val !== undefined) {
      this.items[id] = val
      return {id}
    } else {
      throwError('id or val is undefined')
    }
  }
  list() {
    return Object.keys(this.items)
  }
  delete({id}: ResServerFuncParams) {
    if (id) {
      const item = this.items[id]
      if (item === undefined) {
        throw new NotFoundError(id, 'res')
      }
      delete this.items[id]
      return {id}
    }
  }
}
ResServerTools.apiRoot = apiRoot
const res = new TestResTool('res')
res.register()
```

在Server中路由的参考实现

```ts
const method = request.method
if (method === 'GET' || method == 'DELETE') {
  params = (request.query as any).p
  if (params) {
    params = JSON.parse(params)
  } else {
    params = {}
  }
} else {
  params = request.body;
  if (typeof params === 'string') {params = JSON.parse(params)}
}
params._req = request.raw
params._res = reply.raw
if (id !== undefined) {params.id = id}

try {
  let result = await func.run(params)
  // 注意这里没有考虑 stream
  result = JSON.stringify(result)
  // console.log('🚀 ~ server.all ~ result:', result)

  reply.send(result)
  // reply.send({params: request.params as any, query: request.query, url: request.url})
} catch(e) {
  // console.log('🚀 ~ server.all ~ e:', e)
  if (e.code !== undefined) {
    if (e.stack) {e.stack = undefined}
    reply.code(e.code).send(JSON.stringify(e))
  } else if (e.message) {
    reply.code(500).send({error: e.message})
  } else {
    reply.code(500).send({error: e})
  }
}
```

### ResClientTools

基于资源CRUD的ClientTools, 资源是ToolFunc的名称。

根据ServerTools的加载项中的methods约定,生成对应ClientTools中的方法.

如果是调用自定义资源方法,那么去掉服务器中自定义方法的前缀(`$`)即可.

```ts
ResClientTools.apiRoot = apiRoot
await ResClientTools.loadFrom()

const resFunc = ResClientTools.getFunc(funcName)
if (resFunc) {
  let result = await res.post({id: '...', val: '...'})
  result = await res.put({id: '...', val: '...'})
  result = await res.get({id: '...'})
  result = await res.customMethod({id: '...'})
}
```

### SSE

1. `GET /api/event` `list` 服务器事件通道 (stream)
2. `POST /api/event` 订阅服务器事件
3. `DELETE /api/event` 取消订阅服务器事件
4. `PUT /api/event` 发布消息给服务器事件

也可以将其它三个方法合并为`POST /api/event`,或者自定义方法:

1. `GET /api/event` list 服务器事件通道 (stream)
2. `sub/unsub/publish`

#### EventClient

作用有2 主要功能为订阅与发布

* 订阅: 订阅服务器事件,并转发到本地客户端Event-Bus
* 发布: 发布消息到服务器

EventSource上的事件不支持RegExp(匹配)事件监听

1. 将本地事件转发到服务器,通过特定的`Post` API
2. 通过`GET`API 以SSE的方式接收服务器事件,并服务器事件转发到Event-Bus

* initEventSource(events): 告诉服务器只接收指定的events,如果events存在,否则接收全部
* subscribe(events): 订阅服务器SSE消息,并转发到Event-Bus
  * 注意区分是本地消息,还是来自服务器的消息,来自服务器的消息如果是forward的本地消息,就不要再次转发到Event-Bus,不然就要无限循环
* unsubscribe(events): 取消订阅服务器SSE消息
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

## Credit

* [@huggingface/jinja](https://github.com/huggingface/huggingface.js)
* [eventsource-parser](https://github.com/rexxars/eventsource-parser)
* [async-sema](https://github.com/vercel/async-sema)
* [modelfusion](https://github.com/vercel/modelfusion)
