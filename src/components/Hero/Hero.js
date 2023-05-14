import React from 'react';
import style from './Hero.module.css';
import heroImg from './HeroImg/Rocket-single-seater1.png';
import CoreLinkBtn from '../CoreLinkBtn/CoreLinkBtn';

const Hero = () => {
  return (
    <div className={style.hero}>
        <div className={style.headerContainer}>
          <div className={style.contentContainer}>
            <div className={style.content}>
                <h1 className={style.mainTitle}>Rocket single seater</h1>
               <div className={style.mainLink}><CoreLinkBtn to="/" text="View More" /></div> 
            </div>
          </div>
            <div className={style.imgContainer}>
                <img src={heroImg} alt="hero cover"/>
            </div>
        </div>
    </div>
  )
}

export default Hero;