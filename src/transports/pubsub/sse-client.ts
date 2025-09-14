import type { IPubSubClientTransport, PubSubClientStream } from './client';
import type { PubSubCtx } from './base';
import { genUrlParamsStr} from '../../utils';

export class SseClientPubSubTransport implements IPubSubClientTransport {
  private apiRoot: string = '';

  setApiRoot(apiRoot: string) {
    this.apiRoot = apiRoot;
  }

  async connect(url: string, params?: any) {
    if (!this.apiRoot && !url.startsWith('http')) {
      throw new Error('SseClientPubSubTransport requires apiRoot to be set or a full URL to be provided.');
    }

    // Combine params with the new clientId
    const connectParams = {
      ...params,
    };

    // url can be a full URL or a path relative to apiRoot
    let finalUrl = url.startsWith('http') ? url : `${this.apiRoot}/${url}`;

    if (connectParams) {
      const qs = genUrlParamsStr(connectParams as any, true);
      if (qs) {
        finalUrl += (finalUrl.includes('?') ? '&' : '?') + qs;
      }
    }
    const es = new EventSource(finalUrl);
    const welcome = new Promise<{ clientId: string }>((resolve) => {
      const handle = (e) => {
        es.removeEventListener('welcome', handle);
        const raw = (e as any).data;
        const data = raw ? (typeof raw === 'string' ? JSON.parse(raw) : raw) : undefined;
        resolve(data);
      };
      es.addEventListener('welcome', handle);
    });
    const clientId = (await welcome).clientId;

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
      clientId,
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
