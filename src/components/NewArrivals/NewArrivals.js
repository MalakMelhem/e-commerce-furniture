import React from 'react';
import style from './NewArrivals.module.css';
import img from './naImg/Asgaard-sofa1.png'

const NewArrivals = () => {
  return (
    <div className={style.newArrivals}>
        <div className={style.imgContainer}>
            <img  src={img}/>
        </div>
        <div className={style.content}>
            <h3>New Arrivals</h3>
            <h2>Asgaard sofa</h2>
            <button>Order Now</button>
        </div>
    </div>
  )
}
export default NewArrivals;