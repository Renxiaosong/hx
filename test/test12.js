/*
for (var i = 0; i < 5; ++i) {
    (function (i) {
        setTimeout(function () {
            console.log(i)
        }, 1000*i)
    })(i)
}

console.log(i)
*/


function f() {
    var p = new Promise((resolve,reject)=>{
        for (var i = 0; i < 5; ++i) {
            (function (i) {
                setTimeout(function () {
                    console.log(i)
                }, 1000*i)
            })(i)
        }
        resolve(i)
    })
    p.then((i) =>{
        setTimeout(function () {
            console.log(i)
        },1000*i)
    })
    return p;
}
f()