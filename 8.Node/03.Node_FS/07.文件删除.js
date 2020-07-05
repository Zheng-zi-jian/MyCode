//删除a.mp3

const fs = require('fs');

fs.unlink('./file/a.mp3',err => {
    if(err) throw err;
    console.log('删除成功!!');
})