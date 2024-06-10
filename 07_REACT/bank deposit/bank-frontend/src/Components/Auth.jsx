import { Link } from "react-router-dom"



function Auth({register}) {
  return (
    <div className="container">
        <div className=" col col-lg-5 m-auto p-5">
        {
            register?   <h1 className="text-center">Register</h1>:<h1 className="text-center">login</h1>
        }
        
          <div>
            <form>
            {
                register && <input type="text" className="form-control my-3" placeholder="username"/>
            }
           
            <input type="text" className="form-control my-3"  placeholder="email"/>
            <input type="text"  className="form-control"  placeholder="password"/>
            </form>
          </div>
{
    register ? 
    <div className="text-center mt-3">
    <button className="btn btn-primary">Register</button>
  </div>:
   <div className="text-center mt-3">
   <button className="btn btn-primary">login</button>
 </div>
}
    <div className="text-center mt-3">
        {
   register?<p>Already have an account<Link to={'/'}> login</Link> </p>: <p>dont have an account <Link to={'register'}>Register</Link></p>

        }
    
        </div>   
         
        </div>
    </div>
  )
}

export default Auth