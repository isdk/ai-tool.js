import { createError } from "../utils/base-error";
import { Funcs } from '../tool-func';
import { ActionName, genUrlParamsStr } from '../utils';
import { ClientToolTransport } from "./client";

/**
 * A concrete client transport implementation that uses the browser/node `fetch` API.
 */
export class HttpClientToolTransport extends ClientToolTransport {

  /**
   * Connects to the server's discovery endpoint to get the list of available tools.
   * @returns A promise that resolves to a map of tool function metadata.
   */
  async loadApis(): Promise<Funcs> {
    const res = await fetch(this.apiRoot, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`Failed to load tools from ${this.apiRoot}: ${res.statusText}`);
    }
    const items = await res.json();
    return items;
  }

  async _fetch(name: string, args?: any, act?: ActionName | string, subName?: any, fetchOptions?: any) {
    const HasContentMethods = ['post', 'put', 'patch']
    if (!act) { act = this.Tools.action || 'post'}
    if (act === 'res') { act = 'get' }

    if ((!fetchOptions.headers || !fetchOptions.headers['Content-Type']) && HasContentMethods.includes(act)) {
      fetchOptions.headers = {
        "Content-Type": "application/json",
        ...fetchOptions.headers,
      }
    }

    // Translate clientId from options to a request header
    if (fetchOptions?.clientId) {
      if (!fetchOptions.headers) {
        fetchOptions.headers = {};
      }
      fetchOptions.headers['x-client-id'] = fetchOptions.clientId;
      delete fetchOptions.clientId;
    }

    if (args?.stream && !fetchOptions.headers.Connection) {
      fetchOptions.headers.Connection = 'keep-alive'
    }
    if (subName) {
      if (typeof subName !== 'string') {subName = JSON.stringify(subName)}
      if (name) {subName = name + '/' + subName}
    } else {
      subName = name
    }

    fetchOptions.method =act.toUpperCase()
    let urlPart: string
    if (act === 'get' || act === 'delete') {
      urlPart  = subName + genUrlParamsStr(args)
    } else {
      fetchOptions.body = JSON.stringify(args)
      urlPart = subName!
    }

    if (fetchOptions.headers && !HasContentMethods.includes(act)) {
      delete fetchOptions.headers['Content-Type']
    }

    const res = await fetch(`${this.apiRoot}/${urlPart}`, fetchOptions)
    if (!res.ok) {
      const err = await this.errorFrom(name, res)
      throw err
    }
    return res
  }

  /**
   * @internal
   * A helper to create a structured error from a failed `fetch` response.
   * @param res - The HTTP response.
   * @returns A structured error object.
   */
  async errorFrom(name: string, res: Response) {
    let errCode = res.status
    let errMsg = res.statusText
    let data: any
    if (res.body) {
      const text = await res.text()
      try {
        const body = JSON.parse(text)
        if (body) {
          if (body.error) {errMsg = body.error}
          if (body.name) {name = body.name}
          if (body.data) {
            data = body.data
            data.name = name
            if (data.what) {
              data.msg = errMsg
              errMsg = data.what
            }
          }
          if (body.message) {
            errMsg = errMsg + ':' + body.message;
          }
        }
      } catch (e) {
        console.warn('🚀 ~ parse error body to json:', e)
      }
    }
    return createError(errMsg, name, errCode)
  }

  async toObject(res: any, args?: any) {
    return await res.json()
  }
}
