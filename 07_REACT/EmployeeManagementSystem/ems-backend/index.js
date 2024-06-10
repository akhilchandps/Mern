//1 import express

const express = require('express')

//2 import cors

const cors =  require('cors')


const logic = require('./Services/logic')

// const logic =require('./Services/logic')

//3 create a backend app using express

const emsServer = express() //Creates an Express application. The express() function is a top-level function exported by the express module.

//4. connect frontend port using cors

emsServer.use(cors({
    origin:'http://localhost:5173'
}))

//5 convert jason data into js

emsServer.use(express.json())

//6 create a port for back end

emsServer.listen(8000,()=>{
    console.log("emsServer listening on port 8000");
})


//https:localhost:8000/api/get-all-employee
emsServer.get('/',(req,res)=>{
    res.send('hello world')
})

//http://localhost:8000/api/get-all-employee

emsServer.get('/api/get-all-employee',(req,res)=>{
    logic.getEmployees().then((response)=>{
        res.status(response.statuscode).json(response)
    })
})


//http://localhost:8000/api/view-employee/54676

emsServer.get('/api/view-employee/:id',(req,res)=>{
    logic.ViewEmployee(req.params.id).then((response)=>{
        res.status(response.statuscode).json(response)
    })
})


//http://localhost:8000/api/add-employee

emsServer.post('/api/add-employee',(req,res)=>{

    logic.addEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).
    then((response)=>{
        res.status(response.statuscode).json(response)
    })

})

//http://localhost:8000/api/delete-employee/890

emsServer.delete('/api/delete-employee/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((response)=>{
        res.status(response.statuscode).json(response)
    })
})


//http://localhost:8000/api/update-employee/890

emsServer.post('/api/update-employee/:id',(req,res)=>{
    logic.updateEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary)
    .then((response)=>{
        res.status(response.statuscode).json(response)
    });
})