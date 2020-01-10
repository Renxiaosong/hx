/**
 * 单例模式
 *
 */
class db{

    static getInstance(){
        if(!db.instance){
            db.instance = new db();
        }
        return db.instance;
    }
    constructor(){
        console.log("创建数据库实例")
    }

    connect(){
        console.log('连接数据库')
    }

    find(){
        console.log('查询数据库')
    }


}

var db1 = db.getInstance();

var db2 = db.getInstance();

// db1.connect();
// db1.find();
//
// db2.connect();
// db2.find();

/**
 * 观察者模式
 */

//通过集成对象绑定一个事件

var util = require('util');
var events = require('events');

var Anythin = function (name) {
    this.name = name;
}

util.inherits(Anythin,events.EventEmitter);

//创建一只猫
var cat = new Anythin('黑猫');
//绑定事件
cat.on('activity',function(activity){
    console.log(this.name + activity )
})

//创建一只老鼠
var mouse = new Anythin('老鼠')
//绑定事件
mouse.on('activity',function(activity){
    console.log(this.name + activity)
})

//创建屋子的主人
var person = new Anythin('屋主')
//绑定事件
person.on('activity',function(activity){
    console.log(this.name + activity)
})

//创建一个婴儿
var baby = new Anythin('婴儿');
//绑定事件
baby.on('activity',(activity)=>{
    console.log(baby.name+activity)
})

console.log('夜深了，主人一家正在睡觉。。。。。')
console.log('黑猫盯着洞口。。。。。。')

setTimeout(()=>{
    console.log('黑猫坚持不住了')
    // cat.emit('activity','睡着了')
    mouse.emit('activity','出洞了')
    person.emit('activity','醒了')
    baby.emit('activity','哭了')
    cat.emit('activity','抓住老鼠')
},3000)
