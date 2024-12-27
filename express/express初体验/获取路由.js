const express = require('express')

const app = express()

app.get('/:id.html',(req,res)=>{
  res.setHeader('conten-type','text/html;charset=utf-8')
  console.log(req.params.id);
  
  res.send('商品详情')
})
app.listen(9000,()=>{
  console.log('服务已经启动');
  
})