import { Link, useNavigate } from "react-router-dom"
import { loginAPI, registerAPI } from "../Services/AllAPi"
import { useState } from "react"
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({register}) {
    const navigate = useNavigate()
const [userData,setUserData]= useState({
    username:"",
    email:"",
    password:""
})





const handleRegsiter=async()=>{
  
    if(!userData.email || !userData.email || !userData.password){
       
        Swal.fire({
            title: 'Warning',
            text: 'please fill your form properly..!',
            icon: 'warning',
            confirmButtonText: 'Back'
          })
    }
    else{
        const result = await registerAPI(userData)
        console.log(result);

        if(result.status == 200){
         
            Swal.fire({
                title: 'Success',
                text: 'Successfully Registered',
                icon: 'success',
                confirmButtonText: 'Back'
              })

              navigate('/login')

        }
       else if(result.response.status == 406)
        {
            Swal.fire({
                title: 'Error',
                text: result.response.data,
                icon: 'error',
                confirmButtonText: 'Back'
              })

              
        }
    }
  
}

const handleLogin = async()=>{
if(!userData.email || !userData.password){

    Swal.fire({
        title: 'Warning',
        text: 'please fill your form properly..!',
        icon: 'warning',
        confirmButtonText: 'Back'
      })
}
else{
    const result = await loginAPI(userData)
    console.log(result);

    if(result.status == 200){
    
        Swal.fire({
            title: 'Success',
            text: 'Login Successfull',
            icon: 'success',
            confirmButtonText: 'Back'
          })
          setUserData({
            email:"",
            password:""
          })

          navigate('/')
    }
    else if(result.response.status == 401){

        Swal.fire({
            title: 'Error',
            text: result.response.data,
            icon: 'error',
            confirmButtonText: 'Back'
          })
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
          
                <input type="text" className="form-control my-3" onChange={e=>setUserData({...userData,email:e.target.value})}  placeholder="email"/>
                <input type="password" className="form-control mt-3" onChange={e=>setUserData({...userData,password:e.target.value})}  placeholder="password"/>
                </form>
            </div>
           <div className="text-center">
            {
                register? <button className=" btn btn-primary my-3" onClick={handleRegsiter}>ReGISTER</button>:
                <button className=" btn btn-primary my-3" onClick={handleLogin}>LOGIN</button>
            }
           
            {
               register? <p className="mt-3">Already Registered?  <Link to={'/login'}>login Here</Link></p>:
               <p className="mt-3">Don't Have an account <Link to={'/register'}>Register Here</Link></p>
            }
          
           </div>


        </div>
        <ToastContainer />
    </div>
  )
}

export default Auth