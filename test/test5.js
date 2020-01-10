var express = require('express');
var app = express();
var multiparty = require('multiparty');
var fs = require('fs');
/* 上传页面. */
app.get('/', function(req, res, next) {
    //res.render('./views/index');
    res.sendfile('./views/index.html');
});
/* 上传 */
app.post('/upload', function(req, res, next) {
    /* 生成multiparty对象，并配置上传目标路径 */
    var form = new multiparty.Form();
    /* 设置编辑 */
    form.encoding = 'utf-8';
    //设置文件存储路劲
    form.uploadDir = './public/files';
    //设置文件大小限制
    form.maxFilesSize = 2 * 1024 * 1024;
    // form.maxFields = 1000;  //设置所有文件的大小总和
    //上传后处理
    form.parse(req, function(err, fields, files) {
        console.log(fields.fileType.includes('jpg'))
        if(err) {
            console.log('parse error:' + err);
        }else {
            var inputFile = files.file[0];
            var uploadedPath = inputFile.path;
            var dstPath = './public/files/' + inputFile.originalFilename;
            //重命名为真实文件名
            fs.rename(uploadedPath, dstPath, function(err) {
                if(err) {
                    console.log('rename error:' + err);
                }else {
                    console.log('rename ok');
                }
            })
        }
    })
    res.send(
        {
            code:200
        }
    )
})

app.listen(4000)