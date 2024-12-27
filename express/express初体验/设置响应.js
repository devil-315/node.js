const express = require('express')

const app = express()

app.get('/response',(req,res) => {
  //原生
  // res.statusCode = 404
  // res.statusMessage = 'love'
  // res.setHeader('xxx','yyy')
  // res.write('hello express')
  // res.end('response')

  //express 响应
  // res.status(500)
  // res.set('abc','haha')
  // res.send('你好')
  // res.status(200).set('666','nubi').send('ok啊')
  // res.redirect('https://www.baidu.com/')
  // res.json({
  //   name:'devil',
  //   slogon:'牛逼'
  // })
  res.sendFile(__dirname + '/singers.json')
})

app.listen(9000,() => {
  console.log('服务启动了');
  
})