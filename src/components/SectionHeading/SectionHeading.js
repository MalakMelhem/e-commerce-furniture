import React from 'react';
import style from './SectionHeading.module.css';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
const SectionHeading = ({title,desc}) => {
  return (
    <Box className={style.headerTitles}>
        <Typography component="h2">{title}</Typography>
        <Typography component="p">{desc}</Typography>
    </Box>
  )
}

export default SectionHeading;