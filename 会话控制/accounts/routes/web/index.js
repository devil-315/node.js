var express = require('express');
//导入moment
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');

//导入中间件
const checkLoginMiddleware = require('../../middlewares/checkLoginMiddleware')

//创建路由对象
const router = express.Router();

//添加首页的路由规则
router.get('/',(req,res)=>{
  res.redirect('/account')
})
//记账本的列表
router.get('/account',checkLoginMiddleware, function(req, res, next) {
  //读取所有的账单信息
  AccountModel.find().sort({time: -1})
  .then((data) => {
    res.render('list',{accounts:data,moment:moment})
  })
});

//添加记录
router.get('/account/create',checkLoginMiddleware, function(req, res, next) {
  res.render('create')
});

//新增记录
router.post('/account',checkLoginMiddleware,(req,res) => {
  // //获取请求头的数据
  // console.log(req.body);
  //插入数据库
  AccountModel.create({
    ...req.body,
    //修改time 属性的值
    time: moment(req.body.time).toDate()
  })
  .then((data) => {
    //成功提醒
    res.render('success',{msg:'添加成功哦~~~',url:'/account'})
  })  
  .catch((err) => {
    console.log(err);
    res.status(500).send('添加失败！')
  })
})

//删除记录
router.get('/account/:id',checkLoginMiddleware,(req,res) => {
  //获取params 的 id 参数
  let id = req.params.id
  //删除
  AccountModel.deleteOne({_id:id})
  .then((data) => {
    res.render('success', {msg: '删除成功~~~', url: '/account'});
  })
})

module.exports = router;
