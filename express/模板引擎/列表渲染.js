const ejs = require('ejs')
const xiyou = ['唐僧','孙悟空','猪八戒','沙僧'];
const fs= require('fs')
//原生js
// let str = '<ul>'

// xiyou.forEach(item => {
//   str += `<li>${item}</li>`
// })

// str += '</ul>'
// console.log(str);

//ejs
let html = fs.readFileSync('./2.html').toString()
let result = ejs.render(html,{xiyou})
console.log(result);
