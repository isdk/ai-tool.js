[@isdk/ai-tool](README.md) / Exports

# @isdk/ai-tool

## Table of contents

### Enumerations

- [ErrorCode](enums/ErrorCode.md)
- [XXHashAlgorithm](enums/XXHashAlgorithm.md)

### Classes

- [AbortError](classes/AbortError.md)
- [AlreadyExistsError](classes/AlreadyExistsError.md)
- [BaseError](classes/BaseError.md)
- [ClientTools](classes/ClientTools.md)
- [CommonError](classes/CommonError.md)
- [ConfigFile](classes/ConfigFile.md)
- [EventClient](classes/EventClient.md)
- [EventServer](classes/EventServer.md)
- [EventToolFunc](classes/EventToolFunc.md)
- [FStringPromptTemplate](classes/FStringPromptTemplate.md)
- [FewShotPromptTemplate](classes/FewShotPromptTemplate.md)
- [GolangPromptTemplate](classes/GolangPromptTemplate.md)
- [HFEnvironment](classes/HFEnvironment.md)
- [HFInterpreter](classes/HFInterpreter.md)
- [HFTemplate](classes/HFTemplate.md)
- [HfPromptTemplate](classes/HfPromptTemplate.md)
- [NotFoundError](classes/NotFoundError.md)
- [NotImplementationError](classes/NotImplementationError.md)
- [PromptExampleSelector](classes/PromptExampleSelector.md)
- [PromptTemplate](classes/PromptTemplate.md)
- [ReadableStreamError](classes/ReadableStreamError.md)
- [ResClientTools](classes/ResClientTools.md)
- [ResServerTools](classes/ResServerTools.md)
- [SSEChannel](classes/SSEChannel.md)
- [ServerTools](classes/ServerTools.md)
- [ToolFunc](classes/ToolFunc.md)

### Interfaces

- [AIChatAssistantMessageParam](interfaces/AIChatAssistantMessageParam.md)
- [AIChatContentPartImage](interfaces/AIChatContentPartImage.md)
- [AIChatContentPartText](interfaces/AIChatContentPartText.md)
- [AIChatMessageParamBase](interfaces/AIChatMessageParamBase.md)
- [AIChatMessageToolCall](interfaces/AIChatMessageToolCall.md)
- [AIChatSystemMessageParam](interfaces/AIChatSystemMessageParam.md)
- [AIChatToolMessageParam](interfaces/AIChatToolMessageParam.md)
- [AIChatUserMessageParam](interfaces/AIChatUserMessageParam.md)
- [AIResult](interfaces/AIResult.md)
- [AIStreamCallbacksAndOptions](interfaces/AIStreamCallbacksAndOptions.md)
- [AIStreamParser](interfaces/AIStreamParser.md)
- [AIStreamParserOptions](interfaces/AIStreamParserOptions.md)
- [BaseFunc](interfaces/BaseFunc.md)
- [BaseFuncItem](interfaces/BaseFuncItem.md)
- [ClientFuncItem](interfaces/ClientFuncItem.md)
- [DotenvExpandOptions](interfaces/DotenvExpandOptions.md)
- [DotenvExpandOutput](interfaces/DotenvExpandOutput.md)
- [DotenvParseInput](interfaces/DotenvParseInput.md)
- [DotenvParseOutput](interfaces/DotenvParseOutput.md)
- [DotenvPopulateInput](interfaces/DotenvPopulateInput.md)
- [EventClientFuncParams](interfaces/EventClientFuncParams.md)
- [EventServerFuncParams](interfaces/EventServerFuncParams.md)
- [FewShotPromptTemplateOptions](interfaces/FewShotPromptTemplateOptions.md)
- [FuncItem](interfaces/FuncItem.md)
- [FuncParam](interfaces/FuncParam.md)
- [FuncParams](interfaces/FuncParams.md)
- [Funcs](interfaces/Funcs.md)
- [IOptions](interfaces/IOptions.md)
- [JsonFilter](interfaces/JsonFilter.md)
- [PromptExampleSelectorOptions](interfaces/PromptExampleSelectorOptions.md)
- [PromptTemplateOptions](interfaces/PromptTemplateOptions.md)
- [RemoteFuncItem](interfaces/RemoteFuncItem.md)
- [ResClientFuncParams](interfaces/ResClientFuncParams.md)
- [ResServerFuncParams](interfaces/ResServerFuncParams.md)
- [SanitizeFilenameOptions](interfaces/SanitizeFilenameOptions.md)
- [ServerFuncItem](interfaces/ServerFuncItem.md)
- [ServerFuncParams](interfaces/ServerFuncParams.md)

### Type Aliases

