/* 
构建服务
GET /login 响应体返回 『登录页面』
GET /register 响应体返回 『注册页面』
*/

const http = require("http");
const url = require('url');

const server = http.createServer(function(request, response){
    //获取 URL 的路径部分
    let pathname = url.parse(request.url, true).pathname;
    //判断
    if(pathname === '/login'){
        response.end('deng lu ye mian!');
    }else if(pathname === '/register'){
        response.end('zhu ce ye mian');
    }else{
        response.end('404');
    }
});

server.listen(8000);