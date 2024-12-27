const express = require('express')

const app = express()


app.use(express.static(__dirname + '/public'));


app.get('/home',(req,res)=>{
  res.send('前台首页')
})

app.listen(9000,()=>{
  console.log('服务已经启动');
  
})