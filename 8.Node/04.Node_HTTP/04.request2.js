//请求体

//接收 POST 请求体数据
const http = require("http");
const qs = require("querystring");//url模块使用了 querystring 方法实现了参数的转换
// a=100&b=200  => {a:100, b:200}

const server = http.createServer((request, response)=>{
    //1. 声明变量
    let body = '';
    //2. 绑定事件 可读流 request也是一个可读流对象
    request.on('data', chunk => {
        // 64K
        body += chunk;
    });
    //3. 绑定 end 事件
    request.on('end', ()=>{
        const data = qs.parse(body);
        console.log(data);
        response.end("OK");
    });
    
});

server.listen(8001);