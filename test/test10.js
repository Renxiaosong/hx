const Koa = require('koa');
const app = new Koa();
app.use(async (ctx,next) => {
    ctx.body = 'Hello Koa-1';
    let start = new Date();
    await next();
    console.log("time cost:",new Date()-start);
});
app.use(async (ctx,next) => {
    console.log(ctx.body,'2222')
    ctx.body = 'Hello Koa-2';
    //这里用了一个定时器表示实际的操作耗时
    await new Promise((resolve,reject)=>setTimeout(()=>{next();resolve();},2000));
});
app.use((ctx,next) => {
    console.log(ctx.body,'3333333')
    ctx.body = 'Hello Koa-3';
    next();
});
app.listen(3000);
