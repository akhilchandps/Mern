import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function View() {

const [userData,setUserdata] = useState({})
  const baseurl= 'http://localhost:8000'
  const {id} = useParams()
 
  const viewEmployee = async()=>{
    const response = await axios.get(`${baseurl}/api/view-employee/${id}`)
    console.log(response.data.employees);
    setUserdata(response.data.employees)
  }
console.log(userData);

useEffect(()=>{
  viewEmployee()
},[])



  return (
    <div>
      <Row>
<Col>
<MDBCard className='container m-5 shadow'>
  <h3 className='text-center py-4'>Employee Card</h3>
      <MDBCardBody>
        <p>Employee Id:{userData.id}</p>
        <hr />
        <p>Employee name: {userData.name}</p>
        <hr />
        <p>Age of an Employee: {userData.age}</p>
        <hr />
        <p>Designation: {userData.designation}</p>
        <hr />
        <p>Salary: {userData.salary}</p>
        <hr />
      </MDBCardBody>
</MDBCard>
</Col>

<Col className=''>
<img src="https://i.pinimg.com/originals/56/9f/9b/569f9b788c942664e7151a6cb02e6246.gif" alt=""  width={"700px"}/>
</Col>
      </Row>
    </div>
  )
}

export default View