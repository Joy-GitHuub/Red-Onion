import React from 'react';
import './Footer.css'

import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className="footer-section">
                <div className="footer-section-1">
                    <div className="footer-first-part">
                        <img src={logo} alt="" />
                    </div>
                    <div className="footer-second-part">
                        <ul>
                            <li><a href="/">About Online Food</a></li>
                            <li><a href="/">Read Our Blog</a></li>
                            <li><a href="/">Sign Up To Deliver</a></li>
                            <li><a href="/">Add Your Restaurant</a></li>
                        </ul>
                    </div>
                    <div className="footer-third-part">
                        <ul>
                            <li><a href="/">Get Help</a></li>
                            <li><a href="/">Read FAQs</a></li>
                            <li><a href="/">View All Cities</a></li>
                            <li><a href="/">Restaurants Near Me</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-section-2">
                    <p><small>Copyright &copy; 2022 Online Food</small></p>
                    <p>Privacy Policy.</p>
                    <p>Terms of Use.</p>
                    <p>Pricing.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;