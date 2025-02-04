const express = require('express');

//1. 引入 express-session connect-mongo
const session = require("express-session");
const MongoStore = require('connect-mongo');

const app = express();

//2. 设置 session 的中间件
app.use(session({
    name: 'sid', //设置cookie的name，默认值是：connect.sid
    secret: 'devil', //参与加密的字符串（又称签名） 加盐
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
    resave: true, //是否在每次请求时重新保存session
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/devil' //数据库的连接配置
    }),
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000 * 60 * 5 // 这一条 是控制 sessionID 的过期时间的！！！ 5分钟
    },
}))

//登录
app.get('/login',(req,res)=>{
  if(req.query.username === 'devil' && req.query.password === '123456'){
    req.session.username = 'devil'
    req.session.password = '123456'
    res.send('登录成功')
  }else{
    res.send('登录失败')
  }
})

//session的读取
app.get('/cart',(req,res) => {
  if(req.session.username){
    res.send(`购物车页面，欢迎您${req.session.username}`)
  }else{
    res.send('请登录')
  }
})
//session的销毁
app.get('/logout',(req,res)=>{
  req.session.destroy(() => {
    res.send('退出成功~')
  })
})
app.listen(3000, () => {
    console.log('服务已经启动, 端口 ' + 3000 + ' 监听中...');
});