import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
 

    const form = useRef();
    const notify = () => toast("Thank you!");

    const SERVICE_KEY = import.meta.env.VITE_REACT_APP_SERVICE_KEY;
    const TEMPLATE_KEY = import.meta.env.VITE_REACT_APP_TEMPLATE_KEY;
    const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;
    

    const sendEmail = (e) => {
      e.preventDefault();

  
      emailjs.sendForm(SERVICE_KEY, TEMPLATE_KEY, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            console.log("WORKED THX")
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <div className='contact-container'>
        <h1>CONTACT ME</h1>
            <div className="contact-links">
                <a target='_blank' href="https://github.com/3nsar"><BsGithub/></a>
                <a target='_blank' href="https://www.linkedin.com/in/ensar-mehmedovic/"><BsLinkedin/></a>
                <a target='_blank' href="mailto:ensar.m021@gmail.com"><AiOutlineMail/></a>
            </div>
        <div className='contact-content-container'>
        <div className='contact-content'>
       <form ref={form} onSubmit={sendEmail}>

        <input type="text" name="name" placeholder=" Name"/>
  
        <input type="email" name="email" placeholder=" Email"/>
   
        <textarea name="message" placeholder="Write here..."/>
        <button type="submit" value="Send" onClick={notify}>SEND</button>
        
       </form>
       
       </div>
      </div>
      <ToastContainer />
      </div>
    );
  };

export default Contact