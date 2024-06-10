
const { default: mongoose } = require('mongoose');
const users = require('../Models/UserModel')

exports.addUser = async(req,res)=>{

    const {id,name,cuisine, ingredients, rating,image} = req.body
    console.log(id,name,cuisine, ingredients, rating,image);

try {
    const existingUser = await users.findOne({id})
     
    if(existingUser){

        res.status(406).json("user id already exist")
    }
    else{
        const newRecipie = new users({
            id,
            name,
            cuisine, 
            ingredients, 
            rating,
            image
        })

        await newRecipie.save()
        res.status(200).json(newRecipie)

    }
} catch (err) {

   
    res.status(500).json({message:err.message})
}
}

//h=get recipie

exports.getRecipie = async(req,res)=>{
    const searchKey = req.query.search //step 4 search
    console.log(searchKey);

    const query={
        name:{$regex:searchKey,$options:"i"}
    }

   try{
        const ARecipie = await users.find(query)
        if(ARecipie){
            res.status(200).json(ARecipie)
        }
        else{
            res.status(401).json("can't find recipies")
        }
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
}

//get specifi user product


exports.getuserRecipie = async(req,res)=>{

    const {id}= req.params
    try{
         const ARecipie = await users.findOne({id})
         if(ARecipie){
             res.status(200).json(ARecipie)
         }
         else{
             res.status(401).json("can't find user recipie")
         }
     }
     catch(err){
         res.status(401).json({message:err.message})
     }
 }
 