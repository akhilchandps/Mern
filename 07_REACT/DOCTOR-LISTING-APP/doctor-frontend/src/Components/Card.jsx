// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
function Card() {
  return (
    <div>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4 my-3'>
      <MDBCol>
        <MDBCard className='h-100'>
        
          <MDBCardBody>
            <MDBCardTitle className='text-center'><i className="fa-solid fa-heart-pulse" style={{fontSize:"30px"}}></i></MDBCardTitle>
            <MDBCardTitle className='text-center'>Cardiology</MDBCardTitle>
            <MDBCardText className='text-center'>
            The cardio surgical unit has performed a wide range of surgeries ranging from neonatal open-heart surgeries to heart transplants, with excellent results. The Center has performed over 2,00,000 cardiac surgeries making it one of the most experienced heart surgery.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
    
          <MDBCardBody>
          <MDBCardTitle className='text-center'><i className="fa-solid fa-brain" style={{fontSize:"30px"}}></i></MDBCardTitle>
            <MDBCardTitle className='text-center'>Nuerology</MDBCardTitle>
            <MDBCardText className='text-center'>
            Neurological surgery constitutes a medical discipline and surgical specialty that provides care for adult and pediatric patients in the treatment of pain or pathological processes that may modify the function or activity of the central nervous system , the peripheral nervous system and their vascular supply
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
      
          <MDBCardBody>
            <MDBCardTitle className='text-center'><i className="fa-solid fa-lungs" style={{fontSize:"30px"}}></i></MDBCardTitle>
            <MDBCardTitle className='text-center'>pulmonary</MDBCardTitle>
            <MDBCardText className='text-center'>
            Pulmonology often involves managing patients who need life support and mechanical ventilation. Pulmonologists are specially trained in diseases and conditions of the chest, particularly pneumonia, asthma, tuberculosis, emphysema, and complicated chest infections
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
      <MDBCol>
        <MDBCard className='h-100'>
        
          <MDBCardBody>
            <MDBCardTitle className='text-center'><i className="fa-solid fa-skull-crossbones" style={{fontSize:"30px"}}></i></MDBCardTitle>
            <MDBCardTitle className='text-center'>Orthopedics</MDBCardTitle>
            <MDBCardText className='text-center'>
            As a branch of plastic surgery, body surgery aims to alter the function and deliver the wanted changes of various areas of the body. It encompasses a wide range of procedures designed to address aesthetic concerns, help create symmetry, alter shapes, and alter overall body proportions


            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className='h-100'>
        
          <MDBCardBody>
            <MDBCardTitle className='text-center'><i className="fa-solid fa-tooth" style={{fontSize:"30px"}}></i></MDBCardTitle>
            <MDBCardTitle className='text-center'>Dental Surgerys</MDBCardTitle>
            <MDBCardText className='text-center'>
            Oral surgery refers to any surgical procedure performed on your teeth, gums, jaws or other oral structures. This includes extractions, implants, gum grafts and jaw surgeries. Oral surgery is usually performed by an oral and maxillofacial surgeon or a periodontist.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className='h-100'>
        
          <MDBCardBody>
            <MDBCardTitle className='text-center'><i className="fa-solid fa-vial-virus" style={{fontSize:"30px"}}></i></MDBCardTitle>
            <MDBCardTitle className='text-center'>Laboratory</MDBCardTitle>
            <MDBCardText className='text-center'>
            The laboratory has established the quality system conforming to ISO/IEC 17025-2005 and ISO 9001:2015 requirements. The laboratory is organized and operated in such a way that its existing facilities meet the requirements of NABL Criteria.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  )
}

export default Card