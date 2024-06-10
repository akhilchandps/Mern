
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/contactapp')

const ContactApp = mongoose.model('ContactApp',{
    id:String,
    name:String,
    address:String,
    phonenumber:String,
    email:String
    
    
})

module.exports ={
    ContactApp
}