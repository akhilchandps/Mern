// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';

function Review({ reviews }) {
  console.log(reviews);

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        View Review
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card className='mt-4' body style={{ width: '700px', margin: "auto" }}>
              {reviews?.map((item, index) => (
                <ListGroup key={index}>
                  <h4>{item.patient_name}</h4>
                  <ListGroup.Item>Date: {item.date}</ListGroup.Item>
                  <ListGroup.Item >Rating: {item.rating}<i className="fa-solid fa-star" style={{ color: "orange" }}></i></ListGroup.Item>
                  <ListGroup.Item>Comments: {item.comments}</ListGroup.Item>
                </ListGroup>
              ))}
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Review;
