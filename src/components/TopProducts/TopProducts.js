import React from 'react';
import style from './TopProducts.module.css';
import CoreLinkBtn from '../CoreLinkBtn/CoreLinkBtn';
import FurnitureCard from '../FurnitureCard/FurnitureCard';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Box } from '@mui/material';
import { useState,useEffect } from 'react';
const TopProducts = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/41c31119-7cc8-4842-827f-f6a50fbe2cf5'); 
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleExpand = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <Box className={style.topProducts}>
      <Box>
        <SectionHeading title="Top Picks For You" desc="Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights." />
      </Box>
      <Box className={style.content}>

        {isExpanded ? (
          <> 
          {products? products.map(product=>(<FurnitureCard key={product.id} {...product} />)):<p>Loading...</p> }
          </>
        ) : (
          <>
            {products? products.slice(0, 4).map(product=>(<FurnitureCard key={product.id} {...product} />)):<p>Loading...</p> }
          </>
        )}
      </Box>
      <Box className={style.tail}>
        <CoreLinkBtn to="/" text={isExpanded ? 'View Less' : 'View More'} onClick={toggleExpand} />
      </Box>
    </Box>
  )
}

export default TopProducts;