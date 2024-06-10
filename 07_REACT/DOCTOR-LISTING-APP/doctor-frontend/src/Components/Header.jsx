// eslint-disable-next-line no-unused-vars
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
           <Navbar bg="primary " data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" ><i className="fa-solid fa-hospital text-light fs-2"></i> <h3 className='text-light mx-3 mt-2'>Medi Plus</h3></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
