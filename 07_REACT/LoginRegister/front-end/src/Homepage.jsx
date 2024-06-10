import { Link } from "react-router-dom"

function Homepage() {
  return (
    <div>
      <div className="contain ">
        <img src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg" alt="" />
        <div className="text-center ">
          <Link to={'register'}>
          <button className="btn btn-primary"><h5 className="text-light">Get Started</h5></button>
          </Link>
    
        </div>
       
      </div>
    </div>
  )
}

export default Homepage