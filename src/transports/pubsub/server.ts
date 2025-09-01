// import type { IncomingMessage, ServerResponse } from 'http';
import type { PubSubCtx } from './base';

export type ClientId = string;

export interface PubSubServerSession {
  id: string;
  clientId?: ClientId;
  protocol: 'sse' | 'ws' | 'ipc' | string;
  send: (event: string, data: any, ctx?: PubSubCtx) => void;
  close: () => void;
  raw?: any;
}

export interface IPubSubServerTransport {
  readonly name: string;
  readonly protocol: 'sse' | 'ws' | 'ipc' | string;

  // 可选：为 HTTP/框架挂载路径（SSE 需要）
  mount?: (path: string, options?: Record<string, any>) => void;

  // 打开一条事件流。将 req/res 等底层句柄放进 options 中，避免污染抽象层签名
  subscribe: (
    events?: string[],
    options?: {
      req?: any;//IncomingMessage;
      res?: any;//ServerResponse;
      clientId?: ClientId;
      headers?: Record<string, string>;
      [k: string]: any;
    }
  ) => void;

  // 推送事件（默认广播；实现层可扩展 target 以定向发送）
  publish: (event: string, data: any, target?: { clientId?: ClientId | ClientId[] }, ctx?: PubSubCtx) => void;

  // 生命周期回调
  onConnection: (cb: (session: PubSubServerSession) => void) => void;
  onDisconnect: (cb: (session: PubSubServerSession) => void) => void;

  // 支持双向协议（WS/IPC）时可用
  onMessage?: (cb: (session: PubSubServerSession, event: string, data: any, ctx?: PubSubCtx) => void) => void;
}
