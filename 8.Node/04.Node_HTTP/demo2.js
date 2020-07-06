const http = require('http');

const server = http.createServer(function(request,response){

  response.setHeader("Content-type", "text/html;charset=utf-8");// 设置响应体的类型
  //设置响应体 write 可写流 response对象是一个可写流对象
  response.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>练习</title>
      <style>
          body{
              background:pink;
          }
      </style>
  </head>
  <body>
      <h1>H520422</h1>
  </body>
  </html>
`);
  response.end('');
});
//3. 启动服务  65535
server.listen(8000, ()=>{
  console.log("服务已经启动, 8000 端口监听中....");
});