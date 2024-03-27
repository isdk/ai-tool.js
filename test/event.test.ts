import { Event } from 'events-ex'
import { event } from "../src/funcs/event"
import { ToolFunc } from "../src/tool-func"
import { EventBusName, backendEventable } from "../src/utils/event"

describe('event', ()=>{
  it('should have event properties', ()=>{
    expect(event).toHaveProperty('description', 'Return event bus')
    expect(event).toHaveProperty('result', 'event')
  })

  it('should get emitter by runSync', ()=>{
    const emitter = event.runSync()
    expect(emitter).toBeDefined()
    expect(emitter.on).toBeDefined()
    expect(emitter.off).toBeDefined()
    expect(emitter.emit).toBeDefined()
    expect(emitter.emitAsync).toBeDefined()
  })
})

describe('event-ability', ()=>{
  const testFunc = new ToolFunc('myTest')

  beforeAll(()=>{
    event.register()
    backendEventable(ToolFunc)
  })

  it('should have events', ()=>{
    const emitter = ToolFunc.get(EventBusName)
    expect(emitter).toBeDefined()
    expect(emitter.on).toBeDefined()
    expect(emitter.off).toBeDefined()
    expect(emitter.emit).toBeDefined()
    expect(emitter.emitAsync).toBeDefined()
  })

  it('should emit event', ()=>{
    const t = event;
    let called = 0;
    let pa=123;
    let pb="hi";
    t.on('error', function(this: Event, error, subtype, evtName,) {
      console.log('🚀 ~ t.on ~ error:', error, subtype, evtName)
    })
    t.on('test', function(this: Event, who: string, a:number,b:string) {
      called++
      expect(who).toEqual(EventBusName)
      expect(a).toEqual(pa)
      expect(b).toEqual(pb)
      this.result = 123
    })
    let result = t.emit('test', pa, pb)
    expect(called).toEqual(1);
    expect(result).toEqual(123)

    called = 0
    t.on('test', function(this: Event, who: string, a:number,b:string) {
      called++
      expect(who).toEqual(EventBusName)
      expect(a).toEqual(pa)
      expect(b).toEqual(pb)
      expect(this.result).toEqual(123)
      this.result = 456
    })
    pa = 3;
    pb = 'hello';
    result = t.emit('test', pa, pb)
    expect(called).toEqual(2);
    expect(result).toEqual(456)

    pb = ''
    called = 0
    expect(testFunc.emitter).toStrictEqual(t.emitter)
    t.on('test2', function(this: Event, who: string, a:number,b:string) {
      called++
      pb = who
    })
    testFunc.emit('test2')
    expect(called).toEqual(1);
    expect(pb).toEqual('myTest')
    t.emit('test2')
    expect(called).toEqual(2);
    expect(pb).toEqual(EventBusName)
  })
})