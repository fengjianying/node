
# http服务器与客户端

Node.js 标准库提供了 http 模块，其中封装了一个高效的 HTTP 服务器和一个简易的HTTP客户端。http.Server 是一个基于事件的 HTTP服务器，它的核心由 Node.js 下层 C++部分实现，而接口由 JavaScript 封装，兼顾了高性能与简易性。 http.request 则是一个HTTP 客户端工具，用于向 HTTP 服务器发起请求，例如实现 Pingback 或者内容抓取。

## HTTP服务器

