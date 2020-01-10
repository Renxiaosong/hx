const config = require('./dbconfig');
const mongoose = require('mongoose');
const autoinc    = require('mongoose-id-autoinc');


// const  uri = 'mongodb://'+config.username+':'+config.pwd+'@'+config.host+':'+config.port+'/'+config.dbname;
const  uri = 'mongodb://'+config.host+':'+config.port+'/'+config.dbname;
mongoose.connect(uri);

//数据库连接
const db = mongoose.connection;
autoinc.init(db);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('已经连接到数据库');
});


module.exports = mongoose;


