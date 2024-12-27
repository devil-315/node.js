const express = require('express')
const homeRouter = require('./router/homeRouter')
const adminRouter = require('./router/adminRouter')
const app = express()

app.use(homeRouter)
app.use(adminRouter)

app.all('*',(req,res)=>{
  res.send('404')
})

app.listen(9000,()=>{
  console.log('服务已经启动');
  
})