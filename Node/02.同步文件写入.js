/* 同步文件的写入 */
/* --打开文件--
1. 语法:fs.openSync(path, flags, [mode]);
2. 参数:
	- path  要打开文件的路径.
	- flags 打开文件要做的操作的类型.(r 只读的  w 可写的)
	- mode 设置文件的操作权限，一般不传
3. 返回值：
	- 该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作.  
*/

/* --向文件中写入内容--
1. 语法:fs.writeSync(fd, string,[position],[encoding]);
2. 参数:
	- fd 文件的描述符，需要传递要写入的文件的描述符
	- string 要写入的内容
	- position 写入的起始位置
	- encoding 写入的编码，默认utf-8 
*/

/* --保存并关闭文件--
1. 语法:fs.closeSync(fd)
2. 参数:fd 要关闭的文件的描述符 
*/

//引入文件
var fs = require("fs");
//打开文件
var fd = fs.openSync("hello1.txt", "w");
//向文件中写入内容
fs.writeSync(fd, "今天天气真不错~~~", 5);
//关闭文件
fs.closeSync(fd);
console.log("程序向下执行~~~");
