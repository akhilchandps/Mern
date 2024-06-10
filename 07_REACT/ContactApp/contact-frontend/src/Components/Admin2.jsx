import { MDBBtn } from 'mdb-react-ui-kit';
// import { MDBTextArea } from 'mdb-react-ui-kit';
// import { MDBInput } from 'mdb-react-ui-kit';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Add from './Add';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardGroup
  } from 'mdb-react-ui-kit';
function Admin2() {

  return (
    <div className='container-fluid'>

<MDBCardGroup className='mt-5' >
      <MDBCard  className='shadow-none'  style={{border:"none"}}>
        <MDBCardImage src='https://images01.nicepage.com/c461c07a441a5d220e8feb1a/eed8a227c573569b8dae3936/-min.png' alt='...' position='top' />
      </MDBCard>

      <MDBCard className='pt-5 shadow-none' style={{border:"none"}}>
        <MDBCardBody>
          <h2 className='text-center py-3 text-primary' style={{fontWeight:"700"}}>Get in Touch</h2>
        <div className='d-flex m-auto' style={{width:"450px", marginTop:"30px"}}>
          <TextField id="filled-basic" className='m-2' label="Name" variant="filled" />    
          <TextField id="filled-basic"  className='m-2' label="Email" variant="filled" />
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <TextField
          id="filled-multiline-static"
          label="Address" className='mt-3 '
          multiline
          rows={4}
      
          variant="filled"
        /></div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <TextField
          id="filled-multiline-static"
          label="Message" className='mt-3 '
          multiline
          rows={4}
      
          variant="filled"
        /></div>
          <div className=' text-center  mt-4'>
          <MDBBtn className='me-1 text-center' color='dark'>
        SUBMIT
      </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>

    </MDBCardGroup>
    <div className='text-center mt-2 mb-5'> 


<Link to={'addpage'}>
<MDBBtn color='warning'>
Add your Contacts
</MDBBtn>
</Link>

</div>
<div className='m-4'>
         <Add/>
         </div>

    </div>
  )
}

export default Admin2






        {/* <Row>
            <Col>
            <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/eed8a227c573569b8dae3936/-min.png" alt="" width={"600px"}/>
            </Col>
            <Col>
            <h2 className='text-center pt-5'>Contact Us</h2>
          <div className='d-flex' style={{width:"560px", marginTop:"30px"}}>
          <TextField id="filled-basic" className='m-2' label="Name" variant="filled" />    
          <TextField id="filled-basic"  className='m-2' label="Email" variant="filled" />
          </div>
          <TextField
          id="filled-multiline-static"
          label="Multiline" className='mt-3'
          multiline
          rows={4}
      
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline" className='mt-3'
          multiline
          rows={4}
      
          variant="filled"
        />
          <div className=' m-3'>
          <MDBBtn className='me-1 text-center' color='dark'>
        SUBMIT
      </MDBBtn>
          </div>
         
          
        
            </Col>
        </Row>

        <div className='text-center '> 


        <Link to={'addpage'}>
        <MDBBtn color='warning'>
        Add your Contacts
      </MDBBtn>
        </Link>
  
        </div>
         
         <div className='m-4'>
         <Add/>
         </div>



    </div> */}