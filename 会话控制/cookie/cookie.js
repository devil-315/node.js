const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/set-cookie',(req,res) => {
  // res.cookie('name',"devil") //会在浏览器关闭时销毁
  res.cookie('name','lisi',{maxAge: 1* 60 * 1000})
  res.cookie('theme',"blue")
  res.send('Cookie的设置')
})

//删除cookie
app.get('/remove-cookie',(req,res)=>{
  res.clearCookie('name')
  res.send('删除成功~')
})

//获取cookie
app.get('/get-cookie',(req,res)=>{
  console.log(req.cookies);
  res.send('获取cookie')
})
app.listen(3000)