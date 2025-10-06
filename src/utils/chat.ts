import { toDateTime, dateToText } from './to-datetime';
import type { AsyncTaskId } from './cancelable-ability';

export const AITextGenerationFinishReasons = [
  'stop',           // model generated stop sequence
  'length',         // model generated maximum number of tokens
  'content_filter', // content filter violation stopped the model
  'tool_calls',     // model triggered tool calls
  'function_call',  //
  'abort',          // aborted by user or timeout for stream
  'error',          // model stopped because of an error
  'other', null,    // model stopped for other reasons
] as const
export type AITextGenerationFinishReason = typeof AITextGenerationFinishReasons[number]

export interface AIResult<TValue = any, TOptions = any> {
  /**
   * The generated value.
   */
  content?: TValue;

  /**
   * The reason why the generation stopped.
   */
  finishReason?: AITextGenerationFinishReason;
  options?: TOptions
  /**
   * for stream mode
   */
  stop?: boolean
  taskId?: AsyncTaskId; // for stream chunk
  [name: string]: any
}

// human: user role;  ai: assistant role ; generic means customize role
// 'function' is deprecated by OpenAI use 'tool' instead
export const AIMessageTypes = ['human', 'ai', 'generic', 'system', 'tool'] as const
export type AIMessageType = typeof AIMessageTypes[number]

// tool: return the result of the tool called. {name: 'the tool name', content: 'the tool result', tool_call_id: ""}
// tool_calls: the tool calls in the message, eg, [{type: "function", function: {name: "getCurrentLocation", arguments: "{}"}, id: "123"}
// https://github.com/openai/openai-node/blob/master/README.md
export const AIChatRoles = ['user', 'assistant', 'system', 'tool', 'tool_calls'] as const
export type AIChatRole = (typeof AIChatRoles[number]) | (string & {})
export const StrangeHumanName = '陌生人'

export interface AIChatToolDefinition {
  name?: string;
  type: 'function',
  function: {
    name: string;
    description?: string;
    parameters?: any; // JSON Schema
  },
}

export type AIChatMessageParam =
  | AIChatMessageParamBase
  | AIChatSystemMessageParam
  | AIChatUserMessageParam
  | AIChatAssistantMessageParam
  | AIChatToolMessageParam

export interface AIChatMessageParamBase {
  role: AIChatRole
  toRole?: string|string[]|Record<string,  Partial<AIChatMessageParam>>
  replies?: Record<string, Partial<AIChatMessageParam>>
  private?: boolean
  tools?: AIChatToolDefinition[]
  thinking?: string
  [name: string]: any
}

export interface AIChatSystemMessageParam extends AIChatMessageParamBase{
  role: 'system';
  content: string;
  templateFormat?: string;
}

export interface AIChatUserMessageParam extends AIChatMessageParamBase {
  role: 'user';
  content: string | Array<AIChatContentPart>;
  // the message creation time
  createdAt?: Date|string;
  updatedAt?: Date|string;
  // point to the character card
  charId?: string;
  // the message sent from
  from?: 'speech' | string;
  templateFormat?: string;
}

export type AIChatContentPart =
  | AIChatContentPartBase
  | AIChatContentPartText
  | AIChatContentPartImage;

export interface AIChatContentPartBase {
  type: 'text' | 'image_url' | string;
  [name: string]: any;
}

export interface AIChatContentPartImage extends AIChatContentPartBase {
  type: 'image_url';
  image_url: {
    url: string;
  };
}

export interface AIChatContentPartText extends AIChatContentPartBase {
  type: 'text';
  text: string;
}

export interface AIChatAssistantMessageParam extends AIChatMessageParamBase {
  role: 'assistant';
  content?: string | null;
  tool_calls?: Array<AIChatMessageToolCall>;
  // the message creation time
  createdAt?: Date|string;
  updatedAt?: Date|string;
  templateFormat?: string;
}

export interface AIChatMessageToolCall {
  type: 'function';
  id?: string;
  function: {
    name: string;
    arguments?: string|any;
    description?: string;
  };
}

export interface AIChatToolMessageParam extends AIChatMessageParamBase {
  role: 'tool';
  content: string;
  tool_call_id?: string;
  templateFormat?: string;
}

export interface AIChatToolParam {
  type: string;
  [key: string]: any;
}

export interface AIChatToolFuncParam extends AIChatToolParam {
  type: 'function';
  function: AIChatToolFunc;
}

export interface AIChatToolFunc {
  name: string;
  description?: string;
  parameters?: any
  strict?: boolean;
}

export type AIChatToolChoiceParam = 'auto'| 'none' | 'required' | AIChatToolChoiceObject

export interface AIChatToolChoiceObject {
  type: string
  [key: string]: any
}

export interface AIChatToolChoiceFuncObject extends AIChatToolChoiceObject {
  type: 'function'
  function: AIChatToolTypeObject
}

export interface AIChatToolTypeObject {
  name: string
}

export function messagesToText(messages: AIChatMessageParamBase[]) {
  let result = ''
  for (const msg of messages) {
    if (msg.content) {
      result += msg.role.toLowerCase() + ':'
      let createdAt = msg.createdAt
      if (createdAt) {
        const dt = toDateTime(createdAt)
        if (dt) {result += ' ['+ dateToText(dt) + ']'}
      }
      result += ' ' + msg.content + '\n'
    }
  }
  return result
}

