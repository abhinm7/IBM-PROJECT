import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
           <ul>
            <li>Abhin M</li>
            <li>+91 9562620848</li>
            <li>abhin18m@gmail.com</li>
           </ul>
        
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024 © abhin.m All rights reserved.
      </p>
      </div>
  )
}

export default footer