//将a.jpg 移入 file 并更名

//语法:
//  fs.rename(oldPath,newPath,callback)  
//  fs.renameSync(oldPath,newPath) 
const fs = require('fs');

fs.rename("./c.jpg",'./file/cc.jpg',err => {
    if(err) throw err;
    console.log('移动成功');
})

