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
          <MDBNavbarBrand href='#' className='text-light ' style={{fontWeight:"600"}}>
            <img
              src='https://cdn.dribbble.com/users/260312/screenshots/2595023/cookerdd.gif'
              height='50'
              alt=''
              loading='lazy'

              className='rounded-5'
            />
            Recipes World
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header