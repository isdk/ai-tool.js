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
export const AIMessageTypes = ['human', 'ai', 'generic', 'system', 'function', 'tool'] as const
export type AIMessageType = typeof AIMessageTypes[number]

export const AIChatRoles = ['user', 'assistant', 'system', 'function', 'tool'] as const
export type AIChatRole = (typeof AIChatRoles[number]) & string

export type AIChatMessageParam =
  | AIChatSystemMessageParam
  | AIChatUserMessageParam
  | AIChatAssistantMessageParam
  | AIChatToolMessageParam;

export interface AIChatSystemMessageParam {
  role: 'system';
  content: string;
}

export interface AIChatUserMessageParam {
  role: 'user';
  content: string | Array<AIChatContentPart>;
  // the message creation time
  time?: Date|string;
  // point to the character card
  charId?: string;
  // the message sent from
  from?: 'speech' | string;
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

export interface AIChatAssistantMessageParam {
  role: 'assistant';
  content?: string | null;
  tool_calls?: Array<AIChatMessageToolCall>;
  // the message creation time
  time?: Date|string;
}

export interface AIChatMessageToolCall {
  type: 'function';
  id: string;
  function: {
    arguments: string;
    name: string;
  };
}

export interface AIChatToolMessageParam {
  role: 'tool';
  content: string;
  tool_call_id: string;
}
