const MongoClient = require('mongodb').MongoClient;
const config = require('../system_modules/database/dbconfig')
// const dbUrl ='mongodb://'+config.username+':'+config.pwd+'@'+config.host+':'+config.port+'/'+config.dbname;
const dbUrl ='mongodb://'+config.host+':'+config.port+'/'+config.dbname;


const connectDB=()=>{
    return MongoClient.connect(dbUrl).then((db)=>{
        console.log('Connect Success!');
        return db;
    }).catch((err)=>{
        console.log('Connect Failed');
        return '';
    })
}

exports.findOne = (collectionname,condition,columns) =>{
    return connectDB().then((db)=>{
        const DB = db.db(config.dbname);
        const collections = DB.collection(collectionname);
        const result = collections.findOne(condition,columns);
        db.close();
        return result;
    });
};

exports.find = (collectionname,condition,columns)=> {
    return connectDB().then((db)=>{
        const DB = db.db(config.dbname);
        const collections = DB.collection(collectionname);
        const result = collections.find(condition,columns).toArray();
        db.close();
        return result;
    });
};

exports.insertOne = function(collectionname,json){
    return connectDB().then((db)=>{
        const DB = db.db(config.dbname);
        const collection = DB.collection(collectionname);
        const result = collection.insertOne(json);
        db.close();
        return result;
    })
};
