import { AbilityOptions, createAbilityInjector } from 'custom-ability'
import { AbortError, CommonError, ErrorCode } from './base-error'
import { AsyncFeatures, ToolAsyncMultiTaskBit, ToolFunc } from '../tool-func';
import { Semaphore } from './async-semaphore';
import { createCallbacksTransformer } from './stream';
import { defineProperty } from 'util-ex';

export type AsyncTaskId = string|number

export interface CancelableAbilityOptions extends AbilityOptions {
  asyncFeatures?: AsyncFeatures
  maxTaskConcurrency?: number
}

export class TaskAbortController extends AbortController {
  declare id?: AsyncTaskId
  declare timeoutId?: any
  declare streamController?: ReadableStreamDefaultController
  declare parent: CancelableAbility

  constructor(parent: CancelableAbility) {
    super()
    defineProperty(this, 'parent', parent)
  }

  abort(reason?: string|Error|CommonError, data?: any) {
    if (this.signal.aborted) {return}
    if (typeof reason === 'string') {
      reason = new AbortError(reason)
    }
    if (reason && data && typeof reason === 'object') { Object.assign((reason as any).data, data) }
    super.abort(reason)
  }
}

export interface TaskAbortControllers {
  [k: AsyncTaskId]: TaskAbortController|undefined
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
  declare generateAsyncTaskId: (taskId?: AsyncTaskId, aborters?: TaskAbortControllers) => AsyncTaskId
  declare cleanMultiTaskAborter: (id: AsyncTaskId, aborters: TaskAbortControllers) => void

  _$tool_aborter: TaskAbortController|TaskAbortControllers|undefined
  _$semaphore: Semaphore|undefined

  get maxTaskConcurrency() {
    return this._maxTaskConcurrency
  }

  get semaphore() {
    const maxTaskConcurrency = this._maxTaskConcurrency!
    let result = this._$semaphore
    if (maxTaskConcurrency > 0 && !result) {
      result = this._$semaphore = new Semaphore(maxTaskConcurrency-1)
    }
    return result
  }

  isAborted(taskId?: AsyncTaskId) {
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

  getRunningTask(taskId?: AsyncTaskId) {
    const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTaskBit)
    let aborter: TaskAbortController|undefined = this._$tool_aborter as TaskAbortController
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

  _generateAsyncTaskId(taskId?: AsyncTaskId, aborters?: TaskAbortControllers) {
    if (!aborters) {aborters = this._$tool_aborter as unknown as TaskAbortControllers}
    if (taskId == null) {
      // find a free taskId in aborters
      taskId = 0
      if (aborters) while (aborters[taskId]) {
        taskId++
      }
      // taskId = Object.keys(aborters).length
    }
    return taskId
  }

  $generateAsyncTaskId(taskId?: AsyncTaskId, aborters?: TaskAbortControllers) {
    const superGenerateAsyncTaskId = this.super
    const that = this.self || this
    if (superGenerateAsyncTaskId) {
      taskId = superGenerateAsyncTaskId.call(that, taskId)
    } else {
      taskId = this._generateAsyncTaskId(taskId, aborters)
    }
    return taskId
  }

  createAborter(params?: any, taskId?: AsyncTaskId, raiseError = true) {
    const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTaskBit)
    if (!isMultiTask && raiseError && this.getRunningTask()) { throw new CommonError('The task is running', this.name, ErrorCode.TooManyRequests)}
    const result: TaskAbortController = params?.aborter || new TaskAbortController(this)
    if (!(result instanceof TaskAbortController)) {
      if ((result as any) instanceof AbortController) {
        Object.setPrototypeOf(result, new TaskAbortController(this))
      } else {
        throw new CommonError('aborter should be an AbortController', this.name, ErrorCode.InvalidArgument)
      }
    }

    if (isMultiTask) {
      if (this._$tool_aborter == null) {
        this._$tool_aborter = {}
      }
      const aborters = this._$tool_aborter as unknown as TaskAbortControllers

      if (taskId == null) {
        taskId = this.generateAsyncTaskId(taskId, aborters)
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
      const signal = result.signal
      try {
        if (this.emit) {
          this.emit('aborting', signal.reason, signal.reason?.data)
        }
      } finally {
        result.streamController?.error(signal.reason)
      }

    })

    return result
  }

