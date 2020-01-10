const DB = require('./test');

function test() {
    DB.find('users',{},{}).then((result) =>{
        console.log(result)
    }).catch((err) =>{
        console.error(err)
    })
}
