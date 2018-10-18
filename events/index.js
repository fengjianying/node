var events = require('events');
var emitter = new events.EventEmitter();
// 注册并发射事件
var listener1 = function(arg1, arg2){
    console.log('发射事件  listener1',arg1,arg2)
}
var listener2 = function(arg1, arg2){
    console.log('发射事件 listener1',arg1,arg2)
}
emitter.on('someEvent',listener1) 
emitter.on('someEvent',listener2)

emitter.emit('someEvent','liMing',12);
// 移除事件
emitter.removeListener('someEvent',listener1)
emitter.emit('someEvent','liMing',12);
// 移除全部事件
emitter.removeAllListeners('someEvent');
emitter.emit('someEvent','liiMing',12);