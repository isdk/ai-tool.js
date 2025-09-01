import type { PubSubCtx } from './base';

export interface PubSubClientStream {
  protocol: 'sse' | 'ws' | 'ipc' | string;
  readyState?: number; // 便于对齐 EventSource/WebSocket
  on: (event: string, listener: (data: any, ctx?: PubSubCtx) => void) => void;
  off: (event: string, listener: (data: any, ctx?: PubSubCtx) => void) => void;
  close: () => void;
  send?: (event: string, data: any, ctx?: PubSubCtx) => void; // WS/IPC 可上行，SSE 无
  // 可选兼容别名
  addEventListener?: PubSubClientStream['on'];
  removeEventListener?: PubSubClientStream['off'];
}

export interface IPubSubClientTransport {
  connect: (url: string, params?: Record<string, any>) => PubSubClientStream;
  disconnect?: (stream: PubSubClientStream) => void; // 语义上放在 transport，默认委托 stream.close()
}
