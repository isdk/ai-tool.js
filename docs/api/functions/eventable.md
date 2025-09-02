[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / eventable

# Function: eventable()

> **eventable**\<`T`\>(`targetClass`?, `options`?): `T` & (`aClass`?) => `Function` & `T` *extends* (...`args`) => `any` ? `InstanceType`\<`T`\<`T`\>\> : `T`

Defined in: ai-tools/node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/eventable.d.ts:48

Adds event-emitting capabilities to a class by injecting necessary methods and properties.

This function uses `createAbilityInjector` from `custom-ability` to inject event-related methods
into the target class. The injected methods include standard EventEmitter functionality such as
`on`, `off`, `emit`, `emitAsync`, `once`, `listeners`, `@listenerCount` and more. It also ensures compatibility with Node.js `EventEmitter`
by including methods like `listenerCount`, `setMaxListeners`, `addListener`, `removeListener`, and `removeAllListeners`.

## Type Parameters

• **T** *extends* `Function` \| (...`args`) => `any`

## Parameters

### targetClass?

`T`

### options?

`AbilityOptions`

Optional configuration for the injection process:
  * `include` (string[]|string): Specifies which methods should be added.
    Static methods should use the prefix '@'.
  * `exclude` (string[]|string): Specifies which methods should not be added.
    Static methods should use the prefix '@'.
  * `methods` (Object): Custom methods to override or extend the default behavior.
    Use `this.super()` to call the original method and `this.self` to access the original context.
  * `classMethods` (Object): Custom static methods to be added to the class.

## Returns

`T` & (`aClass`?) => `Function` & `T` *extends* (...`args`) => `any` ? `InstanceType`\<`T`\<`T`\>\> : `T`

The same `aClass` class with event capabilities injected. The return value is the modified `aClass` itself.

## Function

eventable

## Examples

```ts
import { eventable } from 'events-ex';

class MyClass {}

// Inject only specific methods: 'on', 'off', 'emit', 'emitAsync', and the static 'listenerCount'
eventable(MyClass, { include: ['on', 'off', 'emit', 'emitAsync', '@listenerCount'] });
```

```ts
import { eventable } from 'events-ex';

class OtherClass {
  exec() {
    console.log("Original exec");
  }
}

// Inject event capabilities and override the `exec` method
eventable(OtherClass, {
  methods: {
    exec() {
      console.log("New exec");
      this.super(); // Calls the original `exec` method
    }
  }
});
```
