[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / matchUrlProtocol

# Function: matchUrlProtocol()

> **matchUrlProtocol**(`name`): `undefined` \| `string`

Defined in: [packages/ai-tool/src/utils/match-url-protocol.ts:23](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/match-url-protocol.ts#L23)

Extracts the protocol part from a URL-like string.

This function checks a given string to find the protocol section of a URL.
If the string contains the sequence '://', it returns the substring from the start of the string
up to the '//' characters. If the sequence is not found, the function returns undefined.

## Parameters

### name

`string`

The string to inspect, expected to contain a URL.

## Returns

`undefined` \| `string`

- The protocol part if '://' is found; otherwise, undefined.

## Examples

```ts
// Returns "http"
matchUrlProtocol("http://example.com");
```

```ts
// Returns "ftp"
matchUrlProtocol("ftp://myftpserver.com");
```

```ts
// Returns undefined
matchUrlProtocol("noProtocolHere");
```
