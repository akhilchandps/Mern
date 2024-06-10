// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup
  } from 'mdb-react-ui-kit';
function Home2() {
  return (
    <div>
        <MDBCardGroup className='my-4'>
      <MDBCard>
        <MDBCardImage src='https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg?auto=compress&cs=tinysrgb&w=600' alt='...' position='top' />
      </MDBCard>

      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle><h1>Why You Should Trust Us? Get Know About Us!</h1></MDBCardTitle>
          <MDBCardText>
           <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet

Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
          </MDBCardText>
          <MDBCardText>
<ul  style={{listStyle:"none"}}>
    <li><i className="fa-solid fa-check"></i> Quality Health Care</li>
    <li><i className="fa-solid fa-check"></i> Quality Good Doctors</li>
    <li><i className="fa-solid fa-check"></i> Medical Resaerch Professionals</li>
</ul>
<MDBBtn size='lg' className='me-2 rounded-5  ms-4' active>
        Read More
      </MDBBtn>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

    </MDBCardGroup>


    </div>
  )
}

export default Home2