

/*for(var i =0; i<5; i++){
    // console.log('ssss',i)
    setTimeout(function () {
        console.log(i)
    },i*1000)
}*/



/*
var a = {};
var b = {key: 'b'};
var c = {key: 'c'};
var d = [3,5,6];
a[b] = 123;
a[c] = 345;
console.log(a[b])
console.log(a[c])
a[d] = 333;
console.log(a)
console.log(b)
console.log(c)
console.log(a[b]);  // 345
console.log(a[c]);  // 345
console.log(a[d]);  // 333
*/


/**
 * nodejs实现java sleep功能
 * @param time
 */
/*function sleep(time) {
    return new Promise((resolve)=>{setTimeout(resolve,time)})
}*/


/*
function pick(object,...keys) {
    let result = Object.create(null);
    for(let i=0,len=keys.length;i<len;i++){
        result[keys[i]] = object[keys[i]];
    }
    return result;
}*/

function f(a,b,c){};
console.log(f.length)

function a(){
    this.name = 'tom';
}
var goodMorning = a();
console.log(typeof goodMorning)

let al = {name:'tom'}
let b = Object.create(al);
b.name = 'jams';
console.log(al.name)
console.log(b)

var funcs = [];
for(var i = 0;i<10;i++){
    funcs.push(function () {
        console.log(i)
    })
}

funcs.forEach(function (func) {
    func();
})
/*
let sum = (num1,num2)=>{ return num1+num2};

let sum1  = sum(1,2);

console.log(sum1)
*/






