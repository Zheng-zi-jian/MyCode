const fs = require('fs');
const { Console } = require('console');
fs.stat('./file',(err,ststs) =>{
    if(err) throw err;
    //console.log(ststs)
    //判断是否为文件夹
    console.log(ststs.isDirectory());
    //判断是否为文件夹
    console.log(ststs.isFile());
})
fs.stat('./01.文件写入_简单写入.js',(err,ststs) =>{
    if(err) throw err;
    //console.log(ststs)
    //判断是否为文件夹
    console.log(ststs.isDirectory());
    //判断是否为文件夹
    console.log(ststs.isFile());
})