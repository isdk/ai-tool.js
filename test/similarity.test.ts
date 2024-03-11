// @vitest-environment node
// import { describe, expect, it } from 'vitest'
import './transformers'

import { ToolFunc } from "../src/tool-func"
import { similarity } from '../src/funcs/similarity'

ToolFunc.register(similarity)

describe('tool.similarity', () => {
  it('should get similarity', async() => {
    // console.time("similarity")
    let result = await ToolFunc.run('similarity',
      '逐一列出前三个中国境内最高的山脉名称和海拔高度',
      ['中国境内最高的三个山脉及其海拔高度如下:1. 喜马拉雅山脉（包括珠穆朗玛峰）;2. 昆仑山脉;3. 祁连山脉', '纠正：昆仑山脉的最高峰是公格尔山海拔7649米; 而排名第三不应该是祁连山脉，还有比它更高的，想一想，属于横断山脉的大雪山主峰是多高？']
    )
    // console.timeEnd("similarity")
    // console.log('result:',result)
    expect(result).toBeGreaterThanOrEqual(0.618)
  })

  it('should get similarity with difference langs', async() => {
    // console.time("similarity")
    let result = await ToolFunc.run('similarity',
      '一只快乐的动物',
      ['one happy dog']
    )
    // console.timeEnd("similarity")
    // console.log('result:',result)
    expect(result).toBeGreaterThanOrEqual(0.618)
  })

  it('should get not similarity with difference langs', async() => {
    // console.time("similarity")
    let result = await ToolFunc.run('similarity',
      '一只快乐的动物',
      ['one sad dog']
    )
    // console.timeEnd("similarity")
    // console.log('result:',result)
    expect(result).toBeLessThan(0.618)
  })

  it('should get not similarity', async() => {
    // console.time("similarity")
    let result = await ToolFunc.run('similarity',
      '中国主要的山脉有哪些？',
      ['中国境内最高的三个山脉及其海拔高度如下:1. 喜马拉雅山脉（包括珠穆朗玛峰）;2. 昆仑山脉;3. 祁连山脉', '纠正：昆仑山脉的最高峰是公格尔山海拔7649米; 而排名第三不应该是祁连山脉，还有比它更高的，想一想，属于横断山脉的大雪山主峰是多高？']
    )
    // console.timeEnd("similarity")
    // console.log('result:',result)
    expect(result).toBeLessThan(0.618)
  })
})
