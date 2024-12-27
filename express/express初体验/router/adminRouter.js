const express = require('express')

const router = express.Router()

router.get('/login',(req,res)=>{
  res.send('登录成功')
})

router.all('/test',(req,res)=>{
  res.send('test')
})



module.exports = router