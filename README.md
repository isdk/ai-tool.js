# @isdk/ai-tool

A library for abstracting AI utility functions (`ToolFunc`), providing a series of convenient helper functions.

**Note:** All `ToolFunc` parameters are object-based, not positional.

## Overview

`ToolFunc` is a robust framework for creating, managing, and executing reusable functions within a JavaScript/TypeScript application. It provides a structured way to define functions with rich metadata, manage dependencies, and access them globally through a static registry. This system is designed to make functions self-documenting, modular, and easily discoverable, which is ideal for building complex tools, AI agent functions, or extensible plugin systems.

## Key Features

- **Rich Metadata**: Define functions with names, descriptions, titles, tags, and detailed parameter information.
- **Static Registry**: A global registry allows any part of an application to access and execute functions by name without needing a direct instance.
- **Dependency Management**: Declare dependencies on other `ToolFunc` instances, which are automatically registered when the parent function is registered.
- **Lifecycle Hooks**: A `setup` hook provides a way to run initialization logic when a `ToolFunc` instance is created.
- **Flexible Parameter Handling**: Supports both named-parameter objects and positional arguments for function execution.
- **Aliasing and Tagging**: Assign aliases for alternative naming and tags for grouping and querying related functions.
- **Streaming & Async Support**: Built-in support for functions that can stream output and declare asynchronous capabilities like cancellation.

## Installation

1. Install the package:

   ```bash
   npm install @isdk/ai-tool
   ```

## Core Concepts

### 1. Defining a `ToolFunc`

You create a function by instantiating the `ToolFunc` class with a configuration object (`FuncItem`). The only required properties are a `name` and a `func` implementation.

```typescript
import { ToolFunc } from './src/tool-func';

const sayHello = new ToolFunc({
  name: 'sayHello',
  description: 'Prints a greeting to the console.',
  title: 'Say Hello',
  params: {
    personName: { type: 'string', description: 'The name of the person to greet.', required: true }
  },
  func: (params) => {
    console.log(`Hello, ${params.personName}!`);
    return `Greeted ${params.personName}`;
  }
});
```

### 2. Registration

For a `ToolFunc` to be globally accessible, it must be registered. Registration adds the function to a static `ToolFunc.items` map.

```typescript
// Register the instance you created
sayHello.register();

// You can also define and register in one go
ToolFunc.register({
    name: 'sayGoodbye',
    func: () => console.log('Goodbye!')
});
```

Once registered, the function can be accessed from anywhere in the application.

### 3. Execution

You can execute registered functions using the static `run` or `runSync` methods. The framework automatically handles passing parameters correctly.

```typescript
// Execute asynchronously
async function greet() {
  const result = await ToolFunc.run('sayHello', { personName: 'Alice' });
  console.log(result); // Outputs: "Greeted Alice"
}

// Execute synchronously
ToolFunc.runSync('sayGoodbye'); // Outputs: "Goodbye!"
```

---

## Advanced Usage

### Dependencies (`depends`)

Use the `depends` property to ensure that other required `ToolFunc` instances are registered automatically. This is key to building modular tools.

```typescript
const helperFunc = new ToolFunc({ name: 'helper', func: () => 'world' });

const mainFunc = new ToolFunc({
  name: 'main',
  depends: {
    // This ensures helperFunc is registered when mainFunc is.
    h: helperFunc,
  },
  func: function() { // `this` is the ToolFunc instance
    const message = this.runSync('h');
    return `Hello, ${message}`;
  }
});

mainFunc.register(); // Both mainFunc and helperFunc are now registered.

ToolFunc.runSync('main'); // Returns "Hello, world"
```

### Lifecycle Hook (`setup`)

The `setup` method is called during the constructor's execution, allowing you to perform initialization logic on the instance.

```typescript
const myFunc = new ToolFunc({
  name: 'myFunc',
  customState: 'initial',
  setup() {
    // `this` refers to the ToolFunc instance
    this.customState = 'configured';
    console.log('Instance has been set up!');
  },
  func: function() {
    return this.customState;
  }
});

console.log(myFunc.runSync()); // Outputs: 'configured'
```

### Streaming Output (`stream` and `isStream`)

To create a function that can optionally stream its output:
1.  Set `stream: true` in its definition. This marks it as *capable* of streaming.
2.  The `isStream(params)` method determines if a *specific call* should be streamed. The default logic checks for a `stream` parameter in the function's declaration and the runtime arguments.

