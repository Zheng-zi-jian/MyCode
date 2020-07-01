/* 
--4.流式文件读取-- 
流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
*/
var fs = require("fs");
//创建一个可读流
var rs = fs.createReadStream("F:/00.Code/7.Node/a.mp3");
//创建一个可写流
var ws = fs.createWriteStream("aa.mp3");

//监听流的开启和关闭
rs.once("open", function() {
	console.log("可读流打开了~~");
});

rs.once("close", function() {
	console.log("可读流关闭了~~");
	//数据读取完毕，关闭可写流
	ws.end();
});

//如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
rs.on("data", function(data) {
	//将读取到的数据写入到可写流中
	ws.write(data);
});

ws.once("open", function() {
	console.log("可写流打开了~~");
});

ws.once("close", function() {
	console.log("可写流关闭了~~");
});

/*流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
var fs = require("fs");
//创建一个可读流
var rs = fs.createReadStream("路径");
//创建一个可写流
var ws = fs.createWriteStream("文件");
//pipe()可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws);
*/