import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardHeader,

} from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';

function View() {

  const [viewData,setViewData] = useState({})

  const baseurl= 'http://localhost:2000'
  const {id} = useParams()
 
  const viewContact = async()=>{
    const response = await axios.get(`${baseurl}/view-contact/${id}`)
    console.log(response);
  console.log(response.data.contact)

  setViewData(response.data.contact)

  }
console.log(viewData);

useEffect(()=>{
  viewContact()
},[])



  return (
    <div className='container-fluid'>
<h1 className='text-center py-4 text-primary' style={{fontWeight:"800"}}>View Contact details</h1>
<Row style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

<Col>

      <MDBCard alignment='center' style={{width:"570px"}}  className='ms-5 mt-5 shadow '>
      <MDBCardHeader className='bg-primary text-light'><h2 style={{fontWeight:"700"}}>User Card</h2></MDBCardHeader>
      <MDBCardBody>
      <img src="https://i2.wp.com/woodruff-fp.co.uk/wp-content/uploads/2013/05/dribbble-team-gif.gif" alt="" width={"400px"} className='rounded-4'/>
        <MDBCardText  className='cards bg-primary text-light p-2 mx-5 rounded-5'><b>Id</b> : {viewData.id}</MDBCardText>
        <hr />
        <MDBCardText  className='cards bg-primary text-light p-2 mx-5  rounded-5'><b> Name</b> :{viewData.name}</MDBCardText>
        <hr />
        <MDBCardText  className='cards bg-primary text-light p-2 mx-5  rounded-5'><b>Address</b> :{viewData.address}</MDBCardText>
        <hr />
        <MDBCardText  className='cards bg-primary text-light p-2 mx-5  rounded-5'><b>Email</b> :{viewData.email}</MDBCardText>
          <hr />
        <MDBCardText   className='cards bg-primary text-light p-2 mx-5  rounded-5'><b>Phone no</b>  :{viewData.phonenumber}</MDBCardText>
      </MDBCardBody>
    
    </MDBCard>
</Col>


<Col>
<div className='text-center'>
<img src="https://i.pinimg.com/originals/5c/37/14/5c3714cba608140b1d6c15ce3f699068.gif" alt=""  width={"400px"} height={"500px"} style={{objectFit:"cover"}}/>
</div>


</Col>

</Row>

 
    </div>
  )
}

export default View