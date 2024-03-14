import { isSimilar, getDefaultSimilarPassingScore } from '../src/funcs/is-similar'
import './transformers'

isSimilar.register()
const oldModelId = isSimilar.modelId

// import { ToolFunc } from "../../dist"

describe('isSimilar', () => {
  beforeEach(()=>{
    isSimilar.modelId = 'DMetaSoul/Dmeta-embedding'
  })
  afterAll(()=>{
    isSimilar.modelId = oldModelId
  })

  it('should set passingScore when changing modelId', async () => {
    expect(isSimilar.passingScore).toEqual(getDefaultSimilarPassingScore(isSimilar.modelId))
    isSimilar.modelId = oldModelId
    expect(isSimilar.passingScore).toEqual(getDefaultSimilarPassingScore(oldModelId))
    const modelId = isSimilar.modelId = 'stella-base'
    expect(isSimilar.passingScore).toEqual(getDefaultSimilarPassingScore(modelId))
    isSimilar.modelId = oldModelId
    expect(isSimilar.passingScore).toEqual(getDefaultSimilarPassingScore(oldModelId))
  })

  it('should be similar', async() => {
    let result = await isSimilar.runWithPos(
      '逐一列出前三个中国境内最高的山脉名称和海拔高度',
      ['中国境内最高的三个山脉及其海拔高度如下:1. 喜马拉雅山脉（包括珠穆朗玛峰）;2. 昆仑山脉;3. 祁连山脉', '纠正：昆仑山脉的最高峰是公格尔山海拔7649米; 而排名第三不应该是祁连山脉，还有比它更高的，想一想，属于横断山脉的大雪山主峰是多高？']
    )
    expect(result).toBeTruthy()
    result = await isSimilar.run({
      query: '逐一列出前三个中国境内最高的山脉名称和海拔高度',
      texts: ['中国境内最高的三个山脉及其海拔高度如下:1. 喜马拉雅山脉（包括珠穆朗玛峰）;2. 昆仑山脉;3. 祁连山脉', '纠正：昆仑山脉的最高峰是公格尔山海拔7649米; 而排名第三不应该是祁连山脉，还有比它更高的，想一想，属于横断山脉的大雪山主峰是多高？']
    })
    expect(result).toBeTruthy()
  })

  it('should be similar complex', async() => {
    // isSimilar.modelId = 'DMetaSoul/Dmeta-embedding'
    let result = await isSimilar.runWithPos(
      '中国主要的山脉有哪些？',
      [
        '中国是一个地形多样、地貌丰富的国家，拥有许多主要的山脉。以下是一些中国主要的山脉：1. 喜马拉雅山脉：位于中国西南地区，是世界最高的山脉之一，包括珠穆朗玛峰等著名山峰。2. 昆仑山脉：位于中国西部，横跨新疆、西藏、青海和四川四个省份，是世界上最长的山脉之一。3. 祁连山脉：位于中国西北地区，横跨甘肃、青海和宁夏三个省份，是中国重要的水源地和生态屏障。4. 横断山脉：位于中国中部，横跨陕西、甘肃、四川、云南和西藏五个省份，是中国最长的山脉之一。5. 大兴安岭山脉：位于中国东北地区，是世界上最长的山脉之一，横跨黑龙江、吉林和内蒙古三个省份。6. 太行山脉：位于中国华北地区，横跨山西、河北和河南三个省份，是中国重要的煤炭资源基地。7. 武夷山脉：位于中国东南沿海地区，横跨福建、江西和广东三个省份，是中国著名的旅游胜地。8. 巫山山脉：位于中国西南地区，横跨重庆、四川和湖北三个省份，是中国著名的风景旅游区。9. 天山山脉：位于中国西北地区，横跨新疆、甘肃和宁夏三个省份，是世界上最长的内陆山脉之一。10. 大巴山脉：位于中国西南地区，横跨四川、云南和西藏三个省份，是中国重要的生态屏障和旅游胜地。以上仅是中国主要的山脉之一，实际上中国还有很多其他山脉，如长白山、黄山、华山等。',
      ]
    )
    expect(result).toBeTruthy()
  })

  it('should be similar in English', async() => {
    // isSimilar.modelId = 'infgrad/stella-base-zh-v2' // only for Chinese.
    // isSimilar.modelId = 'DMetaSoul/Dmeta-embedding'
    let result = await isSimilar.runWithPos(
      '一条快乐的动物',
      ['one happy dog']
    )
    expect(result).toBeTruthy()
  })

  it('should be not similar with difference langs', async() => {
    // isSimilar.modelId = 'infgrad/stella-base-zh-v2'
    // isSimilar.modelId = 'DMetaSoul/Dmeta-embedding'
    let result = await isSimilar.runWithPos(
      '一只快乐的狗',
      ['one sad dog']
    )
    expect(result).toBeFalsy()
  })
})
