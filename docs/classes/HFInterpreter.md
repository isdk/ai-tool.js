[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / HFInterpreter

# Class: HFInterpreter

## Constructors

### new HFInterpreter()

> **new HFInterpreter**(`env`?): [`HFInterpreter`](HFInterpreter.md)

#### Parameters

• **env?**: `Environment`

#### Returns

[`HFInterpreter`](HFInterpreter.md)

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:386](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/template/jinja/src/runtime.ts#L386)

## Properties

### global

> **global**: `Environment`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:384](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/template/jinja/src/runtime.ts#L384)

## Methods

### evaluate()

> **evaluate**(`statement`, `environment`): `AnyRuntimeValue`

#### Parameters

• **statement**: `undefined` \| `Statement`

• **environment**: `Environment`

#### Returns

`AnyRuntimeValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:1063](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/template/jinja/src/runtime.ts#L1063)

***

### run()

> **run**(`program`): `AnyRuntimeValue`

Run the program.

#### Parameters

• **program**: `Program`

#### Returns

`AnyRuntimeValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:393](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/template/jinja/src/runtime.ts#L393)
