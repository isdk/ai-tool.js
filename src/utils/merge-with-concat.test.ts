import { mergeArray, defaultsWithConcat} from './merge-with-concat'

describe('merge array', ()=>{
  it('should merge array defaults to .start', ()=>{
    const result = mergeArray([23,453], [1,2,3])
    expect(result).toEqual([1,2,3,23,453])
  })

  it('should merge array to .start by string param', ()=>{
    let result = mergeArray(['@inheritMerge(.start)', 23,453], [1,2,3])
    expect(result).toEqual([1,2,3,23,453])
    result = mergeArray(['@inheritMerge', 23,453], [1,2,3])
    expect(result).toEqual([1,2,3,23,453])
  })

  it('should merge array to .start by obj param', ()=>{
    let result = mergeArray([{'@inheritMerge': '.start'}, 23,453], [1,2,3])
    expect(result).toEqual([1,2,3,23,453])
    result = mergeArray([{'@inheritMerge': ''}, 23,453], [1,2,3])
    expect(result).toEqual([1,2,3,23,453])
  })

  it('should merge array to .end by string param', ()=>{
    let result = mergeArray(['@inheritMerge(.end)', 23,453], [1,2,3])
    expect(result).toEqual([23,453,1,2,3])
  })

  it('should merge array to .end by obj param', ()=>{
    let result = mergeArray([{'@inheritMerge': '.end'}, 23,453], [1,2,3])
    expect(result).toEqual([23,453,1,2,3])
  })
})

describe('merge obj', ()=>{
  it('should merge array defaults to .start', ()=>{
    const result = defaultsWithConcat({a: 1, b: 2, arr: [23, 456]}, {b: 3, c: 4, arr: [1,2,3]})
    expect(result).toEqual({a: 1, b: 2, c: 4, arr: [1,2,3,23,456]})
  })

  it('should merge array to .start by string param', ()=>{
    let result = defaultsWithConcat({a: 1, b: 2, arr: ['@inheritMerge(.start)', 23,456]}, {b: 3, c: 4, arr: [1,2,3]})
    expect(result).toEqual({a: 1, b: 2, c: 4, arr: [1,2,3,23,456]})
    result = defaultsWithConcat({a: 1, b: 2, arr: ['@inheritMerge', 23,456]}, {b: 3, c: 4, arr: [1,2,3]})
    expect(result).toEqual({a: 1, b: 2, c: 4, arr: [1,2,3,23,456]})
  })

  it('should merge array to .start by obj param', ()=>{
    let result = defaultsWithConcat({a: 1, b: 2, arr: [{'@inheritMerge': '.start'}, 23,456]}, {b: 3, c: 4, arr: [1,2,3]})
    expect(result).toEqual({a: 1, b: 2, c: 4, arr: [1,2,3,23,456]})
    result = defaultsWithConcat({a: 1, b: 2, arr: [{'@inheritMerge': ''}, 23,456]}, {b: 3, c: 4, arr: [1,2,3]})
    expect(result).toEqual({a: 1, b: 2, c: 4, arr: [1,2,3,23,456]})
  })

  it('should merge array to .end by string param', ()=>{
    let result = {a: 1, b: 2, arr: ['@inheritMerge(.end)', 23,453], o: {a: 1, b:2}}
    defaultsWithConcat(result, {b: 3, c: 4,arr: [1,2,3], o: {b:3,c:4}})
    expect(result).toEqual({a: 1, b: 2,c:4, arr: [23,453,1,2,3], o: {a: 1, b:2, c:4}})
  })

  it('should merge array to .end by obj param', ()=>{
    let result = defaultsWithConcat({a: 1, b: 2, arr: [{'@inheritMerge': '.end'}, 23,453]}, {b: 3, c: 4,arr: [1,2,3]})
    expect(result).toEqual({a: 1, b: 2,c:4, arr: [23,453,1,2,3]})
  })
})
