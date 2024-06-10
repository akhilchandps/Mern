import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Cardadmin from './Cardadmin';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Admin() {

  const baseUrl = 'http://localhost:8000'

  const [employeesData,SetEmployeesData] = useState([])

  const fetchData =async()=>{

    const response = await axios.get(`${baseUrl}/api/get-all-employee`)

    console.log(response.data.employees);
    SetEmployeesData(response.data.employees)
  }
console.log(employeesData);
useEffect(()=>{

  fetchData()
},[])


  return (
    <div>
      <Row className='my-5 m-auto'>
        <Col>
        <h1>Employee Management System</h1>
        <p>Smart and easy management of the employee is now possible, ignoring the manual activity and moving towards automation task is possible with CuteHR Employee management system.</p>
        <MDBBtn className='mx-2' color='info'>
        Get Started
      </MDBBtn>
        </Col>
        <Col><img src="https://www.cutehr.io/wp-content/uploads/2020/05/employees-dashboard-cuteHR-1-1400x788.jpg" alt="" width={"600px"}  style={{objectFit:"cover"}}/>
        </Col>
      </Row>
      
    <MDBRow className='row-cols-1 row-cols-md-3 g-4 text-center m-auto'>
      <MDBCol>
        <MDBCard>
          <div className='text-center mt-3'>
          <img src="https://www.cutehr.io/wp-content/uploads/2019/03/icon.png" alt=""  width={"120px"} style={{objectFit:"cover"}}/>
          </div>
      
          <MDBCardBody>
            <MDBCardTitle>Employee Onboarding</MDBCardTitle>
            <MDBCardText style={{textAlign:"justify"}}>
            With CuteHR Employee management system, it is easy to onboard new employees from a single dashboard. You get options to manage all business onboarding and employee updating and background document check, done easily with CuteHR.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
        <div className='text-center'>
          <img src="https://www.cutehr.io/wp-content/uploads/2019/03/icon2.png" alt=""  width={"120px"}/>
          </div>
          <MDBCardBody>
            <MDBCardTitle>Employee Management</MDBCardTitle>
            <MDBCardText style={{textAlign:"justify"}}>
              
            Managing employees under various department of the business as well as allocating task and deadlines is simple with cutehr. This helps you to manage the right resources in the right work without spending too much of time on managing manual documentations.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
        <div className='text-center'>
          <img src="https://www.cutehr.io/wp-content/uploads/2019/03/icon3.png" alt=""  width={"120px"}/>
          </div>
          <MDBCardBody>
            <MDBCardTitle>Employee Monitoring</MDBCardTitle>
            <MDBCardText style={{textAlign:"justify"}}>
            Employees can be only managed well when you can monitor what are their performance while they are at work. With cutehr, you can track and monitor performance of resources with asigned task and and generate reports, payroll and invoice accordingly along with other features.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
    </MDBRow>

    <div className='my-3 m-4'>

      <Link to={'add'}>  
      <button type="button" style={{float:"right"}} className="btn btn-success" data-mdb-ripple-init>ADD</button>
      </Link>
   
    </div>
    
    <Cardadmin CardArray={employeesData} fetchData={fetchData}/>
   
    </div>

  )
}

export default Admin