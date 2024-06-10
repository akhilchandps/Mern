const mongoose = require('mongoose')

const connectionString = process.env.DATABASE


mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb atlas connection  estabilished");
})
.catch((error)=>{
    console.log("Mongodb connection error",error);
})
