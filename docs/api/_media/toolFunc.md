# `ToolFunc`: A Framework for Reusable Functions

## Overview

`ToolFunc` is a robust framework for creating, managing, and executing reusable functions within a JavaScript/TypeScript application. It provides a structured way to define functions with rich metadata, manage dependencies, and access them globally through a static registry. This system is designed to make functions self-documenting, modular, and easily discoverable, which is ideal for building complex tools, AI agent functions, or extensible plugin systems.

## Key Features

- **Rich Metadata**: Define functions with names, descriptions, titles, tags, and detailed parameter information.
- **Static Registry**: A global registry allows any part of an application to access and execute functions by name without needing a direct instance.
- **Dependency Management**: Declare dependencies on other `ToolFunc` instances, which are automatically registered when the parent function is registered.
- **Lifecycle Hooks**: A `setup` hook provides a way to run initialization logic when a `ToolFunc` instance is created.
- **Flexible Parameter Handling**: Supports both named-parameter objects and positional arguments for function execution.
  - Note: All `ToolFunc` parameters are object-based, not positional.
- **Aliasing and Tagging**: Assign aliases for alternative naming and tags for grouping and querying related functions.
- **Streaming & Async Support**: Built-in support for functions that can stream output and declare asynchronous capabilities like cancellation.

---

## Core Concepts

### Design Philosophy: Static vs. Instance

A key design principle in `ToolFunc` is the separation of roles between the static class and its instances:

- **The Static Class as Manager:** The static side of `ToolFunc` (e.g., `ToolFunc.register`, `ToolFunc.run`, `ToolFunc.get`) acts as a global **registry** and **executor**. It manages all tool definitions, allowing any part of your application to discover and run tools by name without needing a direct reference to the tool's instance.

- **The Instance as the Tool:** An instance (`new ToolFunc(...)`) represents a single, concrete **tool**. It holds the actual function logic, all its metadata (name, description, parameters), and any internal state.

This separation provides the best of both worlds: the power of object-oriented encapsulation for defining individual tools and the convenience of a globally accessible service for managing and executing them.

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

## API Reference

This document covers the main concepts and usage patterns. For a detailed API reference, please consult the TSDoc comments within the source code (`src/tool-func.ts`).
