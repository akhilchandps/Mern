import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
function Restop({op}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(op);
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
         operating_hours
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> operating hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item >Monday: {op?.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday: {op?.Tuesday}</ListGroup.Item>
      <ListGroup.Item>wednesday: {op?.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursady: {op?.Thursday}</ListGroup.Item>
      <ListGroup.Item>Saturday: {op?.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday: {op?.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Restop