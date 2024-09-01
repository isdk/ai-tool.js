[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / StreamCallbacksAndOptions

# Interface: StreamCallbacksAndOptions\<I, O\>

Configuration options and helper callback methods for stream lifecycle events.

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `any` |
| `O` | `any` |

## Table of contents

### Properties

- [onError](StreamCallbacksAndOptions.md#onerror)
- [onFinal](StreamCallbacksAndOptions.md#onfinal)
- [onStart](StreamCallbacksAndOptions.md#onstart)
- [onTransform](StreamCallbacksAndOptions.md#ontransform)

## Properties

### onError

• `Optional` **onError**: (`error`: `Error`) => `void` \| `Promise`\<`void`\>

#### Type declaration

▸ (`error`): `void` \| `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

##### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:12](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/stream/create-callbacks-stream.ts#L12)

___

### onFinal

• `Optional` **onFinal**: (`controller`: `TransformStreamDefaultController`\<`any`\>) => `void` \| `Promise`\<`void`\>

`onFinal`: Called once when the stream is closed with the final completion message.

#### Type declaration

▸ (`controller`): `void` \| `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `TransformStreamDefaultController`\<`any`\> |

##### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:11](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/stream/create-callbacks-stream.ts#L11)

___

### onStart

• `Optional` **onStart**: (`controller`: `TransformStreamDefaultController`\<`any`\>) => `void` \| `Promise`\<`void`\>

`onStart`: Called once when the stream is initialized.

#### Type declaration

▸ (`controller`): `void` \| `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `TransformStreamDefaultController`\<`any`\> |

##### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:7](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/stream/create-callbacks-stream.ts#L7)

___

### onTransform

• `Optional` **onTransform**: (`chunk`: `I`, `controller`: `TransformStreamDefaultController`\<`any`\>) => `void` \| `O` \| `Promise`\<`void` \| `O`\>

`onToken`: Called for each tokenized message.

#### Type declaration

▸ (`chunk`, `controller`): `void` \| `O` \| `Promise`\<`void` \| `O`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `I` |
| `controller` | `TransformStreamDefaultController`\<`any`\> |

##### Returns

`void` \| `O` \| `Promise`\<`void` \| `O`\>

#### Defined in

[packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:9](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/stream/create-callbacks-stream.ts#L9)
