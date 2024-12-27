const express = require('express')

const app =express()

//声明中间件
app.use((req,res,next) => {
  //检测请求头中的referer 是否为127.0.0.1
  let referer = req.get('referer')
  if(referer){
    let url = new URL(referer)
    let hostname = url.hostname
    // console.log(hostname);
    
    if(hostname !== '127.0.0.1'){
      res.status(404).send('<h1>404</h1>')
      return
    } 
  }
  next()
})

app.use(express.static(__dirname + '/public'))


app.listen(9000,()=>{
  console.log('服务启动成功');
  
})