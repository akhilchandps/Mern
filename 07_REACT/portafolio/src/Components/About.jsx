
import {motion} from 'framer-motion';
import {

  MDBCardBody,
  MDBCardTitle,
  MDBCardText,

} from 'mdb-react-ui-kit';
function About() {
  return (
    <div>
    <div name="about" className='col-lg-6 m-auto pt-5'>
      <MDBCardBody>
        <MDBCardTitle><motion.h1 

initial={{x:100, opacity: 0}}
whileInView={{x:0, opacity: 1}}
transition={{delay:0.4, x:{type:"spring",stiffness:60}, opacity:{duration:1},ease:"easeIn",duration:1}}

        className="about text-center text-decoration-underline" style={{fontWeight:600}} >About</motion.h1>
    </MDBCardTitle>
        <MDBCardText>
          
        <motion.p 
        
        
        initial={{x:100, opacity: 0}}
whileInView={{x:0, opacity: 1}}
transition={{delay:0.4, x:{type:"spring",stiffness:60}, opacity:{duration:1},ease:"easeIn",duration:1}}
        
        className='para col my-5' style={{textAlign:
"justify"}}>Hey there! Im Akhil Chand Ps, a dedicated MERN stack developer on a mission to craft innovative and impactful web experiences. With a background in mention any relevant background, like computer science, self-taught programming, etc, Ive honed my skills in MongoDB, Express.js, React.js, and Node.js to create dynamic and scalable applications.</motion.p>
        </MDBCardText>
      </MDBCardBody>
    </div>
 
    </div>
  )
}

export default About

{/* <div className="row p-5 d-flex justify-content-center">

<div className="col-6 text-center">


</div>
</div> */}