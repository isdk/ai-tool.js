import { YAMLMap } from 'yaml'

export class YamlTypeBaseObject {
  [name: string]: any
  constructor(options?: any) {
    if (options) {Object.assign(this, options)}
  }
}

export function createYamlObjectTag(tag: string, BaseObject: typeof YamlTypeBaseObject) {
  class YAMLBaseObject extends YAMLMap {
    tag = tag
    toJSON(_: unknown, ctx: any) {
      ctx = { ...ctx, mapAsMap: false }
      const options = super.toJSON(_, ctx)
      const result = new BaseObject(options)
      return result
    }
  }
  const result: any = {
    tag,
    collection: 'map',
    nodeClass: YAMLBaseObject,
    // resolve: (o, onError) => {
    //   let result
    //   if (typeof o === 'string' && o.length === 0) {
    //     result = new BaseObject()
    //   } else if (typeof o === 'object') {
    //     result = new BaseObject(o)
    //     // Object.assign(result, o)
    //   } else {
    //     onError(`should be empty or object`)
    //   }
    //   console.log('🚀 ~ createYamlObjectTag ~ resolve o!!:', typeof o, o.constructor)
    //   return result
    // },
    identify: (o: any) => o instanceof BaseObject,
    // createNode: (schema, obj, ctx) => YAMLBaseObject.from(schema, obj, ctx)
  }
  return result
}
