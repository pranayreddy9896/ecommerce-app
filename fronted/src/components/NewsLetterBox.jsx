import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler=(event)=>{
 event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2x1 font-medium text-gray-800'> Subscribe now & get 20% off</p>
   <p className='text-gray-400 mt-3'> Stay updated with the latest trends and exclusive deals by subscribing to our newsletter! Get early access to new arrivals, special discounts, and style tips straight to your inbox. Enjoy personalized offers, seasonal promotions, and insider updates on our latest collections. Don’t miss out—join our community today and elevate your shopping experience!</p>
    <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' >
        <input className='w-full sm:flex-1 outline-none ' type="email" placeholder='Enter Your email' required/>
        <button type='submit 'className='bg-black text-white text-xs px-10 py-4'> SUBSCRIBE</button>
    </form>
    </div>
  )
}

export default NewsLetterBox