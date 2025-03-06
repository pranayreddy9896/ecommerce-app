import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
         <div className ='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <b className='text-gray-800'> Who We Are </b>
          <p>Welcome to FOREVER, where fashion meets quality at unbeatable prices. We are passionate about bringing you the latest trends, timeless styles, and high-quality apparel for every occasion.</p>
          <b className='text-gray-800'> Our Mission </b>
         <p> Our goal is to make fashion accessible, stylish, and sustainable. We believe that everyone deserves to express themselves through clothing without compromising on quality or affordability.</p>
         <br />
         <b className='text-gray-800'>Why Shop With Us?</b>
         <p>Every piece is crafted with care, ensuring durability and comfort.</p>
         </div>
      </div>
      
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-xol gap-5'>
        <b> Quality Assurance</b>
        <p>✅ Premium Quality – Every piece is crafted with care, ensuring durability and comfort.</p>
        <p>✅ Trendy & Timeless – We curate the latest trends while keeping classic styles alive.</p>
        <p>✅ Affordable Prices – Luxury fashion without the luxury price tag.</p>
        <p>✅ Fast & Secure Shipping – Your orders are delivered swiftly with trusted carriers.</p>
        <p>✅ Eco-Friendly Commitment – We prioritize sustainable fabrics and ethical production. </p>
      </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About