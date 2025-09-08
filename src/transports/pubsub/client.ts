import type { PubSubCtx } from './base';

/**
 * Represents the client-side stream for a PubSub connection.
 *
 * This interface abstracts the underlying connection object (like an `EventSource`
 * or `WebSocket` client) into a standardized event-based stream. It provides
 * methods for listening to events, sending messages (for bidirectional transports),
 * and managing the connection state.
 */
export interface PubSubClientStream {
  /**
   * The protocol being used for this stream (e.g., 'sse', 'ws', 'ipc').
   */
  protocol: 'sse' | 'ws' | 'ipc' | string;

  /**
   * Optional. Represents the state of the connection.
   * This is provided for compatibility with the `EventSource.readyState`
   * and `WebSocket.readyState` properties.
   * (e.g., 0 for connecting, 1 for open, 2 for closed).
   */
  readyState?: number;

  /**
   * Registers a listener for a specific event from the server.
   * @param event The name of the event to listen for.
   * @param listener The callback function to execute when the event is received.
   *   It receives the event data and an optional context object.
   */
  on: (event: string, listener: (data: any, ctx?: PubSubCtx) => void) => any;

  /**
   * Removes a previously registered event listener.
   * @param event The name of the event.
   * @param listener The listener function to remove.
   */
  off: (event: string, listener: (data: any, ctx?: PubSubCtx) => void) => void;

  /**
   * Closes the connection stream.
   */
  close: () => void;

  /**
   * Optional. Sends a message from the client to the server.
   * This method is only available for bidirectional transports like WebSockets or IPC.
   * It is not supported by unidirectional transports like Server-Sent Events (SSE).
   * @param event The name of the event to send.
   * @param data The payload for the event.
   * @param ctx Optional context for the PubSub operation.
   */
  send?: (event: string, data: any, ctx?: PubSubCtx) => void; // WS/IPC 可上行，SSE 无

  /**
   * Optional alias for the `on` method for compatibility with the
   * standard `EventTarget` interface.
   */
  addEventListener?: PubSubClientStream['on'];

  /**
   * Optional alias for the `off` method for compatibility with the
   * standard `EventTarget` interface.
   */
  removeEventListener?: PubSubClientStream['off'];
}

/**
 * Defines the interface for a client-side PubSub transport.
 *
 * This abstraction is responsible for creating and managing the connection
 * stream (`PubSubClientStream`) to the server.
 */
export interface IPubSubClientTransport {
  /**
   * Establishes a connection to a server endpoint.
   * @param url The URL of the server's PubSub endpoint.
   * @param params Optional parameters for the connection, which might include
   *   things like authentication tokens, initial subscription topics, or a client ID.
   * @returns A `PubSubClientStream` instance that represents the active connection.
   */
  connect: (url: string, params?: any) => PubSubClientStream;

  /**
   * Optional. Disconnects a given stream.
   * While the `close` method exists on the stream itself, placing `disconnect`
   * on the transport can be semantically clearer in some architectures.
   * By default, this should delegate to `stream.close()`.
   * @param stream The stream to disconnect.
   */
  disconnect?: (stream: PubSubClientStream) => void;
}
