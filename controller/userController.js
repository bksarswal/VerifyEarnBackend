

const bcrypt= require('bcrypt');


const userSchema =require('../schema/userSchema')

const { now } = require('mongoose');

exports.ragister =(req,res)=>{


   

  const {name, mobile,email ,password}= req.body;
  
  
  
  if(!password){
  
      res.send('password is required ')
  }
  else{
  
  
  bcrypt.genSalt(10,function(err,salt){
      if(err){
  res.status(500).send({status:500, message:"err in gansoult " })
      }
  else{
  
      
      bcrypt.hash(password, salt,function(err,hash){
  
          if(err){
  
  
              res.status(500).send({status:500,message:"ERR in hasing password"})
          }
          else{
  
         
              userSchema.insertMany({name:name,email:email,mobile : mobile ,password:hash,role:"user"}).then((result)=>{
                 
  
  
  
                  res.status(201).send({status:201,message:"user created successfully"})
              }).catch((err)=>{
  
  
                  
            
  console.log(err.message);
  
  
               if(err.name =='ValidationError'){
  
                  res.status(500).send({  status:500,message:` ${err.message.split(':')[1]} is require`})
  
  
               }else if(err.name =='MongoBulkWriteError'){
  
         let value= err.message;
         let split =value.split(':')
  
                  res.status(500).send( {status:500,message:`   ${split[3].replace('{',"")} : ${ split[4].replace("}","")}is   allready exist `});
               }
               else{
  
                  res.send("some thing went wrong");
               }
              
              })
  
          }
      })
  }
  
  })
  }
  
  }








     