// Libraries
import React from 'react';

// Stylesheets
import '../Stylesheets/Footer.css';

// Icons
import { AiFillFacebook } from 'react-icons/ai'
import { BsTwitter, BsPinterest, BsInstagram } from 'react-icons/bs'

function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer-section'>
                <h2 className='footer-brand'>loopstudios</h2>
                <div className='footer-icons'>
                    <div className='icon-container'><AiFillFacebook className='footer-icon' /><div className="underline"></div></div>
                    <div className='icon-container'><BsTwitter className='footer-icon bs-icon' /><div className="underline"></div></div>
                    <div className='icon-container'><BsPinterest className='footer-icon bs-icon' /><div className="underline"></div></div>
                    <div className='icon-container'><BsInstagram className='footer-icon bs-icon' /><div className="underline"></div></div>
                </div>
            </div>
            <div className='footer-section'>
                <div className='footer-links-container'>
                    <a className="footer-link" href="#">About<div className="line"></div></a>
                    <a className="footer-link" href="#">Careers<div className="line"></div></a>
                    <a className="footer-link" href="#">Events<div className="line"></div></a>
                    <a className="footer-link" href="#">Products<div className="line"></div></a>
                    <a className="footer-link" href="#">Support<div className="line"></div></a>
                </div>
                <p className='copyright'>ⓒ 2022 Loopstudios. Copyrights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;