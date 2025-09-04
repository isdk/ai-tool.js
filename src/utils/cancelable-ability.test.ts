import {vi as jest} from 'vitest'
import { ToolFunc } from '../tool-func'
import { AsyncFeatureBits, AsyncFeatures, ToolAsyncCancelableBit, ToolAsyncMultiTaskBit, AsyncTaskId, CancelableAbility, makeToolFuncCancelable, TaskAbortController, TaskAbortControllers, TaskPromise } from './cancelable-ability'
import { sleep } from './wait'
import { uuid } from './hash'
import { AbortError } from './base-error'

declare namespace TestSingleTask {
  function hasAsyncFeature(feature: AsyncFeatureBits): boolean;
}
interface TestSingleTask extends CancelableAbility {}
class TestSingleTask {
  run(params: any) {
    return this.runAsyncCancelableTask(params, async (params: any, aborter: TaskAbortController) => {
      const lastTick = Date.now() + (params?.waitTime ?? 10)
      while (Date.now() < lastTick) {
        if (aborter.throwRejected()) { return }
        await sleep(1)
      }
      return params
    })
  }
}
makeToolFuncCancelable(TestSingleTask)

class TestSingleTaskFunc extends ToolFunc {
  func(params: any) {
    return this.runAsyncCancelableTask(params, async (params: any, aborter: TaskAbortController) => {
      const lastTick = Date.now() + (params?.waitTime ?? 10)
      while (Date.now() < lastTick) {
        if (aborter.throwRejected()) { return }
        await sleep(1)
      }
      return params
    })
  }
}

makeToolFuncCancelable(TestSingleTaskFunc)

class TestMultiTaskFunc extends ToolFunc {
  func(params: any) {
    return this.runAsyncCancelableTask(params, async (params: any, aborter: TaskAbortController) => {
      for (let i = 0; i < 5; i++) {
        if (aborter.throwRejected()) { return }
        await sleep(10)
      }
      return params
    })
  }
}
const maxTaskConcurrency = 3
makeToolFuncCancelable(TestMultiTaskFunc,{asyncFeatures: AsyncFeatures.MultiTask, maxTaskConcurrency})

function getStream() {
  const readableStream = new ReadableStream({
    start(controller) {
      // called by constructor
      // console.log('[start]');
      controller.enqueue({content: 'a'});
      controller.enqueue({content: 'b'});
      controller.enqueue({content: 'c'});
    },
    pull(controller) {
      // called read when controller's queue is empty
      // console.log('[pull]');
      controller.enqueue({content: 'd'});
      controller.enqueue({content: 'e'});
      controller.close(); // or controller.error();
    },
    cancel(reason) {
      // called when rs.cancel(reason)
      // console.log('[cancel]', reason);
    },
  });
  return readableStream
}

class TestStreamTaskFunc extends ToolFunc {
  func(params: any) {
    return this.runAsyncCancelableTask(params, async (params: any) => {
      return getStream()
    })
  }
}

makeToolFuncCancelable(TestStreamTaskFunc,{asyncFeatures: AsyncFeatures.MultiTask, maxTaskConcurrency})

const testSingleTask = new TestSingleTaskFunc('testSingleTask')
const testMultiTask = new TestMultiTaskFunc('testMultiTask')
const testStreamTask = new TestStreamTaskFunc('testStreamTask')

