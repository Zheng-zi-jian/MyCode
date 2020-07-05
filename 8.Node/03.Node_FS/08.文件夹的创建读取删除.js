
//文件夹的操作
const fs = require('fs');

//一、创建文件夹
// fs.mkdir('./project',err => {
//     if(err) throw err;
//     console.log('文件创建成功!!!')
// });

//练习:创建PC/images
// fs.mkdir('.PC/images',err =>{
//     if(err) throw err;
//     console.log('文件创建成功!!!')
// })---报错:路径错误
// fs.mkdir('.PC/images',{recursive:true},err =>{
//     if(err) throw err;
//     console.log('文件创建成功!!!')
// })

//二、读取文件夹
// fs.readdir('./',(err,files) =>{
//     if(err) throw err;
//     console.log(files);
// });

//三、删除文件夹
fs.rmdir("./project",err =>{
    if(err) throw err;
    console.log('删除成功');
})