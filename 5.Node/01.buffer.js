/*--Buffer(缓冲区)--
1. Buffer的结构和数组很像，操作的方法也和数组类似
2. 数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
3. 使用buffer不需要引入模块，直接使用即可
4. 在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
5. 计算机的一个0/1,我们称为1位(bit).buffer中的一个元素，占用内存的一个字节.
6. Buffer的大小一旦确定，则不能修改，Buffer实际上是对底层内存的直接操作
7. Buffer.alloc(size);       创建一个指定大小的buffer  
8. Buffer.allocUnsafe(size); 创建一个指定大小的buffer，但是buffer中可能含有敏感数据
 */
//创建一个字符
var str = "Hello 尚硅谷";
//将字符串保存到buffer中
var buf = Buffer.from(str);
//console.log(buf.length);//占用内存的大小15
//console.log(str.length);//字符串的长度9
//console.log(buf);//<Buffer 48 65 6c 6c 6f 20 e5 b0 9a e7 a1 85 e8 b0 b7>


//创建一个指定大小的buffer,(buffer构造函数都是不推荐使用的).
//创建一个10个字节的buffer
var buf2 = Buffer.alloc(10);
//通过索引，来操作buf中的元素
buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 0xaa;
buf2[3] = 255;
//只要数字在控制台或页面中输出一定是10进制
console.log(buf2[2]);//170
console.log(buf2[2].toString(16));//aa

/*---总结---
	Buffer.from(str) 将一个字符串转换为buffer
	Buffer.alloc(size) 创建一个指定大小的Buffer
	Buffer.alloUnsafe(size) 创建一个指定大小的Buffer，但是可能包含敏感数据
 	buf.toString() 将缓冲区中的数据转换为字符串
 */

var buf4 = Buffer.from("我是一段文本数据");
//console.log(buf4.toString());
