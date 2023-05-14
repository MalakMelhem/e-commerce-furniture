import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.footerBody}>
            <div>
                <p>400 University Drive Suite 200 Coral Gables,<br/> FL 33134 USA</p>
            </div>
            <div>
                <h3>Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h3>Help</h3>
                <ul>
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>
            <div>
                <h3>Newsletter</h3>
                <input className={style.email} type="email" name="email"  placeholder="Enter Your Email Address" />
                <input className={style.subscribe} type="submit" value="SUBSCRIBE" />
            </div>
            </div>
        <div className={style.footerTail}>
            <p>2022 Meubel House. All rights reverved</p>
        </div>
    </div>
  );
}

export default Footer;