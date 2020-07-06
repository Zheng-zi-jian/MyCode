//  构建一个服务  GET  /index.html  响应当前文件夹下 public/index.html 文件内容
const http = require("http");
const url = require('url');
const fs = require("fs");

const server = http.createServer((request, response) => {
    //获取url的路径部分
    let pathname = url.parse(request.url, true).pathname;
    //判断
    if (pathname === '/index.html') {
        //返回 public/index.html 的文件内容
        fs.readFile(__dirname + '/public/index.html', (err, data) => {
            //如果出错
            if (err) {
                //响应
                response.statusCode = 500;
                response.end('服务器错误');
                return;
            }
            //如果没有出错
            //设置响应头
            response.setHeader("content-type", 'text/html;charset=utf-8');
            response.end(data);
        });
    } else if (pathname === '/css/app.css') {
        //返回 public/index.html 的文件内容
        fs.readFile(__dirname + '/public/css/app.css', (err, data) => {
            //如果出错
            if (err) {
                //响应
                response.statusCode = 500;
                response.end('服务器错误');
                return;
            }
            //如果没有出错
            //设置响应头
            //response.setHeader("content-type", 'text/html;charset=utf-8');
            response.end(data);
        })
    } else {
        response.end('ok')
    }
});

server.listen(8000);