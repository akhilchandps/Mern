//To connect  node with mongodb 
// we need to install mongoose - npm  i mongoose     

//1. import mongoose

const mongoose = require('mongoose')

//2. to connect node with mongodb

mongoose.connect('mongodb://localhost:27017/ems')

//3. create model and schema
 //model-collection(employees)
 //schema - fields (id,String
 
 const Employee = mongoose.model('Employee',{

     id:String,
     name:String,
     age:String,
     designation:String,
     salary:String

 })

 module.exports ={

    Employee                                                                                                                                                                    
 }