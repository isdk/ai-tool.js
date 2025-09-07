# Guide: Server & Client ToolFunc Types

This guide provides a detailed description of the different `ServerTools` and `ClientTools` subclasses. It focuses on their specific purpose and how each one separates its business logic from the communication logic handled by the transport layer.

## 1. `ServerTools` / `ClientTools`

This is the most fundamental pair for client-server communication.

### `ServerTools`

- **Purpose:** To define a single, remotely callable function.
- **Business Logic:** Your code is placed entirely within the `func` property when the tool is defined. This function contains the logic you want to execute on the server.
- **Communication Logic:** This class has **no** communication logic. It is a simple container for your business logic. The transport layer is entirely responsible for receiving a network request and invoking the tool's `func`.

```typescript
// Business logic is self-contained in 'func'.
ServerTools.register({
  name: 'mySimpleTool',
  func: async (params) => {
    // ... your logic here ...
    return { success: true, ...params };
  },
});
```

### `ClientTools`

- **Purpose:** To act as a local proxy for a remote `ServerTools` instance.
- **Business Logic:** This class contains **no** business logic.
- **Communication Logic:** When you call `.run()` on a `ClientTools` instance, its only job is to delegate the call to the configured **client transport**. The transport handles all aspects of serialization, network requests, and response handling.

---

## 2. `RpcMethodsServerTool` / `RpcMethodsClientTool`

This pair is designed to group multiple related functions into a single, cohesive tool, like methods on a class.

### `RpcMethodsServerTool`

- **Purpose:** To serve as a container for multiple, related functions under a single tool name.
- **Business Logic:** You define your logic in class methods prefixed with a `$` (e.g., `$add`, `$subtract`). Each method represents a distinct operation.
- **Communication Logic:** This class contains a small amount of **routing logic**. Its main `func` (which is invoked by the transport) acts as a simple dispatcher. It inspects the `act` parameter from the incoming request and calls the corresponding internal `$` method. It does not handle any direct network communication.

```typescript
// Business logic is in the $add and $subtract methods.
class CalculatorTool extends RpcMethodsServerTool {
  $add({ a, b }) { return a + b; }
  $subtract({ a, b }) { return a - b; }
}

// The main 'func' inherited from the base class handles the routing.
new CalculatorTool('calculator').register();
```

### `RpcMethodsClientTool`

- **Purpose:** To be a user-friendly proxy for a remote `RpcMethodsServerTool`.
- **Business Logic:** None.
- **Communication Logic:** This class has more advanced communication logic than a basic `ClientTools` instance. When it's created, it dynamically adds proxy methods to itself (e.g., `.add()`, `.subtract()`). When you call one of these proxy methods, it automatically constructs the correct request body (e.g., `{ act: '$add', a, b }`) before passing it to the client transport for sending.

---

## 3. `ResServerTools` / `ResClientTools`

This is the highest-level abstraction, designed for creating resource-oriented APIs that follow RESTful conventions.

### `ResServerTools`

- **Purpose:** To provide a conventional, resource-oriented (CRUD) API.
- **Business Logic:** You place your logic in conventionally-named methods like `get`, `list`, `post`, `put`, and `delete`.
- **Communication Logic:** This class has the most advanced **routing logic**. It is designed to work with a transport that can provide HTTP context (like the verb and URL parameters). It maps HTTP request details (e.g., `GET /api/users/123`) to the appropriate business logic method (e.g., `get({ id: '123' })`). It still relies on the transport to handle the actual network connection.

```typescript
// Business logic is in the get, list, etc. methods.
class UserResource extends ResServerTools {
  get({ id }) { /* ... find user by id ... */ }
  list() { /* ... return all users ... */ }
}

// The tool's internal logic maps HTTP requests to these methods.
new UserResource('users').register();
```

### `ResClientTools`

- **Purpose:** To be an intuitive proxy for a remote `ResServerTools` instance.
- **Business Logic:** None.
- **Communication Logic:** It provides a conventional client-side API (e.g., `.get()`, `.list()`). Calling one of these methods signals to the client transport *how* to construct the underlying HTTP request. For example, calling `userClient.get({ id: '123' })` instructs the transport to make an `HTTP GET` request to the appropriate URL (`/api/users/123`).
