import { useState } from "react"
import { AddRecipie } from "../Services/allAPi.";
import { useNavigate } from "react-router-dom";


function Add() {
    const navigate = useNavigate()
  const [data,setData] =useState({
    id:"",
    name:"",
    cuisine:"",
    ingredients:"",
    rating:"",
    image:""
  })

  console.log(data);

  const handleAdd = async()=>{

    if(!data.id || !data.name || !data.cuisine || !data.ingredients || !data.rating || !data.image){

      alert("please fill the form")
    }
    else{
      const result = await AddRecipie(data)
      console.log(result.data);

      if(result.status == 200){
       alert("project added successfully")
       navigate('/')
      }
    else{
      alert(result.response.data)
    }
    
    }
  }

  return (
    <div>
      <h2 className="text-center py-4">Add Recipes</h2>
      <div className="col-7 m-auto shadow p-5 rounded-3">
      <input type="text" onChange={e=>setData({...data, id:e.target.value})} className="form-control mb-4" placeholder="id"/>
      <input type="text" onChange={e=>setData({...data, name:e.target.value})} className="form-control mb-4" placeholder="name"/>
      <input type="text" onChange={e=>setData({...data, cuisine:e.target.value})} className="form-control mb-4" placeholder="cuisiane"/>
      <input type="text" onChange={e=>setData({...data, ingredients:e.target.value})} className="form-control  mb-4" placeholder="ingrediens"/>
      <input type="text" onChange={e=>setData({...data, rating:e.target.value})}className="form-control mb-4" placeholder="rating" />
      <input type="text"onChange={e=>setData({...data, image:e.target.value})}  className="form-control mb-4" placeholder="image url" />
      <div className="text-center ">
      <button className="btn btn-primary" onClick={handleAdd}>Add</button>
    </div>
      </div>
   
    </div>
  )
}

export default Add