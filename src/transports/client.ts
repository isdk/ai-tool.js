import { Funcs } from '../tool-func';

/**
 * Defines the public interface for a client-side transport,
 * responsible for communicating with a ServerTransport.
 */
export interface IClientToolTransport {
  /**
   * Connects to the server's discovery endpoint to get the list of available tools.
   * @returns A promise that resolves to a map of tool function metadata.
   */
  load(): Promise<Funcs>;

  /**
   * Executes a tool remotely.
   * @param toolName The name of the tool to run.
   * @param params The parameters to pass to the tool's function.
   * @returns A promise that resolves with the result from the remote tool.
   */
  run(toolName: string, params: any): Promise<any>;

  [name: string]: any;
}

/**
 * A concrete client transport implementation that uses the browser/node `fetch` API.
 */
export class HttpClientToolTransport implements IClientToolTransport {
  apiRoot: string;

  constructor(apiRoot: string) {
    if (!apiRoot) {
      throw new Error('apiRoot is required for HttpClientTransport');
    }
    this.apiRoot = apiRoot;
  }

  async load(): Promise<Funcs> {
    const res = await fetch(this.apiRoot, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`Failed to load tools from ${this.apiRoot}: ${res.statusText}`);
    }
    const items = await res.json();
    return items;
  }

  async run(toolName: string, params: any): Promise<any> {
    const url = `${this.apiRoot}/${toolName}`;
    const fetchOptions: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    };

    const res = await fetch(url, fetchOptions);

    if (!res.ok) {
        // Attempt to parse error from body, similar to old ClientTools logic
        let errMsg = `Request to ${url} failed: ${res.status} ${res.statusText}`;
        try {
            const errBody = await res.json();
            if (errBody.error) {
                errMsg = errBody.error;
            }
        } catch (e) { /* ignore parsing error */ }
        throw new Error(errMsg);
    }

    if (params?.stream) {
        return res;
    }

    const result = await res.json();
    return result;
  }
}
