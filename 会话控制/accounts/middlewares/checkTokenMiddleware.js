//导入jwt
const jwt = require('jsonwebtoken')
const {secret} = require('../config/config')
module.exports = (req,res,next)=>{
  //获取token
  const token = req.get('token')
  //判断
  if(!token){
    return res.json({
      code:'2003',
      msg:'token缺失',
      data:null
    })
  }
  //校验jwt
  jwt.verify(token,secret,(err,data)=>{
    if(err){
      return res.json({
        code:'2004',
        msg:'token校验失败',
        data:null
      })
    }
    //保存用户信息
    req.user = data
    //如果token校验成功
    next()
  })
}