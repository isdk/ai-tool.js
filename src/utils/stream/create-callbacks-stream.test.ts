import {vi as jest } from 'vitest'

import {createCallbacksTransformer, StreamCallbacksAndOptions} from './create-callbacks-stream'

function getTestStream({onStart, onTransform, onFinal, onError}: StreamCallbacksAndOptions) {
  const transformer = createCallbacksTransformer({onStart, onTransform, onFinal, onError})

  const readableStream = new ReadableStream({
    start(controller) {
      // called by constructor
      // console.log('[start]');
      controller.enqueue('a');
      controller.enqueue('b');
      controller.enqueue('c');
    },
    pull(controller) {
      // called read when controller's queue is empty
      // console.log('[pull]');
      controller.enqueue('d');
      controller.enqueue('e');
      controller.close(); // or controller.error();
    },
    cancel(reason) {
      // called when rs.cancel(reason)
      console.log('[cancel]', reason);
    },
  });

  const result = readableStream.pipeThrough<string>(transformer)
  return result
}

describe('createCallbacksTransformer', async ()=>{
  it('should callbacks', async ()=>{
    const onStart = jest.fn()
    const onTransform = jest.fn()
    const onFinal = jest.fn()

    const reader = getTestStream({onStart, onTransform, onFinal}).getReader();
    const result = [] as string[]
    for (let chunk = await reader.read(); !chunk.done; chunk = await reader.read()) {
      result.push(chunk.value);
    }
    expect(onStart).toHaveBeenCalledTimes(1)
    expect(onTransform).toHaveBeenCalledTimes(5)
    expect(onFinal).toHaveBeenCalledTimes(1)
    expect(result.join('')).toBe('abcde')
  })

  it('should raise error callbacks', async ()=>{
    const onStart = jest.fn()
    const e = new Error('testStreamError')
    let acturalError: any
    const onTransform = jest.fn((chunk, controller)=>{
      if (chunk === 'e') {
        throw e
      }
    })
    const onFinal = jest.fn()
    const onError = jest.fn()

    const reader = getTestStream({onStart, onTransform, onFinal, onError}).getReader();
    const result = [] as string[]
    try{
    for (let chunk = await reader.read(); !chunk.done; chunk = await reader.read()) {
      result.push(chunk.value);
    }
    } catch(err) {
      acturalError = err
    }
    expect(acturalError).toBe(e)
    expect(onStart).toHaveBeenCalledTimes(1)
    expect(onError).toHaveBeenCalledTimes(1)
    expect(onError.mock.calls[0]).toMatchObject([e])
    expect(onFinal).toHaveBeenCalledTimes(0)
    expect(onTransform).toHaveBeenCalledTimes(5)
    expect(result.join('')).toBe('abcd')
  })
})