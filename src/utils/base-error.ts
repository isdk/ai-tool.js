import { AbstractError, createErrorClass } from "abstract-error"

export type ErrorCodeType = number | string

export enum ErrorCode {
  OK = 200,
  Accepted = 202,
  BadRequest = 400,
  InvalidArgument = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  RequestTimeout = 408,
  Conflict = 409,
  Corruption = 409,
  TooManyRequests = 429,
  Aborted = 499,
  InternalError = 500,
  NotImplemented = 501,
  NotSupported  = 501,
  BadGateway = 502,
  ServiceUnavailable = 503, // task is processing and Retry-After
  GatewayTimeout = 504,
}

export const InternalErrorCode = ErrorCode.InternalError
export const NotImplementedErrorCode = ErrorCode.NotImplemented
export const NotFoundErrorCode = ErrorCode.NotFound
export const AlreadyExistsErrorCode = ErrorCode.Conflict
export const AbortErrorCode = ErrorCode.Aborted

/**
 * BaseError class that extends the Error class.
 *
 * @example
 * // Create a custom error
 * class CustomError extends BaseError {
 *   static code = 'customError';
 *   constructor(message: string) {
 *     super(message);
 *   }
 * }
 *
 * // Throw the custom error
 * throw new CustomError('This is a custom error');
 *
 * @description
 * This class is used to create custom errors that extend the built-in Error class. It provides a way to define custom error codes and additional data associated with the error.
 *
 * @property {ErrorCodeType} code - The error code associated with the error.
 * @property {string} caller - The name of the function that threw the error.
 * @property {ErrorCodeType} code - The error code associated with the error.
 * @property {any} data - Additional data associated with the error.
 *
 * @method toJSON - Returns a JSON representation of the error.
 * @method fromJSON - Creates a new BaseError instance from a JSON representation.
 */
export class BaseError extends AbstractError {
  /**
   * The error code associated with the error.
   */
  declare static code: ErrorCodeType
  declare caller: string
  declare code: ErrorCodeType
  declare data?: any

  static createErrorClass(aType: string, aErrorCode?: number|string|typeof AbstractError, ParentErrorClass: typeof BaseError = BaseError): typeof BaseError {
    return createErrorClass(aType, aErrorCode, ParentErrorClass) as typeof BaseError
  }

  /**
   * Constructs a new BaseError instance.
   *
   * @param {string} message - The error message.
   * @param {ErrorCodeType} [code] - The error code.
   * @param {string|object} [name] - The error name or additional properties.
   */
  constructor(message: string, code?: ErrorCodeType, name?: string|object) {
    super(message, code)
    const ctor = this.constructor as unknown as BaseError

    if (code != null) {
      this.code = code
    } else if (ctor.code) {
      this.code = ctor.code
    } else {
      this.code = ctor.name
    }
    if (name) {
      if (typeof name === 'string') {
        this.name = name
      } else {
        Object.assign(this, name)
      }

    } else if (typeof this.code === 'string') {
      this.name = this.code
    } else {
      this.name = ctor.name
    }
  }

  /**
   * Returns a JSON representation of the error.
   *
   * @returns A JSON representation of the error.
   */
  toJSON() {
    // Error objects aren't normally serializable. So we do something about that.
    const result: any = {
      name: this.name,
      code: this.code,
      data: this.data,
      caller: this.caller,
      error: this.message,
      stack: this.stack,
    }
    Object.keys(result).forEach(key => result[key] === undefined && delete result[key])
    return result
  }

  /**
   * Creates a new BaseError instance from a JSON representation.
   *
   * @param json - A JSON representation of the error.
   * @returns A new BaseError instance.
   */
  fromJSON(json: any) {
    const e = new BaseError(json.message)
    e.code = json.code
    e.data = json.data
    e.caller = json.caller
    e.message = json.error
    e.stack = json.stack
    return e
  }
}

export class CommonError extends BaseError {
  constructor(message: string, name?: string|Record<string, any>, status: ErrorCodeType = InternalErrorCode) {
    super(message, status, name)
  }
}

/**
 * Represents an error when a function or method is not implemented.
 * Inherits from BaseError.
 *
 * @example
 * throw new NotImplementationError()
 *
 * @extends CommonError
 */
export class NotImplementationError extends CommonError {
  constructor(msg?: string, name?: string|Record<string, any>) {
    if (!msg) {msg = `Not Implementation.`}
    super(msg, name, ErrorCode.NotImplemented)
  }
}
// export const NotImplementationError = createErrorClass('NotImplementation', ErrorCode.NotImplemented, CommonError as any) as typeof CommonError
CommonError[NotImplementedErrorCode] = NotImplementationError

/**
 * Represents an error when a requested resource is not found.
 * Inherits from BaseError.
 *
 * @example
* throw new NotFoundError('user', { id: 123 })
*
* @extends CommonError
*/
export class NotFoundError extends CommonError {
  static code = NotFoundErrorCode;
  constructor(what: string|number, name?: string|Record<string, any>) {
    super(`Could not find ${what}.`, name, NotFoundErrorCode)
    this.data = { what }
  }
}
CommonError[NotFoundErrorCode] = NotFoundError

/**
 * Represents an error when a requested resource already exists.
 * Inherits from BaseError.
 *
 * @example
* throw new AlreadyExistsError('user', { id: 123 })
*
* @extends CommonError
*/
export class AlreadyExistsError extends CommonError {
  static code = AlreadyExistsErrorCode;
  constructor(what: string|number, name?: string|Record<string, any>) {
    super(`The ${what} already exists.`, name, AlreadyExistsErrorCode)
    this.data = { what }
  }
}
CommonError[AlreadyExistsErrorCode] = AlreadyExistsError

export class AbortError extends CommonError {
  static code = AbortErrorCode;
  constructor(what?: string, name?: string|Record<string, any>) {
    const message = what ? `The operation was aborted for ${what}.` : `The operation was aborted.`
    if (!name) { name = 'AbortError'}
    super(message, name, AbortErrorCode);
    if (what) {this.data = {what}}
  }
}
CommonError[AbortErrorCode] = AbortError

/**
 * Create an error object
 * @param message - Error message
 * @param name - Error name, optional
 * @param status - Error status code, default to 500
 * @returns Error object
 */
export function createError(message: string, name?: string|Record<string, any>, status: ErrorCode|ErrorCodeType = InternalErrorCode): CommonError {
  const ErrorClass = CommonError[status] || CommonError
  const error = new ErrorClass(message, name, status)
  if (typeof error.code !== 'number')
    error.code = status
  return error;
}

/**
 * Throw an error
 * @param message - Error message
 * @param name - Error name, optional
 * @param status - Error status code, default to 500
 * @throws {BaseError} Throws a BaseError object
 */
export function throwError(message: string, name?: string|Record<string, any>, status: ErrorCode|ErrorCodeType = InternalErrorCode) {
  const error = createError(message, name, status)
  throw error
}

