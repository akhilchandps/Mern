// import { FaInstagram } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"
import React from 'react';
import img8 from '../images/img8.png'
import {

  MDBCardBody,
  MDBCardTitle,
  MDBCardText,

} from 'mdb-react-ui-kit';
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Typed from 'typed.js';

// import { FaLinkedin } from "react-icons/fa";

function Content() {

  const el = React.useRef(null);


  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['MERN STACK DEVELOPER','Full Stack Developer'],
      typeSpeed: 100,
      backSpeed:100,
      backDelay:1000,
      loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>

   <div className="row">
        <div className='col1 col-lg-6 m-5'>
      <MDBCardBody>
        <MDBCardTitle><motion.h4 
           initial={{x:-100, opacity: 0}}
           whileInView={{x:0, opacity: 1}}
           transition={{delay:0.2, x:{type:"spring",stiffness:60}, opacity:{duration:1},ease:"easeIn",duration:1}}
        
        name="home"
        className='py-4'> Hi iam,</motion.h4>  
        
        < motion.h1 
        
        initial={{x:-100, opacity: 0}}
        whileInView={{x:0, opacity: 1}}
        transition={{delay:0.2, x:{type:"spring",stiffness:60}, opacity:{duration:1},ease:"easeIn",duration:1}}
        style={{fontWeight:"700", fontSize:"40px"}}>Akhil chand P.S</motion.h1>


< motion.h2
   initial={{x:-100, opacity: 0}}
   whileInView={{x:0, opacity: 1}}
   transition={{delay:0.2, x:{type:"spring",stiffness:60}, opacity:{duration:1},ease:"easeIn",duration:1}}
className='py-3 col1 mern' style={{fontWeight:"800", fontSize:"50px"}}>   <span ref={el} /> </motion.h2></MDBCardTitle>
        <MDBCardText>
        <motion.p 
        
        initial={{x:100, opacity: 0}}
        whileInView={{x:0, opacity: 1}}
        transition={{delay:0.2, x:{type:"spring",stiffness:60}, opacity:{duration:0.6},ease:"easeIn",duration:1}}
        
        
        style={{textAlign:
             "justify"}}>Well-qualified ME(A)RN Stack Developer familiar with wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements.</motion.p>
        </MDBCardText>
        <button className='btn btn-dark bat' style={{boxShadow:"rgba(0,0,0,0.3"}}>Hire me</button>
       <motion.div 
          initial={{x:100, opacity: 0}}
          whileInView={{x:0, opacity: 1}}
          transition={{delay:0.3, x:{type:"spring",stiffness:60}, opacity:{duration:1},ease:"easeIn",duration:1}}
       
       className='mt-4 but'>
        <button className='btn  m-3'><a href=""><i className="fa-brands fa-linkedin"></i></a></button>
        <button className='btn  m-3'><a href=""><i className="fa-brands fa-github"></i></a></button>
        <button className='btn  m-3'><a href=""><i className="fa-brands fa-instagram"></i></a></button>
    
       </motion.div>
      </MDBCardBody>
    </div>
  
  <motion.div 
  
  initial={{x:100, opacity: 0}}
    whileInView={{x:0, opacity: 1}}
    transition={{delay:0.2, x:{type:"spring",stiffness:60}, opacity:{duration:1},ease:"easeIn",duration:1}}
  
  className="col col2 text-center"> 
    <img  id="imm" src={img8} alt="" />
  </motion.div>
  {/* https://www.evolvear.io/images/adv-object.png */}
</div>

         <div className="m-5 p-5">
          <About/>
         </div>


         <div className="text-center">
         <Skills/>
        </div>
  
       <div className="pt-5">
      <Projects/>
      </div>
   


    </div>
  )
}

export default Content

// <div className=" col-6 m-5">
//            
//           
//             

//         </div>