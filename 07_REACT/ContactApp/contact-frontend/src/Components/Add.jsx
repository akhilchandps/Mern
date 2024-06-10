import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';

function Add() {
  const [contactData,setContactData]= useState([])
  const baseurl = 'http://localhost:2000'

  const fetchData = async()=>{
   
    const response = await axios.get(`${baseurl}/api/get-all-contact`)

    console.log(response.data.contact);
    setContactData(response.data.contact)
  }
    console.log(contactData);



    const handleDelete = async (id)=>{

      const result = await axios.delete(`${baseurl}/api/delete-contact/${id}`)
      console.log(result);
      alert(result.data.message);
      fetchData();
    
    
     }
    






useEffect(()=>{
  fetchData();
},[])






  return (
    <div>
    <MDBTable>
      <MDBTableHead>
        <tr>
           <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Address</th>
          <th scope='col'>Phono</th>
          <th scope='col'>Email</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
 {
  contactData.map((item)=>(

    <MDBTableBody>
  
    <tr className='table-info'>
      <th scope='row'>{item.id}</th>
      <td>{item.name}</td>
      <td>{item.address}</td>
      <td>{item.phonenumber}</td>
      <td>{item.email}</td>
      <td><Link to={`view/${item.id}`}><i className="fa-solid fa-eye p-2 shadow"></i></Link> <Link to={`edit/${item.id}`}><i className="fa-solid  text-primary fa-pen-to-square p-2 shadow "></i></Link>
      <i className="fa-solid fa-trash text-danger p-2 shadow" onClick={()=> handleDelete(item.id)}></i></td>
    </tr>
  </MDBTableBody>

  ))

 }
    
    </MDBTable>
    </div>
  )
}

export default Add