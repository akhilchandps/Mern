import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
         <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid>
        
          <MDBNavbarBrand href='#' className='text-light'>
   <Link to={'/'} className='text-light' style={{textDecoration:"none"}}>
   Login/Register
   </Link>
  
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header