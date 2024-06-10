require('dotenv').config();

const express = require('express');

const cors = require('cors');

const router = require('./Routes/router')
const pfServer = express()

const db = require('./DB/connection')
pfServer.use(cors())


pfServer.use(express.json())

pfServer.use(router)

PORT = 4000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log("pfserver listening on the port ", +PORT);
})

// Assuming pfServer is your Express.js app
pfServer.get('/', (req, res) => {
    res.send("hello how are you");
});
