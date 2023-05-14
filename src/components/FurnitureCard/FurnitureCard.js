import React from 'react';
import img from './furImg/Trenton-modular-sofa_31.png';
import style from './FurnitureCard.module.css';

//the image's src as well will be added to the prop
const FurnitureCard = ({title,price}) => {
  return (
    <div className={style.furnitureCard}>
      <div className={style.imgContainer}>
        <img src={img}/>
      </div>
      <div className={style.description}>
        <h4>{title}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  )
}

export default FurnitureCard