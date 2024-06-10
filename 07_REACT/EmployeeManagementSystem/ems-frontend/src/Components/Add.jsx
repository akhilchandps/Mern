import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Add() {


  const baseurl='http://localhost:8000'
//Create a state to hold information from the usestate
const navigate = useNavigate()
const [id,setId]= useState('');
const [name,setName] = useState('');
const [age,setAge] = useState('');
const [designation,setDesignation] = useState('');
const [salary,setSalary] = useState('')

const addEmployee = async()=>{

  console.log(id,name,age,designation,salary);

  //api call to add employee details
const body = {id,name,age,designation,salary}

  const result = await axios.post(`${baseurl}/api/add-employee`,body)

  .then((response)=>{

    console.log(response);
    alert(response.data.message)
    navigate('/')
  })
  .catch((error)=>{

    alert("Enter a unique employee id")
  });


}



  return (
    <div className='container'><h2 className="text-center my-4">Add Employee</h2>
      <MDBCard className='p-5 my-4 shadow'>
      <MDBCardBody>
      <MDBInput label='ID of Employee' id='formControlLg' type='text' size='lg'onChange={(e)=>setId(e.target.value)}/>
      </MDBCardBody>
      <MDBCardBody>
      <MDBInput label='Name of Employee' id='formControlLg' type='text' size='lg'onChange={(e)=>setName(e.target.value)}/>
      </MDBCardBody>
      <MDBCardBody>
      <MDBInput label='Age of Employee' id='formControlLg' type='text' size='lg' onChange={(e)=>setAge(e.target.value)}/>
      </MDBCardBody>
      <MDBCardBody>
      <MDBInput label='Designation of Employee' id='formControlLg' type='text' size='lg'onChange={(e)=>setDesignation(e.target.value)}/>
      </MDBCardBody>
      <MDBCardBody>
      <MDBInput label='Salary of Employee' id='formControlLg' type='text' size='lg'onChange={(e)=>setSalary(e.target.value)}/>
      </MDBCardBody>
     
      <div className='text-center mt-3'>
      <MDBBtn color='success' onClick={addEmployee}  style={{width:"90px"}}>Add</MDBBtn>
      </div>
      
     
      
    </MDBCard>
    
      </div>
  )
}

export default Add