
const mongoose = require('mongoose');

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("MongoDb atlas Connection estabilished")
}).catch((error)=>{
    console.log("connection failed",error);
})