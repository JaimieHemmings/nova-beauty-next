import React from 'react'
import { FaEnvelope, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const ContactBar = () => {
  return (
    <section className="contact-bar">
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul>
                        <li>
                            <a href="mailto:rhiannah1993@gmail.com">
                                <FaEnvelope />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=61551603390209" target="_blank">
                                <FaFacebookSquare />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/nova.beautynails/" target="_blank">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactBar
