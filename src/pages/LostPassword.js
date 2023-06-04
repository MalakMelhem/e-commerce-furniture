import { Box } from '@mui/material';
import React,{useEffect} from 'react';
import ResetPassword from '../components/ResetPassword/ResetPassword';


const LostPassword = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
        <ResetPassword />
    </Box>
  );
}

export default LostPassword;