/**
 * Capabilities detected for a chat template (ChatML-like) with respect to
 * OpenAI-compatible function/tool calling in llama.cpp-style pipelines.
 *
 * Each flag describes what the template can (or must) do when rendering messages/tools,
 * so your caller can adapt message shaping, tool-calling strategy, and fallbacks.
 *
 * Detection is typically performed by rendering small “probe” conversations against
 * the template and inspecting the resulting text.
 *
 */
export type AIChatTemplateCaps = {
  /**
   * Whether the template requires OpenAI-style "typed content" parts instead of a plain string.
   *
   * @remarks
   * - true: A message like `{ content: "..." }` is ignored, while
   *   `{ content: [{ type: "text", text: "..." }] }` renders correctly.
   * - false: Both plain strings and typed parts render.
   *
   * @impact
   * - If true, wrap all string content as text parts before rendering:
   *   `{ content: [{ type: "text", text }] }`.
   *
   * @example
   * if (caps.requiresTypedContent && typeof msg.content === "string") {
   *   msg.content = [{ type: "text", text: msg.content }];
   * }
   */
  requiresTypedContent: boolean;

  /**
   * Whether the template actually includes role=system messages in the rendered prompt.
   *
   * @remarks
   * - true: You can pass `messages: [{ role: "system", ... }, ...]` and expect
   *   the system text to appear at the top of the prompt.
   * - false: The template ignores system; move your “system rules” into the first user/assistant turn or edit the template.
   *
   * @impact
   * - If false, critical behavior instructions should be injected via the template itself
   *   or merged into the first turn.
   */
  supportsSystemRole: boolean;

  /**
   * Whether the template consumes the top-level `tools` array (function catalog) and renders it into the prompt.
   *
   * @remarks
   * - true: The model sees a readable list of available functions (names, descriptions, schemas).
   * - false: The template doesn’t show the catalog; tool-calling can still work, but the model
   *   may be less aware of function options unless you add guidance text.
   *
   * @impact
   * - If false, consider adding a short “How to call tools” section or a generated example to the template.
   */
  supportsTools: boolean;

  /**
   * Whether the template properly renders an assistant message that contains `tool_calls` (OpenAI format).
   *
   * @remarks
   * - true: An assistant message with `tool_calls: [{ type: "function", function: { name, arguments }}, ...]`
   *   gets serialized in the template’s tool-call section.
   * - false: The template does not serialize tool calls correctly; switch template/handler,
   *   fall back to a Generic handler, or use the “pure JSON intent” two-turn strategy.
   *
   * @impact
   * - If false, do not rely on OpenAI `tool_calls` in a single assistant turn.
   */
  supportsToolCalls: boolean;

  /**
   * Whether the template expects `function.arguments` to be a JSON object (not a JSON-string literal).
   *
   * @remarks
   * - true: Pass arguments as an object: `{ arguments: { ... } }`. Supplying a stringified JSON may double-escape or break parsing.
   * - false: Both object and string are accepted (object is still recommended for stricter grammar alignment).
   *
   * @impact
   * - Honor this when constructing assistant messages that contain `tool_calls`.
   *
   * @example
   * const args = caps.requiresObjectArguments ? { city: "SF" } : JSON.stringify({ city: "SF" });
   */
  requiresObjectArguments: boolean;

  /**
   * Whether a single assistant message can contain multiple tool calls and be rendered correctly.
   *
   * @remarks
   * - true: The template can serialize an array of calls in one assistant turn.
   * - Note this only opens the possibility; the runtime must also allow it
   *   (e.g., request `parallel_tool_calls: true` and use a grammar with an array top rule),
   *   and the model must actually choose to emit multiple calls.
   * - false: Even if the API flag is set, only 0/1 call will practically work per turn.
   *
   * @impact
   * - Enable/disable “same-turn multi-call” orchestration accordingly.
   */
  supportsParallelToolCalls: boolean;

  /**
   * Whether the template renders role=tool messages (tool/function execution results) back into the prompt context.
   *
   * @remarks
   * - true: The model can see tool outputs (often near the next assistant generation).
   * - false: Tool results aren’t visible; inject them as user/system text instead, or update the template to render tool messages.
   *
   * @impact
   * - Critical for the standard call→execute→return→answer loop to converge.
   */
  supportsToolResponses: boolean;

  /**
   * Whether the template surfaces `tool_call_id` when rendering role=tool results, enabling strict mapping back to the call.
   *
   * @remarks
   * - true: Each tool output can be visibly tied to its originating call (important for multi-call turns).
   * - false: The mapping is implicit; include the call id in the text or restrict to single calls per turn.
   *
   * @impact
   * - Strongly recommended when parallel/multiple tool calls are possible.
   */
  supportsToolCallId: boolean;

  /**
   * Whether the template forbids `assistant.content` being `null` (requires an empty string instead).
   *
   * @remarks
   * - true: Use `content: ""` as a placeholder when the assistant turn only carries `tool_calls`.
   * - false: `null` or `""` both work.
   *
   * @impact
   * - Prevents template branches from swallowing messages when content is `null`.
   */
  requiresNonNullContent: boolean;

  /**
   * A generated “how to call a tool” example snippet, inferred only when the template doesn’t render the tools catalog.
   *
   * @remarks
   * - Present when {@link ChatTemplateCaps.supportsTools} is false and the probe could
   *   derive a stable example by diffing “prefix only” vs “prefix + a fake tool call”.
   * - Useful to inject into the template/system text to teach the expected call format.
   *
   * @example
   * if (!caps.supportsTools && caps.toolCallExample) {
   *   system += "\n\nTool call example:\n" + caps.toolCallExample;
   * }
   */
  toolCallExample?: string;
};
