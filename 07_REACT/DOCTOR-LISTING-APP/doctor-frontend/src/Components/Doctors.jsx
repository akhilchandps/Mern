// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
function Doctors() {
  return (
    <div>
         <h1 className='text-center py-3'>Our Experience Doctors</h1>
        <MDBRow className='row-cols-1 row-cols-md-4 g-4  text-center ms-4 mt-3'>
     
      <MDBCol >
        <MDBCard style={{width:"300px", height:"700px"}} >
          <MDBCardImage
            src='https://images.pexels.com/photos/8460090/pexels-photo-8460090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt='...'
            position='top' height={"400px"}
          />
          <MDBCardBody>
            <MDBCardTitle>Dr John joseph</MDBCardTitle>
            <MDBCardText>
          
Recently visited health checkup department for a whole body check up. The staff at the health check department was courteous, helpful and very attentive. I would highly recommend this hospital.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard style={{width:"300px" , height:"700px"}} >
          <MDBCardImage
            src='https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='...'
            position='top'  height={"400px"}
          />
          <MDBCardBody>
            <MDBCardTitle>Ann joseph</MDBCardTitle>
            <MDBCardText>
        
Very friendly doctors and best at work. Visited for pregnancy checkups to baby delivery. They has taken good care of us throughout the process and right time medications given to manage low AFI value helped
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard style={{width:"300px", height:"700px"}} >
          <MDBCardImage
            src='https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='...'
            position='top'  height={"400px"} style={{objectFit:"cover"}}
          />
          <MDBCardBody>
            <MDBCardTitle>Sara Mathew</MDBCardTitle>
            <MDBCardText>
            
They provide great service facility. I am having very good experience while attending this Hospital. Very personalized attention and i wish to place on record the attention and a good care given by these doctors
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
         
      <MDBCol >
        <MDBCard style={{width:"300px", height:"700px"}} >
          <MDBCardImage
            src='https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='...'
            position='top' height={"400px"}
          />
          <MDBCardBody>
            <MDBCardTitle>Aleena george</MDBCardTitle>
            <MDBCardText>
            On a friend’s recommendation I sent my mother to this hospital for treatment of persistent dyspepsia. the Doctors was patient and understanding and examined and explained her problem in a simple and easier way
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  )
}

export default Doctors