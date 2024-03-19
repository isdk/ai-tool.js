// import { describe, expect, it } from 'vitest'
import { AlreadyExistsError, BaseError, NotFoundError, NotImplementationError, throwError } from "../src/utils/base-error"

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
    const err = new BaseError('hello message', 404)
    expect(err).toBeInstanceOf(BaseError)
    expect(err.toJSON()).toMatchObject({
      message: 'hello message',
      code: 404,
      name: 'BaseError',
    })
  })

  it('should create BaseError with message, code and name', ()=>{
    const err = new BaseError('hello message', 404, 'CustomError')
    expect(err).toBeInstanceOf(BaseError)
    expect(err.toJSON()).toMatchObject({
      message: 'hello message',
      code: 404,
      name: 'CustomError',
    })
  })
})

describe('throwError', () => {
  it('should throwError with message', ()=>{
    const expectedErr = new BaseError('hello message', 500, 'BaseError').toJSON()
    delete expectedErr.stack
    let error
    try {
      throwError('hello message')
    } catch (e) {
      error = e as BaseError
    }
    expect(error).toBeInstanceOf(BaseError)
    expect(error!.toJSON()).toMatchObject(expectedErr)
  })

  it('should throwError with message and name', ()=>{
    const expectedErr = new BaseError('hello message', 500, 'CustomErr').toJSON()
    delete expectedErr.stack
    let error
    try {
      throwError('hello message', 'CustomErr')
    } catch (e) {
      error = e as BaseError
    }
    expect(error).toBeInstanceOf(BaseError)
    expect(error!.toJSON()).toMatchObject(expectedErr)
  })

  it('should throwError with message and code', ()=>{
    const expectedErr = new BaseError('hello message', 200).toJSON()
    delete expectedErr.stack
    let error
    try {
      throwError('hello message', undefined, 200)
    } catch (e) {
      error = e as BaseError
    }
    expect(error).toBeInstanceOf(BaseError)
    expect(error!.toJSON()).toMatchObject(expectedErr)
  })

  it('should create BaseError with message, name and code', ()=>{
    const expectedErr = (new BaseError('hello message', 200, 'CustomErr')).toJSON()
    delete expectedErr.stack
    let error
    try {
      throwError('hello message', 'CustomErr', 200)
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
      code: 500,
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
      code: 404,
      name: 'NotFoundError',
    })
  })
})

describe('AlreadyExistsError', () => {
  it('should create AlreadyExistsError with message', ()=>{
    const err = new AlreadyExistsError('1245')
    expect(err).toBeInstanceOf(AlreadyExistsError)
    expect(err.toJSON()).toMatchObject({
      message: 'The 1245 already exists.',
      code: 409,
      name: 'AlreadyExistsError',
    })
  })
  it('should create AlreadyExistsError with message, name', ()=>{
    const err = new AlreadyExistsError('1245', 'custom name')
    expect(err).toBeInstanceOf(AlreadyExistsError)
    expect(err.toJSON()).toMatchObject({
      message: 'The 1245 already exists.',
      code: 409,
      name: 'custom name',
    })
  })
})
