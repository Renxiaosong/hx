const http = require('http');
const urllib= require('url')
const qs = require('querystring');
const users = {'aaa':'123','bbb':'456'}

http.createServer('/getData',function (req,res) {
    const query = qs.parse(req.url)
    let str = '';
    req.on('data',(data)=>{
        str += data;
    });
    req.on('end',()=>{
        var obj = urllib.parse(req.url,true);
        const url = obj.pathname;
        const GET = obj.query;
        const POST = qs.parse(str);
        if(url === '/user'){
            switch (GET.act) {
                case 'reg':
                    if(users[GET.name]){
                        res.write('{"ok":false,"msg":"该用户已注册"}')
                    }else{
                        users[GET.name] = GET.pass;
                        res.write('{"ok":true,"msg":"注册成功"}')
                    }
                    break;
                case 'login':
                    if(users[GET.name]=== null){
                        res.write('{"ok":false,"msg":"NOT REGISTER"}')
                    }else if(users[GET.name]!==GET.pass){
                        res.write('{"ok":false,"msg":"NAME OR PASSWORD WRONG"}')
                    }else{
                        res.write('{"ok":true,"msg":"LOGIN SUCCESS"}')
                    }
                    break;
                default:
                    res.write('{"ok":false,"msg":"未知act"}');
            }
        }
        res.end()
    })
    // res.writeHead(200,{'Content-Type':'text/plain'});
}).listen(35000)