var express = require('express');
var router = express.Router();
//导入用户模型
const UserModel = require('../../models/UserModel')
//MD5
const md5 = require('md5')
//region 注册（页面）
router.get("/reg", (req, res) => {
    //响应html
    res.render("auth/reg");
});

//注册用户
router.post("/reg", (req, res) => {
  //获取请求体的数据
  // console.log(req.body);
  UserModel.create({...req.body,password: md5(req.body.password)})
  .then((data) => {
    res.render('success',{msg:'注册成功',url:'/login'})
  })
  .catch((err) => {
    res.status(500).send('注册失败')
  })
});

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
      return res.send('账号或密码错误')
    }
    //写入session
    req.session.username = data.username
    req.session.password = data.password
    //登录成功响应
    res.render('success',{msg:'登录成功',url:'/account'})
  })
  .catch((err) => {
    res.status(500).send('登录失败')
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