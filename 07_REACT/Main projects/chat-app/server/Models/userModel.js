

const mongoose = require('mongoose')



const userSchema =  new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female']
    },
    profilePic:{
        type:String,
     
      
    },

},{timestamps:true})


// 3. create model

const users = mongoose.model('users',userSchema)
module.exports = users;