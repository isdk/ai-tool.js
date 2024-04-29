import {existsSync, rmSync} from 'fs'

export function rmFile(filePath: string) {
  if (existsSync(filePath)) {rmSync(filePath, { recursive: true })}
  if (existsSync(filePath+'.temp')) {rmSync(filePath+'.temp', { recursive: true })}
}