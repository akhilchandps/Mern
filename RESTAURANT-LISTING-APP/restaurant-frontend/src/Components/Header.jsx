
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div> <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand href="#home" className='text-light'>
      <i className="fa-solid fa-utensils fa-flip fs-2 "></i> Restocafe
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header