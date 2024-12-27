const db = require('./db/db')
const mongoose = require('mongoose')
const BookModel = require('./models/BookModel')

db(()=>{
  BookModel.find().select({name:1,price:1,_id:0}).sort({price: 1}).skip(2).limit(3)
  .then((data) => {
    console.log(data);
  })

})