[@isdk/ai-tool](README.md) / Exports

# @isdk/ai-tool

## Table of contents

### Enumerations

- [AsyncFeatureBits](enums/AsyncFeatureBits.md)
- [AsyncFeatures](enums/AsyncFeatures.md)
- [ErrorCode](enums/ErrorCode.md)
- [XXHashAlgorithm](enums/XXHashAlgorithm.md)

### Classes

- [AbortError](classes/AbortError.md)
- [AlreadyExistsError](classes/AlreadyExistsError.md)
- [BaseError](classes/BaseError.md)
- [CancelableAbility](classes/CancelableAbility.md)
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
- [IntSet](classes/IntSet.md)
- [NotFoundError](classes/NotFoundError.md)
- [NotImplementationError](classes/NotImplementationError.md)
- [PromptExampleSelector](classes/PromptExampleSelector.md)
- [PromptTemplate](classes/PromptTemplate.md)
- [ReadableStreamError](classes/ReadableStreamError.md)
- [ResClientTools](classes/ResClientTools.md)
- [ResServerTools](classes/ResServerTools.md)
- [SSEChannel](classes/SSEChannel.md)
- [Semaphore](classes/Semaphore.md)
- [ServerTools](classes/ServerTools.md)
- [TaskAbortController](classes/TaskAbortController.md)
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
- [AIStreamParser](interfaces/AIStreamParser.md)
- [AIStreamParserOptions](interfaces/AIStreamParserOptions.md)
- [BaseFunc](interfaces/BaseFunc.md)
- [BaseFuncItem](interfaces/BaseFuncItem.md)
- [CancelableAbilityOptions](interfaces/CancelableAbilityOptions.md)
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
- [StreamCallbacksAndOptions](interfaces/StreamCallbacksAndOptions.md)
- [TaskAbortControllers](interfaces/TaskAbortControllers.md)
- [TaskPromise](interfaces/TaskPromise.md)
- [ToolFuncPackage](interfaces/ToolFuncPackage.md)

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
- [AsyncTaskId](modules.md#asynctaskid)
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
- [DefaultAsyncSemaphoreCapacity](modules.md#defaultasyncsemaphorecapacity)
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
- [ToolAsyncCancelableBit](modules.md#toolasynccancelablebit)
- [ToolAsyncMultiTaskBit](modules.md#toolasyncmultitaskbit)
- [ToolAsyncPriorityBit](modules.md#toolasyncprioritybit)
- [ToolFuncSchema](modules.md#toolfuncschema)
- [WindowsReservedNameRegex](modules.md#windowsreservednameregex)
- [base32768](modules.md#base32768)
- [defaultTemplateFormat](modules.md#defaulttemplateformat)
- [event](modules.md#event)
- [eventClient](modules.md#eventclient)
- [eventServer](modules.md#eventserver)
- [lrucache](modules.md#lrucache)
- [mimeType](modules.md#mimetype)
- [uuidNIL](modules.md#uuidnil)

### Functions

- [AIStream](modules.md#aistream)
- [RateLimit](modules.md#ratelimit)
- [\_lrucache](modules.md#_lrucache)
- [backendEventable](modules.md#backendeventable)
- [canonicalize](modules.md#canonicalize)
- [canonicalizeEx](modules.md#canonicalizeex)
- [createAbilityInjector](modules.md#createabilityinjector)
- [createCallbacksTransformer](modules.md#createcallbackstransformer)
- [createEmptyReadableStream](modules.md#createemptyreadablestream)
- [createEndWithRepetitionDetector](modules.md#createendwithrepetitiondetector)
- [createError](modules.md#createerror)
- [createEventStreamTransformer](modules.md#createeventstreamtransformer)
- [createHfValueFunc](modules.md#createhfvaluefunc)
- [createLRUCache](modules.md#createlrucache)
- [dateToText](modules.md#datetotext)
- [expandEnv](modules.md#expandenv)
- [expandObjEnv](modules.md#expandobjenv)
- [extNameLevel](modules.md#extnamelevel)
- [filenameReservedRegex](modules.md#filenamereservedregex-1)
- [formatISO](modules.md#formatiso)
- [getAllEnumKeys](modules.md#getallenumkeys)
- [getConfigFileNames](modules.md#getconfigfilenames)
- [getConfigs](modules.md#getconfigs)
- [getKeysPath](modules.md#getkeyspath)
- [getMultiLevelExtname](modules.md#getmultilevelextname)
- [getRealFilepath](modules.md#getrealfilepath)
- [getResponseErrorReadableStream](modules.md#getresponseerrorreadablestream)
- [hfParse](modules.md#hfparse)
- [hfTokenize](modules.md#hftokenize)
- [interpolateEnv](modules.md#interpolateenv)
- [interpolateFString](modules.md#interpolatefstring)
- [interpolateGolangTemplate](modules.md#interpolategolangtemplate)
- [isModelNameMatched](modules.md#ismodelnamematched)
- [isValidFilename](modules.md#isvalidfilename)
- [isValidFilepath](modules.md#isvalidfilepath)
- [isWebStream](modules.md#iswebstream)
- [jsonFilterToWhere](modules.md#jsonfiltertowhere)
- [jsonToMarkdownStr](modules.md#jsontomarkdownstr)
- [loadFileFromPaths](modules.md#loadfilefrompaths)
- [loadTextFromPaths](modules.md#loadtextfrompaths)
- [makeToolFuncCancelable](modules.md#maketoolfunccancelable)
- [matchUrlProtocol](modules.md#matchurlprotocol)
- [messagesToText](modules.md#messagestotext)
- [paramsSizeToScaleStr](modules.md#paramssizetoscalestr)
- [parseDateFormat](modules.md#parsedateformat)
- [parseFString](modules.md#parsefstring)
- [parseISO](modules.md#parseiso)
- [parseJsJson](modules.md#parsejsjson)
- [parseYaml](modules.md#parseyaml)
- [reControlCharsRegex](modules.md#recontrolcharsregex)
- [readFilenamesRecursiveSync](modules.md#readfilenamesrecursivesync)
- [readableFromAsyncIterable](modules.md#readablefromasynciterable)
- [registerCoreTools](modules.md#registercoretools)
- [registerYamlTag](modules.md#registeryamltag)
- [sanitizeFilename](modules.md#sanitizefilename)
- [sanitizeFilepath](modules.md#sanitizefilepath)
- [saveConfigFile](modules.md#saveconfigfile)
- [scaleStrToParamsSize](modules.md#scalestrtoparamssize)
- [sortedValues](modules.md#sortedvalues)
- [splitSentence](modules.md#splitsentence)
- [stringifyYaml](modules.md#stringifyyaml)
- [textToDate](modules.md#texttodate)
- [throwError](modules.md#throwerror)
- [toDate](modules.md#todate)
- [toDateTime](modules.md#todatetime)
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

## Common Helpers

### formatISO

▸ **formatISO**\<`DateType`\>(`date`, `options?`): `string`

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `DateType` | extends `Date` | The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc). |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` \| `number` \| `DateType` | The original date |
| `options?` | `FormatISOOptions` | An object with options. |

#### Returns

`string`

The formatted date string (in loca.l time zone)

**`Name`**

formatISO

**`Summary`**

Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).

**`Description`**

Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.

**`Throws`**

`date` must not be Invalid Date

**`Example`**

```ts
// Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
//=> '2019-09-18T19:00:52Z'
```

**`Example`**

```ts
// Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
//=> '20190918T190052'
```

**`Example`**

```ts
// Represent 18 September 2019 in ISO 8601 format, date only:
const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
//=> '2019-09-18'
```

**`Example`**

```ts
// Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
//=> '19:00:52Z'
```

#### Defined in

node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/formatISO.d.ts:43

___

### parseDateFormat

▸ **parseDateFormat**\<`DateType`\>(`dateStr`, `formatStr`, `referenceDate`, `options?`): `DateType`

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `DateType` | extends `Date` | The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc). |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateStr` | `string` | The string to parse |
| `formatStr` | `string` | The string of tokens |
| `referenceDate` | `string` \| `number` \| `DateType` | defines values missing from the parsed dateString |
| `options?` | `ParseOptions` | An object with options. see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md |

#### Returns

`DateType`

The parsed date

**`Name`**

parse

**`Summary`**

Parse the date.

**`Description`**

Return the date parsed from string using the given format string.

> ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
> See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

The characters in the format string wrapped between two single quotes characters (') are escaped.
Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.

Format of the format string is based on Unicode Technical Standard #35:
https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
with a few additions (see note 5 below the table).

Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:

```javascript
parse('23 AM', 'HH a', new Date())
//=> RangeError: The format string mustn't contain `HH` and `a` at the same time
```

See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true

Accepted format string patterns:
| Unit                            |Prior| Pattern | Result examples                   | Notes |
|---------------------------------|-----|---------|-----------------------------------|-------|
| Era                             | 140 | G..GGG  | AD, BC                            |       |
|                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
|                                 |     | GGGGG   | A, B                              |       |
| Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
|                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
|                                 |     | yy      | 44, 01, 00, 17                    | 4     |
|                                 |     | yyy     | 044, 001, 123, 999                | 4     |
|                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
|                                 |     | yyyyy   | ...                               | 2,4   |
| Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
|                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
|                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
|                                 |     | YYY     | 044, 001, 123, 999                | 4     |
|                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
|                                 |     | YYYYY   | ...                               | 2,4   |
| ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
|                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
|                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
|                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
|                                 |     | RRRRR   | ...                               | 2,4,5 |
| Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
|                                 |     | uu      | -43, 01, 99, -99                  | 4     |
|                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
|                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
|                                 |     | uuuuu   | ...                               | 2,4   |
| Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
|                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
|                                 |     | QQ      | 01, 02, 03, 04                    |       |
|                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
|                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
|                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
| Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
|                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
|                                 |     | qq      | 01, 02, 03, 04                    |       |
|                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
|                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
|                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
| Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
|                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
|                                 |     | MM      | 01, 02, ..., 12                   |       |
|                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
|                                 |     | MMMM    | January, February, ..., December  | 2     |
|                                 |     | MMMMM   | J, F, ..., D                      |       |
| Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
|                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
|                                 |     | LL      | 01, 02, ..., 12                   |       |
|                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
|                                 |     | LLLL    | January, February, ..., December  | 2     |
|                                 |     | LLLLL   | J, F, ..., D                      |       |
| Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
|                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
|                                 |     | ww      | 01, 02, ..., 53                   |       |
| ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
|                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
|                                 |     | II      | 01, 02, ..., 53                   | 5     |
| Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
|                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
|                                 |     | dd      | 01, 02, ..., 31                   |       |
| Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
|                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
|                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
|                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
|                                 |     | DDDD    | ...                               | 2     |
| Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
|                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
|                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
|                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
| ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
|                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
|                                 |     | ii      | 01, 02, ..., 07                   | 5     |
|                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
|                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
|                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
|                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
| Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
|                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
|                                 |     | ee      | 02, 03, ..., 01                   |       |
|                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
|                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
|                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
|                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
| Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
|                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
|                                 |     | cc      | 02, 03, ..., 01                   |       |
|                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
|                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
|                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
|                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
| AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
|                                 |     | aaaa    | a.m., p.m.                        | 2     |
|                                 |     | aaaaa   | a, p                              |       |
| AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
|                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
|                                 |     | bbbbb   | a, p, n, mi                       |       |
| Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
|                                 |     | BBBB    | at night, in the morning, ...     | 2     |
|                                 |     | BBBBB   | at night, in the morning, ...     |       |
| Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
|                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
|                                 |     | hh      | 01, 02, ..., 11, 12               |       |
| Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
|                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
|                                 |     | HH      | 00, 01, 02, ..., 23               |       |
| Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
|                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
|                                 |     | KK      | 01, 02, ..., 11, 00               |       |
| Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
|                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
|                                 |     | kk      | 24, 01, 02, ..., 23               |       |
| Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
|                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
|                                 |     | mm      | 00, 01, ..., 59                   |       |
| Second                          |  50 | s       | 0, 1, ..., 59                     |       |
|                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
|                                 |     | ss      | 00, 01, ..., 59                   |       |
| Seconds timestamp               |  40 | t       | 512969520                         |       |
|                                 |     | tt      | ...                               | 2     |
| Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
|                                 |     | SS      | 00, 01, ..., 99                   |       |
|                                 |     | SSS     | 000, 001, ..., 999                |       |
|                                 |     | SSSS    | ...                               | 2     |
| Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
|                                 |     | TT      | ...                               | 2     |
| Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
|                                 |     | XX      | -0800, +0530, Z                   |       |
|                                 |     | XXX     | -08:00, +05:30, Z                 |       |
|                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
|                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
| Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
|                                 |     | xx      | -0800, +0530, +0000               |       |
|                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
|                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
|                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
| Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
|                                 |     | PP      | May 29, 1453                      |       |
|                                 |     | PPP     | May 29th, 1453                    |       |
|                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
| Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
|                                 |     | pp      | 12:00:00 AM                       |       |
| Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
|                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
|                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
|                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
Notes:
1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
   are the same as "stand-alone" units, but are different in some languages.
   "Formatting" units are declined according to the rules of the language
   in the context of a date. "Stand-alone" units are always nominative singular.
   In `format` function, they will produce different result:

   `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`

   `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`

   `parse` will try to match both formatting and stand-alone units interchangably.

2. Any sequence of the identical letters is a pattern, unless it is escaped by
   the single quote characters (see below).
   If the sequence is longer than listed in table:
   - for numerical units (`yyyyyyyy`) `parse` will try to match a number
     as wide as the sequence
   - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
     These variations are marked with "2" in the last column of the table.

3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
   These tokens represent the shortest form of the quarter.

4. The main difference between `y` and `u` patterns are B.C. years:

   | Year | `y` | `u` |
   |------|-----|-----|
   | AC 1 |   1 |   1 |
   | BC 1 |   1 |   0 |
   | BC 2 |   2 |  -1 |

   Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:

   `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`

   `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`

   while `uu` will just assign the year as is:

   `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`

   `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`

   The same difference is true for local and ISO week-numbering years (`Y` and `R`),
   except local week-numbering years are dependent on `options.weekStartsOn`
   and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
   and [setWeekYear](https://date-fns.org/docs/setWeekYear)).

5. These patterns are not in the Unicode Technical Standard #35:
   - `i`: ISO day of week
   - `I`: ISO week of year
   - `R`: ISO week-numbering year
   - `o`: ordinal number modifier
   - `P`: long localized date
   - `p`: long localized time

6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
   You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
   You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
   on the given locale.

   using `en-US` locale: `P` => `MM/dd/yyyy`
   using `en-US` locale: `p` => `hh:mm a`
   using `pt-BR` locale: `P` => `dd/MM/yyyy`
   using `pt-BR` locale: `p` => `HH:mm`

Values will be assigned to the date in the descending order of its unit's priority.
Units of an equal priority overwrite each other in the order of appearance.

If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.

`referenceDate` must be passed for correct work of the function.
If you're not sure which `referenceDate` to supply, create a new instance of Date:
`parse('02/11/2014', 'MM/dd/yyyy', new Date())`
In this case parsing will be done in the context of the current date.
If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
then `Invalid Date` will be returned.

The result may vary by locale.

If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.

If parsing failed, `Invalid Date` will be returned.
Invalid Date is a Date, whose time value is NaN.
Time value of Date: http://es5.github.io/#x15.9.1.1

**`Throws`**

`options.locale` must contain `match` property

**`Throws`**

use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

**`Throws`**

use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

**`Throws`**

use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

**`Throws`**

use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

**`Throws`**

format string contains an unescaped latin alphabet character

**`Example`**

```ts
// Parse 11 February 2014 from middle-endian format:
var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
//=> Tue Feb 11 2014 00:00:00
```

**`Example`**

```ts
// Parse 28th of February in Esperanto locale in the context of 2010 year:
import eo from 'date-fns/locale/eo'
var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
  locale: eo
})
//=> Sun Feb 28 2010 00:00:00
```

#### Defined in

node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse.d.ts:315

___

### parseISO

▸ **parseISO**(`argument`, `options?`): `Date`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `argument` | `string` | The value to convert |
| `options?` | `ParseISOOptions` | An object with options |

#### Returns

`Date`

The parsed date in the local time zone

**`Name`**

parseISO

**`Summary`**

Parse ISO string

**`Description`**

Parse the given string in ISO 8601 format and return an instance of Date.

Function accepts complete ISO 8601 formats as well as partial implementations.
ISO 8601: http://en.wikipedia.org/wiki/ISO_8601

If the argument isn't a string, the function cannot parse the string or
the values are invalid, it returns Invalid Date.

**`Example`**

```ts
// Convert string '2014-02-11T11:30:30' to date:
const result = parseISO('2014-02-11T11:30:30')
//=> Tue Feb 11 2014 11:30:30
```

**`Example`**

```ts
// Convert string '+02014101' to date,
// if the additional number of digits in the extended year format is 1:
const result = parseISO('+02014101', { additionalDigits: 1 })
//=> Fri Apr 11 2014 00:00:00
```

#### Defined in

node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parseISO.d.ts:40

___

### toDate

▸ **toDate**\<`DateType`\>(`argument`): `DateType`

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `DateType` | extends `Date` | The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc). |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `argument` | `string` \| `number` \| `DateType` | The value to convert |

#### Returns

`DateType`

The parsed date in the local time zone

**`Name`**

toDate

**`Summary`**

Convert the given argument to an instance of Date.

**`Description`**

Convert the given argument to an instance of Date.

If the argument is an instance of Date, the function returns its clone.

If the argument is a number, it is treated as a timestamp.

If the argument is none of the above, the function returns Invalid Date.

**Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.

**`Example`**

```ts
// Clone the date:
const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
//=> Tue Feb 11 2014 11:30:30
```

**`Example`**

```ts
// Convert the timestamp to date:
const result = toDate(1392098430000)
//=> Tue Feb 11 2014 11:30:30
```

#### Defined in

node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.d.ts:33

## Other

### AIChatContentPart

Ƭ **AIChatContentPart**: [`AIChatContentPartText`](interfaces/AIChatContentPartText.md) \| [`AIChatContentPartImage`](interfaces/AIChatContentPartImage.md)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:74](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/chat.ts#L74)

___

### AIChatMessageParam

Ƭ **AIChatMessageParam**: [`AIChatSystemMessageParam`](interfaces/AIChatSystemMessageParam.md) \| [`AIChatUserMessageParam`](interfaces/AIChatUserMessageParam.md) \| [`AIChatAssistantMessageParam`](interfaces/AIChatAssistantMessageParam.md) \| [`AIChatToolMessageParam`](interfaces/AIChatToolMessageParam.md)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:44](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/chat.ts#L44)

___

### AIChatRole

Ƭ **AIChatRole**: typeof [`AIChatRoles`](modules.md#aichatroles)[`number`] & `string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:42](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/chat.ts#L42)

___

### AIMessageType

Ƭ **AIMessageType**: typeof [`AIMessageTypes`](modules.md#aimessagetypes)[`number`]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:36](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/chat.ts#L36)

___

### AIModelNameRule

Ƭ **AIModelNameRule**: `string` \| `RegExp` \| [`AIModelNameRuleFn`](modules.md#aimodelnamerulefn)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:10](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/consts.ts#L10)

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

[packages/ai-tool/src/utils/consts.ts:8](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/consts.ts#L8)

___

### AIModelNameRules

Ƭ **AIModelNameRules**: [`AIModelNameRule`](modules.md#aimodelnamerule) \| [`AIModelNameRule`](modules.md#aimodelnamerule)[]

#### Defined in

[packages/ai-tool/src/utils/consts.ts:11](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/consts.ts#L11)

___

### AITextGenerationFinishReason

Ƭ **AITextGenerationFinishReason**: typeof [`AITextGenerationFinishReasons`](modules.md#aitextgenerationfinishreasons)[`number`]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:13](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/chat.ts#L13)

___

### ActionName

Ƭ **ActionName**: typeof [`ActionNames`](modules.md#actionnames)[`number`]

#### Defined in

[packages/ai-tool/src/utils/consts.ts:6](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/consts.ts#L6)

___

### AsyncTaskId

Ƭ **AsyncTaskId**: `string` \| `number`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:8](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/cancelable-ability.ts#L8)

___

### ErrorCodeType

Ƭ **ErrorCodeType**: `number` \| `string`

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:3](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/base-error.ts#L3)

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

[packages/ai-tool/src/utils/event/event-ability.ts:9](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/event/event-ability.ts#L9)

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

[packages/ai-tool/src/utils/event/event-ability.ts:8](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/event/event-ability.ts#L8)

___

### FStringPromptTemplateNode

Ƭ **FStringPromptTemplateNode**: \{ `text`: `string` ; `type`: ``"literal"``  } \| \{ `name`: `string` ; `type`: ``"variable"``  }

Type that represents a node in a parsed format string. It can be either
a literal text or a variable name.

#### Defined in

[packages/ai-tool/src/utils/prompt/template/python.ts:6](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/template/python.ts#L6)

___

### FuncParamType

Ƭ **FuncParamType**: `string`

#### Defined in

[packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L24)

___

### PromptExamples

Ƭ **PromptExamples**\<`T`\>: `Iterable`\<`PromiseLike`\<`T`\> \| `T`\> \| `AsyncIterable`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:3](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/prompt-example-selector.ts#L3)

___

### PromptTemplateType

Ƭ **PromptTemplateType**: typeof [`PromptTemplateTypes`](modules.md#prompttemplatetypes)[`number`]

#### Defined in

[packages/ai-tool/src/utils/prompt/consts.ts:17](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/consts.ts#L17)

___

### PromptType

Ƭ **PromptType**: typeof [`PromptTypes`](modules.md#prompttypes)[`number`]

#### Defined in

[packages/ai-tool/src/utils/prompt/consts.ts:10](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/consts.ts#L10)

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

[packages/ai-tool/src/tool-func.ts:38](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L38)

___

### AIChatRoles

• `Const` **AIChatRoles**: readonly [``"user"``, ``"assistant"``, ``"system"``, ``"tool"``, ``"tool_calls"``]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:41](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/chat.ts#L41)

___

### AIMessageTypes

• `Const` **AIMessageTypes**: readonly [``"human"``, ``"ai"``, ``"generic"``, ``"system"``, ``"tool"``]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:35](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/chat.ts#L35)

___

### AITextGenerationFinishReasons

• `Const` **AITextGenerationFinishReasons**: readonly [``"stop"``, ``"length"``, ``"content-filter"``, ``"tool-calls"``, ``"abort"``, ``"error"``, ``"other"``, ``null``]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:4](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/chat.ts#L4)

___

### AbortErrorCode

• `Const` **AbortErrorCode**: [`Aborted`](enums/ErrorCode.md#aborted) = `ErrorCode.Aborted`

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:33](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/base-error.ts#L33)

___

### ActionNames

• `Const` **ActionNames**: readonly [``"get"``, ``"post"``, ``"put"``, ``"delete"``, ``"patch"``, ``"list"``, ``"res"``]

#### Defined in

[packages/ai-tool/src/utils/consts.ts:5](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/consts.ts#L5)

___

### AlreadyExistsErrorCode

• `Const` **AlreadyExistsErrorCode**: [`Conflict`](enums/ErrorCode.md#conflict) = `ErrorCode.Conflict`

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:32](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/base-error.ts#L32)

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

[packages/ai-tool/src/client-tools.ts:153](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/client-tools.ts#L153)

___

### DefaultAsyncSemaphoreCapacity

• `Const` **DefaultAsyncSemaphoreCapacity**: ``32``

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:6](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/async-semaphore.ts#L6)

___

### EventBusName

• `Const` **EventBusName**: ``"event-bus"``

#### Defined in

[packages/ai-tool/src/utils/event/event-ability.ts:7](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/event/event-ability.ts#L7)

___

### EventName

• `Const` **EventName**: ``"event"``

#### Defined in

[packages/ai-tool/src/utils/event/event-ability.ts:6](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/event/event-ability.ts#L6)

___

### FilenameReservedRegex

• `Const` **FilenameReservedRegex**: `RegExp`

Regular expression pattern for reserved characters in a filename.
do not use /g global option here: when the regex is executed multiple times, it will always begin where it left off last time.

#### Defined in

[packages/ai-tool/src/utils/filename.ts:8](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/filename.ts#L8)

___

### HFBuiltins

• `Const` **HFBuiltins**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `randomInt` | (`to`: `number`, `from`: `number`) => `number` |
| `select` | (`obj`: `any`, `index?`: `string` \| `number`) => `any` |

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/builtins.ts:52](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/template/jinja/src/builtins.ts#L52)

___

### InternalErrorCode

• `Const` **InternalErrorCode**: [`InternalError`](enums/ErrorCode.md#internalerror) = `ErrorCode.InternalError`

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:29](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/base-error.ts#L29)

___

### NotFoundErrorCode

• `Const` **NotFoundErrorCode**: [`NotFound`](enums/ErrorCode.md#notfound) = `ErrorCode.NotFound`

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:31](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/base-error.ts#L31)

___

### NotImplementedErrorCode

• `Const` **NotImplementedErrorCode**: [`NotImplemented`](enums/ErrorCode.md#notimplemented) = `ErrorCode.NotImplemented`

#### Defined in

[packages/ai-tool/src/utils/base-error.ts:30](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/base-error.ts#L30)

___

### PASSING\_SCORE

• `Const` **PASSING\_SCORE**: ``0.618``

#### Defined in

[packages/ai-tool/src/utils/consts.ts:3](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/consts.ts#L3)

___

### PromptTemplateTypes

• `Const` **PromptTemplateTypes**: readonly [``"internal"``, ``"hf"``, ``"fill"``]

#### Defined in

[packages/ai-tool/src/utils/prompt/consts.ts:12](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/consts.ts#L12)

___

### PromptTypes

• `Const` **PromptTypes**: readonly [``"chat"``, ``"char"``, ``"plan"``]

Prompt Type
defaults to `chat`

#### Defined in

[packages/ai-tool/src/utils/prompt/consts.ts:5](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/consts.ts#L5)

___

### RStreamErrCode

• `Const` **RStreamErrCode**: ``600``

#### Defined in

[packages/ai-tool/src/utils/stream/error-readable-stream.ts:3](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/stream/error-readable-stream.ts#L3)

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

[packages/ai-tool/src/utils/consts.ts:13](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/consts.ts#L13)

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

[packages/ai-tool/src/res-client-tools.ts:68](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/res-client-tools.ts#L68)

___

### ResServerToolsSchema

• `Const` **ResServerToolsSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `methods` | \{ `type`: `string` = 'array' } |
| `methods.type` | `string` |

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:77](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/res-server-tools.ts#L77)

___

### ResponseRStreamErrCode

• `Const` **ResponseRStreamErrCode**: ``601``

#### Defined in

[packages/ai-tool/src/utils/stream/error-readable-stream.ts:4](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/stream/error-readable-stream.ts#L4)

___

### SSEChannelAlreadyClosedErrCode

• `Const` **SSEChannelAlreadyClosedErrCode**: ``498``

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:17](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/event/sse-channel.ts#L17)

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

[packages/ai-tool/src/server-tools.ts:66](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/server-tools.ts#L66)

___

### ToolAsyncCancelableBit

• `Const` **ToolAsyncCancelableBit**: ``1``

#### Defined in

[packages/ai-tool/src/tool-func.ts:8](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L8)

___

### ToolAsyncMultiTaskBit

• `Const` **ToolAsyncMultiTaskBit**: ``0``

#### Defined in

[packages/ai-tool/src/tool-func.ts:7](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L7)

___

### ToolAsyncPriorityBit

• `Const` **ToolAsyncPriorityBit**: ``2``

#### Defined in

[packages/ai-tool/src/tool-func.ts:9](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L9)

___

### ToolFuncSchema

• `Const` **ToolFuncSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asyncFeatures` | \{ `type`: `string` = 'number' } |
| `asyncFeatures.type` | `string` |
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

[packages/ai-tool/src/tool-func.ts:342](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L342)

___

### WindowsReservedNameRegex

• `Const` **WindowsReservedNameRegex**: `RegExp`

Regular expression pattern for reserved names on Windows systems.

#### Defined in

[packages/ai-tool/src/utils/filename.ts:13](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/filename.ts#L13)

___

### base32768

• `Const` **base32768**: `__module` = `_base32768`

#### Defined in

[packages/ai-tool/src/utils/hash/xxhash.ts:5](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/hash/xxhash.ts#L5)

___

### defaultTemplateFormat

• `Const` **defaultTemplateFormat**: ``"default"``

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:8](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/prompt-template.ts#L8)

___

### event

• `Const` **event**: [`EventToolFunc`](classes/EventToolFunc.md)

#### Defined in

[packages/ai-tool/src/funcs/event.ts:22](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/funcs/event.ts#L22)

___

### eventClient

• `Const` **eventClient**: [`EventClient`](classes/EventClient.md)

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:180](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/funcs/event-client.ts#L180)

___

### eventServer

• `Const` **eventServer**: [`EventServer`](classes/EventServer.md)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:133](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/funcs/event-server.ts#L133)

___

### lrucache

• `Const` **lrucache**: [`ToolFunc`](classes/ToolFunc.md)

#### Defined in

[packages/ai-tool/src/funcs/lrucache.ts:40](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/funcs/lrucache.ts#L40)

___

### mimeType

• `Const` **mimeType**: `MimeType`

#### Defined in

node_modules/.pnpm/mime-type@5.0.0-alpha.2/node_modules/mime-type/src/with-db.d.ts:3

___

### uuidNIL

• `Const` **uuidNIL**: `NIL`

#### Defined in

node_modules/.pnpm/@types+uuid@9.0.8/node_modules/@types/uuid/index.d.ts:78

___

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

[packages/ai-tool/src/utils/stream/ai-stream.ts:122](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/stream/ai-stream.ts#L122)

___

### RateLimit

▸ **RateLimit**(`rps`, `«destructured»?`): () => `Promise`\<`void`\>

Creates a rate limiter function that blocks with a promise whenever the rate limit is hit and resolves the promise once the call rate is within the limit set by rps. The second argument is optional.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rps` | `number` | `undefined` |
| `«destructured»` | `Object` | `{}` |
| › `timeUnit?` | `number` | `1000` |
| › `uniformDistribution?` | `boolean` | `false` |

#### Returns

`fn`

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:347](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/async-semaphore.ts#L347)

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

[packages/ai-tool/src/funcs/lrucache.ts:6](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/funcs/lrucache.ts#L6)

___

### backendEventable

▸ **backendEventable**(`targetClass?`, `options?`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetClass?` | `Function` |
| `options?` | `AbilityOptions` |

#### Returns

`Function`

#### Defined in

[packages/ai-tool/src/utils/event/event-ability.ts:80](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/event/event-ability.ts#L80)

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

### createAbilityInjector

▸ **createAbilityInjector**(`abilityClass`, `isGetClassFunc?`, `injectorOpts?`): `AbilityFn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `abilityClass` | `Function` |
| `isGetClassFunc?` | `boolean` |
| `injectorOpts?` | `AbilityInjectorOptions` |

#### Returns

`AbilityFn`

#### Defined in

node_modules/.pnpm/custom-ability@2.0.0-alpha.7/node_modules/custom-ability/lib/custom-ability.d.ts:29

▸ **createAbilityInjector**(`abilityClass`, `aCoreMethod?`, `isGetClassFunc?`, `injectorOpts?`): `AbilityFn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `abilityClass` | `Function` |
| `aCoreMethod?` | `string` \| `string`[] |
| `isGetClassFunc?` | `boolean` |
| `injectorOpts?` | `AbilityInjectorOptions` |

#### Returns

`AbilityFn`

#### Defined in

node_modules/.pnpm/custom-ability@2.0.0-alpha.7/node_modules/custom-ability/lib/custom-ability.d.ts:30

▸ **createAbilityInjector**(`abilityClass`, `aCoreMethod?`, `injectorOpts?`): `AbilityFn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `abilityClass` | `Function` |
| `aCoreMethod?` | `string` \| `string`[] |
| `injectorOpts?` | `AbilityInjectorOptions` |

#### Returns

`AbilityFn`

#### Defined in

node_modules/.pnpm/custom-ability@2.0.0-alpha.7/node_modules/custom-ability/lib/custom-ability.d.ts:31

▸ **createAbilityInjector**(`abilityClass`, `injectorOpts?`): `AbilityFn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `abilityClass` | `Function` |
| `injectorOpts?` | `AbilityInjectorOptions` |

#### Returns

`AbilityFn`

#### Defined in

node_modules/.pnpm/custom-ability@2.0.0-alpha.7/node_modules/custom-ability/lib/custom-ability.d.ts:32

___

### createCallbacksTransformer

▸ **createCallbacksTransformer**\<`I`, `O`\>(`cb`): `TransformStream`\<`I`, `O`\>

Creates a transform stream that invokes optional callback functions.
The transform stream uses the provided callbacks to execute custom logic at different stages of the stream's lifecycle.
- `onStart`: Called once when the stream is initialized.
- `onTransform`: Called for each tokenized message.
- `onCompletion`: Called every time an AIStream completion message is received. This can occur multiple times when using e.g. OpenAI functions
- `onFinal`: Called once when the stream is closed with the final completion message.

This function is useful when you want to process a stream of messages and perform specific actions during the stream's lifecycle.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `any` |
| `O` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `undefined` \| [`StreamCallbacksAndOptions`](interfaces/StreamCallbacksAndOptions.md)\<`I`, `O`\> |

#### Returns

`TransformStream`\<`I`, `O`\>

A transform stream that encodes input messages as Uint8Array and allows the execution of custom logic through callbacks.

**`Example`**

```ts
const callbacks = {
  onStart: async () => console.log('Stream started'),
  onTransform: async (chunk) => console.log('Token:',chunk),
  onFinal: async () => data.close()
};
const transformer = createCallbacksTransformer(callbacks);
```

#### Defined in

[packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:36](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/stream/create-callbacks-stream.ts#L36)

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

[packages/ai-tool/src/utils/stream/create-empty-stream.ts:8](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/stream/create-empty-stream.ts#L8)

___

### createEndWithRepetitionDetector

▸ **createEndWithRepetitionDetector**(`repetitionThreshold`): (`value`: `string`) => ``null`` \| `RegExpExecArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `repetitionThreshold` | `number` |

#### Returns

`fn`

▸ (`value`): ``null`` \| `RegExpExecArray`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

##### Returns

``null`` \| `RegExpExecArray`

#### Defined in

[packages/ai-tool/src/utils/end-with-repeated-sequence.ts:3](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/end-with-repeated-sequence.ts#L3)

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

[packages/ai-tool/src/utils/base-error.ts:220](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/base-error.ts#L220)

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

[packages/ai-tool/src/utils/stream/ai-stream.ts:37](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/stream/ai-stream.ts#L37)

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

[packages/ai-tool/src/utils/prompt/hf-prompt-template.ts:148](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/hf-prompt-template.ts#L148)

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

[packages/ai-tool/src/funcs/lrucache.ts:22](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/funcs/lrucache.ts#L22)

___

### dateToText

▸ **dateToText**(`date`, `format?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `Date` | `undefined` |
| `format` | `string` | `FormatDateStr` |

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/to-datetime.ts:29](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/to-datetime.ts#L29)

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

[packages/ai-tool/src/utils/prompt/template/env.ts:82](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/template/env.ts#L82)

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

[packages/ai-tool/src/utils/prompt/template/env.ts:142](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/template/env.ts#L142)

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

[packages/ai-tool/src/utils/filename.ts:209](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/filename.ts#L209)

___

### filenameReservedRegex

▸ **filenameReservedRegex**(): `RegExp`

Returns a new regular expression instance for reserved filename characters with the 'g' flag.
use this to reset the with global option

#### Returns

`RegExp`

A compiled regular expression for reserved filename characters.

#### Defined in

[packages/ai-tool/src/utils/filename.ts:42](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/filename.ts#L42)

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

[packages/ai-tool/src/utils/get-all-enum-keys.ts:7](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/get-all-enum-keys.ts#L7)

___

### getConfigFileNames

▸ **getConfigFileNames**(`directoryPath`, `filter?`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `directoryPath` | `string` |
| `filter?` | `ConfigFilesFilter` |

#### Returns

`string`[]

#### Defined in

[packages/ai-tool/src/utils/config.ts:56](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/config.ts#L56)

___

### getConfigs

▸ **getConfigs**(`directoryPath`, `filter?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `directoryPath` | `string` |
| `filter?` | `ConfigFilesFilter` |

#### Returns

`any`[]

#### Defined in

[packages/ai-tool/src/utils/config.ts:80](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/config.ts#L80)

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

[packages/ai-tool/src/utils/get-keys-path.ts:16](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/get-keys-path.ts#L16)

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

[packages/ai-tool/src/utils/filename.ts:174](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/filename.ts#L174)

___

### getRealFilepath

▸ **getRealFilepath**(`filepath`): `string`

Resolves the real file path, handling symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filepath` | `string` | The file path to resolve. |

#### Returns

`string`

The real file path.

**`Example`**

```typescript
const realPath = getRealFilepath('/path/to/symbolic/link');
console.log(realPath); // Outputs the resolved path.
```

#### Defined in

[packages/ai-tool/src/utils/load-file-from-paths.ts:141](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/load-file-from-paths.ts#L141)

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

[packages/ai-tool/src/utils/stream/error-readable-stream.ts:12](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/stream/error-readable-stream.ts#L12)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/parser.ts:30](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/template/jinja/src/parser.ts#L30)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/lexer.ts:189](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/template/jinja/src/lexer.ts#L189)

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

[packages/ai-tool/src/utils/prompt/template/env.ts:17](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/template/env.ts#L17)

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

[packages/ai-tool/src/utils/prompt/template/python.ts:71](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/template/python.ts#L71)

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

[packages/ai-tool/src/utils/prompt/template/golang.ts:269](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/template/golang.ts#L269)

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

[packages/ai-tool/src/utils/is-model-name-matched.ts:21](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/is-model-name-matched.ts#L21)

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

[packages/ai-tool/src/utils/filename.ts:63](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/filename.ts#L63)

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

[packages/ai-tool/src/utils/filename.ts:72](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/filename.ts#L72)

___

### isWebStream

▸ **isWebStream**(`val`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/ai-tool/src/utils/stream/is-web-stream.ts:1](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/stream/is-web-stream.ts#L1)

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

[packages/ai-tool/src/utils/json-filter.ts:123](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/json-filter.ts#L123)

___

### jsonToMarkdownStr

▸ **jsonToMarkdownStr**(`mem`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mem` | `any` |
| `options?` | `Object` |
| `options.arrayTag?` | `string` |
| `options.level?` | `number` |
| `options.objectTag?` | `string` |
| `options.visiting?` | `Set`\<`any`\> |

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/json-to-markdown-str.ts:2](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/json-to-markdown-str.ts#L2)

___

### loadFileFromPaths

▸ **loadFileFromPaths**(`filename`, `searchPaths?`, `extNames?`, `options?`): `Buffer`

Loads a file from given paths, optionally searching for specific extensions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | The base filename to search for, without any file extension. |
| `searchPaths?` | `string`[] | An array of directories to search for the file. Defaults to the current directory (`"."`) if not provided. |
| `extNames?` | `string`[] | An array of file extensions to try, in order of preference. If not provided, the file will be searched for without any extension. |
| `options?` | `Object` | - |
| `options.exclude?` | `string` \| `string`[] | - |
| `options.filepath?` | `string` | - |

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

[packages/ai-tool/src/utils/load-file-from-paths.ts:22](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/load-file-from-paths.ts#L22)

___

### loadTextFromPaths

▸ **loadTextFromPaths**(`filename`, `searchPaths?`, `extNames?`, `options?`, `exclude?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `searchPaths?` | `string`[] |
| `extNames?` | `string`[] |
| `options?` | `BufferEncoding` \| \{ `encoding?`: BufferEncoding \| undefined ; `filepath?`: `string`  } |
| `exclude?` | `string` \| `string`[] |

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/load-file-from-paths.ts:75](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/load-file-from-paths.ts#L75)

___

### makeToolFuncCancelable

▸ **makeToolFuncCancelable**(`Tool`, `options?`): typeof [`ToolFunc`](classes/ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `Tool` | typeof [`ToolFunc`](classes/ToolFunc.md) |
| `options?` | [`CancelableAbilityOptions`](interfaces/CancelableAbilityOptions.md) |

#### Returns

typeof [`ToolFunc`](classes/ToolFunc.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:340](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/cancelable-ability.ts#L340)

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

[packages/ai-tool/src/utils/match-url-protocol.ts:23](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/match-url-protocol.ts#L23)

___

### messagesToText

▸ **messagesToText**(`messages`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | [`AIChatMessageParamBase`](interfaces/AIChatMessageParamBase.md)[] |

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:116](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/chat.ts#L116)

___

### paramsSizeToScaleStr

▸ **paramsSizeToScaleStr**(`paramsSize`, `fractionDigits?`): `string`

Formats a parameter size in bytes into a string with an appropriate scale (T, B, M, or K),
optionally specifying the number of fractional digits to display.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `paramsSize` | `number` | `undefined` | The parameter size in bytes. |
| `fractionDigits` | `number` | `0` | The number of fractional digits to include in the formatted output. Default is 0 (no fractional digits). |

#### Returns

`string`

A string representing the formatted parameter size with the appropriate scale unit and the specified number of fractional digits.

#### Defined in

[packages/ai-tool/src/utils/convert-params-size.ts:11](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/convert-params-size.ts#L11)

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

[packages/ai-tool/src/utils/prompt/template/python.ts:16](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/template/python.ts#L16)

___

### parseJsJson

▸ **parseJsJson**(`input`, `scope?`): `any`

Parses a JavaScript string into a JSON object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The string to be parsed into JSON. |
| `scope?` | `Record`\<`string`, `any`\> | - |

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

[packages/ai-tool/src/utils/parse-js-json.ts:14](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/parse-js-json.ts#L14)

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

[packages/ai-tool/src/utils/config.ts:25](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/config.ts#L25)

___

### reControlCharsRegex

▸ **reControlCharsRegex**(): `RegExp`

Returns a new regular expression instance for control characters in a filename with the 'g' flag.

#### Returns

`RegExp`

A compiled regular expression for control characters in a filename.

#### Defined in

[packages/ai-tool/src/utils/filename.ts:50](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/filename.ts#L50)

___

### readFilenamesRecursiveSync

▸ **readFilenamesRecursiveSync**(`dir`, `isFileMatched?`): `string`[]

Recursively reads all filenames in the given directory or directories.
Optionally filters the results using a file matching callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` \| `string`[] | A single directory path or an array of directory paths to start the search from. |
| `isFileMatched?` | (`filepath`: `string`) => `boolean` | An optional callback that determines whether a file should be included in the result. |

#### Returns

`string`[]

An array of file paths that match the criteria.

**`Example`**

```typescript
const files = readFilenamesRecursiveSync('/path/to/directory', (filepath) => filepath.endsWith('.js'));
console.log(files); // Outputs an array of JavaScript file paths.
```

#### Defined in

[packages/ai-tool/src/utils/load-file-from-paths.ts:101](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/load-file-from-paths.ts#L101)

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

[packages/ai-tool/src/utils/stream/ai-stream.ts:166](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/stream/ai-stream.ts#L166)

___

### registerCoreTools

▸ **registerCoreTools**(): `void`

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/index.ts:9](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/funcs/index.ts#L9)

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

[packages/ai-tool/src/utils/config.ts:15](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/config.ts#L15)

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

[packages/ai-tool/src/utils/filename.ts:97](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/filename.ts#L97)

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

[packages/ai-tool/src/utils/filename.ts:149](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/filename.ts#L149)

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

[packages/ai-tool/src/utils/config.ts:85](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/config.ts#L85)

___

### scaleStrToParamsSize

▸ **scaleStrToParamsSize**(`scale`): `number`

Converts a formatted parameters size string (with units T, B, M, or K) back to its byte value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `string` | The formatted parameter size string (e.g., "1.23B", "456M", "789K", or "123"). |

#### Returns

`number`

The parameter size in bytes.

#### Defined in

[packages/ai-tool/src/utils/convert-params-size.ts:44](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/convert-params-size.ts#L44)

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

[packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:4](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/prompt/few-shot-prompt-template.ts#L4)

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

[packages/ai-tool/src/utils/split-sentence.ts:29](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/split-sentence.ts#L29)

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

### textToDate

▸ **textToDate**(`date`, `format?`): `Date`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `string` | `undefined` |
| `format` | `string` | `FormatDateStr` |

#### Returns

`Date`

#### Defined in

[packages/ai-tool/src/utils/to-datetime.ts:25](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/to-datetime.ts#L25)

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

[packages/ai-tool/src/utils/base-error.ts:235](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/base-error.ts#L235)

___

### toDateTime

▸ **toDateTime**(`date`): `undefined` \| `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` \| `number` \| `Date` |

#### Returns

`undefined` \| `Date`

#### Defined in

[packages/ai-tool/src/utils/to-datetime.ts:9](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/to-datetime.ts#L9)

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

[packages/ai-tool/src/utils/stream/ai-stream.ts:92](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/stream/ai-stream.ts#L92)

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

[packages/ai-tool/src/utils/trunc-to.ts:19](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/trunc-to.ts#L19)

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

[packages/ai-tool/src/utils/hash/uuid.ts:8](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/hash/uuid.ts#L8)

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

[packages/ai-tool/src/utils/wait.ts:1](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/wait.ts#L1)

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

[packages/ai-tool/src/utils/hash/xxhash.ts:32](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/hash/xxhash.ts#L32)

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

[packages/ai-tool/src/utils/hash/xxhash.ts:11](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/hash/xxhash.ts#L11)

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

[packages/ai-tool/src/utils/hash/xxhash.ts:18](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/hash/xxhash.ts#L18)

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

[packages/ai-tool/src/utils/hash/xxhash.ts:48](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/utils/hash/xxhash.ts#L48)
