const express = require('express')

const app = express()

app.get('/home',(req,res)=>{
  res.end('hello express')
})

app.get('/',(req,res)=>{
  res.send('home')
  // res.end('hello express')
})

app.post('/login',(req,res)=>{
  res.send('登录成功')
})

app.all('/test',(req,res)=>{
  res.send('test')
})

app.all('*',(req,res)=>{
  res.send('404')
})
app.listen(9000,()=>{
  console.log('服务已经启动');
  
})