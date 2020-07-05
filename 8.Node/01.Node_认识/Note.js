/* ---Node.js笔记--- */
/*
一、--模块化--
1. 在Node中，一个js文件就是一个模块
2. 在Node中，每一个js文件中的js代码都是独立运行在一个函数中
	而不是全局作用域，所以一个模块的中的变量和函数在其他模块中无法访问

二、--向外部暴露属性或方法exports--
1. 我们可以通过 exports 来向外部暴露变量和方法,
	只需要将需要暴露给外部的变量或方法设置为exports的属性即可.
2. 举例:
	exports.x = "我是02.module.js中的x";
	exports.y = "我是y";
	exports.fn = function () {};

三、--引入其他的模块require()--
1. 在node中，通过require()函数来引入外部的模块
2. 模块分成两大类
	核心模块
		- 由node引擎提供的模块
		- 核心模块的标识就是，模块的名字
	文件模块
		- 由用户自己创建的模块
		- 文件模块的标识就是文件的路径（绝对路径，相对路径）
3. require()可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
	这里路径，如果使用相对路径，必须以.或..开头
4. 使用require()引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块
5. 我们使用require()引入外部模块时，使用的就是模块标识，
	我们可以通过模块标识来找到指定的模块.
6. 举例:
	var md = require("./02.module");
	var math = require("./math");
	var fs = require("fs");

四、--全局对象 global--
1. 在node中有一个全局对象global,它的作用和网页中window类似.
	(1)在全局中创建的变量都会作为global的属性保存
	(2)在全局中创建的函数都会作为global的方法保存
2. 当node在执行模块中的代码时，
	(1)它会首先在代码的最顶部，添加如下代码
 		function (exports, require, module, __filename, __dirname) {
 	(2)在代码的最底部，添加如下代码
 			};
3. 实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进了5个实参
	(1)exports
	- 该对象用来将变量或函数暴露到外部
	(2)require
	- 函数，用来引入外部的模块
	(3)module
	- module代表的是当前模块本身
	- exports就是module的属性
	- 既可以使用 exports 导出，也可以使用module.exports导出
	(4)__filename
	- 当前模块的完整路径
	C:\Users\lilichao\WebstormProjects\class0705\01.node\04.module.js
	(5)__dirname
 	- 当前模块所在文件夹的完整路径
 	C:\Users\lilichao\WebstormProjects\class0705\01.node

五、--exports和module.exports--
1. 通过exports只能使用.的方式来向外暴露内部变量
	exports.xxx = xxx
2. 而module.exports既可以通过.的形式，也可以直接赋值
	module.exports.xxx = xxxx
	module.exports = {} 

六、--包(package)--
1. 将多个模块组合为一个完整的功能，就是一个包
2. 包结构
	bin-		  二进制的可执行文件，一般都是一些工具包中才有
	lib-		  js文件
	doc-		  文档
	test-		  测试代码
	package.json- 包的描述文件
	package.json,它是一个json格式的文件，在它里面保存了包各种相关的信息
		name 包名
		version 版本
		dependencies 依赖
		main 包的主要的文件
		bin 可执行文件 

七、--(Node Package Manager node的包管理器)--
1. npm会在安装完node以后，自动安装
2. 通过npm可以对node中的包进行上传、下载、搜索等操作
3. npm的常用指令
		npm -v 查看npm的版本
		npm version 查看所有模块的版本
		npm init 初始化项目（创建package.json）
		npm i/install 包名 安装指定的包
		npm i/install 包名 --save 安装指定的包并添加依赖
		npm i/install 包名 -g 全局安装（一般都是一些工具）
		npm i/install 安装当前项目所依赖的包
		npm s/search 包名 搜索包	
		npm r/remove 包名 删除一个包 
 
八、--文件系统（File System）--
1. 文件系统简单来说就是通过Node来操作系统中的文件
2. 使用文件系统，需要先引入fs模块，fs是核心模块，直接引入不需要下载 
*/


