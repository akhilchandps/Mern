import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Restcard from './Restcard'
import Croussel from './Croussel'

function Allrest() {
//1 create a base url

const [restData,setData] = useState([])
  const base_url = 'http://localhost:3000/restaurants'

  //2 create a function for fetching

  const fetchData =async() =>{
    const response = await axios.get(base_url)
    console.log(response.data);
    setData(response.data) //to assign array of data into the state
  }

  console.log(restData);


  //3. create  useffect for calling function
  useEffect(()=>{
    fetchData();
  },[])
  
  return (
    <div>
     <Croussel/>
     <Restcard restArray={restData}/>
    </div>
  )
}

export default Allrest