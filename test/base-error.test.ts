// import { describe, expect, it } from 'vitest'
import { AbortError, AlreadyExistsError, BaseError, CommonError, ErrorCode, NotFoundError, NotImplementationError, createError, throwError } from "../src/utils/base-error"

describe('BaseError', () => {

  it('should create BaseError with message', ()=>{
    const err = new BaseError('hello message')
    expect(err).toBeInstanceOf(BaseError)
    expect(err.toJSON()).toMatchObject({
      message: 'hello message',
      code: 'BaseError',
    })
  })

  it('should create BaseError with message and code', ()=>{
    const err = new BaseError('hello message', ErrorCode.NotFound)
    expect(err).toBeInstanceOf(BaseError)
    expect(err.toJSON()).toMatchObject({
      message: 'hello message',
      code: ErrorCode.NotFound,
      name: 'BaseError',
    })
  })

  it('should create BaseError with message, code and name', ()=>{
    const err = new BaseError('hello message', ErrorCode.NotFound, 'CustomError')
    expect(err).toBeInstanceOf(BaseError)
    expect(err.toJSON()).toMatchObject({
      message: 'hello message',
      code: ErrorCode.NotFound,
      name: 'CustomError',
    })
  })
})

describe('throwError', () => {
  it('should throwError with message', ()=>{
    const expectedErr = new CommonError('hello message', 'CommonError', ErrorCode.InternalError).toJSON()
    delete expectedErr.stack
    let error
    try {
      throwError('hello message')
    } catch (e) {
      error = e as BaseError
    }
    expect(error).toBeInstanceOf(CommonError)
    expect(error!.toJSON()).toMatchObject(expectedErr)
  })

  it('should throwError with message and name', ()=>{
    const expectedErr = new BaseError('hello message', ErrorCode.InternalError, 'CustomErr').toJSON()
    delete expectedErr.stack
    let error
    try {
      throwError('hello message', 'CustomErr')
    } catch (e) {
      error = e as BaseError
    }
    expect(error).toBeInstanceOf(CommonError)
    expect(error!.toJSON()).toMatchObject(expectedErr)
  })

  it('should throwError with message and code', ()=>{
    const expectedErr = new CommonError('hello message', undefined, ErrorCode.OK).toJSON()
    delete expectedErr.stack
    let error
    try {
      throwError('hello message', undefined, ErrorCode.OK)
    } catch (e) {
      error = e as BaseError
    }
    expect(error).toBeInstanceOf(BaseError)
    expect(error!.toJSON()).toMatchObject(expectedErr)
  })

  it('should create BaseError with message, name and code', ()=>{
    const expectedErr = (new BaseError('hello message', ErrorCode.OK, 'CustomErr')).toJSON()
    delete expectedErr.stack
    let error
    try {
      throwError('hello message', 'CustomErr', ErrorCode.OK)
    } catch (e) {
      error = e as BaseError
    }
    expect(error).toBeInstanceOf(BaseError)
    expect(error!.toJSON()).toMatchObject(expectedErr)
})
})

describe('NotImplementationError', () => {
  it('should create NotImplementationError', ()=>{
    const err = new NotImplementationError()
    expect(err).toBeInstanceOf(NotImplementationError)
    expect(err.toJSON()).toMatchObject({
      message: 'Not Implementation.',
      code: ErrorCode.NotImplemented,
      name: 'NotImplementationError',
    })
  })
  it('should create NotImplementationError by createError', ()=>{
    const err = createError('', undefined, ErrorCode.NotImplemented)
    expect(err).toBeInstanceOf(NotImplementationError)
    expect(err.toJSON()).toMatchObject({
      message: 'Not Implementation.',
      code: ErrorCode.NotImplemented,
      name: 'NotImplementationError',
    })
  })
})

describe('NotFoundError', () => {
  it('should create NotFoundError with message', ()=>{
    const err = new NotFoundError('1245')
    expect(err).toBeInstanceOf(NotFoundError)
    expect(err.toJSON()).toMatchObject({
      message: 'Could not find 1245.',
      code: ErrorCode.NotFound,
      name: 'NotFoundError',
      data: {what: '1245'},
    })
  })
  it('should create NotFoundError by createError', ()=>{
    const err = createError('1234', undefined, ErrorCode.NotFound)
    expect(err).toBeInstanceOf(NotFoundError)
    expect(err.toJSON()).toMatchObject({
      message: 'Could not find 1234.',
      code: ErrorCode.NotFound,
      name: 'NotFoundError',
      data: {what: '1234'},
    })
  })
})

describe('AlreadyExistsError', () => {
  it('should create AlreadyExistsError with message', ()=>{
    const err = new AlreadyExistsError('1245')
    expect(err).toBeInstanceOf(AlreadyExistsError)
    expect(err.toJSON()).toMatchObject({
      message: 'The 1245 already exists.',
      code: ErrorCode.Conflict,
      name: 'AlreadyExistsError',
      data: {what: '1245'},
    })
  })
  it('should create AlreadyExistsError with message, name', ()=>{
    const err = new AlreadyExistsError('1245', 'custom name')
    expect(err).toBeInstanceOf(AlreadyExistsError)
    expect(err.toJSON()).toMatchObject({
      message: 'The 1245 already exists.',
      code: ErrorCode.Conflict,
      name: 'custom name',
      data: {what: '1245'},
    })
  })
  it('should create AlreadyExistsError by createError', ()=>{
    const err = createError('1234', undefined, ErrorCode.Conflict)
    expect(err).toBeInstanceOf(AlreadyExistsError)
    expect(err.toJSON()).toMatchObject({
      message: 'The 1234 already exists.',
      code: ErrorCode.Conflict,
      name: 'AlreadyExistsError',
      data: {what: '1234'},
    })
  })
})

describe('AbortError', () => {
  it('should create AbortError', ()=>{
    const err = new AbortError()
    expect(err).toBeInstanceOf(AbortError)
    expect(err.toJSON()).toMatchObject({
      message: 'The operation was aborted.',
      code: ErrorCode.Aborted,
      name: 'AbortError',
    })
  })
  it('should create AbortError with message', ()=>{
    const err = new AbortError('1245')
    expect(err).toBeInstanceOf(AbortError)
    expect(err.toJSON()).toMatchObject({
      message: 'The operation was aborted for 1245.',
      code: ErrorCode.Aborted,
      name: 'AbortError',
      data: {what: '1245'},
    })
  })
  it('should create AbortError by createError', ()=>{
    const err = createError('1234', undefined, ErrorCode.Aborted)
    expect(err).toBeInstanceOf(AbortError)
    expect(err.toJSON()).toMatchObject({
      message: 'The operation was aborted for 1234.',
      code: ErrorCode.Aborted,
      name: 'AbortError',
      data: {what: '1234'},
    })
  })
})
