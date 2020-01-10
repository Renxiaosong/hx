/*
/**
* 100以内的质数
* /
for(let i = 1;i<100; i++){
    let key = 0;
    for(var j = 2;j<i;j++){
        if(i%j ==0){
            key =1;
            break;
        }
    }
    if(key ==0){
        console.log(i)
    }
}*/

var arr = [2,5,8,9,3,3,2,4,3,1,1,1,1,1,1];

/*for(let i =0;i<arr.length;i++){
    let temp = 0;
    for(let j =0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}*/
/*
var arry = [];
for(let i =0;i<arr.length;i++){
    if(!arry.includes(arr[i])){
        arry.push(arr[i])
    }
}*/

/**
 * 过滤数组中重复值最多的
 * @type {{}}
 */
var obj = {};
var itemMax='';
var maxCount = 0;
for(let i =0;i<arr.length;i++){
    if(obj.hasOwnProperty(arr[i])){
        obj[arr[i]] ++;
    }else{
        obj[arr[i]] = 1;
    }
    if(obj[arr[i]]>maxCount){
        maxCount = obj[arr[i]]
        itemMax = arr[i]
    }
}
// console.log(itemMax,maxCount)


/**
 * 定时功能
 * @param i
 */
function sleep(i) {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log(i)
            resolve();
        },1000)
    })
}


async function go() {
    for(var i=0;i<5;i++){
        await sleep(i)
    }
    sleep(i)
}

const arr2 = [1,2,3,4,5,6,7,8,9,0]

/**
 * 取偶
 * @type {number[]}
 */
var newArr = arr2.filter(function (x) {
    return x%2===0;
})

// console.log(newArr)


/**
 * A 文件中文字转大写写入B文件
 */
const fs = require('fs')

var str = '';
/*fs.readFile(__dirname+'/A.text','utf8',function (err,data) {
    str = data.toUpperCase();
    fs.writeFile(__dirname+'/B.text',str,'utf8',function (err) {
        if(err) console.error(err)
    })
})*/

var read = fs.createReadStream(__dirname+'/A.text');
var write = fs.createWriteStream(__dirname+'/B.text');
var readResult ='';
var strCase='';
read.setEncoding('utf8')
read.resume();
read.on('data',data=>{
    readResult += data;
}).on('end',()=>{
    console.log('文件读取完毕')
    strCase = readResult.toUpperCase();
    write.write(strCase,'utf8');
    write.end();
    write.on('finish',()=>{
        console.log('写入完成')
    }).on('error',error =>{
        console.error(error)
    })
})







