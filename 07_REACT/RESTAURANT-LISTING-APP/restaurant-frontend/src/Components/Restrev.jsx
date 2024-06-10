import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Restrev({reviews}) {

    console.log(reviews);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
 <Button variant="primary" onClick={handleShow}>
    View user experience
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
      {
        reviews?.map(item=>(
          <div className="col bg-primary my-4 py-3 px-3">
      <ul style={{listStyle:"none"}}>
          <li><h3>{item.name}</h3></li>
          <li><b>{item.date}</b></li>
          <li><h4><span className='text-warning'>&#9733;</span>{item.rating}</h4></li>
          <li>{item.comments}</li>
         </ul> 
          </div>
   
        ))
      }
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Restrev