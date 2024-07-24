import { AbilityOptions, createAbilityInjector } from 'custom-ability'
import { AbortError, CommonError, ErrorCode } from './base-error'
import { AsyncFeatures, ToolAsyncMultiTaskBit, ToolFunc } from '../tool-func';
import { Semaphore } from './async-semaphore';
import { createCallbacksTransformer } from './stream';

type TaskId = string|number

export interface CancelableAbilityOptions extends AbilityOptions {
  asyncFeatures?: AsyncFeatures
  maxTaskConcurrency?: number
}

export interface TaskAbortController extends AbortController {
  id?: TaskId;
  timeoutId?: any;
}

export interface TaskPromise<T = any> extends Promise<T> {
  task?: TaskAbortController;
}

export declare interface CancelableAbility {
  _asyncFeatures?: number
  _maxTaskConcurrency: number|undefined
  [name: string]: any;
}


export class CancelableAbility {
  _$tool_aborter: TaskAbortController|{[taskId: TaskId]: TaskAbortController}|undefined
  _$semaphore: Semaphore|undefined

  get maxTaskConcurrency() {
    const result = this._maxTaskConcurrency
    if (result && !this._$semaphore) {
      this._$semaphore = new Semaphore(result)
    }
    return result
  }

  isAborted(taskId?: TaskId) {
    const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTaskBit)
    let aborter = this._$tool_aborter as AbortController
    if (aborter) {
      if (isMultiTask) {
        if (taskId != null) {
          aborter = (aborter as any)[taskId]
        } else {
          throw new CommonError('Missing taskId', this.name + '.isAborted', ErrorCode.InvalidArgument)
        }
      }
    }
    return !aborter || aborter.signal.aborted
  }

  getRunningTask(taskId?: TaskId) {
    const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTaskBit)
    let aborter: AbortController|undefined = this._$tool_aborter as AbortController
    if (aborter) {
      if (isMultiTask) {
        if (taskId != null) {
          aborter = (aborter as any)[taskId]
        } else {
          throw new CommonError('Missing taskId', this.name + '.getRunningTask', ErrorCode.InvalidArgument)
        }
      }
    }
    if (aborter?.signal.aborted) {
      if (isMultiTask) {
        this._$tool_aborter![taskId!] = undefined
      } else {
        this._$tool_aborter = undefined
      }
      aborter = undefined
    }
    return aborter
  }

  getRunningTaskCount() {
    let result: number
    const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTaskBit)
    if (isMultiTask) {
      const aborters = this._$tool_aborter as {[id: string]:TaskAbortController|undefined}
      result = aborters && Object.entries(aborters).filter(([id, aborter]) => {
        if (aborter?.signal.aborted) {aborters[id]=undefined} else {return true}
      }).length
    } else {
      const aborter = this._$tool_aborter as TaskAbortController
      result = aborter?.signal.aborted ? 0 : 1
    }
    return result
  }

  createAborter(params?: any, taskId?: TaskId, raiseError = true) {
    const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTaskBit)
    if (!isMultiTask && raiseError && this.getRunningTask()) { throw new CommonError('The task is running', this.name, ErrorCode.TooManyRequests)}
    const result: TaskAbortController = params?.aborter || new AbortController()
    if (isMultiTask) {
      if (this._$tool_aborter == null) {
        this._$tool_aborter = {}
      }
      const aborters = this._$tool_aborter

      if (taskId == null) {
        // find a free taskId in aborters
        taskId = 0
        while (aborters[taskId]) {
          taskId++
        }
        // taskId = Object.keys(aborters).length
      }
      result.id = taskId

      aborters[taskId] = result
    } else {
      this._$tool_aborter = result
    }

    const timeout = params?.timeout
    if (timeout > 0) {
      result.timeoutId = setTimeout(() => {
        result.timeoutId = undefined
        this.abort('timeout', {timeout})
      }, timeout)
    }

    result.signal.addEventListener('abort', () => {
      const timeoutId = result.timeoutId
      if (timeoutId) {
        result.timeoutId = undefined
        clearTimeout(timeoutId)
      }
    })

    return result
  }

  cleanTaskAborter(aborter: TaskAbortController) {
    const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTaskBit)
    if (isMultiTask) {
      const aborters = this._$tool_aborter as TaskAbortController
      aborters[aborter.id!] = undefined
    } else {
      this._$tool_aborter = undefined
    }

  }

  createTaskPromise<Output = any>(runTask: (params: Record<string, any>) => Promise<Output>, params: Record<string, any>, options?: {taskId?: TaskId, raiseError?: boolean}) {
    const aborter = this.createAborter(params, options?.taskId, options?.raiseError);
    if (params === undefined) {params = {}}
    if (typeof params === 'object') {
      params.aborter = aborter
    }

    let taskPromise: TaskPromise<Output> = runTask(params)
    .then((result: any) => {
      if (result && result instanceof ReadableStream) {
        const onCleanAborter = () => {this.cleanTaskAborter(aborter)}
        const transformer = createCallbacksTransformer({onFinal: onCleanAborter, onError: onCleanAborter})
        result = result.pipeThrough(transformer)
      } else {
        this.cleanTaskAborter(aborter)
      }
      return result
    }).finally(() => {
      if (aborter.timeoutId) {
        clearTimeout(aborter.timeoutId)
        aborter.timeoutId = undefined
      }
    })
    taskPromise.task = aborter

    return taskPromise
  }

  runAsyncCancelableTask<Output = any>(params: Record<string, any> = {}, runTask: (params: Record<string, any>) => Promise<Output>, options?: {taskId?: TaskId, raiseError?: boolean}) {
    let taskPromise = this.createTaskPromise(runTask, params, options)

    if (this.maxTaskConcurrency) {
      const semaphore = this._$semaphore!
      const _taskPromise = taskPromise
      taskPromise = semaphore.acquire().then(() => {
        return _taskPromise
      }).finally(() => {
        semaphore.release()
      })
      taskPromise.task = _taskPromise.task
    }
    return taskPromise
  }

  abort(reason?: string, data?: any) {
    let aborter = this._$tool_aborter as AbortController
    if (aborter) {
      const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTaskBit)
      const aborters = aborter as unknown as {[id: string]:TaskAbortController|undefined}
      if (isMultiTask) {
        const taskId = data?.taskId
        if (taskId != null) {
          aborter = aborter[taskId]
          aborters[taskId] = undefined
        } else {
          throw new CommonError('Missing data.taskId', this.name + '.abort', ErrorCode.InvalidArgument)
        }
      } else {
        this._$tool_aborter = undefined
      }

      if (aborter && !aborter.signal.aborted) {
        const abortReason = new AbortError(reason)
        if (data) { Object.assign(abortReason.data, data) }
        try {
          if (this.emit) {
            this.emit('aborting', reason, data)
          }
        } finally {
          aborter.abort(abortReason)
        }
      }
    }
  }
}

function onInjectionSuccess(Tool: typeof ToolFunc, options?: CancelableAbilityOptions) {
  let asyncFeatures = Tool.prototype._asyncFeatures || 0
  asyncFeatures |= AsyncFeatures.Cancelable
  if (options) {
    if (options.asyncFeatures) {
      asyncFeatures |= options.asyncFeatures
    }
    if (options.maxTaskConcurrency! > 0) {
      Tool.prototype._maxTaskConcurrency = options.maxTaskConcurrency
    }
  }

  Tool.prototype._asyncFeatures = asyncFeatures
}


type ToolFuncCancelableFn = (Tool: typeof ToolFunc, options?: CancelableAbilityOptions) => typeof ToolFunc

export const makeToolFuncCancelable = createAbilityInjector(CancelableAbility, 'abort', {afterInjection: onInjectionSuccess as any}) as unknown as ToolFuncCancelableFn;
