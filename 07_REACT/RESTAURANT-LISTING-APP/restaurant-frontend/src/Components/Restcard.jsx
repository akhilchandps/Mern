import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Restcard({ restArray }) {
  return (
    <div className='container-fluid'>
      <h2 className='text-center mt-4'>View Recipies</h2>
      <h3 className='h33 text-center mb-4'></h3>
      <div className="row">
        {restArray.map(item => (
          <div className="col-md-3 mt-4 " key={item.id}>
     <Link to={`/view/${item.id}` } style={{textDecoration:"none"}}>
         <MDBCard>
              <MDBCardImage src={item.photograph} position='top' alt='...' height={"300px"} style={{ objectFit: "cover" }} />
              <MDBCardBody>
                <MDBCardTitle>{item.name}</MDBCardTitle>
                <MDBCardText>
                  {item.cuisine_type}
                </MDBCardText>
                <MDBCardText>
                  {item.address}
                </MDBCardText>
       
              </MDBCardBody>
            </MDBCard>
       </Link>     
          </div>
        ))}
      </div>
    </div>
  )
}

export default Restcard;
