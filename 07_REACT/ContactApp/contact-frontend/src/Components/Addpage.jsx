
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardGroup
} from 'mdb-react-ui-kit';

function Addpage() {

  const baseurl='http://localhost:2000'
//Create a state to hold information from the usestate
const navigate = useNavigate()
const [id,setId]= useState('');
const [name,setName] = useState('');
const [address,setAddress] = useState('');
const [phonenumber,setPhonenumber] = useState('');
const [email,setEmail] = useState('')


console.log(id,name,address,phonenumber,email);


const body = {id,name,address,phonenumber,email}


const addContacts = async()=>{

  const result = await axios.post(`${baseurl}/api/add-contact`,body).

  then((result)=>{

    console.log(result);
   alert(result.data.message)
   navigate('/admin2')

  })
   .catch((error)=>{

    alert("Enter a unique employee id")
  });



}



  
  return (
    <div className='container-fluid'>
       

       <MDBCardGroup className='my-4'>
      <MDBCard className='shadow-none' style={{border:"none"}}>
        <MDBCardImage src='https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/1e50ad6138a05edc89332d0e/802a67dc-af5a-4768-b0d6-8e3b0d2cee19.png' height={"500px"} alt='...' position='top'  style={{objectFit:"contain"}}/>
      </MDBCard>

      <MDBCard className='shadow rounded-5 p-4'style={{border:"none"}}>
        <MDBCardBody>
          <MDBCardTitle><h1 className='text-center text-light bg-primary rounded-5' style={{fontWeight:"700"}}>Add New Contact</h1></MDBCardTitle>
       <div className='mt-4' >
  <MDBInput label='id' id='formControlDefault' onChange={(e)=>setId(e.target.value)} type='text' />
  </div>
  <div className='mt-4' >
  <MDBInput label='Name' id='formControlDefault' onChange={(e)=>setName(e.target.value)} type='text' />
  </div>
  <div className='mt-4' >
  <MDBInput label='Address' id='formControlDefault' onChange={(e)=>setAddress(e.target.value)} type='text' />
 </div>
  <div className='mt-4' >
 <MDBInput label='Phonenumber' id='formControlDefault'  onChange={(e)=>setPhonenumber(e.target.value)}type='text' />
   </div>
   <div className='mt-4'>
   <MDBInput label='Email' id='formControlDefault' onChange={(e)=>setEmail(e.target.value)} type='text' />
  </div>
 <div className='text-center'>
 <MDBBtn className='mt-4 ' onClick={addContacts} color='success'>
 Add
 </MDBBtn>
 </div>
        </MDBCardBody>
      </MDBCard>

    </MDBCardGroup>



  





    </div>
  )
}

export default Addpage



// <Row>
// <Col>
// <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/1e50ad6138a05edc89332d0e/802a67dc-af5a-4768-b0d6-8e3b0d2cee19.png" height={"500px"} alt="" />

// </Col>
// <Col>

// <MDBCard className='p-4 mt-4' style={{width:"600px"}}>
//     <h3 className='text-center'>Add Contacts</h3>
// <MDBCardBody>
// <div className='mt-4' >
// <MDBInput label='id' id='formControlDefault' onChange={(e)=>setId(e.target.value)} type='text' />
// </div>
// <div className='mt-4' >
// <MDBInput label='Name' id='formControlDefault' onChange={(e)=>setName(e.target.value)} type='text' />
// </div>
// <div className='mt-4' >
// <MDBInput label='Address' id='formControlDefault' onChange={(e)=>setAddress(e.target.value)} type='text' />
// </div>
// <div className='mt-4' >
// <MDBInput label='Phonenumber' id='formControlDefault'  onChange={(e)=>setPhonenumber(e.target.value)}type='text' />
// </div>
// <div className='mt-4'>
// <MDBInput label='Email' id='formControlDefault' onChange={(e)=>setEmail(e.target.value)} type='text' />
// </div>
// <div className='text-center'>
// <MDBBtn className='mt-4 ' onClick={addContacts} color='success'>
// Add
// </MDBBtn>
// </div>
// </MDBCardBody>
// </MDBCard>
// </Col>
// </Row>