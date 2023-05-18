import React from 'react';
import style from './PurchasingBanner.module.css';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
const PurchasingBanner = () => {
  return (
    <Box className={style.purchasingBanner}>
        <PurchasingContainer className='delivery' title="Free Delivery" desc="For all oders over $50, consectetur adipim scing elit."/>
        <PurchasingContainer className='return' title="90 Days Return" desc="If goods have problems, consectetur adipim scing elit."/>
        <PurchasingContainer className='payment' title="Secure Payment" desc="100% secure payment, consectetur adipim scing elit."/>
    </Box>
  );
}

export default PurchasingBanner;

const PurchasingContainer=({title,desc})=>{
    return(
        <Box className={style.content}>
            <Typography component="h3">{title}</Typography>
            <Typography component="p">{desc}</Typography>
        </Box>
    );
}