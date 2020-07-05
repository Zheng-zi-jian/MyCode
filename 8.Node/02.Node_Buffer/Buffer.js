/*
--Buffer(缓冲区)--
	1.Buffer的介绍
		(1)Buffer的结构和数组很像，操作的方法也和数组类似.
	2.Buffer的特点
		(1)大小固定,Buffer的大小一旦确定，则不能修改.
		(2)性能较好,直接对计算机内存进行操作,Buffer实际上是对底层内存的直接操作
		(3)每个元素大小为1字节(byte),
		(4)使用buffer不需要引入模块，直接使用即可

2.数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
4.在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
	3.Buffer的创建
		(1)直接创建
			Buffer.alloc(size);       创建一个指定大小的buffer  
		(2)不安全创建
			Buffer.allocUnsafe(size); 创建一个指定大小的buffer，但是buffer中可能含有敏感数据
		(3)通过数组和字符串创建 Buffer.from
			Buffer.from('字符串');	   将一个字符串转换为buffer

		(4) buf.toString();			   将缓冲区中的数据转换为字符串
 */


//创建Buffer
const buf1 = Buffer.alloc(10); 		  // 声明一个 10 个字节的 Buffer
const buf2 = Buffer.allocUnsafe(10);  // 声明一个 10 个字节的 Buffer
const buf3 = Buffer.from('iloveyou'); //
console.log(buf1); //<Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buf2); //<Buffer 68 a4 24 4c 64 02 00 00 40 a1>
console.log(buf3); //<Buffer 69 6c 6f 76 65 79 6f 75>

//读取Buffer
console.log(buf3[0]); //105
console.log(buf3.toString());//iloveyou

//设置Buffer
buf3[0] = 100;
console.log(buf3.toString());//dloveyou

//关于溢出:高位舍弃,溢出的高位数据会舍弃   ‭00000000‬ => 11111111 => 255
// buf3[0] = 300;
// console.log(buf3.toString());

//中文字符  一个 UTF-8 的中文占三个字节
const buf4 = Buffer.from('我爱你');
console.log(buf4);// 9 个字节. UTF-8 <Buffer e6 88 91 e7 88 b1 e4 bd a0>