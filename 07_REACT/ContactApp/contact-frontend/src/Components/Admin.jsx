import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardGroup
} from 'mdb-react-ui-kit';


function Admin() {
  return (
   
  <div className='head pt-5'>
<MDBCardGroup className='my-4'>
 

      <MDBCard className=' p-4'style={{border:"none"}}>
        <MDBCardBody>
          <MDBCardTitle><h2 className='ms-5'>Contact App</h2><h1 className='text-center py-4'>WELCOME TO CONTACT HUB</h1></MDBCardTitle>
          <p>Your Ultimate Contact Management Solution!
             ContactHub is your one-stop destination for effortless contact management. Say goodbye to scattered address books and messy contact lists – with ContactHub, organizing and accessing your contacts has never been easier.</p>
             
            <div  style={{float:"right", marginRight:"260px"}}>
          <Link to={'admin2'}>
         <MDBBtn className='rounded rounded-4 py-2'>Get Started</MDBBtn>
        </Link>

            </div>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='shadow-none' style={{border:"none"}}>
        <MDBCardImage src='https://images03.nicepage.com/c461c07a441a5d220e8feb1a/2079c65764775db29c74b10d/56.png' height={"500px"} alt='...' position='top'  style={{objectFit:"contain"}}/>
      </MDBCard>
    </MDBCardGroup>
<div className='row ms-5'>
   <div className='col'>
    <img src="https://static.vecteezy.com/system/resources/previews/027/526/958/original/work-time-icon-logo-isolate-on-a-white-background-vector.jpg" alt=""  width={"120px"}/>
     <h4 className='text-primary'>Habits Tracker</h4>
    </div>
    <div className='col'>
    <img src="https://circulardesign.tools/wp-content/uploads/2021/06/design_bl-09-09-2.svg" alt=""  width={"120px"}/>
     <h4 className='text-primary'>Help Tools</h4>
    </div>

<div className='col mt-2'>
<img src="https://cdn-icons-png.flaticon.com/512/1274/1274605.png" alt="" width={"110px"}/>
<h4 className='text-primary'>Results</h4>
</div>
</div> 
   
   </div>
  )
}

export default Admin

