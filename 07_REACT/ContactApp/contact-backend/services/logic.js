//1 import db.js file

const db = require('./db')


//here we define all the\ functions (login)


//1 Get all employees from the database (mongodb)

const getContacts =()=>{

    return db.ContactApp.find().then(
        (result)=>{ //All employees details
            if(result)
            {
                return {
                    statuscode:200,
                    contact:result
                }
            
            }
            else{

                return{
                    statuscode:404,
                    message:'No data found'
                }
            }


        }
    )
}

//view 


const viewContacts =(id)=>{

    return db.ContactApp.findOne({id}).then(
        (result)=>{ //All employees details
            if(result)
            {
                return {
                    statuscode:200,
                    contact:result
                }
            
            }
            else{

                return{
                    statuscode:404,
                    message:'No data found'
                }
            }


        }
    )
}


//add contacts

const addContacts =(id,name,address,phonenumber,email)=>{

    // Check if the employee already exist
        return db.ContactApp.findOne({id}).then((result)=>{
    
            if(result)
            {
                return{
                    statuscode:401,
                    message:'employee already exist'
                }
            }
            else
            {
                //otherwise save the employye details
                const contactData =  new db.ContactApp({id,name,address,phonenumber,email})
    
                // save the employee details
    
                contactData.save()
    
                //send to the backend client
    
                return {
                    statuscode:200,
                    message:'Employee added successfully'
                }
            }
        })
    }


//4 delete the employee details
const deleteContacts=(id) =>{
    return db.ContactApp.deleteOne({id}).then((result)=>{
        if(result){
            return{
                statuscode:200,
                message:'Employee deleted successfully'
            }
        }
        else{
            return{
                statuscode:404,
                message:'No such employee'
            }
        }
    })
}
//5 update employee details

const updateContacts =(id,name,address,phonenumber,email)=>{

    return db.ContactApp.findOne({id}).then((response)=>{ //response=old employee details

        if(response){
           //assign the new employee details into the db
            response.id = id;
            response.name = name;
            response.address = address;
            response.phonenumber = phonenumber;
            response.email = email;
            //to save update employee details into the database
            response.save();
            return{
                statuscode:200,
                message:'Contacts updated successfully'
            }
        }else{

            return{
                statuscode:404,
                message:'No such contacts'
            }
        }
    })
}
module.exports={

    getContacts,
    viewContacts,
    addContacts,
    deleteContacts,
    updateContacts

}