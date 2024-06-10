// eslint-disable-next-line no-unused-vars

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,

} from 'mdb-react-ui-kit';
import Review from './Review';



function ViewDoctor() {


    const {id} =useParams() 
    console.log(id);
  
  //3 create base url
    const base_url = 'https://doctorlist.onrender.com/doctors'
  
    //4 state creation for holding particular restaurant details
    const [ViewRestData,SetviewRestData]=useState({})
  
    //2. view particular restaurant details ""
    const ViewRestaurant =async() =>{
      const {data} = await axios.get(`${base_url}/${id}`)
      console.log(data);
      SetviewRestData(data)
    //to assign array of data into the state
    }
   console.log(ViewRestData);
    useEffect(()=>{
      ViewRestaurant()
    },[])


  return (
    <div className='container'>
        <Row className='d-flex my-5'> 
        <Col><img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" alt=""  width={"320px"} height={"300px"} style={{ border: "3px solid grey",borderRadius:"10px",padding:"10px"}} /></Col>
        <Col><MDBCard alignment='center' >
  
  <MDBCardHeader><h2>{ViewRestData.name}</h2></MDBCardHeader>
  <MDBCardBody>
    <MDBCardTitle>{ViewRestData.specialty}</MDBCardTitle>
    <MDBCardText><i className="fa-solid fa-phone"></i> Phone: {ViewRestData.phone}</MDBCardText>
    <MDBCardText><i className="fa-solid fa-location-pin"></i> Address: {ViewRestData.address}</MDBCardText>
    <MDBCardText><i className="fa-solid fa-envelope"></i> email: {ViewRestData.email}</MDBCardText>
    

  </MDBCardBody>
</MDBCard></Col>
      </Row>


    <MDBCard alignment='center' className='mt-4'>
      <MDBCardHeader><h3>Consultation Time</h3></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{ViewRestData.available_days}</MDBCardTitle>
        <MDBCardText>{ViewRestData.available_hours}</MDBCardText>
        <MDBCardText><Review reviews={ViewRestData.reviews}/></MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}

export default ViewDoctor