import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar primary bgColor='primary' className='nav-bg'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-light'>
      <img src="https://globaleducation.s3.ap-south-1.amazonaws.com/globaledu/gif/train-the-trainer.gif" alt="" width={"60px"}/>
            Employee Management
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header