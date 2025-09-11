import { SSEChannel } from '../../utils/event/sse-channel';
import type { IPubSubServerTransport, PubSubClientId, PubSubServerSession } from './server';
import type { IncomingMessage, ServerResponse } from 'http';

export class SseServerPubSubTransport implements IPubSubServerTransport {
  readonly name = 'sse';
  readonly protocol = 'sse' as const;
  private channel = new SSEChannel();
  private sessions = new Map<PubSubClientId, PubSubServerSession>();

  private onConn?: (s: PubSubServerSession) => void;
  private onDis?: (s: PubSubServerSession) => void;

  connect(options?: { req: IncomingMessage; res: ServerResponse; clientId?: string, events?: string[] }): PubSubServerSession {
    const { req, res, clientId, events } = options ?? {};
    if (!req || !res) throw new Error('SSE connect requires options.req and options.res');

    // Let SSEChannel do its work: if no clientId, the clientId will be `${remoteAddress}:${remotePort}`
    const client = this.channel.connect(req, res, events, clientId);

    // Create a temporary session to notify the upper layer
    const session: PubSubServerSession = {
      id: client.clientId, // Use the same ID for session and client
      clientId: client.clientId,
      protocol: 'sse',
      send: (event, data) => {
        // Correctly delegate sending to the channel, targeting this specific client
        this.channel.publish(data, event, { clientId: client.clientId });
      },
      close: () => this.channel.disconnect(client),
      raw: res,
    };

    this.sessions.set(client.clientId, session);
    this.onConn?.(session);

    req.on('close', () => {
      this.sessions.delete(client.clientId);
      this.onDis?.(session);
    });
    return session;
  }

  getSessionFromReq(req: IncomingMessage): PubSubServerSession | undefined {
    const client = this.channel.getClientByReq(req);
    if (client) {
      return this.sessions.get(client.clientId);
    }
    return undefined;
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