  $cleanMultiTaskAborter(id: AsyncTaskId, aborters: TaskAbortControllers) {
    const superCleanMultiTaskAborter = this.super
    const that = this.self || this
    if (superCleanMultiTaskAborter) {
      superCleanMultiTaskAborter.call(that, id, aborters)
    } else {
      that._cleanMultiTaskAborter(id, aborters)
    }
  }

  cleanTaskAborter(aborter: TaskAbortController) {
    const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTaskBit)
    if (isMultiTask) {
      const aborters = this._$tool_aborter as unknown as TaskAbortControllers
      this.cleanMultiTaskAborter(aborter.id!, aborters)
    } else {
      this._$tool_aborter = undefined
    }
  }

  _cleanMultiTaskAborter(id: AsyncTaskId, aborters: TaskAbortControllers) {
    if (typeof id === 'number') { aborters[id] = undefined } else { delete aborters[id] }
}

  createTaskPromise<Output = any>(runTask: (params: Record<string, any>) => Promise<Output>, params: Record<string, any>, options?: {taskId?: AsyncTaskId, raiseError?: boolean}) {
    const aborter = this.createAborter(params, options?.taskId, options?.raiseError);
    if (params === undefined) {params = {}}
    if (typeof params === 'object') {
      params.aborter = aborter
    }

    let taskPromise: TaskPromise<Output> = runTask(params)
    .then((result: any) => {
      if (result && result instanceof ReadableStream) {
        const onStart = (controller) => { defineProperty(aborter, 'streamController', controller) }
        const onCleanAborter = () => {this.cleanTaskAborter(aborter)}
        const onTransform = (chunk: any, controller: TransformStreamDefaultController) => {
          if (chunk && typeof chunk === 'object') {
            chunk.taskId = aborter.id
          }
          return chunk
        }
        const transformer = createCallbacksTransformer({onStart, onFinal: onCleanAborter, onError: onCleanAborter, onTransform})
        result = result.pipeThrough(transformer)
      } else {
        this.cleanTaskAborter(aborter)
      }
      return result
    }).catch((err) => {
      this.cleanTaskAborter(aborter)
      throw err
    }).finally(() => {
      if (aborter.timeoutId) {
        clearTimeout(aborter.timeoutId)
        aborter.timeoutId = undefined
      }
    })
    taskPromise.task = aborter

    return taskPromise
  }

  runAsyncCancelableTask<Output = any>(params: Record<string, any> = {}, runTask: (params: Record<string, any>) => Promise<Output>, options?: {taskId?: AsyncTaskId, raiseError?: boolean}) {
    let taskPromise = this.createTaskPromise(runTask, params, options)

    const semaphore = this.semaphore
    if (semaphore) {
      const _taskPromise = taskPromise
      const task = _taskPromise.task!
      taskPromise = semaphore.acquire(task.signal).then(() => _taskPromise).finally(() => {
        semaphore.release()
      })
      taskPromise.task = task
    }
    return taskPromise
  }

  abort(reason?: string, data?: any) {
    let aborter = this._$tool_aborter as TaskAbortController
    if (aborter) {
      const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTaskBit)
      const aborters = aborter as unknown as {[id: string]:TaskAbortController|undefined}
      if (isMultiTask) {
        const taskId = data?.taskId
        if (taskId != null) {
          aborter = aborter[taskId]
          this.cleanMultiTaskAborter(taskId, aborters)
        } else {
          throw new CommonError('Missing data.taskId', this.name + '.abort', ErrorCode.InvalidArgument)
        }
      } else {
        this._$tool_aborter = undefined
      }

      if (aborter && !aborter.signal.aborted) {
        aborter.abort(reason, data)
      }
    }
  }
}
CancelableAbility.prototype.generateAsyncTaskId = function(this: CancelableAbility, taskId?: AsyncTaskId, aborters?: TaskAbortControllers): AsyncTaskId {
  return this._generateAsyncTaskId(taskId, aborters)
}

CancelableAbility.prototype.cleanMultiTaskAborter = function(this: CancelableAbility, id: AsyncTaskId, aborters: TaskAbortControllers) {
  return this._cleanMultiTaskAborter(id, aborters)
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
