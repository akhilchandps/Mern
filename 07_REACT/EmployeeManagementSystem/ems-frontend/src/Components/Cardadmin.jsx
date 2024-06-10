
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardHeader,

    MDBBtn
  } from 'mdb-react-ui-kit';
  import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios';
Link
  

function Cardadmin({ CardArray, fetchData }) {
  console.log(CardArray);

  const baseurl='http://localhost:8000'

  const handleDelete= async(id)=>{

   const  response = await axios.delete(`${baseurl}/api/delete-employee/${id}`)
    console.log(response);
    alert(response.data.message)
     fetchData();
  }
  return (


    <div className='container'> 
      <Row>
      <h2 className=' text-center' style={{marginTop:"120px"}}>Manage Your Employee Data</h2>   
      {
      CardArray.map((item)=>(
       
      <Col>

      <MDBCard alignment='center'  className='my-5' style={{width:"300px"}}>
       
      <MDBCardHeader><h3>Name: {item.name}</h3></MDBCardHeader>
      <MDBCardBody>
        <MDBCardText>Designation: {item.designation}</MDBCardText>
    <Link to={`view/${item.id}`}>
    <MDBBtn btn href='#'className='btn btn-warning m-2'><i className="fa-regular fa-eye"></i></MDBBtn>
    </Link>

    <Link to ={`edit/${item.id}`}>
    <MDBBtn href='#' className='btn btn-secondary m-2'><i className="fa-solid fa-pen-to-square"></i></MDBBtn>
    </Link>
       
        
        <MDBBtn href='#' onClick={()=> handleDelete(item.id)} className='btn btn-danger m-2'><i className="fa-solid fa-trash"></i></MDBBtn>
      </MDBCardBody>
    </MDBCard>

      </Col>

      ))
      }

        </Row> 
        </div>
  )
}

export default Cardadmin