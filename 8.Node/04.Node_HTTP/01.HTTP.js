/* 
---HTTP 协议---

1、HTTP介绍:
    HTTP（hypertext transport protocol）协议也叫,超文本传输协议.
    是一种基于 TCP/IP 的应用层通信协议，这个协议详细规定了浏览器和万维网服务器之间互相通信的规则。

2、协议主要规定了两方面的内容
    (1)客户端向服务器发送数据，称之为请求报文
    (2)服务器向客户端返回数据，称之为响应报文

3、Fiddle 工具

	Fiddler 是一个http协议调试代理工具，使用它我们可以抓取网页的所有请求与响应，也就是咱们俗称的抓包。

一、请求报文
	1.结构:
		请求行
		请求头
		空行
		请求体
	2.实例:
		(1)请求行
			GET http://www.xiaohigh.com/ HTTP/1.1
				①GET                        请求类型  GET POST PUT DELETE 
				②http://www.xiaohigh.com/   请求 URL
				③HTTP/1.1                   HTTP 协议版本号 1.1 	
		(2)请求头(格式key: value)
			Host: www.xiaohigh.com
				-Host:主机名
			Connection: keep-alive
				-连接:保持连接/close关闭
			Pragma: no-cache
				-设置缓存:不缓存(HTTP/1.0)
			Cache-Control: no-cache
				-设置缓存:不缓存(HTTP/1.1)
			Upgrade-Insecure-Requests: 1
				-升级不安全请求
			User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36
				-用户代理, 是对客户端的字符串标识. 每一次向服务器发送请求, 都会带着这个头, 每个浏览器的UA 都不一样.
			Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,;q=0.8,application/signed-exchange;v=b3;q=0.9
				-接受喜好系数,默认为1
			Accept-Encoding: gzip, deflate
				-接受的压缩方式
			Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7
				-接受的语言
		(3)空行
		(4)请求体

二、响应报文
	1.结构
		响应行
		响应头
		空行
		响应体
	2.实例
		(1)响应行
			HTTP/1.1 200 OK
				①HTTP/1.1 版本号
				②200      响应状态码  200 成功  404 未找到   403 禁止的  500 服务器内部错误
				③OK       响应状态字符串 OK    Not Found    Forbidden    Server Internal Error
		(2)响应头
			server: ecstatic-3.3.2
				-服务采用的技术
			cache-control: max-age=3600
				-缓存设置  max-age=3600 生命周期
			last-modified: Fri, 13 Sep 2019 01:18:04 GMT
				-最后修改时间. 表示当前资源的最后修改时间.
			etag: W/"1202827-283-2019-09-13T01:18:04.000Z"
				-当前资源的唯一标志
			content-length: 283
				-内容长度. 响应体的长度(单位为字节)
			content-type: text/html; charset=UTF-8
				-内容类型. 响应体的类型
			Date: Mon, 06 Jul 2020 01:55:01 GMT
				-响应时间
			Connection: keep-alive
				-连接:保持连接/close关闭
		(3)空行
		(4)响应体
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>网站首页</title>
				<link rel="stylesheet" href="./css/index.css">
				<script src="./js/index.js"></script>
			</head>
			<body>
				<h3>欢迎来到尚硅谷</h3>
				<img src="./images/welcome.jpg" alt="">
			</body>
			</html> 
*/