describe('CancelableAbility', () => {
  beforeEach(() =>{
    // restore all mocks to original
    jest.restoreAllMocks()
  })

  it('should run single async task without ToolFunc', async () => {
    const testSingleTask = new TestSingleTask()
    expect(testSingleTask.hasAsyncFeature(AsyncFeatureBits.Cancelable)).toBeTruthy()
    expect(TestSingleTaskFunc.hasAsyncFeature(ToolAsyncCancelableBit)).toBeTruthy()
    const taskInfo = testSingleTask.run('12345') as TaskPromise<string>
    expect(taskInfo.task).toBeInstanceOf(AbortController)

    await expect(async () => {await sleep(1); testSingleTask.run('345');}).rejects.toThrow('The task is running')
    const result = await taskInfo
    expect(result).toBe('12345')
  })

  it('should run single async task only', async () => {
    expect(testSingleTask.hasAsyncFeature(AsyncFeatureBits.Cancelable)).toBeTruthy()
    expect(TestSingleTaskFunc.hasAsyncFeature(ToolAsyncCancelableBit)).toBeTruthy()
    const taskInfo = testSingleTask.run('12345') as TaskPromise<string>
    expect(taskInfo.task).toBeInstanceOf(AbortController)

    await expect(async () => {await sleep(1); testSingleTask.run('345');}).rejects.toThrow('The task is running')
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

    await expect(testMultiTask.run('345')).resolves.toBe('345')
    const result = await taskInfo
    expect(result).toBe('12345')
  })

  it('should run multi async tasks with maxTaskConcurrency limit', async () => {
    expect(testMultiTask.hasAsyncFeature(AsyncFeatureBits.Cancelable)).toBeTruthy()
    expect(testMultiTask.hasAsyncFeature(ToolAsyncMultiTaskBit)).toBeTruthy()
    expect(TestMultiTaskFunc.hasAsyncFeature(AsyncFeatureBits.MultiTask)).toBeTruthy()
    expect(testMultiTask.semaphore).toBeDefined()

    const taskCount = 10;
    const tasks = Array.from({ length: taskCount }, (_, index) => '' + index);


    const orgAcquire = testMultiTask.semaphore.acquire.bind(testMultiTask.semaphore);
    const orgRelease = testMultiTask.semaphore.release.bind(testMultiTask.semaphore);
    const acquireMock = jest.spyOn(testMultiTask.semaphore, 'acquire').mockImplementation(orgAcquire);
    const releaseMock = jest.spyOn(testMultiTask.semaphore, 'release').mockImplementation(orgRelease);

    const pendingCountsBefore = [] as number[];
    const pendingCountsAfter = [] as number[];
    const asyncTask = async (item: string, ix: number) => {
      const semaphore = testMultiTask.semaphore;
      let pendingCount = semaphore.pendingCount;
      pendingCountsBefore.push(pendingCount)
      // console.log('🚀 ~ asyncTask ~ pendingCount before:', ix, pendingCount, ix < maxTaskConcurrency ? 0 : ix - maxTaskConcurrency+1)
      // expect(pendingCount).toBe(ix < maxTaskConcurrency ? 0 : ix - maxTaskConcurrency)
      await testMultiTask.run(item)
      pendingCount = semaphore.pendingCount;
      pendingCountsAfter.push(pendingCount)
      // console.log('🚀 ~ asyncTask ~ pendingCount:', ix, pendingCount)
    };
    await Promise.all(tasks.map(asyncTask));

    // all tasks should be executed matched
    expect(acquireMock).toHaveBeenCalledTimes(taskCount);
    expect(releaseMock).toHaveBeenCalledTimes(taskCount);

    // check maxTaskConcurrency limit
    expect(pendingCountsBefore).toEqual([0, 0, 0, 1, 2, 3, 4, 5, 6, 7])
    expect(pendingCountsAfter).toEqual([7, 6, 5, 4, 3, 2, 1, 0, 0, 0])
  })

  it('should run async multi tasks with stream', async () => {
    const taskInfo = testStreamTask.run() as TaskPromise<ReadableStream>
    expect(taskInfo.task).toBeInstanceOf(AbortController)
    expect(taskInfo.task).toHaveProperty('id')

    await expect(testMultiTask.run('345')).resolves.toBe('345')
    const result = await taskInfo
    expect(result).toBeInstanceOf(ReadableStream)
    const reader = result.getReader()
    const chunks = [] as any[]
    for (let chunk = await reader.read(); !chunk.done; chunk = await reader.read()) {
      const value = chunk.value
      chunks.push(value)
    }

    expect(chunks).toHaveLength(5)
    expect(chunks.map(chunk => chunk.content)).toEqual(['a', 'b', 'c', 'd', 'e'])
    expect(chunks.map(chunk => chunk.taskId)).toEqual([0, 0, 0, 0, 0])
  })

  it('should run async task with custom generation task Id', async () => {
    const ids = [] as string[]
    const rmIds = [] as string[]
    interface TestTaskIdFunc extends CancelableAbility {}
    class TestTaskIdFunc extends ToolFunc {
      generateAsyncTaskId(taskId?: AsyncTaskId, aborters?: TaskAbortControllers) {
        if (!taskId) {
          taskId = uuid()
        }
        ids.push(taskId as string)
        return taskId
      }

      cleanMultiTaskAborter(id: AsyncTaskId, aborters: TaskAbortControllers) {
        rmIds.push(id as string)
        delete aborters[id]
      }

      func(params: any) {
        return this.runAsyncCancelableTask(params, async (params: any) => {
          await sleep(10)
          return params
        })
      }
    }
    makeToolFuncCancelable(TestTaskIdFunc, {asyncFeatures: AsyncFeatures.MultiTask})

    const testTaskId = new TestTaskIdFunc('testTaskId')

    expect(testTaskId.hasAsyncFeature(AsyncFeatureBits.MultiTask)).toBeTruthy()
    expect(TestTaskIdFunc.hasAsyncFeature(ToolAsyncCancelableBit)).toBeTruthy()
    const taskInfo = testTaskId.run('12345') as TaskPromise<string>
    expect(taskInfo.task).toBeInstanceOf(AbortController)
    const aborter = taskInfo.task!
    expect(ids).toHaveLength(1)
    expect(rmIds).toHaveLength(0)
    expect(aborter).toHaveProperty('id', ids[0])
    expect(typeof aborter.id).toBe('string')
    const result = await taskInfo
    expect(rmIds).toHaveLength(1)
    expect(aborter.id).toBe(rmIds[0])
    expect(result).toBe('12345')
  })

  it('should clean task aborter if task raise error', async () => {
    const ids = [] as AsyncTaskId[]
    const rmIds = [] as AsyncTaskId[]
    interface TestTaskErrorFunc extends CancelableAbility {}
    class TestTaskErrorFunc extends ToolFunc {
      generateAsyncTaskId(taskId?: AsyncTaskId, aborters?: TaskAbortControllers) {
        taskId = this._generateAsyncTaskId(taskId, aborters)
        ids.push(taskId as string)
        return taskId
      }

      cleanMultiTaskAborter(id: AsyncTaskId, aborters: TaskAbortControllers) {
        rmIds.push(id)
        this._cleanMultiTaskAborter(id, aborters)
      }

      func(params: any) {
        return this.runAsyncCancelableTask(params, async (params: any) => {
          await sleep(10)
          if (params === 'error') {throw new Error('test')}
          return params
        })
      }
    }
    makeToolFuncCancelable(TestTaskErrorFunc, {asyncFeatures: AsyncFeatures.MultiTask})

    const testTask = new TestTaskErrorFunc('testTaskError')

    const taskInfo = testTask.run('error') as TaskPromise<string>
    expect(taskInfo.task).toBeInstanceOf(AbortController)
    const aborter = taskInfo.task!
    expect(ids).toHaveLength(1)
    expect(rmIds).toHaveLength(0)
    expect(aborter).toHaveProperty('id', ids[0])
    expect(typeof aborter.id).toBe('number')
    await expect(taskInfo).rejects.toThrow('test')
    await sleep(10)
    expect(rmIds).toHaveLength(1)
    expect(aborter.id).toBe(rmIds[0])
  })

  it('should clean task aborter if stream raise error', async () => {
    const ids = [] as AsyncTaskId[]
    const rmIds = [] as AsyncTaskId[]
    const emits = [] as any[]
    interface TestTaskErrorFunc extends CancelableAbility {}
    class TestTaskErrorFunc extends ToolFunc {
      emit(...args: any[]) {
        emits.push(args)
      }

      generateAsyncTaskId(taskId?: AsyncTaskId, aborters?: TaskAbortControllers) {
        taskId = this._generateAsyncTaskId(taskId, aborters)
        ids.push(taskId as string)
        return taskId
      }

      cleanMultiTaskAborter(id: AsyncTaskId, aborters: TaskAbortControllers) {
        rmIds.push(id)
        this._cleanMultiTaskAborter(id, aborters)
      }

      func(params: any) {
        return this.runAsyncCancelableTask(params, async (params: any) => {
          return getStream()
        })
      }
    }
    makeToolFuncCancelable(TestTaskErrorFunc, {asyncFeatures: AsyncFeatures.MultiTask})

    const testTask = new TestTaskErrorFunc('testTaskError')

    const taskInfo = testTask.run('error') as TaskPromise<ReadableStream>
    expect(taskInfo.task).toBeInstanceOf(AbortController)
    const task = taskInfo.task!
    expect(ids).toHaveLength(1)
    expect(rmIds).toHaveLength(0)
    expect(task).toHaveProperty('id', ids[0])
    expect(typeof task.id).toBe('number')
    const stream = (await taskInfo)
    const reader = stream.getReader()
    let chunk = await reader.read()
    let error:any

    const data = {a:1}
    task.abort('test', data)
    await expect(reader.read()).rejects.toThrow(AbortError)
    try {
      chunk = await reader.read()
    } catch (err) {
      error = err
    }
    expect(error).toHaveProperty('data')
    expect(error.data).toHaveProperty('what', 'test')

    expect(rmIds).toHaveLength(1)
    expect(task.id).toBe(rmIds[0])
    expect(emits).toHaveLength(1)
    expect(emits[0]).toHaveLength(3)
    expect(emits[0][0]).toBe('aborting')
    expect(emits[0][1].toJSON()).toMatchObject({data: {what: 'test', a: 1}, code: 499})
    expect(emits[0][2]).toMatchObject(data)
  })

  it('should pass an aborter into task', async () => {
    const aborter = new AbortController()

    const taskInfo = testSingleTask.run({content: '12345', aborter}) as TaskPromise<string>
    expect(taskInfo.task).toBeInstanceOf(TaskAbortController)
    expect(taskInfo.task).toBe(aborter)
    expect(aborter).toHaveProperty('parent', testSingleTask)
    const result = await taskInfo
    expect(result).toMatchObject({content: '12345'})
  })

  it('should run multi async tasks and abort waiting task', async () => {
    expect(testMultiTask.hasAsyncFeature(AsyncFeatureBits.Cancelable)).toBeTruthy()
    expect(testMultiTask.hasAsyncFeature(ToolAsyncMultiTaskBit)).toBeTruthy()
    expect(TestMultiTaskFunc.hasAsyncFeature(AsyncFeatureBits.MultiTask)).toBeTruthy()

    const taskCount = 10;
    const tasks = Array.from({ length: taskCount }, (_, index) => '' + index);


    const pendingCountsBefore = [] as number[];
    const pendingCountsAfter = [] as number[];
    const errs = {} as any
    const asyncTask = async (item: string, ix: number) => {
      const semaphore = testMultiTask.semaphore;
      let pendingCount = semaphore.pendingCount;
      pendingCountsBefore.push(pendingCount)

      const taskInfo = testMultiTask.run(item) as TaskPromise
      if (ix === 3 || ix === 7) {
        taskInfo.task?.abort('test'+ix)
      }
      try {
        await taskInfo
      } catch(e) {
        errs[item] = e
      }
      pendingCount = semaphore.pendingCount;
      pendingCountsAfter.push(pendingCount)
    };

    await Promise.all(tasks.map(asyncTask));

    expect(Object.keys(errs)).toEqual(['3','7'])
    expect(Object.values(errs)).toMatchObject([{data: {what: 'test3'}}, {data: {what: 'test7'}}])
    // check maxTaskConcurrency limit
    expect(pendingCountsBefore).toEqual([0, 0, 0, 1, 2, 3, 4, 5, 6, 7])
    // expect(pendingCountsAfter).toEqual([7, 6, 5, 4, 3, 2, 1, 0, 0, 0])
  })

  it('should run multi async tasks and abort running task', async () => {
    expect(testMultiTask.hasAsyncFeature(AsyncFeatureBits.Cancelable)).toBeTruthy()
    expect(testMultiTask.hasAsyncFeature(ToolAsyncMultiTaskBit)).toBeTruthy()
    expect(TestMultiTaskFunc.hasAsyncFeature(AsyncFeatureBits.MultiTask)).toBeTruthy()

    const taskCount = 3;
    const tasks = Array.from({ length: taskCount }, (_, index) => '' + index);


    const pendingCountsBefore = [] as number[];
    const pendingCountsAfter = [] as number[];
    const errs = {} as any
    const asyncTask = async (item: string, ix: number) => {
      const semaphore = testMultiTask.semaphore;
      let pendingCount = semaphore.pendingCount;
      pendingCountsBefore.push(pendingCount)

      const taskInfo = testMultiTask.run(item) as TaskPromise
      if (ix === 1) {
        taskInfo.task?.abort('test'+ix)
      }
      try {
        await taskInfo
      } catch(e) {
        errs[item] = e
      }
      pendingCount = semaphore.pendingCount;
      pendingCountsAfter.push(pendingCount)
    };

    await Promise.all(tasks.map(asyncTask));

    expect(Object.keys(errs)).toEqual(['1'])
    expect(Object.values(errs)).toMatchObject([{data: {what: 'test1'}}])
    // check maxTaskConcurrency limit
    expect(pendingCountsBefore).toEqual([0, 0, 0])
    // expect(pendingCountsAfter).toEqual([7, 6, 5, 4, 3, 2, 1, 0, 0, 0])
  })

  it('should respect isReadyFn to control task execution', async () => {
    let ready = false;
    let called = 0;
    let readyFnThis;
    const isReadyFn = async function() {
      readyFnThis = this;
      called++;
      let maxCount = 100;
      while (!ready && maxCount--) {
        await sleep(5)
      }
      return true;
    }

    // 创建一个带有自定义 isReadyFn 的测试类
    class TestIsReadyFunc extends ToolFunc {
      func(params: any) {
        return this.runAsyncCancelableTask(params, async (params: any) => {
          await sleep(10);
          return params;
        });
      }
    }
    const testInstance = new TestIsReadyFunc('testIsReady');
    makeToolFuncCancelable(TestIsReadyFunc, {
      asyncFeatures: AsyncFeatures.MultiTask,
      maxTaskConcurrency: 1,
      isReadyFn,
    });
    expect(TestIsReadyFunc.prototype._isReadyFn).toBe(isReadyFn)

    const taskPromise = testInstance.run('first');
    const semaphore = testInstance.semaphore!;
    expect(called).toBe(1);
    expect(readyFnThis).toBe(testInstance);
    // expect(semaphore).toBeDefined();
    // 确保任务未完成且 pendingCount 正确
    // await wait(15); // 等待超过任务执行时间

    expect((taskPromise as any).task!.signal.aborted).toBeFalsy();

    // 修改条件为 true 后任务应继续执行
    ready = true;
    await sleep(15);
    const result = await taskPromise;
    expect(result).toBe('first');
    expect(semaphore.pendingCount).toBe(0);

    // 第二次任务应立即执行
    const secondPromise = testInstance.run('second');
    await sleep(15);
    expect(semaphore.pendingCount).toBe(0);
    expect(await secondPromise).toBe('second');
  });

  it('should support multiple external signals for cancellation', async () => {
    // Case 1: One of the signals is aborted during execution
    const extAborter1 = new AbortController();
    const extAborter2 = new AbortController();
    let taskPromise = testSingleTask.run({
      waitTime: 50,
      content: 'test1',
      signals: [extAborter1.signal, extAborter2.signal],
    }) as TaskPromise<string>;

    await sleep(5); // wait a bit
    extAborter1.abort('external abort 1');
    await expect(taskPromise).rejects.toThrow(AbortError);
    await expect(taskPromise).rejects.toHaveProperty('message',  expect.stringMatching(/external abort 1/));

    // Case 2: A signal is already aborted before starting
    const extAborter3 = new AbortController();
    extAborter3.abort('already aborted');
    taskPromise = testSingleTask.run({
      waitTime: 50,
      content: 'test2',
      signals: [extAborter2.signal, extAborter3.signal],
    }) as TaskPromise<string>;

    await expect(taskPromise).rejects.toThrow(AbortError);
    await expect(taskPromise).rejects.toHaveProperty('message', expect.stringMatching(/already aborted/));

    // Case 3: Using singular `signal` property
    const extAborter4 = new AbortController();
    taskPromise = testSingleTask.run({
      waitTime: 50,
      content: 'test3',
      signal: extAborter4.signal,
    }) as TaskPromise<string>;

    await sleep(5);
    extAborter4.abort('external abort 2');
    await expect(taskPromise).rejects.toThrow(AbortError);
    await expect(taskPromise).rejects.toHaveProperty('message', expect.stringMatching(/external abort 2/));

    // Case 4: Mix of `signal` and `signals`
    const extAborter5 = new AbortController();
    const extAborter6 = new AbortController();
    taskPromise = testSingleTask.run({
      waitTime: 50,
      content: 'test4',
      signal: extAborter5.signal,
      signals: [extAborter6.signal],
    }) as TaskPromise<string>;

    await sleep(5);
    extAborter6.abort('external abort 3');
    await expect(taskPromise).rejects.toThrow(AbortError);
    await expect(taskPromise).rejects.toHaveProperty('message', expect.stringMatching(/external abort 3/));
  });
})
