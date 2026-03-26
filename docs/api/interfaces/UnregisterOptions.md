[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / UnregisterOptions

# Interface: UnregisterOptions

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:387

Options for unregistering a tool function.

## Properties

### decrement?

> `optional` **decrement**: `"once"` \| `"all"`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:400

How to handle the reference count.
- 'once' (default): Decrement the count by one.
- 'all': Completely remove the reference count entry.

#### Default

```ts
force ? 'all' : 'once'
```

***

### force?

> `optional` **force**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:392

If true, force physical removal from the registry even if references exist.
Also defaults the `decrement` option to `'all'` if not specified.

***

### scope?

> `optional` **scope**: `"all"` \| `"local"` \| `"inherited"`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:410

The scope of unregistration in a hierarchical registry:
- 'local' (default): Only remove if the item is "owned" by the current scope.
  Ownership is defined by having an 'own' property in items, aliases, OR reference counts.
  Note: Including reference counts ensures that circular dependencies are correctly cleaned up
  even after the primary instance is removed from the items list during an override.
- 'inherited': Search up the prototype chain and remove the first match found.
- 'all': Remove all occurrences found in the entire prototype chain.
