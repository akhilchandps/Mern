const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    accountnumber:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
    ,balance: {
        type: Number,
        required: true,
        default: 0
    }


})

const User = mongoose.model("User", userScheme)
module.exports =User
