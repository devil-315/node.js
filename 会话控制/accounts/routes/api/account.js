var express = require('express');
//导入jwt
const jwt = require('jsonwebtoken')
//导入中间件
const checkTokenMiddleware = require('../../middlewares/checkTokenMiddleware')

var router = express.Router();

//导入moment
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');

//记账本的列表
router.get('/account',checkTokenMiddleware, function(req, res, next) {
  // console.log(req.user);
  
    //读取所有的账单信息
    AccountModel.find().sort({time: -1})
    .then((data) => {
      res.json({
        //响应编号
        code: '0000',
        //响应信息
        msg: '读取成功',
        //响应结果
        data: data
      })
      .catch((err)=>{
        res.json({
          code: '1001',
          msg:'读取失败',
          data: null
        })
      })
    })
})


//添加记录
router.get('/account/create',checkTokenMiddleware, function(req, res, next) {
  res.render('create')
});

//新增记录
router.post('/account',checkTokenMiddleware,(req,res) => {
  //插入数据库
  AccountModel.create({
    ...req.body,
    //修改time 属性的值
    time: moment(req.body.time).toDate()
  })
  .then((data) => {
    //成功提醒
    res.json({
      code:'0000',
      msg:'添加成功',
      data:data
    })
  })  
  .catch((err) => {
    res.json({
      code:'1002',
      msg:'添加失败',
      data:null
    })
  })
})

//删除记录
router.delete('/account/:id',checkTokenMiddleware,(req,res) => {
  //获取params 的 id 参数
  let id = req.params.id
  //删除
  AccountModel.deleteOne({_id:id})
  .then((...a) => {
    res.json({
        code: "0000",
        msg: "删除成功",
        data: {},
    })
  })
  .catch((err) => {
      res.json({
          code: "1003",
          msg: "删除失败",
          data: null,
      });
  });
})

//获取单个账单
router.get('/account/:id',checkTokenMiddleware,(req,res) => {
  let id = req.params.id
  AccountModel.findById(id)
  .then((data) => {
    res.json({
      code:'0000',
      msg: '查询成功',
      data: data
    })
  })
  .catch((err)=>{
    res.json({
      code:'1004',
      msg:'查询失败',
      data:null
    })
  })
})

//更新账单
router.patch('/account/:id',checkTokenMiddleware,(req,res) => {
  let id =req.params.id
  AccountModel.updateOne({_id:id},req.body)
  .then((data)=>{
    AccountModel.findById(id)
    .then((data) => {
      res.json({
        code:'0000',
        msg: '更新成功',
        data: data
      })
    })
  })
  .catch((err)=>{
    res.json({
      code:'1005',
      msg:'更新失败',
      data:null
    })
  })
})
module.exports = router;