```typescript
const streamableTask = new ToolFunc({
  name: 'streamableTask',
  stream: true, // 1. Mark as stream-capable
  params: {
    // 2. Declare a 'stream' parameter so the isStream method can check it
    stream: { type: 'boolean', description: 'Whether to stream the output.' }
  },
  func: function(params) {
    if (this.isStream(params)) {
      // Return a ReadableStream for streaming output
      return new ReadableStream(/* ... */);
    } else {
      // Return a regular value
      return 'Completed';
    }
  }
});
```

### Aliases and Tags

Use `alias` to provide alternative names and `tags` to categorize functions.

```typescript
ToolFunc.register({
  name: 'listUsers',
  alias: ['ls', 'getUsers'],
  tags: ['users', 'read'],
  func: () => [/* ... */]
});

// These are now equivalent:
const users1 = ToolFunc.get('listUsers');
const users2 = ToolFunc.get('ls');

// You can retrieve functions by tag:
const userReaders = ToolFunc.getAllByTag('users');
```

## ServerTools (extends ToolFunc)

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

## ClientTools (extends ToolFunc)

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

## ResServerTools

Resource-based server tools, where resources are named ToolFunc.

### Methods

* `GET /api/res/:id`: Get resource.
* `GET /api/res`: List resources.
* `POST /api/res`: Create resource.
* `PUT /api/res/:id`: Update resource.
* `DELETE /api/res/:id`: Delete resource.

### Custom Methods

Methods prefixed with ` are custom resource methods, accessible via `POST`.

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

## ResClientTools

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

## Transports (RPC)

The new `transports` layer decouples `ClientTools` and `ServerTools` from the underlying communication protocol (like HTTP), making the RPC mechanism more flexible and extensible. It defines clear interfaces for both client and server transports.

### Server-Side Usage (`FastifyServerToolTransport`)

On the server, you can use `FastifyServerToolTransport` to expose your `ServerTools` over a Fastify web server.

**Example:**

```ts
// server.ts
import { ServerTools } from '@isdk/ai-tool';
import { FastifyServerToolTransport } from '@isdk/ai-tool/transports';

// 1. Register your tools as usual
ServerTools.register({
  name: 'calculator',
  isApi: true,
  func: ({ a, b }: { a: number; b: number }) => a + b,
});

// 2. Setup the server transport and mount the tools
const serverTransport = new FastifyServerToolTransport();
serverTransport.mount(ServerTools, '/api'); // Expose tools under the /api prefix

// 3. Start the server
serverTransport.start({ port: 3000 });
```

### Client-Side Usage (`HttpClientToolTransport`)

On the client, you use `HttpClientToolTransport` to connect to the server and execute remote tools.

**Example:**

```ts
// client.ts
import { ClientTools } from '@isdk/ai-tool';
import { HttpClientToolTransport } from '@isdk/ai-tool/transports';

async function main() {
  const apiRoot = 'http://localhost:3000/api';

  // 1. Setup the client transport
  const clientTransport = new HttpClientToolTransport(apiRoot);
  ClientTools.setTransport(clientTransport);

  // 2. Load tool definitions from the server
  await ClientTools.loadFrom();

  // 3. Get the tool and run it
  const calculatorTool = ClientTools.get('calculator');
  const result = await calculatorTool.run({ a: 40, b: 2 });

  console.log(result); // 42
}

main();
```

## SSE (Server-Sent Events)

Endpoints

* `GET /api/event`: List server event channel (stream).
* `POST /api/event`: Subscribe to server events.
* `DELETE /api/event`: Unsubscribe from server events.
* `PUT /api/event`: Publish messages to server events.

## EventClient

The `EventClient` component facilitates communication between the client and server through Server-Sent Events (SSE). Its primary responsibilities include subscribing to server events and publishing messages to the server.

### EventClient Features

- **Subscription**: Subscribes to server events and forwards them to the local client's event bus.
- **Publication**: Publishes messages to the server.

### EventClient Methods

- `initEventSource(events)`: Specifies which events to receive from the server. If `events` is not provided, all events are received.
- `subscribe(events)`: Subscribes to specified server events and forwards them to the local event bus.
  - Note: It's important to distinguish between local and server-originated messages. Server messages that were previously forwarded from local events should not be re-forwarded to avoid infinite loops.
- `unsubscribe(events)`: Cancels subscriptions to specified server events.
- `forwardEvent(events)`: Forwards specific local events to the server.
- `unforwardEvent(events)`: Stops forwarding specific local events to the server.

### Considerations

- Local events that need to be forwarded to the server can be managed independently through the `forwardEvent` method.
- Event handling logic should be decoupled from the core functionality of `ToolFunc` to maintain flexibility and separation of concerns.

## EventServer

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
