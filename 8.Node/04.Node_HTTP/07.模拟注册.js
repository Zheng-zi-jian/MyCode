/** --需求--
 * 创建一个 HTTP 服务
 * GET      /join         响应一个表单页面
 * POST     /join         将表单中的数据,保存起来, 提示用户注册成功
 */
//引入模块
const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');

//创建服务
const server = http.createServer((request, response) => {
    //获取请求
    let method = request.method;
    let path = url.parse(request.url).pathname;
    //判断请求方式;是否为注册页面
    if (method === 'GET' && path === "/join") {
        //读取页面
        fs.readFile(__dirname + "/project/join.html", (err, data) => {
            if (err) throw err;
            response.end(data);
        })
    } else if (method === 'POST' && path === "/join") {
        //声明变量
        let body = '';
        //绑定事件
        request.on('data', (chunk) => {
            body += chunk;
        })
        //解析数据
        request.on('end', () => {
            //--保存数据--

            //保存方式 一 
            // const data = qs.parse(body);
            // const str = JSON.stringify(data);
            // //将用户信息存入到文件中
            // fs.writeFile(__dirname + '/project/date.txt', str + '\r\n', {
            //     flag: 'a'
            // }, (err) => {
            //     if (err) throw err;
            //     //将数据保存起来 实际场景保存在数据库, 现在保存在文件中
            //     response.setHeader("content-type", 'text/html;charset=utf-8');
            //     response.end('ok的啦!!');
            // });

            //保存方式 二
            const data = qs.parse(body);
            //读取date文件==>"字符串"
            const str = fs.readFileSync(__dirname + '/project/date.txt');
            //转换内容==>数组对象
            const users = JSON.parse(str);
            //添加数据
            users.push(data);
            //转换内容==>"字符串"
            const result = JSON.stringify(users);
            //写入文件(数据库)
            fs.writeFile(__dirname + '/project/date.txt', result, err => {
                if (err) throw err;
                response.setHeader("content-type", 'text/html;charset=utf-8');
                //跳转页面
                response.end('恭喜您 注册成功!!<script>location.href = "http://www.baidu.com"</script>');
            });
        });
    } else {
        response.write(`<h1>404 Not Found<h1>`)
        response.end('');
    }
});
server.listen(8888, () => {
    console.log('服务启动');
});