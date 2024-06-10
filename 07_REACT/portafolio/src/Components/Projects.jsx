
import img1 from  '../images/img1.jpg';
import img2 from  '../images/img2.jpg';
import img3 from  '../images/img3.jpg';
import img4 from  '../images/img4.jpg';
import img5 from  '../images/img5.jpg';
import img6 from  '../images/img6.jpg';
import {motion} from "framer-motion"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
function Projects() {
  return (
    <div>
  <div className="row row6 m-5">
    <motion.h2 
    name="project"
    initial={{y: 50, opacity: 0}}
    whileInView={{y:0, opacity: 1}}
    transition={{delay:0.2, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
    
    className='py-5 text-center my-5 text-decoration-underline'>Projects</motion.h2>


    <motion.div 
    
    initial={{y: 100, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:0.2, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
    
    
    className="col">
    <MDBCard>
      <MDBCardImage src={img1} position='top' alt='...' height={"250px"} style={{objectFit:"cover"}}/>
      <MDBCardBody className='card7'>
        <MDBCardTitle><motion.h3
        
        initial={{y: 100, opacity: 0}}
    whileInView={{y:0, opacity: 1}}
    transition={{delay:0.2, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
        
        
        >CounterApp</motion.h3></MDBCardTitle>
        <motion.MDBCardText>
         <motion.p
         
         initial={{y: 50, opacity: 0}}
    whileInView={{y:0, opacity: 1}}
    transition={{delay:0.2, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
         
         >Technologies - HTML || CSS || React jS</motion.p> 
        </motion.MDBCardText>
        <MDBBtn href='https://lnkd.in/gfN7rDtv' className='btn btn-success '>Live Demo</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </motion.div>


    <motion.div 
    
    initial={{y: 100, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:0.4, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
    
    
    className="col col6">
    <MDBCard>
      <MDBCardImage src= {img2} position='top' alt='...' height={"250px"} style={{objectFit:"cover"}}/>
      <MDBCardBody className='card7'>
        <MDBCardTitle><motion.h3
        
        initial={{y: 100, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:0.4, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
        >Interest Calculator</motion.h3></MDBCardTitle>
        <MDBCardText>
         <motion.p
         
         initial={{y: 100, opacity: 0}}
         whileInView={{y:0, opacity: 1}}
         transition={{delay:0.4, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
         
         >Technologies - HTML || CSS || Bootstrap || React jS</motion.p> 
        </MDBCardText>
        <MDBBtn href='https://lnkd.in/gfeuj3JC' className='btn btn-success'>Live Demo</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </motion.div>


    <motion.div
    
    initial={{y: 100, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:0.6, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
    
    
    className="col col6">
    <MDBCard>
      <MDBCardImage src= {img3} position='top' alt='...' height={"250px"}style={{objectFit:"cover"}}/>
      <MDBCardBody className='card7'>
        <MDBCardTitle><motion.h3
        
        initial={{y: 100, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:0.6, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
        
        >Travel Blog</motion.h3></MDBCardTitle>
        <MDBCardText>
        <motion.p
         
         initial={{y: 100, opacity: 0}}
         whileInView={{y:0, opacity: 1}}
         transition={{delay:0.6, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
         
         >Technologies - HTML || CSS || Bootstrap</motion.p> 
        </MDBCardText>
        <MDBBtn href='https://lnkd.in/gmvzHbYg' className='btn btn-success'>Live Demo</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </motion.div>
  </div>




  <div className="row row7 m-5 pt-5"  >


    <motion.div 
    initial={{y: 100, opacity: 0}}
    whileInView={{y:0, opacity: 1}}
    transition={{delay:0.8, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
    
    
    className="col col7">
         <MDBCard>
      <MDBCardImage src= {img4} position='top' alt='...' height={"250px"}style={{objectFit:"cover"}}/>
      <MDBCardBody className='card7'>
        <MDBCardTitle><motion.h3
        
        initial={{y: 100, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:0.8, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
        
        >Pizza Restaurant</motion.h3></MDBCardTitle>
        <MDBCardText>
        <motion.p
         
         initial={{y: 100, opacity: 0}}
         whileInView={{y:0, opacity: 1}}
         transition={{delay:0.8, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
         
         >Technologies - HTML || CSS || React jS</motion.p> 
        </MDBCardText>
        <MDBBtn href='https://lnkd.in/g-DzAz38' className='btn btn-success'>Live Demo</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </motion.div>


    <motion.div 
    
    initial={{y: 100, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:1, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
    
    className="col col7">
    <MDBCard>
      <MDBCardImage src= {img5} position='top' alt='...' height={"250px"}style={{objectFit:"cover"}} />
      <MDBCardBody className='card7'>
        <MDBCardTitle><motion.h3
        
        initial={{y: 100, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:0.10, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
        
        >Movie Search</motion.h3></MDBCardTitle>
        <MDBCardText>
        <motion.p
         
         initial={{y: 100, opacity: 0}}
         whileInView={{y:0, opacity: 1}}
         transition={{delay:0.10, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
         
         >Technologies - HTML || CSS || Boptstrap || API fetching</motion.p> 
        </MDBCardText>
        <MDBBtn href='https://lnkd.in/gmWyVkcw' className='btn btn-success'>Live Demo</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </motion.div>



    <motion.div 
    
    
      
    initial={{y: 100, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:1.2, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
    
    className="col col7">
    <MDBCard>
      <MDBCardImage src= {img6} position='top' alt='...'  height={"250px"}style={{objectFit:"cover"}}/>
      <MDBCardBody className='card7'>
        <MDBCardTitle><motion.h3
        
        initial={{y: 100, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:1.2, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
        
        >Bank Site</motion.h3></MDBCardTitle>
        <MDBCardText className='col7'>
        <motion.p
         
         initial={{y: 100, opacity: 0}}
         whileInView={{y:0, opacity: 1}}
         transition={{delay:1.2, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
         
         >Technologies - HTML || CSS || Bootstrap || Javascript</motion.p> 
        </MDBCardText>
        <MDBBtn href='https://lnkd.in/gjyDDnKE' className='btn btn-success'>Live Demo</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </motion.div>
  </div>
    </div>
  )
}

export default Projects
