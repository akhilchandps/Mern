const jwt = require('jsonwebtoken');
const users = require("../Models/userModel")
const bcrypt = require('bcryptjs');
const generateToken = require('../JwtToken/JwtWebToken');



exports.register =  async(req,res) =>{
  const {fullname,username,password,confirmPassword,gender}=req.body
  console.log(fullname,username,password,confirmPassword,gender);
        //1 accepts data from client
    
        try{
       
     //Checks if the email is already exist
    if(password !== confirmPassword){

      return res.status(400).json({error:"password dont match"})
    }
     const existingUser = await users.findOne({username})
     console.log(existingUser);
    
     if(existingUser){
        return res.status(406).json("user Already registered")
     }
     
     const salt = await bcrypt.genSalt(10);
     const hashPassword = await bcrypt.hash(password,salt)

     const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`
     const girlProfilePic = `https://avatar.iran.liara.run/public/girlId?username=${username}`

         const newUser = new users({
          fullname,
          username,
          password:hashPassword,
          gender,
          profilePic: gender === 'male'? boyProfile : girlProfilePic
         })
   
              if(newUser){
         generateToken(newUser._id, res)          
         await  newUser.save()
         
         res.status(201).json({
          _id: newUser._id,
          fullname:newUser.fullname,
          username:newUser.username,
          profilePic:newUser.profilePic
         })
              }
              else{
                res.status(400).json({error:"invalid userdata"})
              }

        } catch(error){
           console.log("Error in sign up", error.message);
            res.status(500).json({error:"Register failed..."})
        }
    } 



    //login logic

exports.login = async(req,res)=>{

    const {username,password} = req.body;
  try{
    const existingUser = await users.findOne({username})
  const isPasswordcorrect = await bcrypt.compare(password,existingUser?.password || "")

 if(!existingUser || !isPasswordcorrect){
  return res.status(400).json({error:"invalid username or password"})
 }

 generateToken(existingUser._id, res) 

 res.status(200).json({
  _id: existingUser._id,
  fullname:existingUser.fullname,
  username:existingUser.username,
  profilePic:existingUser.profilePic
 })

  }
   catch(error){
  
    console.log("Error in login controller", error.message);
    res.status(500).json({error:"internal server error..."})
   }
  
  }


  exports.logout = (req,res)=>{
 
    try {

      res.cookie("jwt", "", {maxAge:0}),
      res.status(200).json({message:"logged out successfully"})
      
    } catch (error) {
      console.log("Error in logout controller", error.message);
      res.status(500).json({error:"internal server error..."})
    }

  }
    