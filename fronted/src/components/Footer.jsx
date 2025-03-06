import React from 'react';
import logo from '../assets/logo.png'; // Import the correct image

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={logo} className="mb-5 w-32" alt="Company Logo" />
          <p className="w-full md:w-2/3 text-gray-600 mt:3">
          © 2025 FOREVER. 
       <p> All rights reserved. </p>| Privacy Policy | Terms & Conditions
          </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'> COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li> About</li>
                <li> Delivery</li>
                <li>Privacy Policy</li>

            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>
               GET IN TOUCH 
            </p>
            <ul className='flex flex-col gap-1 text-gray-600'>
<li> +91-999-888-5678</li>
<li> contact@maxima.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'> Copyright2025@maxima.com- All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
