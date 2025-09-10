import { SSEChannel } from '../../utils/event/sse-channel';
import type { IPubSubServerTransport, PubSubClientId, PubSubServerSession } from './server';
import type { IncomingMessage, ServerResponse } from 'http';

export class SseServerPubSubTransport implements IPubSubServerTransport {
  readonly name = 'sse';
  readonly protocol = 'sse' as const;
  private channel = new SSEChannel();

  private onConn?: (s: PubSubServerSession) => void;
  private onDis?: (s: PubSubServerSession) => void;

  connect(options?: { req: IncomingMessage; res: ServerResponse; clientId?: string, events?: string[] }): PubSubServerSession {
    const { req, res, clientId, events } = options ?? {};
    if (!req || !res) throw new Error('SSE connect requires options.req and options.res');

    // Let SSEChannel do its work
    const client = this.channel.connect(req, res, events, clientId);

    // Create a temporary session to notify the upper layer
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
    return session;
  }

  subscribe(session: PubSubServerSession, events: string[]) {
    if (session.clientId) {
      this.channel.subscribe(session.clientId, events);
    }
  }

  unsubscribe(session: PubSubServerSession, events: string[]) {
    if (session.clientId) {
      this.channel.unsubscribe(session.clientId, events);
    }
  }

  publish(event: string, data: any, target?: { clientId?: PubSubClientId | PubSubClientId[] }) {
    this.channel.publish(data, event, target);
  }

  onConnection(cb: (s: PubSubServerSession) => void) { this.onConn = cb; }
  onDisconnect(cb: (s: PubSubServerSession) => void) { this.onDis = cb; }
}
