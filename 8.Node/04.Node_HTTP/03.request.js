//请求行---请求头---请求体

//1.引入 HTTP 模块
const http = require('http');
//2.引入 url 模块
const url = require('url');
//3.引入 querystring 模块.该模块,实现参数的转换(a=100&b=200  => {a:100, b:200})
const qs = require("querystring");
//4.创建服务对象
const server = http.createServer((request, response) => {
    //---请求行---
    console.log(request.method); //  获取请求行-请求方法
    console.log(url.parse(request.url, true).query);//参数
    console.log(url.parse(request.url, true).pathname);//路径
    console.log(request.httpVersion); // 获取请求行-版本协议:1.1

    //---请求头---
    ///console.log(request.headers);

    //---请求体---
    let body = '';                      //  声明变量
    request.on('data',function(chunk){  //  绑定date事件(开始读取请求体时触发)
        body += chunk;
    })
    request.on('end', () => {           //  绑定end事件(请求体读取结束时触发)
        const data = qs.parse(body);
        console.log(data);
        response.end("OK");
    });
})

//5.启动服务 
server.listen(8000, () => {
    console.log("服务成功启动");
});