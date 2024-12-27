const ejs = require('ejs')
const fs =require('fs')

let str = fs.readFileSync('./1.html').toString()
let china = '中国'
let weather = '晴天'

let result = ejs.render(str,{china: china,weather}) //{china: china} 可以简写 为  {china}
console.log(result);
