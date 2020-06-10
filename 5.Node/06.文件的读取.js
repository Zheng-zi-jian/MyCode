/*--文件的读取--
1. 同步文件读取
	语法:
	fs.openSync(path, flags, [mode]);
	fs.readSync(fd, string,[position],[encoding]);
	fs.closeSync(fd);
	
2. 异步文件读取
	语法:
	fs.open(path, flags,[mode], callback(err,fd));
	fs.read(fd, string,[position,[encoding]],callback);
	fs.close(fd, callback);
*/

/*
3. 简单文件读取
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
var path = "F:/00.Code/7.Node/c.jpg";
fs.readFile(path, function(err, data) {
	if (!err) {
		//将data写入到文件中
		fs.writeFile("cc.jpg", data, function(err) {
			if (!err) {
				console.log("文件写入成功");
			}
		});
	}
});
