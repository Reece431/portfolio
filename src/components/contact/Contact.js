import React,{useRef, useState, useContext} from 'react';
import emailjs from 'emailjs-com';

import './contact.css';
import { ModeContext } from '../../context';

const Contact = () => {

    const mode = useContext(ModeContext);
    const darkMode = mode.state.darkMode;

    const formRef = useRef();
    const [sent, setSent] = useState(false);
    const [err, setErr] = useState(false);

    const submitMe = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_drk5ntn','template_it8h1qb',formRef.current,'user_UAr6qFnxZmI1MF0e2d9h6')
      .then((result) => {
        //   console.log(result.text);
        //   reset input
          formRef.current[0].value="";
          formRef.current[1].value="";
          formRef.current[2].value="";
          setSent(true)
      }, (error) => {
        //   console.log(error.text);
        setErr(true)
      });
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
                <div className="c-wrapper" tabIndex="0" aria-label="contact-section" role="region">
                    <div className="c-left" tabIndex="-1">
                        <h1 className="c-title" tabIndex="0">Get in touch</h1>
                        <div className="c-info" tabIndex="0" aria-label="contact-information">
                            <div className="c-info-item">
                                <i class="fas fa-phone-square-alt c-icon" tabIndex="0" aria-label="number"></i>
                                <p tabIndex="0">07801953015</p>
                            </div>
                            <div className="c-info-item">
                                <i class="fas fa-envelope-open-text c-icon" tabIndex="0" aria-label="email"></i>
                                <p tabIndex="0">Farnworthwork@gmail.com</p>
                            </div>
                            {sent && <p className="c-sent" style={{color: '#61AB7A'}} role="alert">Thanks, I'll get back to you shortly</p>}
                            {err &&  <p className="c-sent" style={{color: '#E44434'}} role="alert">Unable to sent, please try again soon</p>}
                        </div>
                    </div>
                    <div className="c-right" tabIndex="-1">
                        <p className="c-desc" tabIndex="0">
                            <strong>I'd love to hear from you.</strong> If you'd like a copy of my CV, have a question about one of my projects or simply want to chat about some code, please use the form below.
                        </p>
                        <form ref={formRef} onSubmit={(e) => submitMe(e)} tabIndex="0" role="form" aria-label="contact-form">
                            <input type="text" placeholder="Name" name="name" style={{background: darkMode ? '#333' : '#fff'}} required aria-required="true"/>
                            <input type="text" placeholder="Email" name="email" style={{background: darkMode ? '#333' : '#fff'}} required aria-required="true"/>
                            <textarea rows="5" placeholder="Message" name="msg" style={{background: darkMode ? '#333' : '#fff'}} required aria-required="true"/>
                            <button tabIndex="0">Submit</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Contact
