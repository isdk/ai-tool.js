[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / AIStreamCallbacksAndOptions

# Interface: AIStreamCallbacksAndOptions

Configuration options and helper callback methods for AIStream stream lifecycle events.

## Table of contents

### Properties

- [experimental\_streamData](AIStreamCallbacksAndOptions.md#experimental_streamdata)
- [onCompletion](AIStreamCallbacksAndOptions.md#oncompletion)
- [onFinal](AIStreamCallbacksAndOptions.md#onfinal)
- [onStart](AIStreamCallbacksAndOptions.md#onstart)
- [onText](AIStreamCallbacksAndOptions.md#ontext)
- [onToken](AIStreamCallbacksAndOptions.md#ontoken)

## Properties

### experimental\_streamData

• `Optional` **experimental\_streamData**: `boolean`

A flag for enabling the experimental_StreamData class and the new protocol.

**`See`**

https://github.com/vercel-labs/ai/pull/425

When StreamData is rolled out, this will be removed and the new protocol will be used by default.

#### Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:31](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/stream/ai-stream.ts#L31)

___

### onCompletion

• `Optional` **onCompletion**: (`completion`: `string`) => `void` \| `Promise`\<`void`\>

`onCompletion`: Called for each tokenized message.

#### Type declaration

▸ (`completion`): `void` \| `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `completion` | `string` |

##### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:18](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/stream/ai-stream.ts#L18)

___

### onFinal

• `Optional` **onFinal**: (`completion`: `string`) => `void` \| `Promise`\<`void`\>

`onFinal`: Called once when the stream is closed with the final completion message.

#### Type declaration

▸ (`completion`): `void` \| `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `completion` | `string` |

##### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:20](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/stream/ai-stream.ts#L20)

___

### onStart

• `Optional` **onStart**: () => `void` \| `Promise`\<`void`\>

`onStart`: Called once when the stream is initialized.

#### Type declaration

▸ (): `void` \| `Promise`\<`void`\>

##### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:16](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/stream/ai-stream.ts#L16)

___

### onText

• `Optional` **onText**: (`text`: `string`) => `void` \| `Promise`\<`void`\>

`onText`: Called for each text chunk.

#### Type declaration

▸ (`text`): `void` \| `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

##### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:24](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/stream/ai-stream.ts#L24)

___

### onToken

• `Optional` **onToken**: (`token`: `string`) => `void` \| `Promise`\<`void`\>

`onToken`: Called for each tokenized message.

#### Type declaration

▸ (`token`): `void` \| `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:22](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/stream/ai-stream.ts#L22)
