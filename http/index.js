//http服务器
const http = require('http');
const url = require('url');
const util = require('util');
const queryString = require('querystring');
var server = new http.Server();
server.on('request', function (req, res) {
    // 客户端请求状态
    // console.log(req.complete)
    // http协议版本
    // console.log(req.httpVersion)
    // http请求方法
    // console.log(req.method)
    // 原始请求地址
    // console.log(req.url)
    // http请求头
    // console.log(req.headers)
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('<h1>http-server</h1>');
    res.end(util.inspect(url.parse(req.url, true)));
})
server.listen(3000);
console.log('HTTP server is listening at 3000.')

// http客户端


//request
var contents = queryString.stringify({
    name: 'xiaoMing',
    email: 'xiaoMing@xiaoMing.com'
})

var option = {
    host: 'www.baidu.com',
    path: '/',
    method: 'POST',
    headers: {
        'Contemt-Type': 'application/x-www-form-urlencoded',
        'Content-Length': contents.length
    }
}
var req = http.request(option, function (res) {
    res.setEncoding('utf-8');
    res.on('data', function (data) {
        console.log(data)
    })
})
req.write(contents);
req.end();
// get
http.get({
    host: 'www.baidu.com'
}, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
});