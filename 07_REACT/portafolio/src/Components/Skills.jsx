
import { motion } from "framer-motion"

function Skills() {
  return (
    <div>
        <motion.div 
        initial={{x:-100, opacity: 0}}
        whileInView={{x:0, opacity: 1}}
        transition={{delay:0.2, x:{type:"spring",stiffness:60}, opacity:{duration:1},ease:"easeIn",duration:1}}
        
        name ="skills"
        className=" col5 col-5 mt-5 pt-5 ">
        <h4 className="skill">Skills</h4>
        <h2>Technologies</h2>
        </motion.div>
     
   <motion.div
   
   initial={{y: 100, opacity: 0}}
   whileInView={{y:0, opacity: 1}}
   transition={{delay:0.4, y:{type:"tween",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
   
  
   className="row  row1 m-5 px-5" >
    <div className="col-md"><img src="https://abhishek7356.github.io/My-Portfolio/static/media/HTML5_badge.dbc3baa7e405494219e6.png" alt="" style={{objectFit:"contain"}} width={"103px"}/></div>
    <div className="col-md"><img src="https://www.softorks.com/Images/css.jpg"  width={"120px"} alt="" style={{objectFit:"contain"}}  /></div>
    <div className="col-md"><img src="https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png" width={"120px"} alt="" style={{objectFit:"contain"}} /></div>
    <div className="col-md"><img src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2020/11/mongodb.png" width={"120px"} alt="" style={{objectFit:"contain"}}/></div>
    
   </motion.div>


   <motion.div 
   
   initial={{y: 100, opacity: 0}}
    whileInView={{y:0, opacity: 1}}
    transition={{delay:0.8, y:{type:"tween",stiffness:60}, opacity:{duration:0.2},ease:"easeIn",duration:1}}
   
   className="row roww m-5 px-5">
   <div className="col-md"><img src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0" style={{objectFit:"contain"}} alt="" width={"120px"}/></div>
   <div className="col-md"><img src="https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png" alt="" width={"120px"} style={{objectFit:"contain"}}/></div>
   <div className="col-md"><img src="https://icon-library.com/images/node-js-icon/node-js-icon-6.jpg" alt=""  width={"120px"} style={{objectFit:"contain"}}/></div>
   <div className="col-md"><img src="https://www.technoscore.com/img/expressjs.png" alt="" width={"120px"}  style={{objectFit:"contain"}}/></div>
   </motion.div>
    </div>
  )
}

export default Skills