# @isdk/ai-tool

A library for abstracting AI utility functions (`ToolFunc`), providing a series of convenient helper functions.

**Note:** All `ToolFunc` parameters are object-based, not positional.

## Installation

1. Install the package:

   ```bash
   npm install @isdk/ai-tool
   ```

## Usage

## ToolFunc

Register ordinary functions as `ToolFunc`.

### Example

```ts
import { ToolFunc } from '@isdk/ai-tool';

// Register a function directly
ToolFunc.register({
  name: 'add',
  description: 'Return the sum of a and b',
  params: { a: { type: 'number' }, b: { type: 'number' } },
  result: 'number',
  func: ({ a, b }: { a: number; b: number }) => a + b,
});

console.log('Result:', ToolFunc.runSync('add', { a: 1, b: 2 }));
// Result: 3
```

Properties

* `func`: The main body of the tool function.
* `name`: Name of the tool function.
* `params`: Parameter schema for the tool function.
* `result`: Return type of the tool function.
* `scope`: Scope of the function.
* `description`: Description of the tool function.
* `setup`: Executed during the construction of the ToolFunc instance.
* `depends`: Dependencies on other ToolFunc instances.

### ServerTools (extends ToolFunc)

Server-side AI tool functions.

**Features**

* Allows exporting the function body as a string for local execution.
* Provides a static `toJSON()` method to export all service API definitions.

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

Usage: Parameters are sent via query string for GET requests and in the body for POST requests.

### ClientTools (extends ToolFunc)

Used to call remote AI tool functions (ServerTools).

**Features**

* Supports loading all remote calls with static loadFromSync(items) and static async loadFrom().
* Prioritizes local execution over remote calls.

```ts
interface ClientFuncItem extends FuncItem {
  apiRoot?: string
  action?: 'get'|'post'
  fetchOptions?: any
}
```

### ResServerTools

Resource-based server tools, where resources are named ToolFunc.

#### Methods

* `GET /api/res/:id`: Get resource.
* `GET /api/res`: List resources.
* `POST /api/res`: Create resource.
* `PUT /api/res/:id`: Update resource.
* `DELETE /api/res/:id`: Delete resource.

#### Custom Methods

Methods prefixed with `$` are custom resource methods, accessible via `POST`.

Example

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

### ResClientTools

Resource-based client tools that generate methods based on ServerTools agreements.

Example

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

### SSE (Server-Sent Events)

Endpoints

* `GET /api/event`: List server event channel (stream).
* `POST /api/event`: Subscribe to server events.
* `DELETE /api/event`: Unsubscribe from server events.
* `PUT /api/event`: Publish messages to server events.

### EventClient

The `EventClient` component facilitates communication between the client and server through Server-Sent Events (SSE). Its primary responsibilities include subscribing to server events and publishing messages to the server.

#### Key Features

- **Subscription**: Subscribes to server events and forwards them to the local client's event bus.
- **Publication**: Publishes messages to the server.

#### EventClient Methods

- `initEventSource(events)`: Specifies which events to receive from the server. If `events` is not provided, all events are received.
- `subscribe(events)`: Subscribes to specified server events and forwards them to the local event bus.
  - Note: It's important to distinguish between local and server-originated messages. Server messages that were previously forwarded from local events should not be re-forwarded to avoid infinite loops.
- `unsubscribe(events)`: Cancels subscriptions to specified server events.
- `forwardEvent(events)`: Forwards specific local events to the server.
- `unforwardEvent(events)`: Stops forwarding specific local events to the server.

#### Considerations

- Local events that need to be forwarded to the server can be managed independently through the `forwardEvent` method.
- Event handling logic should be decoupled from the core functionality of `ToolFunc` to maintain flexibility and separation of concerns.

### EventServer

The `EventServer` component manages server-side event processing, including publishing and subscribing to events.

**Key Features**

- **Publishing**: Publishes events to clients via SSE.
- **Subscribing**: Manages subscriptions to events on the server side.

**Actions**

- `pub`: Publishes an SSE event.
- `sub`: Subscribes to server events.
- `unsub`: Unsubscribes from server events.

**Usage**

- Functions without an `act` or with only `events` specified are used for server-side event handling.
- Functions with an `act` define specific actions such as publishing, subscribing, or unsubscribing from events.

## Contribution

If you would like to contribute to the project, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file for guidelines on how to get started.

## License

The project is licensed under the MIT License. See the [LICENSE-MIT](./LICENSE-MIT) file for more details.

## Credit

* [@huggingface/jinja](https://github.com/huggingface/huggingface.js)
* [eventsource-parser](https://github.com/rexxars/eventsource-parser)
* [async-sema](https://github.com/vercel/async-sema)
* [modelfusion](https://github.com/vercel/modelfusion)
