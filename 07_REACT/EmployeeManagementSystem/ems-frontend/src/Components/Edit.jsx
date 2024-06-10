import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function Edit() {


const baseurl='http://localhost:8000'
// const navigate = useNavigate()
const [id,setId]= useState('');
const [name,setName] = useState('');
const [age,setAge] = useState('');
const [designation,setDesignation] = useState('');
const [salary,setSalary] = useState('')




//get a particular employee
const {empid} = useParams()
console.log(empid);

//get a particular employee details

const fetchEmployee = async()=>{
  const result = await axios.get(`${baseurl}/api/view-employee/${empid}`)
  console.log(result.data.employees);
setId(result.data.employees.id);
setName(result.data.employees.name);
setAge(result.data.employees.age);
setDesignation(result.data.employees.designation);
setSalary(result.data.employees.salary);

 
}


useEffect(()=>{
fetchEmployee()
},[])




const handleUpdate=(e)=>{

  console.log(id,name,age,designation,salary);
}

  return (
    <div className='container'><h2 className="text-center my-4">Update Employee</h2>
    <MDBCard className='p-5 my-4 shadow'>
    <MDBCardBody>
    <MDBInput label='ID of Employee' id='formControlLg' type='text' size='lg'onChange={(e)=>setId(e.target.value)} />
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
    <MDBBtn color='primary' onClick={(e)=> handleUpdate(e)}  style={{width:"90px"}}>Update</MDBBtn>
    </div>
    
   
    
  </MDBCard>
  
    </div>
  )
}

export default Edit