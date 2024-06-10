import userModel from "../Models/userModel.js";

export const getUser = async(req,res)=>{
    const id = req.params.id

    try {
        const user = await userModel.findById(id);
        if(user){

            const {password, ...otherDetails}= user._doc
            res.status(200).json(otherDetails)
        }
        else{
            res.status(404).json("No such user exist");
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


//update user

//  export const updateUser = async(req,res)=>{

//       const id =req.params.id
//       const {currentUserId, currentUserAdminStatus,password} =req.body

// }