import { createAbilityInjector } from 'custom-ability'
import { AbortError, CommonError, ErrorCode } from './base-error'
import { AsyncFeatures, ToolAsyncMultiTask, ToolFunc } from '../tool-func';

type TaskId = string|number

export declare interface CancelableAbility {
  [name: string]: any;
}

export class CancelableAbility {
  _$tool_aborter: AbortController|{[taskId: TaskId]: AbortController}|undefined

  isAborted(taskId?: TaskId) {
    const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTask)
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

  isRunning(taskId?: TaskId) {
    const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTask)
    let aborter = this._$tool_aborter as AbortController
    if (aborter) {
      if (isMultiTask) {
        if (taskId != null) {
          aborter = (aborter as any)[taskId]
        } else {
          throw new CommonError('Missing taskId', this.name + '.isRunning', ErrorCode.InvalidArgument)
        }
      }
    }
    if (aborter?.signal.aborted) {
      if (isMultiTask) {
        this._$tool_aborter![taskId!] = undefined
      } else {
        this._$tool_aborter = undefined
      }
    }
    return aborter
  }

  // new task
  createAborter(params?: any, taskId?: TaskId, raiseError = true) {
    const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTask)
    if (!isMultiTask && raiseError && this.isRunning()) { throw new CommonError('The task is running', this.name, ErrorCode.TooManyRequests)}
    let result: AbortController|undefined
    if (isMultiTask) {
      if (taskId == null) {
        throw new CommonError('Missing taskId', this.name + '.createAborter', ErrorCode.InvalidArgument)
      }
      if (this._$tool_aborter == null) {
        this._$tool_aborter = {}
      }
      result = this._$tool_aborter[taskId] = params?.aborter || new AbortController()
    } else {
      result = this._$tool_aborter = params?.aborter || new AbortController()
    }
    return result
  }

  abort(reason?: string, data?: any) {
    let aborter = this._$tool_aborter as AbortController
    if (aborter) {
      const isMultiTask = this.hasAsyncFeature(ToolAsyncMultiTask)
      if (isMultiTask) {
        const taskId = data?.taskId
        if (taskId != null) {
          aborter = aborter[taskId]
          aborter[taskId] = undefined
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

function onInjectionSuccess(Tool: typeof ToolFunc) {
  let asyncFeatures = Tool.prototype._asyncFeatures || 0
  asyncFeatures |= AsyncFeatures.Cancelable
  Tool.prototype._asyncFeatures = asyncFeatures
}

export const makeToolFuncCancelable = createAbilityInjector(CancelableAbility, 'abort', {afterInjection: onInjectionSuccess as any});
