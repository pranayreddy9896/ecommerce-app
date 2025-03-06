import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection'; 
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsLetterBox from '../components/NewsLetterBox';

const Home = () => {
  return (
    <div>
      <Hero />  
      {/*<h1 className="text-3xl font-bold text-center">Welcome to Our Store</h1>*/}
      <LatestCollection /> 
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  );
};

export default Home;
