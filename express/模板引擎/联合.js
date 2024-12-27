const express = require('express')
const path = require('path')

const app = express()

//设置模板引擎
app.set('view engine','ejs')
//设置模板文件的存放位置
app.set('views',path.resolve(__dirname,'./views'))

app.get('/home',(req,res)=>{
  // res.render('模板的文件名','数据')
  let title = '大魔王'
  res.render('home',{title})
  //创建模板文件
})

app.listen(9000,() => {
  console.log('服务已经启动');
})