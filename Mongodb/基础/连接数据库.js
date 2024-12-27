const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/devil')

 //连接成功   once 一次   事件回调函数只执行一次
mongoose.connection.once('open',() => {
  //创建文档结构对象
  //设置集合中文档的属性已经属性值的类型
  let BookSchema = new mongoose.Schema({
    name: {
      type:String,
      required: true,
      unique: true
    },
    author: {
      type:String,
      default:'匿名',
    },
    style:{
      type:String,
      enum:['111','222']
    },
    price: Number,
    is_hot: Boolean,
    tags: Array,
    pub_time: Date,
  })

  //创建模型对象
  let BookModel = mongoose.model('books',BookSchema)

  //新增
  BookModel.create({
    name:'西游记',
    // author:'吴承恩',
    price:19.9,
    style: '111',
    is_hot: true,
    tags:['鬼怪','社会'],
    pub_time:new Date(),
  })
  .then((data) => {
    console.log(data);
    // 关闭数据库连接
    mongoose.disconnect();
  })
  .catch((err) => {
      console.log(err);
      console.log('插入错误');
      // 关闭数据库连接
      mongoose.disconnect();
  })
})

mongoose.connection.on('error',() => {
  console.log('连接失败');
})

mongoose.connection.on('close',() => {
  console.log('连接关闭');
})
