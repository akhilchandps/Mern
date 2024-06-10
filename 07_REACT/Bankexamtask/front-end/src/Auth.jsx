import { Link, useNavigate } from "react-router-dom"
import { loginAPI, registerAPI } from "../Services/AllAPi"
import { useState } from "react"



function Auth({register}) {
   const navigate=useNavigate()
const [userData,setUserData]= useState({
    username:"",
    accountnumber:"",
    password:""
})



const handleRegsiter=async()=>{
  
    if(!userData.username || !userData.accountnumber || !userData.password){
       
        alert("please enter the field")
    }
    else{
        const result = await registerAPI(userData)
        console.log(result);

        if(result.status == 200){
         
         alert("registration successfull")
         navigate('/')

        }
       else if(result.response.status == 406)
        {
          alert(result.response.data)
          navigate('dashboard')
        }
    }
  
}

const handleLogin = async()=>{
if(!userData.accountnumber || !userData.password){

    alert("please enter the filed")
}
else{
    const result = await loginAPI(userData)
    console.log(result);

    if(result.status == 200){
        alert("Login Successfull")
        navigate('dashboard')
    }
    else if(result.response.status == 401){

        alert(result.response.data)
    }



}
    
}

  return (
    <div className="container-fluid" >
        <div className=" rounded-3 col-md-5 p-5 m-auto shadow" style={{position:"relative",top:"50px"}}>
            <h3 className="text-center">{
                register? "REGISTER":"LOGIN"
            }</h3>
            <div>
                <form>
                    {
                          register&&
                        <input type="text" className="form-control my-3" onChange={e=>setUserData({...userData,username:e.target.value})}  placeholder="username"/>
                    }
          
                <input type="text" className="form-control my-3" onChange={e=>setUserData({...userData,accountnumber:e.target.value})}  placeholder="accountnumber"/>
                <input type="password" className="form-control mt-3" onChange={e=>setUserData({...userData,password:e.target.value})}  placeholder="password"/>
                </form>
            </div>
           <div className="text-center">
            {
                register? <button className=" btn btn-primary my-3" onClick={handleRegsiter}>ReGISTER</button>:
                <button className=" btn btn-primary my-3" onClick={handleLogin}>LOGIN</button>
            }
           
            {
               register? <p className="mt-3">Already Registered?  <Link to={'/'}>login Here</Link></p>:
               <p className="mt-3">Don't Have an account <Link to={'register'}>Register Here</Link></p>
            }
          
           </div>


        </div>
       
    </div>
  )
}

export default Auth