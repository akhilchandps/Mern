// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Doctdatas from './Doctdatas'
import Home from './Home';
import Home2 from './Home2';
import Card from './Card';
import Doctors from './Doctors';


function Doctorlist() {
  const [DoctData,setDoctData] = useState([])
//1 create a base url
const base_url = "http://localhost:3001/doctors"

//2create a function for fetching

const fetchData = async()=>{

  const response = await axios.get(base_url)
  console.log(response.data);
  setDoctData(response.data);
 
}

console.log(DoctData);
useEffect(()=>{
  fetchData()
},[])

  return (   
    <div>
      <Home/>
      <Home2/>
      <Card/>
      <Doctors/>
     <Doctdatas DoctArray={DoctData}/> 
    </div>
  );
}

export default Doctorlist;
