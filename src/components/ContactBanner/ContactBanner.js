import React from 'react';
import style from './ContactBanner.module.css';

const ContactBanner = () => {
  return (
    <div className={style.contactBanner}>
        <div className={style.content}>
            <h2>Our Instagram</h2>
            <p>Follow our store on Instagram</p>
        </div>
        <button>Follow Us</button>
    </div>
  )
}

export default ContactBanner;