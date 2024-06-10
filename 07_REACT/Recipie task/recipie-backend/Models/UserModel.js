const mongoose= require('mongoose');

const AdduserSchema = new mongoose.Schema({
    
   id:{
     type:String,
     required:true,
     unique: true
   },
   name:{
    type:String,
    required:true,
   },
   cuisine:{
    type:String,
    required:true,
   },
   ingredients:{
    type:String,
    required:true,
   },
   rating:{
    type:String,
    required:true,
   },
   image:{
    type:String,
   
   }
   
})

const users = mongoose.model("users", AdduserSchema)
module.exports =users