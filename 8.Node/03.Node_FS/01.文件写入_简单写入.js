/*
--简单文件写入---
1.语法:
	(1)fs.writeFile(file, data,[options], callback);---异步写入
	(2)fs.writeFileSync(file, data,[options]);		---同步写入(尽量不用)
2.参数:
	(1)file    操作文件的路径
	(2)data    要写入的数据
	(3)options 可选项，可以对写入进行一些设置
		-字符集	encoding 默认值: 'utf8'
		-权限	mode 	 默认值: 0o666(八进制) 777
			①6:所有者 
			②6:所属组 
			③6:其他人
			4 可读
			2 可写
			1 可执行
		-标志	flag	 默认值: 'w' 
			'w':打开文件用于写入
			'r':打开文件用于读取
			'a':打开文件用于追加
	(4)callback 当写入完成以后执行的函数
		err		
			如果写入有错,则err为实例对象
			如果写入无错,则err为null
*/
//1.引入fs模块
var fs = require("fs");
//2.异步调用-调用方法-不使用标志位
fs.writeFile("D:/Code/WEB-code/8.Node/03.Node_FS/file/01.html", "今天天气很不错!!!", function (err) {
	//判断err,如果写入有错则打印返回,如果没有错误,打印成功
	if (err) {
		console.log(err)
		return
	}
	console.log("写入成功");

});
//3.异步调用-调用方法-不使用标志位	
fs.writeFile("D:/Code/WEB-code/8.Node/03.Node_FS/file/02.html", '无边落木萧萧下，不尽长江滚滚来\r\n', {
	flag: 'a'
}, err => {
	if (err) throw err;
	console.log("写入成功");
});
//3.同步调用
fs.writeFileSync("D:/Code/WEB-code/8.Node/03.Node_FS/file/03.html",'同步\r\n',{flag:'a'})