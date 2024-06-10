import { useEffect, useState } from "react";
import { viewuserRecipieApi } from "../Services/allAPi."
import { useParams } from "react-router-dom";


function Viewproduct() {

  const [userData, SetUserdata] = useState({})
  const {id} = useParams()
  console.log(id);

  
const viewRecipie = async()=>{
  const result= await viewuserRecipieApi(id)
  console.log(result.data);
  SetUserdata(result.data)
}
useEffect(()=>{
  viewRecipie()
},[])
console.log(userData);
  return (
    <div>
      <div className="row">
        <div className="col m-4">
          <img src={userData.image} alt=""  width={"100%"} height={"500px"} style={{objectFit:"contain"}}/>
        </div>
        <div className="col m-4">
          <h1 className="text-danger" style={{fontWeight:"700", textShadow:"3px 3px 8px white"}}>{userData.name}</h1>
          <div className="py-3">
            <h2><b>cuisine:</b></h2>
            <h4>{userData.cuisine}</h4>
          </div>

          <div  className="py-3">
            <h2><b>Ingredients:</b></h2>
            <h4>{userData.ingredients}</h4>
          </div>

           <div  className="py-3">
            <h2><b>Rating:</b></h2>
            <h4>{userData.rating} <span className="text-warning">&#9733;</span> </h4>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Viewproduct