//--创建服务对象--

//1.引入HTTP模块
const http = require('http');

//2.创建服务对象     create 创建 server服务
// request  是对请求报文的封装
// response 是对响应报文的封装
const server = http.createServer(function(request,response){
    //调用 response 对象的end方法来设置 『响应体』
    response.end('HELLO WORD');
})
//3.启动服务   8000 端口号, 计算机的服务窗口号. 计算机总共有 65536 个端口号 
server.listen(8000,() =>{
    console.log('服务已经启动');
});