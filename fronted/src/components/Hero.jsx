import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 min-h-screen w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] items-center'>
      {/* Hero left side */}
      <div className='w-10 sm:w-1/2 flex items-center justify-center py-12 sm:py-0 text-left'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-10 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
          <div className='flex items-center gap-2 cursor-pointer hover:underline'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-10 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <img className='w-full sm:w-1/2 object-cover' src={assets.hero_img} alt='Hero' /> 
    </div>
  );
};

export default Hero;
