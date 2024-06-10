import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBSwitch } from 'mdb-react-ui-kit';
import { Link } from 'react-scroll'
function Header() {

const [theme, setTheme] = useState('dark-theme')

  const toggleTheme=()=>{
if(theme === "dark-theme"){

  setTheme("light-theme");
}else{
  setTheme("dark-theme")

}
  }

  useEffect(()=>{

    document.body.className = theme;
  },[theme])
  return (
    <div>
<Navbar>
        <Container>
          <Navbar.Brand href="#home" className='navh'><h3 className='pot'>Port<span>FO</span>L<span>IO</span></h3></Navbar.Brand>
          <Nav className="nav">
        <Link className='link' >Home</Link>
        <Link className='link' to="about">About</Link>
        <Link className='link'  to="contact">Contact</Link>
        <Link className='link' to='project'>Project</Link>
        <Link className='link' to='skills'>skills</Link>
          </Nav>
          <div className='bord'>
          <MDBSwitch id='flexSwitchCheckDefault' onClick={()=>toggleTheme()} label='Dark & light' />
          </div>
         
        </Container>
      </Navbar>


  
    </div>
  )
}

export default Header

{/* <MDBContainer fluid>
<MDBNavbarBrand href='#'>
 <div className='row'>

  <div className='col-lg-6'>
  <a href="">P.<b>F</b>olio</a>
  </div>

 <div className='col-lg-6'>
 <ul className='d-flex ' style={{listStyle:"none" }}>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Works</li>
  </ul>
 </div>
 <div className='col-lg-6'>
 <i className="fa-solid fa-sun me-3"></i>
 <i className="fa-solid fa-moon me-3"></i>
 </div>
 </div>
</MDBNavbarBrand>
</MDBContainer> */}