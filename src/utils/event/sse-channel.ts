import { IncomingMessage, ServerResponse } from "http";
import { throwError } from "../base-error";

type Events = (string | RegExp)[];

/**
 * Represents a client connected to the SSE channel.
 */
type SSEClient = {
  /** The incoming HTTP request from the client. */
  req: IncomingMessage;
  /** The server response object used to send events to the client. */
  res: ServerResponse;
  /** An array of event names or patterns that the client is subscribed to. */
  events?: Events;
  /**
   * A unique identifier for the client.
   * If not provided during subscription, it defaults to `remoteAddress:remotePort`.
   */
  clientId?: string;
}

/**
 * Checks if an event matches with the subscription list.
 * @param subscriptionList - A list of events to check.
 * @param eventName - The name of the event.
 * @returns - Returns true if the event matches with the subscription list, otherwise false.
 */
function hasEventMatch(subscriptionList: Events | undefined, eventName: string) {
  return !subscriptionList || subscriptionList.some(pat => pat instanceof RegExp ? pat.test(eventName) : pat === eventName);
}

export const SSEChannelAlreadyClosedErrCode = 498

/**
 * A class for creating Server-Sent Events (SSE) channels.
 * @example
 * const sseChannel = new SSEChannel({ pingInterval: 5000 })
 * sseChannel.publish('Hello, world!', 'greeting')
 */
export class SSEChannel {
  _active: boolean
  clients: Set<SSEClient>
  messages: Record<string, any>[]
  nextID: number
  options: Record<string, any>
  pingTimer?: NodeJS.Timeout

  get active() {
    return this._active
  }

  set active(v : boolean) {
    if (v !== this._active) {
      if (v) {
        if (this.pingTimer) {
          clearInterval(this.pingTimer);
          this.pingTimer = undefined
        }
        if (this.options.pingInterval > 0) {
          this.pingTimer = setInterval(() => this.publish(), this.options.pingInterval);
        }
      } else {
        if (this.clients.size) {
          this.clearClients()
        }
        if (this.pingTimer) {
          clearInterval(this.pingTimer);
          this.pingTimer = undefined
        }
      }
      this._active = v;
    }
  }


  /**
   * Creates a new SSE channel.
   * @param options - The options for the SSE channel.
   */
  constructor(options?: Record<string, any>) {
    this.options = Object.assign(
      {},
      {
        pingInterval: 3000,
        maxStreamDuration: 30000,
        clientRetryInterval: 1000,
        startId: 1,
        historySize: 100,
        rewind: 0,
        cors: false
      },
      options
    )

    this.nextID = this.options.startId
    this.clients = new Set()
    this.messages = []
    this.active = true
  }

  /**
   * Publishes data to the channel.
   *
   * @param data The data to send. Can be a string or a serializable object.
   * @param eventName Optional name for the event.
   * @param target Optional. If provided, the message will be sent only to clients with matching `clientId`s, bypassing event subscriptions.
   * @returns The ID of the message, or `undefined` if no message was sent.
   * @throws An error if the channel is closed.
   */
  publish(data?: string | Record<string, any>, eventName?: string, target?: { clientId?: string | string[] }) {
    // console.log('🚀 ~ SSEChannel ~ publish ~ eventName:', eventName, data)
    if (!this.active) throwError('Channel closed', 'SSEChannel', SSEChannelAlreadyClosedErrCode);
    let output: string;
    let id: number | undefined;
    let _eventName: string | undefined = eventName

    if (!data && !eventName) {
      if (!this.clients.size) return; // No need to create a ping entry if there are no clients connected
      output = "data: \n\n";
    } else {
      id = this.nextID++;
      if (typeof data === "object") {
        if (data.event) {
          _eventName = data.event;
          if (data.data !== undefined) data = JSON.stringify(data.data)
        } else {
          data = JSON.stringify(data);
        }
      }
      data = data ? data.split(/[\r\n]+/).map((str: string) => 'data: ' + str).join('\n') : '';
      output = (
        "id: " + id + "\n" +
        (eventName ? "event: " + eventName + "\n" : "") +
        (data || "data: ") + '\n\n'
      );
      this.messages.push({ id, _eventName, output });
    }

    if (target?.clientId) {
      const targetIds = Array.isArray(target.clientId) ? target.clientId : [target.clientId];
      [...this.clients]
        .filter(c => c.clientId && targetIds.includes(c.clientId))
        .forEach(c => c.res.write(output));
    } else {
      [...this.clients]
        .filter(c => !_eventName || hasEventMatch(c.events, _eventName))
        .forEach((c, i) => {
          // console.log(i, '🚀 ~ SSEChannel ~ publish ~ output:', c.req.socket.remoteAddress ?? '', output)
          c.res.write(output)
        });
    }

    while (this.messages.length > this.options.historySize) {
      this.messages.shift();
    }

    return id;
  }

