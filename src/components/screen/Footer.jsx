import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
            <nav class=" footer-col navbar navbar-light bg-dark">
                <div class="container">
                    <a class="navbar-brand text-white" href="#">
                        @Copyright Disclaimer
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Footer;