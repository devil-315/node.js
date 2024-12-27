const express = require('express')

const app = express()

app.get('/request',(req,res)=>{
  console.log(req.method);
  console.log(req.url);
  console.log(req.httpVersion);
  console.log(req.headers);
  console.log(req.path);
  console.log(req.query);
  console.log(req.ip);
  console.log(req.get('host'));
  
  res.send('hello express')
})
app.listen(9000,()=>{
  console.log('服务启动了');
  
})