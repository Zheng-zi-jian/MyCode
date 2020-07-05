/* 
--流式文件读取-- 

1.语法:
	fs.createReadStream(path.[options]);
2.参数:
	path,路径
	options
3.流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
*/

//1.引入模块
const fs = require("fs");

//2.创建一个读取流
const rs1 = fs.createReadStream("D:/Code/WEB-code/8.Node/03.Node_FS/file/01.html");
const rs2 = fs.createReadStream("D:/Code/WEB-code/8.Node/03.Node_FS/file/刻意练习.MP3");
//3.绑定事件
rs1.on('data',(chunk)=>{
	console.log(chunk);
	console.log(chunk.toString());
});

//测试大文件
// rs2.on('data',(chunk)=>{
// 	console.log(chunk);
// })