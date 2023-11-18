import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../Footer.css'; 
import logo from './Guvi-blog-logo.webp'

const Footer = () => {
  return (
    <footer>
      <div className="logo">
      <img  src={logo} alt="Guvi-blog-logo" />
      </div>
      <div>
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      <div>Terms & Conditions || Privacy Policy © GUVI Geeks Network Pvt. Ltd.</div>
    </footer>
  );
};

export default Footer;
