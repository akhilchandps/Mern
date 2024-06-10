
const express = require('express')

const cors =require('cors')

const logic = require('./services/logic')

const emsServer = express()

 emsServer.use(cors({
    origin:'http://localhost:5173'
}))

emsServer.use(express.json())

emsServer.listen(2000,()=>{
    console.log('emserver listening on port 2000 ');
})

emsServer.get('/',(req,res)=>{
    res.send('Hello world')
})


//http://localhost:8000/api/get-all-employee

emsServer.get('/api/get-all-contact',(req,res)=>{
    logic.getContacts().then((response)=>{
        res.status(response.statuscode).json(response)
    })
})

//View -http://localhost:8000/api/get-all-employee


emsServer.get('/view-contact/:id',(req,res)=>{
    logic.viewContacts(req.params.id).then((response)=>{
        res.status(response.statuscode).json(response)
    })
})


//Add-http://localhost:2000/api/add-contact

emsServer.post('/api/add-contact',(req,res)=>{

    logic.addContacts(req.body.id,req.body.name,req.body.address,req.body.phonenumber,req.body.email).
    then((response)=>{
        res.status(response.statuscode).json(response)
    })

})

//delete-http://localhost:2000/api/delete-employee/890

emsServer.delete('/api/delete-contact/:id',(req,res)=>{
    logic.deleteContacts(req.params.id).then((response)=>{
        res.status(response.statuscode).json(response)
    })
})


//updates-contact -http://localhost:8000/api/update-employee/890

emsServer.post('/api/update-contact/:id',(req,res)=>{
    logic.updateContacts(req.params.id,req.body.name,req.body.address,req.body.phonenumber,req.body.email)
    .then((response)=>{
        res.status(response.statuscode).json(response)
    });
})



