export type PubSubCtx<T = any> = {
  event: string; // 事件名称
  id?: string;   // 可选：消息ID（去重/回放）
  ts?: number;   // 可选：时间戳
  from?: string; // 可选：来源（clientId等）
  meta?: any;    // 可选：追踪/租户/其它
};
