//引入模块
const http = require('http');
//创建服务
const server = http.createServer(function (request, response) {
    //引入数据
    const arr = [{
            name: 'knight',
            age: 18
        },
        {
            name: 'xiaoming',
            age: 20
        },
        {
            name: 'xiaoning',
            age: 28
        },
        {
            name: 'xiaotian',
            age: 18
        },
        {
            name: 'xiaoming',
            age: 20
        }
    ];
    //模板字符串开头
    let start =
        `<!DOCTYPE html>
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
                            <tr><td>姓名</td><td>年龄</td></tr>
        `;
    //创建拼接空字串
    let content = '';
    //遍历拼接
    arr.forEach(item => {
        content += `<tr><td>${item.name}</td><td>${item.age}</td></tr>`;
    });
    //模板字符串结尾
    let end =
        `
        </table>
        </body>
        </html>
    `
    //结果 开头+遍历内容+结尾
    let result = start + content + end;
    //设置响应头
    response.setHeader("Content-type", "text/html;charset=utf-8");
    //设置响应题
    response.end(result);
});
//启动服务
server.listen(8000, () => {
    console.log("服务启动");
});