import React from 'react';
import { Instagram, LinkedIn, GitHub, Email } from '@material-ui/icons';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href="https://www.instagram.com/jmanarias/" target="_blank" rel="noopener noreferrer">
                <Instagram />
            </a>
            <a href="https://www.linkedin.com/in/j-m-arias-542a74238/" target="_blank" rel="noopener noreferrer">
                <LinkedIn />
            </a>
            <a href="https://github.com/thekain9" target="_blank" rel="noopener noreferrer">
                <GitHub />
            </a>
            <a href="mailto:themanuarias@gmail.com" target="_blank" rel="noopener noreferrer">
                <Email />
            </a>
        </div>
        <p>&copy; 2023 Manu Arias</p>
      
    </div>
  );
}

export default Footer;

