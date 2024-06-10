import {motion} from "framer-motion";

function Contact() {
  return (
    <div>
        <motion.h1 
        initial={{y: 50, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:0.2, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
        
        name= "contact"
        className="text-center py-5 contact text-decoration-underline">Contact </motion.h1>

        <motion.p
        
        initial={{y: 50, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:0.2, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
        
        className="text-center ">Submit the form below or shoot me an <br />email - akhilchandps@gmail.com</motion.p>
      <div className="container col-lg-6 my-5">
        <motion.input 
        
        initial={{y: 50, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:0.2, y:{type:"tween",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
        className="mb-3 form-control" type="text" placeholder="Name"/><br />
        <motion.input 
        
        initial={{y: 50, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:0.4, y:{type:"tween",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
        className="mb-3 form-control"type="text" placeholder="Email" /><br />


        <motion.textarea 
        
        initial={{y: 50, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay:0.6, y:{type:"spring",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
        
        
        name="" id="" className="form-control"  placeholder="Message"  cols="30" rows="10"></motion.textarea>
      </div>
    </div>
  )
}

export default Contact