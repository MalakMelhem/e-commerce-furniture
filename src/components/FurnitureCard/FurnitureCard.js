import React from 'react';
import img from './furImg/Trenton-modular-sofa_31.png';
import style from './FurnitureCard.module.css';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
//the image's src as well will be added to the prop
const FurnitureCard = ({name,price,items}) => {
  return (
    <Box className={style.furnitureCard}>
      <Box className={style.imgContainer}>
        <img src={items[0]} alt={name}/>
      </Box>
      <Box className={style.description}>
        <Typography component="h4">{name}</Typography>
        <Typography component="h3">${price}</Typography>
      </Box>
    </Box>
  )
}

export default FurnitureCard;