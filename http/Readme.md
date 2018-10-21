
# http服务器与客户端

Node.js 标准库提供了 http 模块，其中封装了一个高效的 HTTP 服务器和一个简易的HTTP客户端。http.Server 是一个基于事件的 HTTP服务器，它的核心由 Node.js 下层 C++部分实现，而接口由 JavaScript 封装，兼顾了高性能与简易性。 http.request 则是一个HTTP 客户端工具，用于向 HTTP 服务器发起请求，例如实现 Pingback 或者内容抓取。

## HTTP服务器

http.Server 是 http 模块中的 HTTP 服务器对象，用 Node.js 做的所有基于 HTTP 协议的系统，如网站、社交应用甚至代理服务器，都是基于 http.Server 实现的。它提供了一套封装级别很底的 API，仅仅是流控制和简单的消息解析，所有的高层功能都要通过它的接口来实现。

### http.server的事件

http.Server 是一个基于事件的 HTTP 服务器，所有的请求都被封装为独立的事件，开发者只需要对它的事件编写ֽ响应函数即可实现 HTTP 服务器的所有功能。它继承自EventEmitter，提供了以下几个事件。

* request: 当客户端请求到来时，该事件被触发，提供两个参数 req 和res，分别是http.ServerRequest 和 http.ServerResponse 的实例，表示请求和ֽ响应信息（二者详细介绍见下文）。

* connection: 当TCP 链接建立时，该事件被触发，提供一个参数 socket，为net.Socket 的实例connection 事件的粒度要大于 request，因为客户端在Keep-Alive 模式下可能会在同一个连接内转发多次请求

* close: 当服务器关闭时，该事件被触发。注意不是在用断开连接时。除此之外还有 checkContinue、 upgrade、 clientError 事件，通常我们不需要关心，只有在实现复杂的 HTTP 服务器的时才会用到。

### http.ServerRequest

http.ServerRequest一般是由htpp.request事件送达触发，htpp.request返回的第一个参数,一般简称为request或者req，作为第一个参数传递一般有以下属性构成：

* complete：客户端请求是否已经发送完成

* httpVersion： http协议版本

* method： http请求方法，如 GET，POST，PUT，DELET等

* url 原始请求路径

* header HTTTP请求头

* trailers HTTP请求尾

* connection connection属性的别名

* client client属性的别名

### http.ServerResponse

http.ServerResponse是htpp.request事件返回给客户端的信息，htpp.request返回的第二个参数,一般简称为responce或res,作为第二个参数传递一般有以下方法构成：

* resopoce.writeHead(ststusCode,[headers])：向客户端发送响应头，statusCode是状态码，headers是一个类似关联数组的对象，表示响应头的每个属性。

* responce. write(data,[encoding])：向请求的客户端发送响应内容，data是一个Buffer或者字符串，表示要发送的内容。如果是字符串要指定encoding来说明他的编码方式，，默认是utf-8，在responce.end调用之前，responce可以被多次调用

* responce.end(data,[encoding])：结束响应，告知客户端所有发送已经完成，当返回结束时，该函数必须被调用一次，两个参数和responce. write相同，如果不调用该函数将永远处于等待状态。

## HTTP客户端

http提供了两个函数 http.request和http.get，功能是作为客户端向http服务器发起请求

### http.request(options,callback)

http.request(options, callback)发ᡐ出HTTP请求。接受两个参数， option 是一个类似关联数组的对象，表示请求的参数， callback 是请求的回调函数。 option常用的参数如下所示：

* host：请求网站的域名或IP地址

* port：请求网址的端口，默认80

* method：请求方法，默认是GET

* path：请求的相对于根的路径，默认是“/”

* headers：一个关联数组对象，为请求头的内容

callback传递一个参数为http。ClientResponce的实例

### http.get(options, callback)

http 模块还提供了一个更加简便的方法用于处理GET请求：http.get。它是 http.request 的简化版，唯一的区别在于http.get自动将请求方法设为了 GET 请求，同时不需要手动调用 req.end()

## http.clientRequest

http.ClientRequest 是由 http.request 或 http.get 返回产生的对象，表示一个已经产生而且正在进行中的 HTTP请求。它提供一个response 事件，即http.request或 http.get 第二个参数指定的回调函数的绑定对象。我们也可以显式地绑定这个事件的监听函数。http.ClientRequest 还提供了以下函数。

* request.abort()：终止正在发送的请求。

* request.setTimeout(timeout, [callback])：设置请求超时时间，timeout 为毫秒数。当请求超时以后， callback 将会被调用。