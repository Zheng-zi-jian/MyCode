/* 
 一、Node的介绍
     - Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，是一个应用程序。
     - 官方网址 <https://nodejs.org/en/>，中文站 <http://nodejs.cn/>

 二、Node的作用
     - 解析运行 JS 代码
     - 操作系统资源，如内存、硬盘、网络

 三、Node的应用场景
     - APP 接口服务
     - 聊天室
     - 动态网站, 个人博客, 论坛, 商城
     - 后端的Web服务，例如服务器端的请求（爬虫），代理请求（跨域）
     - 前端项目打包
 
 四、Node的下载安装
     -工具一定要到官方下载，历史版本下载 https://npm.taobao.org/mirrors/node/
     -Nodejs 的版本号奇数为开发版本，偶数为发布版本,我们选择偶数
     -双击打开安装文件,安装完成后，在 CMD 命令行窗口下运行 `node -v`，如显示版本号则证明安装成功，反之安装失败，重新安装。 

 五、Node初体验
     (1)交互模式
         命令行在命令行下输入命令 `node`，这时进入 nodejs 的交互模式
     (2)文件执行
         创建文件 hello.js ，并写入代码 console.log('hello world')，使用命令行运行 node hello.js
     (3)VScode 插件运行
         安装插件 『code Runner』, 文件右键 -> run code

 六、在 nodejs 环境下，不能使用 BOM 和 DOM ，也没有全局对象 window，全局对象的名字叫 global 
*/