- [AIChatContentPart](modules.md#aichatcontentpart)
- [AIChatMessageParam](modules.md#aichatmessageparam)
- [AIChatRole](modules.md#aichatrole)
- [AIMessageType](modules.md#aimessagetype)
- [AIModelNameRule](modules.md#aimodelnamerule)
- [AIModelNameRuleFn](modules.md#aimodelnamerulefn)
- [AIModelNameRules](modules.md#aimodelnamerules)
- [AITextGenerationFinishReason](modules.md#aitextgenerationfinishreason)
- [ActionName](modules.md#actionname)
- [ErrorCodeType](modules.md#errorcodetype)
- [EventErrorListenerFn](modules.md#eventerrorlistenerfn)
- [EventListenerFn](modules.md#eventlistenerfn)
- [FStringPromptTemplateNode](modules.md#fstringprompttemplatenode)
- [FuncParamType](modules.md#funcparamtype)
- [PromptExamples](modules.md#promptexamples)
- [PromptTemplateType](modules.md#prompttemplatetype)
- [PromptType](modules.md#prompttype)
- [TFunc](modules.md#tfunc)

### Variables

- [AIChatRoles](modules.md#aichatroles)
- [AIMessageTypes](modules.md#aimessagetypes)
- [AITextGenerationFinishReasons](modules.md#aitextgenerationfinishreasons)
- [AbortErrorCode](modules.md#aborterrorcode)
- [ActionNames](modules.md#actionnames)
- [AlreadyExistsErrorCode](modules.md#alreadyexistserrorcode)
- [ClientToolFuncSchema](modules.md#clienttoolfuncschema)
- [EventBusName](modules.md#eventbusname)
- [EventName](modules.md#eventname)
- [FilenameReservedRegex](modules.md#filenamereservedregex)
- [HFBuiltins](modules.md#hfbuiltins)
- [InternalErrorCode](modules.md#internalerrorcode)
- [NotFoundErrorCode](modules.md#notfounderrorcode)
- [NotImplementedErrorCode](modules.md#notimplementederrorcode)
- [PASSING\_SCORE](modules.md#passing_score)
- [PromptTemplateTypes](modules.md#prompttemplatetypes)
- [PromptTypes](modules.md#prompttypes)
- [RStreamErrCode](modules.md#rstreamerrcode)
- [RemoteToolFuncSchema](modules.md#remotetoolfuncschema)
- [ResClientToolsSchema](modules.md#resclienttoolsschema)
- [ResServerToolsSchema](modules.md#resservertoolsschema)
- [ResponseRStreamErrCode](modules.md#responserstreamerrcode)
- [SSEChannelAlreadyClosedErrCode](modules.md#ssechannelalreadyclosederrcode)
- [ServerToolFuncSchema](modules.md#servertoolfuncschema)
- [ToolFuncSchema](modules.md#toolfuncschema)
- [WindowsReservedNameRegex](modules.md#windowsreservednameregex)
- [base32768](modules.md#base32768)
- [defaultTemplateFormat](modules.md#defaulttemplateformat)
- [event](modules.md#event)
- [eventClient](modules.md#eventclient)
- [eventServer](modules.md#eventserver)
- [isSimilar](modules.md#issimilar)
- [lrucache](modules.md#lrucache)
- [mergeSegments](modules.md#mergesegments)
- [mimeType](modules.md#mimetype)
- [segments](modules.md#segments)
- [similarity](modules.md#similarity)
- [splitSegments](modules.md#splitsegments)
- [uuidNIL](modules.md#uuidnil)

### Functions

- [AIStream](modules.md#aistream)
- [\_lrucache](modules.md#_lrucache)
- [backendEventable](modules.md#backendeventable)
- [canonicalize](modules.md#canonicalize)
- [canonicalizeEx](modules.md#canonicalizeex)
- [createCallbacksTransformer](modules.md#createcallbackstransformer)
- [createEmptyReadableStream](modules.md#createemptyreadablestream)
- [createEndWithRepetitionDetector](modules.md#createendwithrepetitiondetector)
- [createError](modules.md#createerror)
- [createEventStreamTransformer](modules.md#createeventstreamtransformer)
- [createHfValueFunc](modules.md#createhfvaluefunc)
- [createLRUCache](modules.md#createlrucache)
- [expandEnv](modules.md#expandenv)
- [expandObjEnv](modules.md#expandobjenv)
- [extNameLevel](modules.md#extnamelevel)
- [filenameReservedRegex](modules.md#filenamereservedregex-1)
- [getAllEnumKeys](modules.md#getallenumkeys)
- [getConfigFileNames](modules.md#getconfigfilenames)
- [getConfigs](modules.md#getconfigs)
- [getDefaultSimilarPassingScore](modules.md#getdefaultsimilarpassingscore)
- [getKeysPath](modules.md#getkeyspath)
- [getMultiLevelExtname](modules.md#getmultilevelextname)
- [getResponseErrorReadableStream](modules.md#getresponseerrorreadablestream)
- [hfParse](modules.md#hfparse)
- [hfTokenize](modules.md#hftokenize)
- [interpolateEnv](modules.md#interpolateenv)
- [interpolateFString](modules.md#interpolatefstring)
- [interpolateGolangTemplate](modules.md#interpolategolangtemplate)
- [isModelNameMatched](modules.md#ismodelnamematched)
- [isValidFilename](modules.md#isvalidfilename)
- [isValidFilepath](modules.md#isvalidfilepath)
- [jsonFilterToWhere](modules.md#jsonfiltertowhere)
- [loadFileFromPaths](modules.md#loadfilefrompaths)
- [loadTextFromPaths](modules.md#loadtextfrompaths)
- [matchUrlProtocol](modules.md#matchurlprotocol)
- [parseFString](modules.md#parsefstring)
- [parseJsJson](modules.md#parsejsjson)
- [parseYaml](modules.md#parseyaml)
- [reControlCharsRegex](modules.md#recontrolcharsregex)
- [readableFromAsyncIterable](modules.md#readablefromasynciterable)
- [registerCoreTools](modules.md#registercoretools)
- [registerYamlTag](modules.md#registeryamltag)
- [sanitizeFilename](modules.md#sanitizefilename)
- [sanitizeFilepath](modules.md#sanitizefilepath)
- [saveConfigFile](modules.md#saveconfigfile)
- [sortedValues](modules.md#sortedvalues)
- [splitSentence](modules.md#splitsentence)
- [stringifyYaml](modules.md#stringifyyaml)
- [throwError](modules.md#throwerror)
- [trimStartOfStreamHelper](modules.md#trimstartofstreamhelper)
- [truncTo](modules.md#truncto)
- [uuid](modules.md#uuid)
- [uuidParse](modules.md#uuidparse)
- [uuidStringify](modules.md#uuidstringify)
- [uuidValidate](modules.md#uuidvalidate)
- [uuidVersion](modules.md#uuidversion)
- [uuidv1](modules.md#uuidv1)
- [uuidv4](modules.md#uuidv4)
- [uuidv5](modules.md#uuidv5)
- [wait](modules.md#wait)
- [xxhash](modules.md#xxhash)
- [xxhash32](modules.md#xxhash32)
- [xxhash64](modules.md#xxhash64)
- [xxhashAsStr](modules.md#xxhashasstr)

## Type Aliases

### AIChatContentPart

Ƭ **AIChatContentPart**: [`AIChatContentPartText`](interfaces/AIChatContentPartText.md) \| [`AIChatContentPartImage`](interfaces/AIChatContentPartImage.md)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:70](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L70)

___

### AIChatMessageParam

Ƭ **AIChatMessageParam**: [`AIChatSystemMessageParam`](interfaces/AIChatSystemMessageParam.md) \| [`AIChatUserMessageParam`](interfaces/AIChatUserMessageParam.md) \| [`AIChatAssistantMessageParam`](interfaces/AIChatAssistantMessageParam.md) \| [`AIChatToolMessageParam`](interfaces/AIChatToolMessageParam.md)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:40](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L40)

___

### AIChatRole

Ƭ **AIChatRole**: typeof [`AIChatRoles`](modules.md#aichatroles)[`number`] & `string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:38](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L38)

___

### AIMessageType

Ƭ **AIMessageType**: typeof [`AIMessageTypes`](modules.md#aimessagetypes)[`number`]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:32](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L32)

___

### AIModelNameRule

Ƭ **AIModelNameRule**: `string` \| `RegExp` \| [`AIModelNameRuleFn`](modules.md#aimodelnamerulefn)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:10](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/consts.ts#L10)

___

### AIModelNameRuleFn

Ƭ **AIModelNameRuleFn**: (`name`: `string`) => `string` \| `RegExpExecArray` \| `undefined`

#### Type declaration

▸ (`name`): `string` \| `RegExpExecArray` \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`string` \| `RegExpExecArray` \| `undefined`

#### Defined in

[packages/ai-tool/src/utils/consts.ts:8](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/consts.ts#L8)

___

### AIModelNameRules

Ƭ **AIModelNameRules**: [`AIModelNameRule`](modules.md#aimodelnamerule) \| [`AIModelNameRule`](modules.md#aimodelnamerule)[]

#### Defined in

[packages/ai-tool/src/utils/consts.ts:11](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/consts.ts#L11)

___

### AITextGenerationFinishReason

Ƭ **AITextGenerationFinishReason**: typeof [`AITextGenerationFinishReasons`](modules.md#aitextgenerationfinishreasons)[`number`]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:10](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L10)

___

### ActionName

Ƭ **ActionName**: typeof [`ActionNames`](modules.md#actionnames)[`number`]

#### Defined in

[packages/ai-tool/src/utils/consts.ts:6](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/consts.ts#L6)

___

### ErrorCodeType

Ƭ **ErrorCodeType**: `number` \| `string`

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:3](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/base-error.ts#L3)

___

### EventErrorListenerFn

Ƭ **EventErrorListenerFn**: (`this`: `Event`, `err`: `Error`, `name`: `string`, ...`args`: `any`) => `any`

#### Type declaration

▸ (`this`, `err`, `name`, `...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Event` |
| `err` | `Error` |
| `name` | `string` |
| `...args` | `any` |

##### Returns

`any`

#### Defined in

[packages/ai-tool/src/utils/event/event-ability.ts:9](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/event/event-ability.ts#L9)

___

### EventListenerFn

Ƭ **EventListenerFn**: (`this`: `Event`, `name`: `string`, ...`args`: `any`) => `any`

#### Type declaration

▸ (`this`, `name`, `...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Event` |
| `name` | `string` |
| `...args` | `any` |

##### Returns

`any`

#### Defined in

[packages/ai-tool/src/utils/event/event-ability.ts:8](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/event/event-ability.ts#L8)

___

### FStringPromptTemplateNode

Ƭ **FStringPromptTemplateNode**: \{ `text`: `string` ; `type`: ``"literal"``  } \| \{ `name`: `string` ; `type`: ``"variable"``  }

Type that represents a node in a parsed format string. It can be either
a literal text or a variable name.

#### Defined in

[packages/ai-tool/src/utils/prompt/template/python.ts:6](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/template/python.ts#L6)

___

### FuncParamType

Ƭ **FuncParamType**: `string`

#### Defined in

[packages/ai-tool/src/tool-func.ts:5](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/tool-func.ts#L5)

___

### PromptExamples

Ƭ **PromptExamples**\<`T`\>: `Iterable`\<`PromiseLike`\<`T`\> \| `T`\> \| `AsyncIterable`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:3](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/prompt-example-selector.ts#L3)

___

### PromptTemplateType

Ƭ **PromptTemplateType**: typeof [`PromptTemplateTypes`](modules.md#prompttemplatetypes)[`number`]

#### Defined in

[packages/ai-tool/src/utils/prompt/consts.ts:17](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/consts.ts#L17)

___

### PromptType

Ƭ **PromptType**: typeof [`PromptTypes`](modules.md#prompttypes)[`number`]

#### Defined in

[packages/ai-tool/src/utils/prompt/consts.ts:10](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/consts.ts#L10)

___

### TFunc

Ƭ **TFunc**: (`this`: [`ToolFunc`](classes/ToolFunc.md), ...`params`: `any`[]) => `any`

#### Type declaration

▸ (`this`, `...params`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ToolFunc`](classes/ToolFunc.md) |
| `...params` | `any`[] |

##### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:18](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/tool-func.ts#L18)

## Variables

### AIChatRoles

• `Const` **AIChatRoles**: readonly [``"user"``, ``"assistant"``, ``"system"``, ``"tool"``, ``"tool_calls"``]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:37](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L37)

___

### AIMessageTypes

• `Const` **AIMessageTypes**: readonly [``"human"``, ``"ai"``, ``"generic"``, ``"system"``, ``"tool"``]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:31](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L31)

___

### AITextGenerationFinishReasons

• `Const` **AITextGenerationFinishReasons**: readonly [``"stop"``, ``"length"``, ``"content-filter"``, ``"tool-calls"``, ``"abort"``, ``"error"``, ``"other"``, ``null``]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:1](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L1)

___

### AbortErrorCode

• `Const` **AbortErrorCode**: [`Aborted`](enums/ErrorCode.md#aborted) = `ErrorCode.Aborted`

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:31](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/base-error.ts#L31)

___

### ActionNames

• `Const` **ActionNames**: readonly [``"get"``, ``"post"``, ``"put"``, ``"delete"``, ``"patch"``, ``"list"``, ``"res"``]

#### Defined in

[packages/ai-tool/src/utils/consts.ts:5](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/consts.ts#L5)

___

### AlreadyExistsErrorCode

• `Const` **AlreadyExistsErrorCode**: [`Conflict`](enums/ErrorCode.md#conflict) = `ErrorCode.Conflict`

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:30](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/base-error.ts#L30)

___

### ClientToolFuncSchema

• `Const` **ClientToolFuncSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | \{ `type`: `string` = 'string'; `assign`: (`value`: ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"``, `dest`: `any`, `src?`: `any`, `name?`: `string`, `options?`: `any`) => ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"``  } |
| `action.type` | `string` |
| `action.assign` | [object Object] |
| `allowExportFunc` | \{ `type`: `string` = 'boolean' } |
| `allowExportFunc.type` | `string` |
| `apiRoot` | \{ `type`: `string` = 'string'; `get`: (`this`: `any`) => `any` ; `set`: (`this`: `any`, `value`: `string`) => `void`  } |
| `apiRoot.type` | `string` |
| `apiRoot.get` | [object Object] |
| `apiRoot.set` | [object Object] |
| `fetchOptions` | \{ `type`: `string` = 'object' } |
| `fetchOptions.type` | `string` |
| `stream` | \{ `type`: `string` = 'boolean' } |
| `stream.type` | `string` |

#### Defined in

[packages/ai-tool/src/client-tools.ts:153](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/client-tools.ts#L153)

___

### EventBusName

• `Const` **EventBusName**: ``"event-bus"``

#### Defined in

[packages/ai-tool/src/utils/event/event-ability.ts:7](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/event/event-ability.ts#L7)

___

### EventName

• `Const` **EventName**: ``"event"``

#### Defined in

[packages/ai-tool/src/utils/event/event-ability.ts:6](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/event/event-ability.ts#L6)

___

### FilenameReservedRegex

• `Const` **FilenameReservedRegex**: `RegExp`

Regular expression pattern for reserved characters in a filename.
do not use /g global option here: when the regex is executed multiple times, it will always begin where it left off last time.

#### Defined in

[packages/ai-tool/src/utils/filename.ts:8](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/filename.ts#L8)

___

### HFBuiltins

• `Const` **HFBuiltins**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `randomInt` | (`to`: `number`, `from`: `number`) => `number` |
| `select` | (`obj`: `any`, `index?`: `string` \| `number`) => `any` |

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/builtins.ts:52](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/template/jinja/src/builtins.ts#L52)

___

### InternalErrorCode

• `Const` **InternalErrorCode**: [`InternalError`](enums/ErrorCode.md#internalerror) = `ErrorCode.InternalError`

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:27](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/base-error.ts#L27)

___

### NotFoundErrorCode

• `Const` **NotFoundErrorCode**: [`NotFound`](enums/ErrorCode.md#notfound) = `ErrorCode.NotFound`

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:29](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/base-error.ts#L29)

___

### NotImplementedErrorCode

• `Const` **NotImplementedErrorCode**: [`NotImplemented`](enums/ErrorCode.md#notimplemented) = `ErrorCode.NotImplemented`

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:28](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/base-error.ts#L28)

___

### PASSING\_SCORE

• `Const` **PASSING\_SCORE**: ``0.618``

#### Defined in

[packages/ai-tool/src/utils/consts.ts:3](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/consts.ts#L3)

___

### PromptTemplateTypes

• `Const` **PromptTemplateTypes**: readonly [``"internal"``, ``"hf"``, ``"fill"``]

#### Defined in

[packages/ai-tool/src/utils/prompt/consts.ts:12](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/consts.ts#L12)

___

### PromptTypes

• `Const` **PromptTypes**: readonly [``"chat"``, ``"char"``, ``"plan"``]

Prompt Type
defaults to `chat`

#### Defined in

[packages/ai-tool/src/utils/prompt/consts.ts:5](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/consts.ts#L5)

___

### RStreamErrCode

• `Const` **RStreamErrCode**: ``600``

#### Defined in

[packages/ai-tool/src/utils/stream/error-readable-stream.ts:3](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/stream/error-readable-stream.ts#L3)

___

### RemoteToolFuncSchema

• `Const` **RemoteToolFuncSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | \{ `type`: `string` = 'string'; `assign`: (`value`: ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"``, `dest`: `any`, `src?`: `any`, `name?`: `string`, `options?`: `any`) => ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"``  } |
| `action.type` | `string` |
| `action.assign` | [object Object] |
| `allowExportFunc` | \{ `type`: `string` = 'boolean' } |
| `allowExportFunc.type` | `string` |
| `apiRoot` | \{ `type`: `string` = 'string'; `get`: (`this`: `any`) => `any` ; `set`: (`this`: `any`, `value`: `string`) => `void`  } |
| `apiRoot.type` | `string` |
| `apiRoot.get` | [object Object] |
| `apiRoot.set` | [object Object] |
| `fetchOptions` | \{ `type`: `string` = 'object' } |
| `fetchOptions.type` | `string` |
| `stream` | \{ `type`: `string` = 'boolean' } |
| `stream.type` | `string` |

#### Defined in

[packages/ai-tool/src/utils/consts.ts:13](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/consts.ts#L13)

___

### ResClientToolsSchema

• `Const` **ResClientToolsSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `methods` | \{ `type`: `string` = 'array'; `assign`: (`value`: `string`[], `dest`: `any`, `src?`: `any`, `name?`: `string`, `options?`: `any`) => `void`  } |
| `methods.type` | `string` |
| `methods.assign` | [object Object] |

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:68](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/res-client-tools.ts#L68)

___

### ResServerToolsSchema

• `Const` **ResServerToolsSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `methods` | \{ `type`: `string` = 'array' } |
| `methods.type` | `string` |

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:77](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/res-server-tools.ts#L77)

___

### ResponseRStreamErrCode

• `Const` **ResponseRStreamErrCode**: ``601``

#### Defined in

[packages/ai-tool/src/utils/stream/error-readable-stream.ts:4](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/stream/error-readable-stream.ts#L4)

___

### SSEChannelAlreadyClosedErrCode

• `Const` **SSEChannelAlreadyClosedErrCode**: ``498``

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:17](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/event/sse-channel.ts#L17)

___

### ServerToolFuncSchema

• `Const` **ServerToolFuncSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | \{ `type`: `string` = 'string'; `assign`: (`value`: ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"``, `dest`: `any`, `src?`: `any`, `name?`: `string`, `options?`: `any`) => ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"``  } |
| `action.type` | `string` |
| `action.assign` | [object Object] |
| `allowExportFunc` | \{ `type`: `string` = 'boolean' } |
| `allowExportFunc.type` | `string` |
| `apiRoot` | \{ `type`: `string` = 'string'; `get`: (`this`: `any`) => `any` ; `set`: (`this`: `any`, `value`: `string`) => `void`  } |
| `apiRoot.type` | `string` |
| `apiRoot.get` | [object Object] |
| `apiRoot.set` | [object Object] |
| `fetchOptions` | \{ `type`: `string` = 'object' } |
| `fetchOptions.type` | `string` |
| `stream` | \{ `type`: `string` = 'boolean' } |
| `stream.type` | `string` |

#### Defined in

[packages/ai-tool/src/server-tools.ts:66](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/server-tools.ts#L66)

___

### ToolFuncSchema

• `Const` **ToolFuncSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `depends` | \{ `exported`: `boolean` = false; `type`: `string` = 'object' } |
| `depends.exported` | `boolean` |
| `depends.type` | `string` |
| `description` | \{ `type`: `string` = 'string' } |
| `description.type` | `string` |
| `func` | \{ `type`: `string` = 'function'; `assign`: (`value`: `string` \| `Function`, `dest`: [`ToolFunc`](classes/ToolFunc.md), `src?`: [`ToolFunc`](classes/ToolFunc.md), `name?`: `string`, `options?`: `any`) => `string` \| `Function`  } |
| `func.type` | `string` |
| `func.assign` | [object Object] |
| `name` | \{ `type`: `string` = 'string' } |
| `name.type` | `string` |
| `params` | \{ `type`: `string` = 'object' } |
| `params.type` | `string` |
| `result` | \{ `type`: `string` = 'any' } |
| `result.type` | `string` |
| `setup` | \{ `type`: `string` = 'function' } |
| `setup.type` | `string` |
| `tags` | \{ `type`: `string`[]  } |
| `tags.type` | `string`[] |

#### Defined in

[packages/ai-tool/src/tool-func.ts:305](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/tool-func.ts#L305)

___

### WindowsReservedNameRegex

• `Const` **WindowsReservedNameRegex**: `RegExp`

Regular expression pattern for reserved names on Windows systems.

#### Defined in

[packages/ai-tool/src/utils/filename.ts:13](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/filename.ts#L13)

___

### base32768

• `Const` **base32768**: `__module` = `_base32768`

#### Defined in

[packages/ai-tool/src/utils/hash/xxhash.ts:5](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/hash/xxhash.ts#L5)

___

### defaultTemplateFormat

• `Const` **defaultTemplateFormat**: ``"default"``

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:8](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/prompt-template.ts#L8)

___

### event

• `Const` **event**: [`EventToolFunc`](classes/EventToolFunc.md)

#### Defined in

[packages/ai-tool/src/funcs/event.ts:22](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/funcs/event.ts#L22)

___

### eventClient

• `Const` **eventClient**: [`EventClient`](classes/EventClient.md)

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:180](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/funcs/event-client.ts#L180)

___

### eventServer

• `Const` **eventServer**: [`EventServer`](classes/EventServer.md)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:133](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/funcs/event-server.ts#L133)

___

### isSimilar

• `Const` **isSimilar**: [`ServerTools`](classes/ServerTools.md)

#### Defined in

[packages/ai-tool/src/funcs/is-similar.ts:33](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/funcs/is-similar.ts#L33)

___

### lrucache

• `Const` **lrucache**: [`ToolFunc`](classes/ToolFunc.md)

#### Defined in

[packages/ai-tool/src/funcs/lrucache.ts:40](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/funcs/lrucache.ts#L40)

___

### mergeSegments

• `Const` **mergeSegments**: [`ServerTools`](classes/ServerTools.md)

#### Defined in

[packages/ai-tool/src/funcs/merge-segments.ts:34](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/funcs/merge-segments.ts#L34)

___

### mimeType

• `Const` **mimeType**: `MimeType`

#### Defined in

node_modules/.pnpm/mime-type@5.0.0-alpha.2/node_modules/mime-type/src/with-db.d.ts:3

___

### segments

• `Const` **segments**: [`ServerTools`](classes/ServerTools.md)

#### Defined in

[packages/ai-tool/src/funcs/segments.ts:15](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/funcs/segments.ts#L15)

___

### similarity

• `Const` **similarity**: [`ServerTools`](classes/ServerTools.md)

#### Defined in

[packages/ai-tool/src/funcs/similarity.ts:47](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/funcs/similarity.ts#L47)

___

### splitSegments

• `Const` **splitSegments**: [`ServerTools`](classes/ServerTools.md)

#### Defined in

[packages/ai-tool/src/funcs/split-segments.ts:41](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/funcs/split-segments.ts#L41)

___

### uuidNIL

• `Const` **uuidNIL**: `NIL`

#### Defined in

node_modules/.pnpm/@types+uuid@9.0.8/node_modules/@types/uuid/index.d.ts:78

## Functions

### AIStream

▸ **AIStream**\<`T`, `TOptions`\>(`response`, `customParser?`): `ReadableStream`\<[`AIResult`](interfaces/AIResult.md)\<`T`, `TOptions`\>\>

Returns a ReadableStream created from the response, parsed and handled with custom logic.
The stream goes through two transformation stages, first parsing the events and then
invoking the provided callbacks.

For 2xx HTTP responses:
- The function continues with standard stream processing.

For non-2xx HTTP responses:
- If the response body is defined, it asynchronously extracts and decodes the response body.
- It then creates a custom ReadableStream to propagate a detailed error message.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `TOptions` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | `Response` | The response. |
| `customParser?` | [`AIStreamParser`](interfaces/AIStreamParser.md)\<`T`, `TOptions`\> | The custom parser function. |

#### Returns

`ReadableStream`\<[`AIResult`](interfaces/AIResult.md)\<`T`, `TOptions`\>\>

The AIStream.

**`Throws`**

Will throw an error if the response is not OK.

#### Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:207](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/stream/ai-stream.ts#L207)

___

### \_lrucache

▸ **_lrucache**(`this`, `«destructured»?`): `_Cache`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ToolFunc`](classes/ToolFunc.md) |
| `«destructured»` | `Object` |
| › `key?` | `string` |
| › `options?` | `number` \| `ICacheOptions` |
| › `value?` | `any` |

#### Returns

`_Cache`

#### Defined in

[packages/ai-tool/src/funcs/lrucache.ts:6](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/funcs/lrucache.ts#L6)

___

### backendEventable

▸ **backendEventable**(`targetClass`, `options?`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetClass` | `Function` |
| `options?` | `AbilityOptions` |

#### Returns

`Function`

#### Defined in

[packages/ai-tool/src/utils/event/event-ability.ts:80](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/event/event-ability.ts#L80)

___

### canonicalize

▸ **canonicalize**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/json-canonicalize@1.0.6/node_modules/json-canonicalize/types/canonicalize.d.ts:1

___

### canonicalizeEx

▸ **canonicalizeEx**(`obj`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `options?` | [`IOptions`](interfaces/IOptions.md) |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/json-canonicalize@1.0.6/node_modules/json-canonicalize/types/canonicalize-ex.d.ts:5

___

### createCallbacksTransformer

▸ **createCallbacksTransformer**(`cb`): `TransformStream`\<[`AIResult`](interfaces/AIResult.md), `Uint8Array`\>

Creates a transform stream that encodes input messages and invokes optional callback functions.
The transform stream uses the provided callbacks to execute custom logic at different stages of the stream's lifecycle.
- `onStart`: Called once when the stream is initialized.
- `onToken`: Called for each tokenized message.
- `onCompletion`: Called every time an AIStream completion message is received. This can occur multiple times when using e.g. OpenAI functions
- `onFinal`: Called once when the stream is closed with the final completion message.

This function is useful when you want to process a stream of messages and perform specific actions during the stream's lifecycle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `undefined` \| [`AIStreamCallbacksAndOptions`](interfaces/AIStreamCallbacksAndOptions.md) |

#### Returns

`TransformStream`\<[`AIResult`](interfaces/AIResult.md), `Uint8Array`\>

A transform stream that encodes input messages as Uint8Array and allows the execution of custom logic through callbacks.

**`Example`**

```ts
const callbacks = {
  onStart: async () => console.log('Stream started'),
  onToken: async (token) => console.log(`Token: ${token}`),
  onCompletion: async (completion) => console.log(`Completion: ${completion}`)
  onFinal: async () => data.close()
};
const transformer = createCallbacksTransformer(callbacks);
```

#### Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:123](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/stream/ai-stream.ts#L123)

___

### createEmptyReadableStream

▸ **createEmptyReadableStream**(): `ReadableStream`

Creates an empty ReadableStream that immediately closes upon creation.
This function is used as a fallback for creating a ReadableStream when the response body is null or undefined,
ensuring that the subsequent pipeline processing doesn't fail due to a lack of a stream.

#### Returns

`ReadableStream`

An empty and closed ReadableStream instance.

#### Defined in

[packages/ai-tool/src/utils/stream/create-empty-stream.ts:8](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/stream/create-empty-stream.ts#L8)

___

### createEndWithRepetitionDetector

▸ **createEndWithRepetitionDetector**(`repetitionThreshold`): (`value`: `string`) => `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `repetitionThreshold` | `number` |

#### Returns

`fn`

▸ (`value`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

##### Returns

`boolean`

#### Defined in

[packages/ai-tool/src/utils/end-with-repeated-sequence.ts:3](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/end-with-repeated-sequence.ts#L3)

___

### createError

▸ **createError**(`message`, `name?`, `status?`): [`CommonError`](classes/CommonError.md)

Create an error object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `string` | `undefined` | Error message |
| `name?` | `string` \| `Record`\<`string`, `any`\> | `undefined` | Error name, optional |
| `status` | `string` \| `number` | `InternalErrorCode` | Error status code, default to 500 |

#### Returns

[`CommonError`](classes/CommonError.md)

Error object

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:217](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/base-error.ts#L217)

___

### createEventStreamTransformer

▸ **createEventStreamTransformer**\<`TValue`, `TOptions`\>(`customParser?`): `TransformStream`\<`Uint8Array`, [`AIResult`](interfaces/AIResult.md)\<`TValue`, `TOptions`\>\>

Creates a TransformStream that parses events from an EventSource stream using a custom parser.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `any` |
| `TOptions` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customParser?` | [`AIStreamParser`](interfaces/AIStreamParser.md)\<`any`, `any`\> | Function to handle event data. |

#### Returns

`TransformStream`\<`Uint8Array`, [`AIResult`](interfaces/AIResult.md)\<`TValue`, `TOptions`\>\>

TransformStream parsing events.

#### Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:61](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/stream/ai-stream.ts#L61)

___

### createHfValueFunc

▸ **createHfValueFunc**(`fn`): (`_data`: `any`) => `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |

#### Returns

`fn`

▸ (`_data`): `Function`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | `any` |

##### Returns

`Function`

#### Defined in

[packages/ai-tool/src/utils/prompt/hf-prompt-template.ts:148](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/hf-prompt-template.ts#L148)

___

### createLRUCache

▸ **createLRUCache**(`name`, `options?`): [`ToolFunc`](classes/ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | `number` \| `ICacheOptions` |

#### Returns

[`ToolFunc`](classes/ToolFunc.md)

#### Defined in

[packages/ai-tool/src/funcs/lrucache.ts:22](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/funcs/lrucache.ts#L22)

___

### expandEnv

▸ **expandEnv**(`options`): [`DotenvExpandOptions`](interfaces/DotenvExpandOptions.md)

Expand environment variables in the parsed object

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DotenvExpandOptions`](interfaces/DotenvExpandOptions.md) |

#### Returns

[`DotenvExpandOptions`](interfaces/DotenvExpandOptions.md)

**`Example`**

```ts
const myEnv = {}
const env = {
  processEnv: myEnv,
  parsed: {
    WORD: 'World',
    HELLO: 'Hello ${WORD}'
  }
}
expandEnv.expand(env)

console.log(myEnv.HELLO) // Hello World
console.log(process.env.HELLO) // undefined
```

#### Defined in

[packages/ai-tool/src/utils/prompt/template/env.ts:82](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/template/env.ts#L82)

___

### expandObjEnv

▸ **expandObjEnv**(`obj`, `options?`, `parsedObjs?`): `any`

Expands environment variables in an object/array or string.

This function replaces placeholders like `${VAR}` in strings and recursively
processes objects and arrays with environment variable references.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | The object/array or string to be processed. Can be any value, but primarily designed for objects, array and strings. |
| `options` | [`DotenvExpandOptions`](interfaces/DotenvExpandOptions.md) | Configuration options: - processEnv: - An object to source environment variables from, defaults to `process.env`. - parsed: - Specify an object to provide the value of environment variables. |
| `parsedObjs?` | `WeakSet`\<`any`\> | - |

#### Returns

`any`

- Returns the expanded object or string.

**`Example`**

```ts
const obj = {
  name: 'MyApp',
  envVar: '${ENV_VAR_NAME}',
  config: {
    url: 'http://${HOST}:${PORT}'
  },
  list: ['item1', '${ITEM2}']
};
// the expandedObj will have the actual values instead of placeholders.
const expandedObj = expandObjEnv(obj, { processEnv: myCustomEnv }); // Assuming 'ENV_VAR_NAME' is defined as 'Production' and 'HOST', 'PORT', 'ITEM2' are set,
```

#### Defined in

[packages/ai-tool/src/utils/prompt/template/env.ts:142](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/template/env.ts#L142)

___

### extNameLevel

▸ **extNameLevel**(`extName`): `number`

Calculates the level of an extension name.

The level represents the number of dots ('.') in the extension name, excluding the first dot which separates
the base filename from the extension. For example, the level of ".txt" is 1, and the level of ".tar.gz" is 2.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extName` | `string` | The extension name to analyze. It should start with a dot ('.'). |

#### Returns

`number`

The level of the extension name, which is the count of dots minus one.

**`Example`**

```typescript
// Returns 0
extNameLevel("no-file-ext");

// Returns 2
extNameLevel(".tar.gz");

// Returns 1
extNameLevel(".json5");
```

#### Defined in

[packages/ai-tool/src/utils/filename.ts:209](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/filename.ts#L209)

___

### filenameReservedRegex

▸ **filenameReservedRegex**(): `RegExp`

Returns a new regular expression instance for reserved filename characters with the 'g' flag.
use this to reset the with global option

#### Returns

`RegExp`

A compiled regular expression for reserved filename characters.

#### Defined in

[packages/ai-tool/src/utils/filename.ts:42](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/filename.ts#L42)

___

### getAllEnumKeys

▸ **getAllEnumKeys**\<`T`\>(`enumType`): keyof typeof `enumType`[]

Retrieves all string keys from the given enumeration(number).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enumType` | `T` | The enumeration type with numeric values for which to retrieve keys. |

#### Returns

keyof typeof `enumType`[]

An array containing all string keys of the specified enumeration.

#### Defined in

[packages/ai-tool/src/utils/get-all-enum-keys.ts:7](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/get-all-enum-keys.ts#L7)

___

### getConfigFileNames

▸ **getConfigFileNames**(`directoryPath`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `directoryPath` | `string` |

#### Returns

`string`[]

#### Defined in

[packages/ai-tool/src/utils/config.ts:50](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/config.ts#L50)

___

### getConfigs

▸ **getConfigs**(`directoryPath`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `directoryPath` | `string` |

#### Returns

`any`[]

#### Defined in

[packages/ai-tool/src/utils/config.ts:63](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/config.ts#L63)

___

### getDefaultSimilarPassingScore

▸ **getDefaultSimilarPassingScore**(`modelId`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelId` | `string` |

#### Returns

`number`

#### Defined in

[packages/ai-tool/src/funcs/is-similar.ts:7](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/funcs/is-similar.ts#L7)

___

### getKeysPath

▸ **getKeysPath**\<`TValue`\>(`value`): `string`[]

Retrieves an array of all key paths as strings for a nested object or array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `TValue` | The object or array to extract the paths from. |

#### Returns

`string`[]

- An array of strings containing all the key paths.

**`Example`**

```
const obj = { a: { b: { c: 1 } }, d: [0, { e: 2 }] };
console.log(getKeysPath(obj)); // Output: ['a.b.c', 'd[0]', 'd[1].e']
```

#### Defined in

[packages/ai-tool/src/utils/get-keys-path.ts:16](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/get-keys-path.ts#L16)

___

### getMultiLevelExtname

▸ **getMultiLevelExtname**(`filename`, `level?`): `string`

Retrieves multi-level file extension

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `filename` | `string` | `undefined` | The file name |
| `level` | `number` | `1` | The level, default is 1, indicating the number of extension levels to retrieve |

#### Returns

`string`

Returns a concatenated string of multiple extensions, or an empty string if no extension is found

#### Defined in

[packages/ai-tool/src/utils/filename.ts:174](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/filename.ts#L174)

___

### getResponseErrorReadableStream

▸ **getResponseErrorReadableStream**(`body?`): `ReadableStream`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | ``null`` \| `ReadableStream`\<`Uint8Array`\> |

#### Returns

`ReadableStream`\<`any`\>

#### Defined in

[packages/ai-tool/src/utils/stream/error-readable-stream.ts:12](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/stream/error-readable-stream.ts#L12)

___

### hfParse

▸ **hfParse**(`tokens`): `Program`

Generate the Abstract Syntax Tree (AST) from a list of tokens.
Operator precedence can be found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokens` | `Token`[] |

#### Returns

`Program`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/parser.ts:30](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/template/jinja/src/parser.ts#L30)

___

### hfTokenize

▸ **hfTokenize**(`source`, `options?`): `Token`[]

Generate a list of tokens from a source string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `options` | `PreprocessOptions` |

#### Returns

`Token`[]

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/lexer.ts:189](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/template/jinja/src/lexer.ts#L189)

___

### interpolateEnv

▸ **interpolateEnv**(`value`, `processEnv`, `parsed`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `processEnv` | `any` |
| `parsed` | `any` |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/env.ts:17](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/template/env.ts#L17)

___

### interpolateFString

▸ **interpolateFString**(`nodes`, `values`): `string`

Type that represents a function that takes a template string and a set
of input values, and returns a string where all variables in the
template have been replaced with their corresponding values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`FStringPromptTemplateNode`](modules.md#fstringprompttemplatenode)[] |
| `values` | `Record`\<`string`, `any`\> |

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/python.ts:71](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/template/python.ts#L71)

___

### interpolateGolangTemplate

▸ **interpolateGolangTemplate**(`str`, `variables`, `initVars?`): `string`

Parse and interpolate template

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | golang style template |
| `variables` | `Record`\<`string`, `any`\> | object of variables to insert |
| `initVars?` | `boolean` | - |

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/golang.ts:269](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/template/golang.ts#L269)

___

### isModelNameMatched

▸ **isModelNameMatched**(`modelName`, `rule?`): `undefined` \| `string` \| `RegExpExecArray`

Checks if the provided model name matches the given rule.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelName` | `string` | The name of the model to check. |
| `rule?` | [`AIModelNameRules`](modules.md#aimodelnamerules) | An optional rule that can be a string, an array of strings, a regular expression, or a function. |

#### Returns

`undefined` \| `string` \| `RegExpExecArray`

matched result if the model name matches the rule, undefined otherwise.

**`Example`**

```ts
IsModelNameMatched("gpt-3", "gpt-3") // returns true
IsModelNameMatched("GPT-3", "gpt-3") // returns true
IsModelNameMatched("GPT-3", ["gpt-3", "gpt-4"]) // returns true
IsModelNameMatched("gpt-3", /^gpt-\d+$/) // returns true
IsModelNameMatched("gpt-3", (modelName) => modelName.startsWith("gpt-")) // returns true
IsModelNameMatched("gpt-2", "gpt-3") // returns false
IsModelNameMatched("gpt-2", ["gpt-3", "gpt-4"]) // returns false
IsModelNameMatched("gpt-2", /^gpt-\d+$/) // returns false
IsModelNameMatched("gpt-2", (modelName) => modelName.startsWith("gpt-")) // returns false
```

#### Defined in

[packages/ai-tool/src/utils/is-model-name-matched.ts:21](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/is-model-name-matched.ts#L21)

___

### isValidFilename

▸ **isValidFilename**(`filename`): `boolean` \| ``""``

Validates if a given string is a valid filename.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | The filename to be validated. |

#### Returns

`boolean` \| ``""``

True if the filename is valid, false otherwise.

**`Throws`**

If the input is not a string.

**`Example`**

```ts
isValidFilename('myFile.txt'); // Returns true
isValidFilename('my<file.txt'); // Returns false
```

#### Defined in

[packages/ai-tool/src/utils/filename.ts:63](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/filename.ts#L63)

___

### isValidFilepath

▸ **isValidFilepath**(`filepath`): `boolean`

Validates whether the given filepath is valid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filepath` | `string` | The filepath to be checked, represented as a string. |

#### Returns

`boolean`

A boolean indicating whether the filepath is valid. Returns true if valid; false otherwise.

#### Defined in

[packages/ai-tool/src/utils/filename.ts:72](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/filename.ts#L72)

___

### jsonFilterToWhere

▸ **jsonFilterToWhere**(`filter`, `wrapKey?`): `string`

Converts a filter object to a SQLite WHERE clause.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | [`JsonFilter`](interfaces/JsonFilter.md) \| [`JsonFilter`](interfaces/JsonFilter.md)[] | The filter object to convert. |
| `wrapKey?` | (`k`: `string`) => `string` | - |

#### Returns

`string`

The generated WHERE clause.

**`Example`**

```ts
const jsonFilter: Filter = {
  $and: [
    { age: { $gt: 18, $lt: 30 } },
    { name: { $like: 'John%', $nlike: 'Doe%' } },
    { hobbies: { $in: ['reading', 'writing'] } },
    { $or: [{ gender: 'male' }, { country: 'USA' }] },
    { $and: [{ status: 'active' }, { registered: new Date('2020-01-01') }] },
  ],
};

console.log(jsonFilterToWhere(jsonFilter)); // Outputs a WHERE clause based on the given filter
```

#### Defined in

[packages/ai-tool/src/utils/json-filter.ts:118](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/json-filter.ts#L118)

___

### loadFileFromPaths

▸ **loadFileFromPaths**(`filename`, `searchPaths?`, `extNames?`): `Buffer`

Loads a file from given paths, optionally searching for specific extensions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | The base filename to search for, without any file extension. |
| `searchPaths?` | `string`[] | An array of directories to search for the file. Defaults to the current directory (`"."`) if not provided. |
| `extNames?` | `string`[] | An array of file extensions to try, in order of preference. If not provided, the file will be searched for without any extension. |

#### Returns

`Buffer`

The contents of the found file as a Buffer.

**`Throws`**

If the file is not found in any of the search paths.

**`Example`**

```typescript
const content = loadFileFromPaths('config', ['/etc', '/usr/local/etc'], ['.json', '.yaml']);
```

#### Defined in

[packages/ai-tool/src/utils/load-file-from-paths.ts:22](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/load-file-from-paths.ts#L22)

___

### loadTextFromPaths

▸ **loadTextFromPaths**(`filename`, `searchPaths?`, `extNames?`, `encoding?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filename` | `string` | `undefined` |
| `searchPaths?` | `string`[] | `undefined` |
| `extNames?` | `string`[] | `undefined` |
| `encoding` | `BufferEncoding` | `'utf8'` |

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/load-file-from-paths.ts:63](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/load-file-from-paths.ts#L63)

___

### matchUrlProtocol

▸ **matchUrlProtocol**(`name`): `undefined` \| `string`

Extracts the protocol part from a URL-like string.

This function checks a given string to find the protocol section of a URL.
If the string contains the sequence '://', it returns the substring from the start of the string
up to the '//' characters. If the sequence is not found, the function returns undefined.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The string to inspect, expected to contain a URL. |

#### Returns

`undefined` \| `string`

- The protocol part if '://' is found; otherwise, undefined.

**`Example`**

```ts
// Returns "http"
matchUrlProtocol("http://example.com");
```

**`Example`**

```ts
// Returns "ftp"
matchUrlProtocol("ftp://myftpserver.com");
```

**`Example`**

```ts
// Returns undefined
matchUrlProtocol("noProtocolHere");
```

#### Defined in

[packages/ai-tool/src/utils/match-url-protocol.ts:23](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/match-url-protocol.ts#L23)

___

### parseFString

▸ **parseFString**(`template`): [`FStringPromptTemplateNode`](modules.md#fstringprompttemplatenode)[]

Type that represents a function that takes a template string and
returns an array of `ParsedFStringNode`.

extract from langchain.js/langchain-core/src/prompts/template.ts

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `string` |

#### Returns

[`FStringPromptTemplateNode`](modules.md#fstringprompttemplatenode)[]

#### Defined in

[packages/ai-tool/src/utils/prompt/template/python.ts:16](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/template/python.ts#L16)

___

### parseJsJson

▸ **parseJsJson**(`input`): `any`

Parses a JavaScript string into a JSON object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The string to be parsed into JSON. |

#### Returns

`any`

The parsed JSON object. If parsing fails, undefined is returned.

**`Example`**

```ts
// This will return a JSON object with key 'name' and value 'John'.
const jsonString = '({name: "John"})';
const json = parseJsJson(jsonString);
console.log(json); // { name: 'John' }
```

#### Defined in

[packages/ai-tool/src/utils/parse-js-json.ts:14](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/parse-js-json.ts#L14)

___

### parseYaml

▸ **parseYaml**(`content`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/utils/config.ts:25](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/config.ts#L25)

___

### reControlCharsRegex

▸ **reControlCharsRegex**(): `RegExp`

Returns a new regular expression instance for control characters in a filename with the 'g' flag.

#### Returns

`RegExp`

A compiled regular expression for control characters in a filename.

#### Defined in

[packages/ai-tool/src/utils/filename.ts:50](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/filename.ts#L50)

___

### readableFromAsyncIterable

▸ **readableFromAsyncIterable**\<`T`\>(`iterable`): `ReadableStream`\<`T`\>

Implements ReadableStream.from(asyncIterable), which isn't documented in MDN and isn't implemented in node.
https://github.com/whatwg/streams/commit/8d7a0bf26eb2cc23e884ddbaac7c1da4b91cf2bc

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `AsyncIterable`\<`T`\> |

#### Returns

`ReadableStream`\<`T`\>

#### Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:251](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/stream/ai-stream.ts#L251)

___

### registerCoreTools

▸ **registerCoreTools**(): `void`

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/index.ts:19](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/funcs/index.ts#L19)

___

### registerYamlTag

▸ **registerYamlTag**(`tags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tags` | `any` |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/config.ts:15](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/config.ts#L15)

___

### sanitizeFilename

▸ **sanitizeFilename**(`filename`, `options?`): `string`

Sanitizes a given filename by replacing invalid characters with a specified replacement character or a default.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | The filename to sanitize, represented as a string. |
| `options` | [`SanitizeFilenameOptions`](interfaces/SanitizeFilenameOptions.md) | An optional object containing configuration options: - `replacement` {string} - The character to replace invalid characters with. Default is '!'. Cannot contain reserved filename characters. - `maxLength` {number} - The maximum length of the sanitized filename. Default is `MAX_FILENAME_LENGTH`. |

#### Returns

`string`

The sanitized filename.

**`Throws`**

- If the `replacement` contains reserved filename characters or control characters.

#### Defined in

[packages/ai-tool/src/utils/filename.ts:97](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/filename.ts#L97)

___

### sanitizeFilepath

▸ **sanitizeFilepath**(`filepath`, `options?`): `string`

Sanitizes each part of a file path and reassembles it, ensuring the path is valid according to provided options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filepath` | `string` | The file path to sanitize, represented as a string. |
| `options` | [`SanitizeFilenameOptions`](interfaces/SanitizeFilenameOptions.md) | Optional settings for sanitization, extending `SanitizeFilenameOptions`. Allows customization of replacement characters and maximum filename length. |

#### Returns

`string`

The sanitized file path as a string.

#### Defined in

[packages/ai-tool/src/utils/filename.ts:149](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/filename.ts#L149)

___

### saveConfigFile

▸ **saveConfigFile**(`filename`, `config`, `extLevel?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filename` | `string` | `undefined` |
| `config` | `any` | `undefined` |
| `extLevel` | `number` | `1` |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/config.ts:68](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/config.ts#L68)

___

### sortedValues

▸ **sortedValues**\<`T`\>(`values`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Record`\<`string`, `T`\> |

#### Returns

`T`[]

#### Defined in

[packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:4](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/prompt/few-shot-prompt-template.ts#L4)

___

### splitSentence

▸ **splitSentence**(`text`, `best?`): `string`[]

Splits a text into sentences.
This function is used to split a text into separate sentences, based on punctuation marks such as '.', '?', or '!' and other rules.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The input string that needs to be split into sentences. |
| `best` | `boolean` | `true` | A boolean flag indicating if the function should use the best possible sentence splitting method (default is true). If set to false, it will not perform any additional processing and simply split on newline characters ('\n'). |

#### Returns

`string`[]

An array of strings where each string represents a sentence in the input text.

Example:
const text = "Hello world! How are you today? I am fine.";
console.log(splitSentence(text));  // returns ['Hello world!', 'How are you today?', 'I am fine.']

#### Defined in

[packages/ai-tool/src/utils/split-sentence.ts:29](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/split-sentence.ts#L29)

___

### stringifyYaml

▸ **stringifyYaml**(`value`, `options?`): `string`

Stringify a value as a YAML document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `DocumentOptions` & `SchemaOptions` & `ParseOptions` & `CreateNodeOptions` & `ToStringOptions` |

#### Returns

`string`

Will always include `\n` as the last character, as is expected of YAML documents.

#### Defined in

node_modules/.pnpm/yaml@2.4.3/node_modules/yaml/dist/public-api.d.ts:42

▸ **stringifyYaml**(`value`, `replacer?`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `replacer?` | ``null`` \| `Replacer` |
| `options?` | `string` \| `number` \| `DocumentOptions` & `SchemaOptions` & `ParseOptions` & `CreateNodeOptions` & `ToStringOptions` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/yaml@2.4.3/node_modules/yaml/dist/public-api.d.ts:43

___

### throwError

▸ **throwError**(`message`, `name?`, `status?`): `void`

Throw an error

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `string` | `undefined` | Error message |
| `name?` | `string` \| `Record`\<`string`, `any`\> | `undefined` | Error name, optional |
| `status` | `string` \| `number` | `InternalErrorCode` | Error status code, default to 500 |

#### Returns

`void`

**`Throws`**

Throws a BaseError object

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:232](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/base-error.ts#L232)

___

### trimStartOfStreamHelper

▸ **trimStartOfStreamHelper**(): (`text`: `string`) => `string`

Returns a stateful function that, when invoked, trims leading whitespace
from the input text. The trimming only occurs on the first invocation, ensuring that
subsequent calls do not alter the input text. This is particularly useful in scenarios
where a text stream is being processed and only the initial whitespace should be removed.

#### Returns

`fn`

A function that takes a string as input and returns a string
with leading whitespace removed if it is the first invocation; otherwise, it returns the input unchanged.

▸ (`text`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

##### Returns

`string`

**`Example`**

```ts
const trimStart = trimStartOfStreamHelper();
const output1 = trimStart("   text"); // "text"
const output2 = trimStart("   text"); // "   text"
```

#### Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:177](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/stream/ai-stream.ts#L177)

___

### truncTo

▸ **truncTo**(`n`, `dec?`, `up?`): `number`

Truncates(Round) a number to a specified number of decimal places.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `n` | `number` | `undefined` | The number to truncate. |
| `dec` | `number` | `2` | The number of decimal places to truncate to (default is 2). |
| `up` | `number` | `0.5` | The amount to round up by before truncating (default is 0.5). |

#### Returns

`number`

The truncated number.

**`Example`**

```ts
// returns 1.235
truncTo(1.2345, 3)
```

**`Example`**

```ts
// returns 1.24
truncTo(1.2345, 2, 0.6)
```

#### Defined in

[packages/ai-tool/src/utils/trunc-to.ts:19](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/trunc-to.ts#L19)

___

### uuid

▸ **uuid**(`ver?`, `encode?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ver` | ``1`` \| ``4`` \| ``5`` | `1` |
| `encode?` | `boolean` | `undefined` |

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/hash/uuid.ts:8](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/hash/uuid.ts#L8)

___

### uuidParse

▸ **uuidParse**(`uuid`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`Uint8Array`

#### Defined in

node_modules/.pnpm/@types+uuid@9.0.8/node_modules/@types/uuid/index.d.ts:79

___

### uuidStringify

▸ **uuidStringify**(`buffer`, `offset?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `InputBuffer` |
| `offset?` | `number` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+uuid@9.0.8/node_modules/@types/uuid/index.d.ts:80

___

### uuidValidate

▸ **uuidValidate**(`uuid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/@types+uuid@9.0.8/node_modules/@types/uuid/index.d.ts:85

___

### uuidVersion

▸ **uuidVersion**(`uuid`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`number`

#### Defined in

node_modules/.pnpm/@types+uuid@9.0.8/node_modules/@types/uuid/index.d.ts:86

___

### uuidv1

▸ **uuidv1**\<`T`\>(`options`, `buffer`, `offset?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `OutputBuffer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `undefined` \| ``null`` \| `V1Options` |
| `buffer` | `T` |
| `offset?` | `number` |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/@types+uuid@9.0.8/node_modules/@types/uuid/index.d.ts:81

▸ **uuidv1**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `V1Options` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+uuid@9.0.8/node_modules/@types/uuid/index.d.ts:81

___

### uuidv4

▸ **uuidv4**\<`T`\>(`options`, `buffer`, `offset?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `OutputBuffer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `undefined` \| ``null`` \| `V4Options` |
| `buffer` | `T` |
| `offset?` | `number` |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/@types+uuid@9.0.8/node_modules/@types/uuid/index.d.ts:83

▸ **uuidv4**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `V4Options` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+uuid@9.0.8/node_modules/@types/uuid/index.d.ts:83

___

### uuidv5

▸ **uuidv5**\<`T`\>(`name`, `namespace`, `buffer`, `offset?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `OutputBuffer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `InputBuffer` |
| `namespace` | `string` \| `InputBuffer` |
| `buffer` | `T` |
| `offset?` | `number` |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/@types+uuid@9.0.8/node_modules/@types/uuid/index.d.ts:84

▸ **uuidv5**(`name`, `namespace`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `InputBuffer` |
| `namespace` | `string` \| `InputBuffer` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+uuid@9.0.8/node_modules/@types/uuid/index.d.ts:84

___

### wait

▸ **wait**(`ms`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/utils/wait.ts:1](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/wait.ts#L1)

___

### xxhash

▸ **xxhash**(`value`, `hashAlgo?`, `seed?`): `Uint8Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `HashValue` | `undefined` |
| `hashAlgo` | [`XXHashAlgorithm`](enums/XXHashAlgorithm.md) | `XXHashAlgorithm.xxhash64` |
| `seed` | `number` | `SEED` |

#### Returns

`Uint8Array`

#### Defined in

[packages/ai-tool/src/utils/hash/xxhash.ts:32](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/hash/xxhash.ts#L32)

___

### xxhash32

▸ **xxhash32**(`value`, `radix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` \| `object` | `undefined` |
| `radix` | `number` | `16` |

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/hash/xxhash.ts:11](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/hash/xxhash.ts#L11)

___

### xxhash64

▸ **xxhash64**(`value`, `radix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` \| `object` | `undefined` |
| `radix` | `number` | `16` |

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/hash/xxhash.ts:18](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/hash/xxhash.ts#L18)

___

### xxhashAsStr

▸ **xxhashAsStr**(`value`, `hashAlgo?`, `seed?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` \| `Uint8Array` | `undefined` |
| `hashAlgo` | [`XXHashAlgorithm`](enums/XXHashAlgorithm.md) | `XXHashAlgorithm.xxhash64` |
| `seed` | `number` | `SEED` |

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/hash/xxhash.ts:48](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/hash/xxhash.ts#L48)