  /**
   * Subscribes a client to the SSE channel.
   *
   * @param req The incoming HTTP request.
   * @param res The server response.
   * @param events An array of event names or patterns to subscribe to.
   * @param clientId An optional unique ID for the client. If not provided, it defaults to `remoteAddress:remotePort`.
   * @returns The newly created client object.
   * @throws An error if the channel is closed.
   */
  subscribe(req: IncomingMessage, res: ServerResponse, events?: Events, clientId?: string) {
    if (!this.active) throwError('Channel closed', 'SSEChannel', SSEChannelAlreadyClosedErrCode);
    // console.log('🚀 ~ SSEChannel ~ subscribe ~ events:', events)
    if (!clientId) {
      const { remoteAddress, remotePort } = req.socket;
      if (remoteAddress && remotePort) {
        clientId = `${remoteAddress}:${remotePort}`;
      }
    }
    const c: SSEClient = { req, res, events, clientId };
    const maxStreamDuration = this.options.maxStreamDuration
    let cacheControl = 'max-age=0, stale-while-revalidate=0, stale-if-error=0, no-transform'
    if (maxStreamDuration > 0) {
      cacheControl += ", s-maxage=" + (Math.floor(maxStreamDuration / 1000) - 1)
    }
    const headers: any = {
      "Content-Type": "text/event-stream",
      "Cache-Control": cacheControl,
      "Connection": "keep-alive"
    }
    if (this.options.cors) {
      headers['access-control-allow-origin'] = "*";
    }
    c.req.socket.setNoDelay(true);
    c.res.writeHead(200, headers);
    let body = "retry: " + this.options.clientRetryInterval + '\n\n';

    const lastID = Number.parseInt((req.headers['last-event-id'] as any), 10);
    const rewind = (!Number.isNaN(lastID)) ? ((this.nextID - 1) - lastID) : this.options.rewind;
    if (rewind) {
      this.messages.filter(m => hasEventMatch(c.events, m.eventName)).slice(0 - rewind).forEach(m => {
        body += m.output
      });
    }

    c.res.write(body);
    this.clients.add(c);

    if (maxStreamDuration > 0) {
      setTimeout(() => {
        if (!c.res.writableEnded) {
          this.unsubscribe(c);
        }
      }, maxStreamDuration);
    }
    c.res.on('close', () => this.unsubscribe(c));
    return c;
  }

  /**
   * Unsubscribes a client from the SSE channel.
   * @param c - The client to unsubscribe.
   */
  unsubscribe(c: SSEClient) {
    c.res.end()
    this.clients.delete(c)
  }

  clearClients() {
    this.clients.forEach(c => c.res.end())
    this.clients.clear()
  }

  /**
   * Lists the clients connected to the SSE channel grouped by IP address.
   * @returns - Returns an object where the keys are the IP addresses and the values are the number of clients connected from each IP.
   */
  listClients() {
    const rollupByIP = {} as Record<string, number>
    this.clients.forEach((c) => {
      const ip = c.req.socket.remoteAddress ?? ''
      if (!(ip in rollupByIP)) {
        rollupByIP[ip] = 0
      }
      rollupByIP[ip]++
    })
    return rollupByIP
  }

  /**
   * Gets the number of clients subscribed to the SSE channel.
   * @returns - Returns the number of clients.
   */
  getSubscriberCount() {
    return this.clients.size
  }
}