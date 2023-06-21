import React from 'react'
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"

const Hero = () => {
  return (
    <div className='hero-container'> 
    
      <h1>Hi, I'm <span>Ensar</span></h1>
      <p>Software Developer and CS Student</p>

      <div className="contact-links">
                <a target='_blank' href="https://github.com/3nsar"><BsGithub/></a>
                <a target='_blank' href="https://www.linkedin.com/in/ensar-mehmedovic/"><BsLinkedin/></a>
                <a target='_blank' href="mailto:ensar.m021@gmail.com"><AiOutlineMail/></a>
            </div>

    </div>
  )
}

export default Hero