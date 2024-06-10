//1 import db.js file

const db = require('./db')


//here we define all the\ functions (login)


//1 Get all employees from the database (mongodb)

const getEmployees =()=>{

    return db.Employee.find().then(
        (result)=>{ //All employees details
            if(result)
            {
                return {
                    statuscode:200,
                    employees:result
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

const ViewEmployee =(id)=>{
return db.Employee.findOne({id}).then((result)=>{

    if(result)
    {
        return{
            statuscode:200,
            employees:result
        }
    }
    else{

        return{
            statuscode:404,
            message:'No data found'
        }

    }
})

}

//3. Add new employees to the database


const addEmployee =(id,name,age,designation,salary)=>{
// Check if the employee alfready exist
    return db.Employee.findOne({id}).then((result)=>{

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
            const employeeData =  new db.Employee({id,name,age,designation,salary})

            // save the employee details

            employeeData.save()

            //send to the backend client

            return {
                statuscode:200,
                message:'Employee added successfully'
            }
        }
    })
}

//4 delete the employee details
const deleteEmployee=(id) =>{
    return db.Employee.deleteOne({id}).then((result)=>{
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

const updateEmployee =(id,name,age,designation,salary)=>{

    return db.Employee.findOne({id}).then((response)=>{ //response=old employee details

        if(response){
           //assign the new employee details into the db
            response.id = id;
            response.name = name;
            response.age = age;
            response.designation = designation;
            response.salary = salary;
            //to save update employee details into the database
            response.save();
            return{
                statuscode:200,
                message:'Employee updated successfully'
            }
        }else{

            return{
                statuscode:404,
                message:'No such employee'
            }
        }
    })
}








module.exports={
    getEmployees,
    ViewEmployee,
    addEmployee,
    deleteEmployee,
    updateEmployee

}