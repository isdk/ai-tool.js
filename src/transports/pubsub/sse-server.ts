import { SSEChannel } from '../../utils/event/sse-channel';
import type { IPubSubServerTransport, PubSubClientId, PubSubServerSession } from './server';
import type { IncomingMessage, ServerResponse } from 'http';

export class SseServerPubSubTransport implements IPubSubServerTransport {
  readonly name = 'sse';
  readonly protocol = 'sse' as const;
  private channel = new SSEChannel();

  private onConn?: (s: PubSubServerSession) => void;
  private onDis?: (s: PubSubServerSession) => void;

  mount?() {/* SSE 是通过约定使用在http上的 RESTful list API 来实现，所以没有自定义 path */}

  subscribe(events?: string[], options?: { req?: IncomingMessage; res?: ServerResponse; clientId?: string }) {
    const { req, res, clientId } = options ?? {};
    if (!req || !res) throw new Error('SSE subscribe requires options.req and options.res');

    // 让 SSEChannel 正常工作（你的原始签名：subscribe(req, res, events)）
    const client = this.channel.subscribe(req, res, events, clientId);

    // 构造一个临时 session 给上层感知
    const session: PubSubServerSession = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      clientId: client.clientId,
      protocol: 'sse',
      send: (event, data) => {
        res.write(`event: ${event}\n`);
        res.write(`data: ${JSON.stringify(data)}\n\n`);
      },
      close: () => res.end?.(),
      raw: res,
    };
    this.onConn?.(session);

    req.on('close', () => this.onDis?.(session));
    return client;
  }

  publish(event: string, data: any, target?: { clientId?: PubSubClientId | PubSubClientId[] }) {
    this.channel.publish(data, event, target);
  }

  onConnection(cb: (s: PubSubServerSession) => void) { this.onConn = cb; }
  onDisconnect(cb: (s: PubSubServerSession) => void) { this.onDis = cb; }
}
