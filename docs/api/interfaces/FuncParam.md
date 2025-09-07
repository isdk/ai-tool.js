[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FuncParam

# Interface: FuncParam

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:15](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L15)

Describes a single function parameter, including its name, type, and description.

## Properties

### description?

> `optional` **description**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:38](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L38)

A description of the parameter, explaining its purpose and usage.

***

### name?

> `optional` **name**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:20](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L20)

The name of the parameter.

***

### required?

> `optional` **required**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:32](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L32)

Indicates whether the parameter is required.

***

### type?

> `optional` **type**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L26)

The data type of the parameter, represented as a string identifier (e.g., 'string', 'number').
