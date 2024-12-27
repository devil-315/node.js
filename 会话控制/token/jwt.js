//导入 jwt
const jwt = require('jsonwebtoken')

//创建 token
// const token = jwt.sign(用户数据,加密字符串,配置对象)
// const token = jwt.sign({
//   username:'devil'
// },'hello token',{
//   expiresIn: 60,//单位是秒
// })

// console.log(token);

let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRldmlsIiwiaWF0IjoxNzMxNzQxMDMxLCJleHAiOjE3MzE3NDEwOTF9.ySSKb4gTkm68GmvIl2VptDYyY1dJ8gZTBjJce6aMIEI'

//校验token
jwt.verify(t,'hello token',(err,data)=>{
  if(err){
    console.log('登录失败');
    return
  }
  console.log(data);
  
})