//  构建一个服务返回文件内容
const http = require("http");
const url = require('url');
const fs = require("fs");

//方法一:
//创建服务
//const server = http.createServer((request, response) => {
//     //获取url的路径部分
//     let pathname = url.parse(request.url).pathname;
//     //判断路径
//     if (pathname === '/index.html') {
//         //读取文件内容
//         fs.readFile(__dirname + '/public/index.html', (err, data) => {
//             //如果出错
//             if (err) {
//                 response.statusCode = 500;//设置响应状态
//                 response.end('服务器错误');//设置响应体
//                 return;
//             }
//             //如果没有出错
//             response.setHeader("content-type", 'text/html;charset=utf-8');//设置响应头
//             response.end(data);//设置响应体
//         });
//         //再次判断路径
//     } else if (pathname === '/css/app.css') {
//         fs.readFile(__dirname + '/public/css/app.css', (err, data) => {
//             if (err) {
//                 response.statusCode = 500;
//                 response.end('服务器错误');
//                 return;
//             }
//             response.end(data);
//         })
//     } else {
//         response.end('ok')
//     }
// });

//方法二:
const server = http.createServer(function(request,response){
    let path = url.parse(request.url).pathname;
    let filepath = __dirname + "/project" + path;

    fs.readFile(filepath,(err,date)=>{
        if(err){
            response.statusCode = 500;
            response.end('系统爆炸');
            return;
        }
        response.end(date);
    })
})


server.listen(8000,() =>{
    console.log('服务启动');
})