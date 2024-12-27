const express = require('express')
const bodyParser = require('body-parser');

const app = express()

//处理 JSON 格式的请求体
let jsonParser = bodyParser.json();

//处理 querystring 格式的请求体
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/login',(req,res)=>{
  res.sendFile(__dirname + '/form.html')
})

app.post('/login',urlencodedParser,(req,res)=>{
  console.log(req.body);
  res.send('1')
  
})

app.listen(9000,()=>{
  console.log('服务启动成功');
  
})