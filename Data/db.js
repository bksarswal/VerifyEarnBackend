const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB_URL, {
    serverSelectionTimeoutMS: 30000, 
  })

const db =  mongoose.connection;

db.on('error', ()=>{


    console.log('something went wrong db not connect');
})
db.once('open',()=>{

    console.log('db successfully connected');
    console.log(process.env.DB_URL);
})

module.exports=db;
