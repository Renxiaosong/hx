let test = new Promise((resolve,reject)=>{
    let random = Math.random();
    console.log(random)
    if(random>0.5){
        resolve('success')
    }else{
        reject('fail')
    }
})

let p = test.then((result) =>{
    console.log(1,result)
    return result;
}).catch((result)=>{
    console.log(2,result)
    return result
}).then((result)=>{
    console.log(3,result)
    return result;
}).then((result)=>{
    console.log('last',result)
})

console.log(p)