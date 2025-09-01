import type { IPubSubClientTransport, PubSubClientStream } from './client';
import type { PubSubCtx } from './base';

export class SseClientPubSubTransport implements IPubSubClientTransport {
  connect(url: string, params?: Record<string, any>): PubSubClientStream {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const es = new EventSource(`${url}${qs}`);

    // 包装监听器映射，确保 off 能卸载
    const wrapMap = new Map<string, Map<Function, EventListener>>();

    const on = (event: string, listener: (data: any, ctx?: PubSubCtx) => void) => {
      const wrapped = (e: MessageEvent) => {
        const raw = (e as any).data;
        const data = raw ? (typeof raw === 'string' ? JSON.parse(raw) : raw) : undefined;
        listener(data, {...e, event});
      };
      let inner = wrapMap.get(event);
      if (!inner) { inner = new Map(); wrapMap.set(event, inner); }
      // 缓存 wrapped 以便 off
      inner.set(listener, wrapped as any);
      es.addEventListener(event, wrapped);
    };

    const off = (event: string, listener: (msg: PubSubCtx) => void) => {
      const inner = wrapMap.get(event);
      const wrapped = inner?.get(listener);
      if (wrapped) {
        es.removeEventListener(event, wrapped);
        inner!.delete(listener);
      }
    };

    const stream: PubSubClientStream = {
      protocol: 'sse',
      get readyState() { return es.readyState; },
      on, off,
      addEventListener: on,
      removeEventListener: off,
      close: () => es.close(),
    };
    return stream;
  }

  disconnect(stream: PubSubClientStream) {
    return stream.close();
  }
}
