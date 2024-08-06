import { CommonError, ErrorCode } from "./base-error"

export function createEndWithRepetitionDetector(repetitionThreshold: number) {
  if (repetitionThreshold < 2) {
    throw new CommonError('repetitionThreshold must be greater than 1', 'createEndWithRepetitionDetector',  ErrorCode.InvalidArgument)
  }

  const regex = new RegExp(`([\\S\\s]+)(\\1{${repetitionThreshold-1},})$`)
  return function endWithRepeatedSequence(value: string) {
    const matched = regex.exec(value)
    return matched
  }
}