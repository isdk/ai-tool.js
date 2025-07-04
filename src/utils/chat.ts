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
export const StrangeHumanName = '陌生人'
export type AIChatRole = (typeof AIChatRoles[number]) & string

export type AIChatMessageParam =
  | AIChatMessageParamBase
  | AIChatSystemMessageParam
  | AIChatUserMessageParam
  | AIChatAssistantMessageParam
  | AIChatToolMessageParam

export interface AIChatMessageParamBase {
    role: string
    toRole?: string|string[]|Record<string,  Partial<AIChatMessageParam>>
    replies?: Record<string, Partial<AIChatMessageParam>>
    private?: boolean
    tools?: Record<string, string>
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
  | AIChatContentPartText
  | AIChatContentPartImage;

export interface AIChatContentPartImage {
  type: 'image_url';
  image_url: {
    url: string;
  };
}

export interface AIChatContentPartText {
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
  id: string;
  function: {
    arguments: string;
    name: string;
  };
}

export interface AIChatToolMessageParam extends AIChatMessageParamBase {
  role: 'tool';
  content: string;
  tool_call_id: string;
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
