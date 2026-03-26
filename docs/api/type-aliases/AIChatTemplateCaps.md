[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIChatTemplateCaps

# Type Alias: AIChatTemplateCaps

> **AIChatTemplateCaps** = `object`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:202](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L202)

Capabilities detected for a chat template (ChatML-like) with respect to
OpenAI-compatible function/tool calling in llama.cpp-style pipelines.

Each flag describes what the template can (or must) do when rendering messages/tools,
so your caller can adapt message shaping, tool-calling strategy, and fallbacks.

Detection is typically performed by rendering small “probe” conversations against
the template and inspecting the resulting text.

## Properties

### requiresNonNullContent

> **requiresNonNullContent**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:327](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L327)

Whether the template forbids `assistant.content` being `null` (requires an empty string instead).

#### Remarks

- true: Use `content: ""` as a placeholder when the assistant turn only carries `tool_calls`.
- false: `null` or `""` both work.

#### Impact

- Prevents template branches from swallowing messages when content is `null`.

***

### requiresObjectArguments

> **requiresObjectArguments**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:276](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L276)

Whether the template expects `function.arguments` to be a JSON object (not a JSON-string literal).

#### Remarks

- true: Pass arguments as an object: `{ arguments: { ... } }`. Supplying a stringified JSON may double-escape or break parsing.
- false: Both object and string are accepted (object is still recommended for stricter grammar alignment).

#### Impact

- Honor this when constructing assistant messages that contain `tool_calls`.

#### Example

```ts
const args = caps.requiresObjectArguments ? { city: "SF" } : JSON.stringify({ city: "SF" });
```

***

### requiresTypedContent

> **requiresTypedContent**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:220](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L220)

Whether the template requires OpenAI-style "typed content" parts instead of a plain string.

#### Remarks

- true: A message like `{ content: "..." }` is ignored, while
  `{ content: [{ type: "text", text: "..." }] }` renders correctly.
- false: Both plain strings and typed parts render.

#### Impact

- If true, wrap all string content as text parts before rendering:
  `{ content: [{ type: "text", text }] }`.

#### Example

```ts
if (caps.requiresTypedContent && typeof msg.content === "string") {
  msg.content = [{ type: "text", text: msg.content }];
}
```

***

### supportsParallelToolCalls

> **supportsParallelToolCalls**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:291](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L291)

Whether a single assistant message can contain multiple tool calls and be rendered correctly.

#### Remarks

- true: The template can serialize an array of calls in one assistant turn.
- Note this only opens the possibility; the runtime must also allow it
  (e.g., request `parallel_tool_calls: true` and use a grammar with an array top rule),
  and the model must actually choose to emit multiple calls.
- false: Even if the API flag is set, only 0/1 call will practically work per turn.

#### Impact

- Enable/disable “same-turn multi-call” orchestration accordingly.

***

### supportsSystemRole

> **supportsSystemRole**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:234](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L234)

Whether the template actually includes role=system messages in the rendered prompt.

#### Remarks

- true: You can pass `messages: [{ role: "system", ... }, ...]` and expect
  the system text to appear at the top of the prompt.
- false: The template ignores system; move your “system rules” into the first user/assistant turn or edit the template.

#### Impact

- If false, critical behavior instructions should be injected via the template itself
  or merged into the first turn.

***

### supportsToolCallId

> **supportsToolCallId**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:315](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L315)

Whether the template surfaces `tool_call_id` when rendering role=tool results, enabling strict mapping back to the call.

#### Remarks

- true: Each tool output can be visibly tied to its originating call (important for multi-call turns).
- false: The mapping is implicit; include the call id in the text or restrict to single calls per turn.

#### Impact

- Strongly recommended when parallel/multiple tool calls are possible.

***

### supportsToolCalls

> **supportsToolCalls**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:261](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L261)

Whether the template properly renders an assistant message that contains `tool_calls` (OpenAI format).

#### Remarks

- true: An assistant message with `tool_calls: [{ type: "function", function: { name, arguments }}, ...]`
  gets serialized in the template’s tool-call section.
- false: The template does not serialize tool calls correctly; switch template/handler,
  fall back to a Generic handler, or use the “pure JSON intent” two-turn strategy.

#### Impact

- If false, do not rely on OpenAI `tool_calls` in a single assistant turn.

***

### supportsToolResponses

> **supportsToolResponses**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:303](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L303)

Whether the template renders role=tool messages (tool/function execution results) back into the prompt context.

#### Remarks

- true: The model can see tool outputs (often near the next assistant generation).
- false: Tool results aren’t visible; inject them as user/system text instead, or update the template to render tool messages.

#### Impact

- Critical for the standard call→execute→return→answer loop to converge.

***

### supportsTools

> **supportsTools**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:247](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L247)

Whether the template consumes the top-level `tools` array (function catalog) and renders it into the prompt.

#### Remarks

- true: The model sees a readable list of available functions (names, descriptions, schemas).
- false: The template doesn’t show the catalog; tool-calling can still work, but the model
  may be less aware of function options unless you add guidance text.

#### Impact

- If false, consider adding a short “How to call tools” section or a generated example to the template.

***

### toolCallExample?

> `optional` **toolCallExample**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:342](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L342)

A generated “how to call a tool” example snippet, inferred only when the template doesn’t render the tools catalog.

#### Remarks

- Present when ChatTemplateCaps.supportsTools is false and the probe could
  derive a stable example by diffing “prefix only” vs “prefix + a fake tool call”.
- Useful to inject into the template/system text to teach the expected call format.

#### Example

```ts
if (!caps.supportsTools && caps.toolCallExample) {
  system += "\n\nTool call example:\n" + caps.toolCallExample;
}
```
