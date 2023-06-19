import React from 'react'
import {motion} from "framer-motion"


const About = () => {
  return (
    <div className='about-container'>

        <motion.div className="about-content" 
        
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.6}}
        viewport={{once: true}}
        >
          
        <h1>ABOUT ME</h1>

            <p>I'm a passionate  <span>software developer</span> with a love for learning and building applications. With a focus on <span>React</span> and various <span>APIs</span>, 
              I thrive on exploring new technologies and expanding my skill set. 
              From designing and implementing innovative solutions, I am driven to create <span>meaningful and impactful software</span>. 
              Constantly seeking new challenges and opportunities, I am <span>committed </span>to improving my skills and creating applications that 
              prioritize user satisfaction. Let's bring ideas to life through code and make a positive impact in the digital world.</p>
        </motion.div>
    </div>
  )
}

export default About