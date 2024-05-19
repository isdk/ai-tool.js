export const AITextGenerationFinishReasons = [
  'stop',           // model generated stop sequence
  'length',         // model generated maximum number of tokens
  'content-filter', // content filter violation stopped the model
  'tool-calls',     // model triggered tool calls
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
}

// human: user role;  ai: assistant role ; generic means customize role
// 'function' is deprecated by OpenAI use 'tool' instead
export const AIMessageTypes = ['human', 'ai', 'generic', 'system', 'tool'] as const
export type AIMessageType = typeof AIMessageTypes[number]

// tool: return the result of the tool called. {name: 'the tool name', content: 'the tool result', tool_call_id: ""}
// tool_calls: the tool calls in the message, eg, [{type: "function", function: {name: "getCurrentLocation", arguments: "{}"}, id: "123"}
// https://github.com/openai/openai-node/blob/master/README.md
export const AIChatRoles = ['user', 'assistant', 'system', 'tool', 'tool_calls'] as const
export type AIChatRole = (typeof AIChatRoles[number]) & string

export type AIChatMessageParam =
  | AIChatSystemMessageParam
  | AIChatUserMessageParam
  | AIChatAssistantMessageParam
  | AIChatToolMessageParam;

  export interface AIChatMessageParamBase {
    role: string;
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
