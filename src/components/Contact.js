import './css-components/contact.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon from the correct package
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
function Contact(){
    return(
        <div className="contact" id="contact">
            <div className="title">Contact me</div>
            <div className="contain">

                <div className="card">
                    <FontAwesomeIcon icon={faEnvelope} className="icon-contact"/>
                    <h2>Email</h2>
                    <h3>mawadaelmashad@std.mans.edu.eg</h3>
                </div>

                <div className="card">
                    <FontAwesomeIcon icon={faPhone} className="icon-contact"/>
                    <h2>Phone</h2>
                    <h3>+201002323458</h3>
                </div>
            </div>
        </div>
    )
}
export default Contact;