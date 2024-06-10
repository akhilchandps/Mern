// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,

  } from 'mdb-react-ui-kit';
import { Link, useParams } from 'react-router-dom';

function Doctdatas({DoctArray}) {
    console.log(DoctArray);
    const params = useParams()
    console.log(params);
  return (
    <div>
           <div className="row">
           <h1 className='text-center my-5'>Find Your Doctor</h1>
        {
        DoctArray.map(item => (
          <div className="col-3 mt-4 text-center" key={item.id}>
          
     {/* <Link to={`/view/${item.id}` } style={{textDecoration:"none"}}> */}
         <MDBCard style={{height:"240px"}}>
             
              <MDBCardBody>
                <MDBCardTitle style={{fontSize:"26px"}}>{item.hospital}</MDBCardTitle>
                <MDBCardText>
                  <h5>{item.name}</h5>
                </MDBCardText>
                <MDBCardText>
                  {item.specialty}
                </MDBCardText>
                <MDBCardText>
                  {item.city}
                </MDBCardText>
                <Link to={`/view/${item.id}`}>
                <MDBBtn href='#'>Book for Appointment</MDBBtn>
                </Link>
               
              </MDBCardBody>
            </MDBCard>
       {/* </Link>      */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doctdatas