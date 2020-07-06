//请求行---请求头

//1.引入 HTTP 模块
const http = require('http');
//2.引入 url 模块
const url = require('url');
//3.创建服务对象
const server = http.createServer(function (request, response) {

    //---请求行---
    //获取请求行-请求方法
    console.log(request.method);//Get

    //获取请求行-请求URL(这里只得到 URL 的路径部分)
    // console.log(request.url);
    // console.log(url.parse(request.url, true));
    console.log(url.parse(request.url, true).pathname); //路径
    //获取请求行-版本协议
    console.log(request.httpVersion);//1.1
    //获取请求头
    console.log(request.headers);

    response.end('HELLO WORD');
})

//4. 启动服务 
server.listen(8000, () => {
    console.log("服务已经启动, 8000 端口监听中....");
});