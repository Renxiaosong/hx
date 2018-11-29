const DB = require('./test');

function test() {
    DB.find('users',{},{name:1}).then((result) =>{
        console.log(result)
    }).catch((err) =>{
        console.error(err)
    })
}

test()