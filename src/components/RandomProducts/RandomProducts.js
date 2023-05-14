import React from 'react';
import style from './RandomProducts.module.css';
import CoreLinkBtn from '../CoreLinkBtn/CoreLinkBtn';
import img1 from './rpImg/Granite-square-side-table1.png';
import img2 from './rpImg/Cloud-sofa-three-seater-ottoman_31.png';
const RandomProducts = () => {
  return (
    <div className={style.rpContainer}>
        <ProductCard img={img1} title="Side table" to="/" text="View More"/>
        <ProductCard img={img2} title="Side table" to="/" text="View More"/>
    </div>
  )
}

export default RandomProducts;


const ProductCard = ({img,title,to,text}) => {
  return (
    <div className={style.productCard}>
        <div className={style.imgContainer}>
            <img src={img} />
        </div>
        <div className={style.content}>
            <h2>{title}</h2>
            <CoreLinkBtn to={to} text={text}/>
        </div>
    </div>
  );
}
