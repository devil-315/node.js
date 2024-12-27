  //2. 导入 mongoose
  const mongoose = require('mongoose');

  //5. 创建文档的结构对象
  //设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
  });

  //6. 创建模型对象  对文档操作的封装对象
  let BookModel = mongoose.model('novel', BookSchema);

  //暴露模型对象
  module.exports = BookModel