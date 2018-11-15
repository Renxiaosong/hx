const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const uri = 'mongodb://hx:12345678@127.0.0.1:27017/hx';

function test1() {
    const client = MongoClient.connection;
    const users = client.collection('users')
    /*MongoClient.connect(uri, function (err, db) {
            const collection = db.collection("users");
            //查询条件
            var where = {};
            collection.find(where).toArray(function (err, result) {
                if (err) {
                    console.log("error:" + err);
                    return;
                }
                ;
                console.log(result)
            });
            assert.equal(null, err);
            console.log('连接成功');
            db.close();
    });*/
    MongoClient.connect(uri).then((result) =>{
        
    }).catch((err)=>{
        console.error(err)
    })
}

test1()
