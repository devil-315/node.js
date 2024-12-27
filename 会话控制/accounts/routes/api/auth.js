var express = require('express');
var router = express.Router();
//导入jwt
const jwt = require('jsonwebtoken')
//导入配置文件
const {secret} = require('../../config/config')
//导入用户模型
const UserModel = require('../../models/UserModel')
//MD5
const md5 = require('md5')

//登录
router.get("/login", (req, res) => {
  //响应html
  res.render("auth/login");
});

router.post("/login", (req, res) => {
  //获取用户名和密码
  let {username,password} = req.body  
  //查询数据库
  UserModel.findOne({username:username,password:md5(password)})
  .then((data)=>{
    if(!data){
      return res.json({
          code:'2002',
          msg:'用户名或密码错误',
          data:null
      })
    }
    //创建token
    let token = jwt.sign({
      username:data.username,
      _id:data._id
    },secret,{
      expiresIn: 60*60*24*7 //7天
    })

    //响应token
    res.json({
      code:'0000',
      msg:'登录成功',
      data:token
    })
  })
  .catch((err) => {
    res.json({
      code:'2001',
      msg:'数据库读取失败',
      data:null
    })
  })
});

//退出登录
router.post('/logout',(req,res)=>{
  //销毁session
  req.session.destroy(()=>{
    res.render('success',{msg:'销毁成功',url:'/login'})
  })
})

module.exports = router;