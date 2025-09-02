# @isdk/ai-tool

一个功能强大的 TypeScript 框架，用于创建、管理和通信模块化函数。它非常适合用于构建 AI 代理工具、后端服务以及具有清晰、解耦架构的可扩展插件系统。

## 核心功能

- **模块化与可继承的工具:** 以结构化的方式定义函数，具有清晰的类继承体系 (`ToolFunc` -> `ServerTools` -> `ResServerTools`)。
- **可插拔 RPC 传输:** 将您的业务逻辑与网络层解耦。使用 HTTP、IPC 或任何自定义协议在客户端和服务器之间进行通信。
- **可插拔 PubSub 传输:** 为通知、实时更新等功能创建实时的双向事件总线。内置了对 SSE (Server-Sent Events) 和 Electron IPC 的实现。
- **全局注册表:** 从应用程序的任何地方轻松访问任何已注册的函数。

## 安装

```bash
npm install @isdk/ai-tool
```

## 核心架构：工具继承体系

`@isdk/ai-tool` 构建于一个可扩展的类的基础之上。理解它们的层次结构是有效使用该库的关键。

### 设计哲学：静态与实例

`ToolFunc` 的一个关键设计原则是静态类和实例之间的角色分离：

- **作为管理者的静态类:** `ToolFunc` 的静态部分（例如 `ToolFunc.register`, `ToolFunc.run`, `ToolFunc.get`）充当全局的**注册表**和**执行器**。它管理所有工具的定义，允许您的应用程序的任何部分按名称发现和运行工具，而无需直接引用工具的实例。

- **作为工具的实例:** 一个实例 (`new ToolFunc(...)`) 代表一个单一的、具体的**工具**。它持有实际的函数逻辑、其所有的元数据（名称、描述、参数）以及任何内部状态。

这种分离提供了两全其美的优势：既有用于定义单个工具的面向对象封装的能力，又有用于管理和执行它们的全局可访问服务的便利性。

### 工具继承体系

该库遵循一个清晰的继承路径，在每个层级添加专门的功能。关于每种类型的详细分类以及它们如何分离业务和通信逻辑，请参阅 [**服务器与客户端工具指南**](./docs/server_client_tools.md)。

**服务器端继承关系:**
`ToolFunc` -> `ServerTools` -> `RpcMethodsServerTool` -> `ResServerTools`

- **`ToolFunc`**: 任何函数的基础，包含核心逻辑和元数据。更多详情请参阅 [ToolFunc 指南](./docs/toolFunc.md)。
- **`ServerTools`**: 继承自 `ToolFunc`，使其能被远程客户端发现和调用。
- **`RpcMethodsServerTool`**: 继承自 `ServerTools`，允许单个工具暴露多个方法（例如，一个带有 `add` 和 `subtract` 方法的 `Math` 工具）。
- **`ResServerTools`**: 继承自 `RpcMethodsServerTool`，用于自动提供面向资源 (CRUD) 的接口。

**客户端继承关系:**
客户端存在一个平行的继承体系，旨在无缝调用服务器端工具。
`ToolFunc` -> `ClientTools` -> `RpcMethodsClientTool` -> `ResClientTools`

## 使用传输层进行客户端-服务器 RPC 通信

该框架在客户端-服务器设置中大放异彩，允许您像调用本地函数一样调用后端函数。

### 服务器端示例

使用 `ServerTools` 定义后端函数，并使用 `FastifyServerToolTransport` 通过 HTTP 将其暴露。

```typescript
// server.ts
import { ServerTools, FastifyServerToolTransport } from '@isdk/ai-tool';

// 定义一个可以远程调用的工具
ServerTools.register({
  name: 'getUserProfile',
  params: { id: { type: 'string' } },
  func: async ({ id }: { id: string }) => {
    return { id, name: 'Jane Doe', email: 'jane.doe@example.com' };
  },
});

// 创建一个传输实例并在 '/api' 前缀下挂载工具
const serverTransport = new FastifyServerToolTransport();
serverTransport.mount(ServerTools, '/api');

// 启动服务器
serverTransport.start({ port: 3000 });
```

### 客户端示例

`mount` 方法一步即可完成设置传输和从服务器加载工具定义。

```typescript
// client.ts
import { ClientTools, HttpClientToolTransport } from '@isdk/ai-tool';

async function main() {
  const apiRoot = 'http://localhost:3000/api';

  // 1. 设置客户端传输并挂载工具
  const clientTransport = new HttpClientToolTransport(apiRoot);
  await clientTransport.mount(ClientTools);

  // 2. 获取远程工具并运行它
  const getUserProfile = ClientTools.get('getUserProfile');
  const profile = await getUserProfile.run({ id: '123' });

  console.log(profile);
}
main();
```

> 若想深入了解传输层的工作原理，请参阅 [传输层指南](./docs/transport.md)。

## 使用 PubSub 实现实时事件

`@isdk/ai-tool` 包含一个强大的事件系统，用于实时通信，构建于可插拔的 PubSub 传输层之上。

### 快速示例: SSE (Server-Sent Events)

**服务器端:**
```typescript
// server.ts (新增部分)
import { EventServer, SseServerPubSubTransport, eventServer } from '@isdk/ai-tool';

// 为 EventServer 设置 PubSub 传输
EventServer.setPubSubTransport(new SseServerPubSubTransport());
eventServer.register(); // 注册默认的事件工具

// 现在您可以从后端的任何地方发布事件
setInterval(() => {
  EventServer.publish('server-time', { time: new Date().toISOString() });
}, 2000);
```

**客户端:**
```typescript
// client.ts (新增部分)
import { EventClient, SseClientPubSubTransport, eventClient, backendEventable } from '@isdk/ai-tool';

// 为 EventClient 设置 PubSub 传输
EventClient.setPubSubTransport(new SseClientPubSubTransport());

// 使客户端具备事件处理能力并注册
backendEventable(EventClient);
eventClient.setApiRoot('http://localhost:3000/api'); // 您的 API 根路径
eventClient.register();

// 订阅并监听服务器事件
await eventClient.subscribe('server-time');
eventClient.on('server-time', (data) => {
  console.log('来自服务器的实时时间:', data.time);
});
```

> 更多详细示例，包括 Electron IPC 传输，请参阅 [**实时事件 (PubSub) 指南**](./docs/pubsub.md)。

## 贡献

如果您想为项目做出贡献，请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md) 文件以获取有关如何开始的指南。

## 许可证

该项目根据 MIT 许可证授权。有关更多详细信息，请参阅 [LICENSE-MIT](./LICENSE-MIT) 文件。

## 致谢

本项目的灵感来自于多个优秀的开源项目，并使用了它们的代码：

* [@huggingface/jinja](https://github.com/huggingface/huggingface.js)
* [eventsource-parser](https://github.com/rexxars/eventsource-parser)
* [async-sema](https://github.com/vercel/async-sema)
* [modelfusion](https://github.com/vercel/modelfusion)