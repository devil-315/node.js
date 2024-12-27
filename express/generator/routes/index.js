var express = require('express');
var router = express.Router();

//导入
const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//显示网页
router.get('/portrait',(req,res) => {
  res.render('portrait')
})

router.post('/portrait',(req,res) => {
  //创建form对象
  // const form = formidable({
  //   multiples: true ,
  //   //设置上传文件的保存目录
  //   uploadDir: __dirname + '/../public/images',
  //   //保持文件后缀
  //   keepExtensions: true
  // });
  let form = new formidable.IncomingForm({
    multiples: true,
    uploadDir: __dirname + '/../public/images',
    keepExtensions: true
  });

  //解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err)
      return
    }
    console.log(fields);// text  radio  checkbox  select
    console.log(files);//file

    //服务器保存该图片的访问url
    let url = '/images/' + files.portrait.newFilename

    res.send(url)
  })
})
module.exports = router;
