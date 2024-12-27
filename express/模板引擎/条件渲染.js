const ejs = require('ejs')
const fs = require('fs')
let isLogin = false

let html = fs.readFileSync('./3.html').toString()

let result = ejs.render(html,{isLogin})
console.log(result);

