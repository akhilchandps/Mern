

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,

    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { getRecipiesApi } from '../Services/allAPi.';
import { Link } from 'react-router-dom';

function RestCard() {

    const [searchKey,setSearchKey]=useState("")
 const [getRecipie ,seGetRecipie] = useState([])
    const getRecipies = async()=>{

        const result = await getRecipiesApi(searchKey)
        console.log(result.data);
        seGetRecipie(result.data)
    }

    useEffect(()=>{
        getRecipies()
    },[searchKey])

console.log(getRecipie);
  return (
    <div>
          <h3 className='text-center py-5'>View Recipes</h3>
          <div className='py-3'>
          <input type="text"  className='form-control w-50 m-auto ' onChange={e=>setSearchKey(e.target.value)}/>
          </div>

   <div className="row">
    {
        getRecipie.map((item)=>(

            <div className='col5 col-3 p-4'>
  
            <MDBCard>
                 <MDBCardImage src={item.image} position='top' alt='...' />
                 <MDBCardBody>
                   <MDBCardTitle>{item.name}</MDBCardTitle>
                   <div className='text-center'>
                   <Link to ={`/view/${item.id}`}>
                   <MDBBtn href='#'>View</MDBBtn>
                   </Link> 
                    
                    </div>  
                                
           
                 </MDBCardBody>
               </MDBCard>
            </div>


        ))
    }
    
    </div>       

    </div>
  )
}

export default RestCard