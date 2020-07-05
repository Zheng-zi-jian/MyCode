/*
简单文件读取
	语法:
	fs.readFile(path,[options],callback);
	fs.readFileSync(path,[options]);
	参数:
	path    要读取的文件的路径
	options 读取的选项
	callback回调函数，通过回调函数将读取到内容返回(err , data)
		err  错误对象
		data 读取到的数据，会返回一个Buffer
 */
var fs = require("fs");
var path = "D:/Code/WEB-code/8.Node/03.Node_FS/file/01.html";
fs.readFile(path, function(err, data) {
	if (err) throw err;
	console.log(data);
	console.log(data.toString());//date为文件中的内容
});
