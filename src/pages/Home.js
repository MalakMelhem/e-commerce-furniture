import React from 'react';
import Hero from '../components/Hero/Hero';
import RandomProducts from '../components/RandomProducts/RandomProducts';
import TopProducts from '../components/TopProducts/TopProducts';
import NewArrivals from '../components/NewArrivals/NewArrivals';
import Blogs from '../components/Blogs/Blogs';
import ContactBanner from '../components/ContactBanner/ContactBanner';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <Hero />
      <RandomProducts />
      <TopProducts />
      <NewArrivals />
      <Blogs />
      <ContactBanner />
    </Box>
  );
}

export default Home