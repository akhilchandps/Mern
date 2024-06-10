import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-light'>
            <img
              src='https://i.pinimg.com/originals/6f/b0/4d/6fb04ddff1cbfe7b24b7a7236b0f81e0.gif'
              height='40'
              alt='' 
              loading='lazy' style={{borderRadius:"50%"}}
            />
            Contact App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header