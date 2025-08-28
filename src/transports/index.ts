/**
 * @file Defines common types used across transports.
 */

/**
 * The generic handler for a remote procedure call (RPC) method.
 * It receives the parameters and returns the result.
 * @param params - The parameters for the RPC method.
 * @param context - Optional context, like the raw request object from the underlying framework.
 * @returns The result of the RPC method.
 */
export type RpcMethodHandler = (params: any, context?: any) => Promise<any> | any;

export * from './client'
export * from './server'
export * from './fastify-server'
export * from './fastify-restful-server'
