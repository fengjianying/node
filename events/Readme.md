
# events模块

events 是 Node.js 最重要的模块，没有之一，原因是 Node.js 本身架构就是事件式
的，而它提供了׬一的接口，所以܁ Node.js 事件编程的基础。 events 模块不仅用于用代码与 Node.js 下层事件环的交互，还几被所有的模块.

## on

用于事件的绑定

## emit

用于事件的触发

## once

绑定单次事件

## removeListener

移除绑定事件

## removeAllListener

移除全部事件

## error

当定义EventEmitter实例后,当 EventEmitter 实例出错时，会触发 'error' 事件。