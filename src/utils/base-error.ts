export type ErrorCodeType = number | string

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
export class BaseError extends Error {
  /**
   * The error code associated with the error.
   */
  declare static code: ErrorCodeType
  declare caller: string
  declare code: ErrorCodeType
  declare data?: any

  /**
   * Constructs a new BaseError instance.
   *
   * @param {string} message - The error message.
   * @param {ErrorCodeType} [code] - The error code.
   * @param {string|object} [name] - The error name or additional properties.
   */
  constructor(message: string, code?: ErrorCodeType, name?: string|object) {
    super(message)
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
   * @returns {object} A JSON representation of the error.
   */
  toJSON() {
    // Error objects aren't normally serializable. So we do something about that.
    const result: any = {
      name: this.name,
      code: this.code,
      data: this.data,
      caller: this.caller,
      message: this.message,
      stack: this.stack,
    }
    Object.keys(result).forEach(key => result[key] === undefined && delete result[key])
    return result
  }

  /**
   * Creates a new BaseError instance from a JSON representation.
   *
   * @param {object} json - A JSON representation of the error.
   * @returns {BaseError} A new BaseError instance.
   */
  fromJSON(json: any) {
    const e = new BaseError(json.message)
    e.code = json.code
    e.data = json.data
    e.caller = json.caller
    e.stack = json.stack
    return e
  }
}

/**
 * Create an error object
 * @param message - Error message
 * @param name - Error name, optional
 * @param status - Error status code, default to 500
 * @returns Error object
 */
export function createError(message: string, name?: string|object, status = 500) {
  const error = new BaseError(message, status, name)
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
export function throwError(message: string, name?: string|object, status = 500) {
  const error = createError(message, name, status)
  throw error
}

/**
 * Represents an error when a function or method is not implemented.
 * Inherits from BaseError.
 *
 * @example
* throw new NotImplementationError()
*
* @extends BaseError
*/
export class NotImplementationError extends BaseError {
  constructor() {
    const msg = `Not Implementation.`
    super(msg, 500)
  }
}

/**
 * Represents an error when a requested resource is not found.
 * Inherits from BaseError.
 *
 * @example
* throw new NotFoundError('user', { id: 123 })
*
* @extends BaseError
*/
export class NotFoundError extends BaseError {
  static code = 404;
  constructor(what: string, name?: string|object) {
    super(`Could not find ${what}.`, undefined, name)
    this.data = { what }
  }
}

const AlreadyExistsErrorCode = 409
/**
 * Represents an error when a requested resource already exists.
 * Inherits from BaseError.
 *
 * @example
* throw new AlreadyExistsError('user', { id: 123 })
*
* @extends BaseError
*/
export class AlreadyExistsError extends BaseError {
  static code = AlreadyExistsErrorCode;
  constructor(what: string, name?: string) {
    super(`The ${what} already exists.`, undefined, name)
    this.data = { what }
  }
}
