/*异步文件写入*/
/* --打开一个文件--
1. 语法:fs.open(path, flags,[mode], callback(err,fd));
2. 参数:
	- path  要打开文件的路径.
	- flags 打开文件要做的操作的类型.(r 只读的  w 可写的)
	- mode 设置文件的操作权限，一般不传
 	- 回调函数两个参数：
 		- err 错误对象，如果没有错误则为null
 		- fd  文件的描述符
3. 异步调用的方法，结果都是通过回调函数的参数返回的

4. 用来异步写入一个文件 
	fs.write(fd, string[, position[, encoding]], callback)

5. 用来关闭文件
	fs.close(fd, callback)
*/

//引入fs模块
var fs = require("fs");
//打开文件
fs.open("hello2.txt", "w", function(err, fd) {
	//判断是否出错
	if (!err) {
		//如果没有出错，则对文件进行写入操作
		fs.write(fd, "这是异步写入的内容", function(err) {
			if (!err) {
				console.log("写入成功~~");
			}
			//关闭文件
			fs.close(fd, function(err) {
				if (!err) {
					console.log("文件已关闭~~~");
				}
			});
		});
	} else {
		console.log(err);
	}
});

console.log("程序向下执行~~~");
