[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / HFInterpreter

# Class: HFInterpreter

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:426](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/utils/prompt/template/jinja/src/runtime.ts#L426)

## Constructors

### new HFInterpreter()

> **new HFInterpreter**(`env`?): [`HFInterpreter`](HFInterpreter.md)

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:429](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/utils/prompt/template/jinja/src/runtime.ts#L429)

#### Parameters

##### env?

`Environment`

#### Returns

[`HFInterpreter`](HFInterpreter.md)

## Properties

### global

> **global**: `Environment`

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:427](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/utils/prompt/template/jinja/src/runtime.ts#L427)

## Methods

### evaluate()

> **evaluate**(`statement`, `environment`): `AnyRuntimeValue`

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:1109](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/utils/prompt/template/jinja/src/runtime.ts#L1109)

#### Parameters

##### statement

`undefined` | `Statement`

##### environment

`Environment`

#### Returns

`AnyRuntimeValue`

***

### run()

> **run**(`program`): `AnyRuntimeValue`

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:436](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/utils/prompt/template/jinja/src/runtime.ts#L436)

Run the program.

#### Parameters

##### program

`Program`

#### Returns

`AnyRuntimeValue`
