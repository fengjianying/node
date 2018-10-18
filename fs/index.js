const fs = require('fs');
//open+read读取文件
fs.open('Readme.md','r',function(error,fd){
    if(error){
        console.log(error)
        return
    }else{
        let buf = new Buffer(8);
        fs.read(fd,buf,0,8,null,function(err,byte,buffer){
            if(err){
                console.log(err);
                return
            }else{
                console.log('bytesRead:' + byte);
                console.log(buffer);
            }
        })
    }
})