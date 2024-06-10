// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

function Home() {
  return (
    <div>
<MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src='https://cdn.pixabay.com/photo/2021/10/11/17/37/doctor-6701410_1280.jpg' className='d-block w-100' alt='...' height={"600px"} style={{objectFit:"cover"}}/>
        <div className='text-center m-3' style={{position:"absolute",top:"0",paddingTop:"260px"}}> 
        <h1 style={{color:"", fontFamily:"Protest Strike",fontSize:"50px"}}>We provide medical services That you can trust!</h1>
       <MDBBtn rounded className='mx-2' color='secondary'>
        Get Appointment
      </MDBBtn>
        </div>
      
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://cdn.pixabay.com/photo/2019/08/13/08/15/analysis-4402809_640.jpg' className='d-block w-100' alt='...'  height={"600px"} style={{objectFit:"cover"}}/>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://cdn.pixabay.com/photo/2017/03/13/21/41/scientist-2141259_1280.jpg' className='d-block w-100' alt='...'  height={"600px"} style={{objectFit:"cover"}}/>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>


  )
}

export default Home