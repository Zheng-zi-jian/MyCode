/*
--流式文件写入--
1.语法:
	fs.createWriteStream(path,[options]);
2.参数:
	path    文件路径
	options 配置的参数
3.[可选]可以通过监听流的open和close事件来监听流的打开和关闭
	on(事件字符串,回调函数)
		- 可以为对象绑定一个事件
	once(事件字符串,回调函数)
		- 可以为对象绑定一个一次性的事件，该事件将会在触发一次以后自动失效

4. 同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出.
*/
//1.引入fs模块
const fs = require("fs");
//2.创建一个写入流对象
const ws = fs.createWriteStream("D:/Code/WEB-code/8.Node/03.Node_FS/file/04.html",{flags:'a'});

ws.once("open", function() {
	console.log("流打开了~~~");
});

ws.once("close", function() {
	console.log("流关闭了~~~");
});

//3.调用方法完成写入
ws.write("通过可写流写入文件的内容\r\n");
ws.write("今天天气真不错\r\n");
ws.write("锄禾日当午\r\n");
ws.write("红掌拨清清\r\n");

//4.关闭
ws.close();
//ws.end();
