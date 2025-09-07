[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / matchUrlProtocol

# Function: matchUrlProtocol()

> **matchUrlProtocol**(`name`): `undefined` \| `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/match-url-protocol.ts:23](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/match-url-protocol.ts#L23)

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
