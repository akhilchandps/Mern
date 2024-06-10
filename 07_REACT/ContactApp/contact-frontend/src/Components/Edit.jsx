import axios from 'axios';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
function Edit() {
  const baseurl='http://localhost:2000'
  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [phonenumber,setPhonenumber]=useState('')
  const [email, setEmail]=useState('')

const navigate =useNavigate()
 
const {empid} = useParams()
console.log(empid);

const fetchContact = async()=>{

  const result = await axios.get(`${baseurl}/view-contact/${empid}`)
  console.log(result.data.contact);

  setId(result.data.contact.id)
  setName(result.data.contact.name)
  setAddress(result.data.contact.address)
  setPhonenumber(result.data.contact.phonenumber)
  setEmail(result.data.contact.email)

}

useEffect(()=>{
fetchContact();
},[])



  const handleUpdate=async(e)=>{

    console.log(id,name,address,phonenumber,email);
    const body={id,name,address,phonenumber,email}
    const response = await axios.post(`${baseurl}/api/update-contact/${empid}`,body)
    console.log(response);
    alert(response.data.message)
    navigate('/admin2')
  }


  return (

    <div>
<Row>

  <Col>
  <img src="https://img.freepik.com/premium-photo/update-icon-with-gears-loading-updating-files-install-new-software-operating-system-3d-render_95505-377.jpg?w=740" width={"600px"} alt=""style={{objectFit:"cover"}} />
  </Col>
  
  <Col>
  <div className='container' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <MDBCard className='p-4 mt-4' style={{width:"700px"}}>
            <h2 className='bg-primary rounded-5 text-center text-light p-2' style={{fontWeight:"700"}}>Update Contact Details</h2>
      <MDBCardBody>
      <div className='mt-4' >
        <MDBInput label='id' id='formControlDefault' value={id} onChange={(e)=>setId(e.target.value)} type='text' />
        </div>
        <div className='mt-4' >
        <MDBInput label='Name' id='formControlDefault' value={name} onChange={(e)=>setName(e.target.value)} type='text' />
        </div>
        <div className='mt-4' >
        <MDBInput label='Address' id='formControlDefault' value={address}onChange={(e)=>setAddress(e.target.value)} type='text' />
        </div>
        <div className='mt-4' >
        <MDBInput label='Phonenumber' id='formControlDefault'value={phonenumber}  onChange={(e)=>setPhonenumber(e.target.value)}type='text' />
        </div>
        <div className='mt-4'>
        <MDBInput label='Email' id='formControlDefault' value={email} onChange={(e)=>setEmail(e.target.value)} type='text' />
        </div>
        <div className='text-center'>
        <MDBBtn className='mt-4 'onClick={(e)=> handleUpdate(e)} color='success'>
        Update
      </MDBBtn>
        </div>
        </MDBCardBody>
    </MDBCard>
    </div>
  </Col>
</Row>

    </div>
    
  )
}

export default Edit