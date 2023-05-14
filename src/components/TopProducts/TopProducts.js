import React from 'react';
import style from './TopProducts.module.css';
import CoreLinkBtn from '../CoreLinkBtn/CoreLinkBtn';
import FurnitureCard from '../FurnitureCard/FurnitureCard';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useState } from 'react';
const TopProducts = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={style.topProducts}>
        <div >
            <SectionHeading title="Top Picks For You" desc="Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights."/>
        </div>
        <div className={style.content}>
            
            {isExpanded ? (
            <>
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00"/>
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00"/>
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00"/>
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00" />
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00"/>
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00"/>
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00"/>
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00" />
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00" />
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00"/>
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00"/>
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00"/>
            </>
            ) : (
              <>
              <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00"/>
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00"/>
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00"/>
            <FurnitureCard title="Trenton modular sofa_3" price="Rs. 25,000.00" />
              </>
            )}
        </div>
        <div className={style.tail}>
            <CoreLinkBtn to="/" text={isExpanded ? 'View Less' : 'View More'} onClick={toggleExpand} />
        </div>
    </div>
  )
}

export default TopProducts;