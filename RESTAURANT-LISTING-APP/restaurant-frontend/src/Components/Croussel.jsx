
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img4 from './img/img4.jpg'
function Croussel() {
  return (
    <div>
   <div>
   <MDBCarousel showControls>
      <MDBCarouselItem itemId={1}>
        <img id='imgg' src={img4} className='d-block w-100' alt='...'  width={'100%'} height={"500px"} style={{objectFit:"cover"}}/>
        <div className="para">
        <h2>Fooday Restaurant  </h2>
        <p>At Savory Haven, we believe that every meal is an opportunity to create lasting memories. Nestled in the heart of New york, our restaurant offers a warm and inviting atmosphere where friends and family can come together to enjoy exquisite culinary creations.

Our menu is a celebration of flavors, featuring a diverse array of dishes crafted from the freshest, locally-sourced ingredients.</p>
        </div>

    
        <div className="content">
          <p>Tasty</p>
          <div className="col col1">
         </div>
          <p>Delicious</p>
          <div className="col col1">
         </div>
          <p>Savoury</p>
    
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img  id='imgg' src={img1} className='d-block w-100' alt='...'  width={'100%'} height={"500px"} style={{objectFit:"cover"}} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img  id='imgg' src={img2} className='d-block w-100' alt='...'   width={'100%'} height={"500px"} style={{objectFit:"cover"}}/>
      </MDBCarouselItem>
    </MDBCarousel>
   </div>
    </div>
  )
}

export default Croussel