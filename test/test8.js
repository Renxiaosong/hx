var fs = require('fs')
/*fs.readFile(__dirname+'/config.conf','utf8',function (err,data) {
    if(err) console.error(err);
    var arr = data.split('\r\n')
    var obj = {};
    for(let i =0;i<arr.length;i++){
        var arr2 = arr[i].split('=')
        obj[arr2[0]] = arr2[1]
    }
    console.log(obj)
    console.log(obj['mysql.username'])
})*/
var readline = require('readline')

const f1 = readline.createInterface({
    input:fs.createReadStream(__dirname+'/config.conf')
})
const obj = {};
f1.on('line',(line)=>{
    // console.log(line)
    const arr  = line.split('=');
    obj[arr[0]] = arr[1]
})
f1.on('close',()=>{
    console.log(obj)
})
