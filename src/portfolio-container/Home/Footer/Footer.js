import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-parent">
                <img src={require('../../../assets/Home/home-bottom.svg')} alt="Your Browser doesn't supports SVG" />
            </div>
        </div>
    )
}

export default Footer;
