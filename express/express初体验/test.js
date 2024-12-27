const express = require('express')
const {singers} = require('./singers.json')
console.log(singers);

const app = express()

app.get('/singers/:id.html',(req,res)=>{
  res.setHeader('conten-type','text/html;charset=utf-8')
  //获取id
  let {id} = req.params
  let result = singers.find(item => {
    if(item.id === Number(id)){
      return true
    }
  })
  if(!result){
    res.statusCode = 404
    res.end('<h1>404 Not Found</h1>')
    return
  }
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h2>${result.singer_name}</h2>
      <img src="${result.singer_pic}">
    </body>
    </html>
    `)
})
app.listen(9000,()=>{
  console.log('服务已经启动');
  
})