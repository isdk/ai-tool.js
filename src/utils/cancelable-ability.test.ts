import {vi as jest} from 'vitest'
import { AsyncFeatureBits, AsyncFeatures, ToolAsyncCancelableBit, ToolAsyncMultiTaskBit, ToolFunc } from '../tool-func'
import { makeToolFuncCancelable, TaskPromise } from './cancelable-ability'
import { wait } from './wait'

class TestSingleTaskFunc extends ToolFunc {
  func(params: any) {
    return this.runAsyncCancelableTask(params, async (params: any) => {
      await wait(50)
      return params
    })
  }
}

makeToolFuncCancelable(TestSingleTaskFunc)

class TestMultiTaskFunc extends ToolFunc {
  func(params: any) {
    return this.runAsyncCancelableTask(params, async (params: any) => {
      await wait(50)
      return params
    })
  }
}
makeToolFuncCancelable(TestMultiTaskFunc,{asyncFeatures: AsyncFeatures.MultiTask})

const testSingleTask = new TestSingleTaskFunc('testSingleTask')
const testMultiTask = new TestMultiTaskFunc('testMultiTask')

// jest.spyOn(testToolFunc, 'func')

describe('CancelableAbility', () => {
  it('should run single async task only', async () => {
    expect(testSingleTask.hasAsyncFeature(AsyncFeatureBits.Cancelable)).toBeTruthy()
    expect(TestSingleTaskFunc.hasAsyncFeature(ToolAsyncCancelableBit)).toBeTruthy()
    const taskInfo = testSingleTask.run('12345') as TaskPromise<string>
    expect(taskInfo.task).toBeInstanceOf(AbortController)

    expect(async () => {await wait(1); testSingleTask.run('345');}).rejects.toThrow('The task is running')
    const result = await taskInfo
    expect(result).toBe('12345')
  })

  it('should run multi async tasks', async () => {
    expect(testMultiTask.hasAsyncFeature(AsyncFeatureBits.Cancelable)).toBeTruthy()
    expect(testMultiTask.hasAsyncFeature(ToolAsyncMultiTaskBit)).toBeTruthy()
    expect(TestMultiTaskFunc.hasAsyncFeature(AsyncFeatureBits.MultiTask)).toBeTruthy()
    const taskInfo = testMultiTask.run('12345') as TaskPromise<string>
    expect(taskInfo.task).toBeInstanceOf(AbortController)
    expect(taskInfo.task).toHaveProperty('id')

    expect(testMultiTask.run('345')).resolves.toBe('345')
    const result = await taskInfo
    expect(result).toBe('12345')
  })
})
