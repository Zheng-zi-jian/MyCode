// 复制大文件

//引入模块
const fs = require('fs');
//创建读取流
const rs = fs.createReadStream('./file/刻意练习.mp3');
//创建写入流
const ws = fs.createWriteStream('./file/KYLX.mp3');

//绑定事件
rs.on('data', chunk => {
    ws.write(chunk);
});

//简便操作
rs.pipe(ws);
