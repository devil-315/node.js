const express = require('express')

const router = express.Router()

router.get('/home',(req,res)=>{
  res.send('hello express')
})

router.get('/search',(req,res)=>{
  res.send('search')
})

module.exports = router