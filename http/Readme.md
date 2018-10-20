
# http服务器与客户端

Node.js 标准库提供了 http 模块，其中封装了一个高效的 HTTP 服务器和一个简易的HTTP客户端。http.Server 是一个基于事件的 HTTP服务器，它的核心由 Node.js 下层 C++部分实现，而接口由 JavaScript 封装，兼顾了高性能与简易性。 http.request 则是一个HTTP 客户端工具，用于向 HTTP 服务器发起请求，例如实现 Pingback 或者内容抓取。

## HTTP服务器

http.Server 是 http 模块中的 HTTP 服务器对象，用 Node.js 做的所有基于 HTTP 协议的系统，如网站、社交应用甚至代理服务器，都是基于 http.Server 实现的。它提供了一套封装级别很底的 API，仅仅是流控制和简单的消息解析，所有的高层功能都要通过它的接口来实现。

### http.server的事件

http.Server 是一个基于事件的 HTTP 服务器，所有的请求都被封装为独立的事件，开发者只需要对它的事件编写ֽ响应函数即可实现 HTTP 服务器的所有功能。它继承自EventEmitter，提供了以下几个事件。

* request: 当客户端请求到来时，该事件被触发，提供两个参数 req 和res，分别是http.ServerRequest 和 http.ServerResponse 的实例，表示请求和ֽ响应信息。

* connection: 当TCP 链接建立时，该事件被触发，提供一个参数 socket，为net.Socket 的实例connection 事件的粒度要大于 request，因为客户端在Keep-Alive 模式下可能会在同一个连接内转发多次请求

* close: 当服务器关闭时，该事件被触发。注意不是在用断开连接时。除此之外还有 checkContinue、 upgrade、 clientError 事件，通常我们不需要关心，只有在实现复杂的 HTTP 服务器的时才会用到。
