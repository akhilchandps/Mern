import axios from 'axios';
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restrev from './Restrev';
import { useEffect, useState } from 'react';

function ViewRest() {

  //1.get id from the params
    // const params= useParams()
    // console.log(params);
     // console.log(params.id);

  //destructuring
  const {id} =useParams() 
  console.log(id);

//3 create base url
  const base_url = 'http://localhost:3000/restaurants'

  //4 state creation for holding particular restaurant details
  const [ViewRestData,SetviewRestData]=useState({})

  //2. view particular restaurant details ""
  const ViewRestaurant =async() =>{
    const {data} = await axios.get(`${base_url}/${id}`)
    console.log(data);
    SetviewRestData(data)
  //to assign array of data into the state
  }
 console.log(ViewRestData);
  useEffect(()=>{
    ViewRestaurant()
  },[])


  return (
    <div>
<Row>
  <Col className='m-3'>
  <img id='imgg2' src={ViewRestData.photograph} alt="" width={'100%'} height={'500px'} style={{objectFit:'cover'}}/></Col>
  <Col className='text-center m-4' > 
  <ListGroup variant="flush ">
      <ListGroup.Item className='py-4 text-danger' style={{textShadow:"3px 3px 8px black"}}><h1>{ViewRestData.name}</h1></ListGroup.Item>
      <ListGroup.Item><h4>Neighborhood :{ViewRestData.neighborhood}</h4></ListGroup.Item>
      <ListGroup.Item><h4>Address :{ViewRestData.address}</h4></ListGroup.Item>
      <ListGroup.Item><h4>Cuisine_type :{ViewRestData.cuisine_type}</h4></ListGroup.Item>
      <ListGroup.Item className='py-4'><Restop op={ViewRestData.operating_hours}/></ListGroup.Item>
      <ListGroup.Item className='py-4'><Restrev reviews={ViewRestData.reviews}/></ListGroup.Item>
    </ListGroup>
  </Col>
</Row>
    </div>
  )

}

export default ViewRest