import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoute.js'
import userRoute from './Routes/UserRoute.js'

import ChatRoute from './Routes/ChatRoute.js';
import MessageRoute from './Routes/MessageRoute.js'


//Routes


const app= express();

//Middileware
app.use(bodyParser.json({limit: "30mb" , extended:true}))

app.use(bodyParser.urlencoded({limit: "30mb" , extended:true}))


dotenv.config()

mongoose.connect(process.env.MONGO_DB,{ useNewUrlParser: true, useUnifiedTopology: true }).
then(()=>app.listen(process.env.PORT, ()=> console.log(`Listening on the port ${process.env.PORT}`))).catch((error)=>console.log(error));

//usage of route
app.use('/auth', AuthRoute)
app.use('/user', userRoute)

app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)