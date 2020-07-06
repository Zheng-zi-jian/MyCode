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
      <title>Document</title>
      <style>
          table {
              width: 600px;
              height: 300px;
              margin: 0 auto;
              border: 2px solid black;
              border-spacing: 5px 10px;
          }
  
          tr {
              border: 1px solid black;
          }
  
          td {
              border: 1px solid black;
              width: 80px;
              height: 60px;
              text-align: center;
          }
          tr:nth-child(odd){
              background-color: red;
          }
      </style>
  </head>
  <body>
      <table>
          <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
          </tr>
          <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
          </tr>
          <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
          </tr>
      </table>
  </body>
  </html>
`);
  response.end('');
});
//3. 启动服务  65535
server.listen(8000, ()=>{
  console.log("服务已经启动, 8000 端口监听中....");
});