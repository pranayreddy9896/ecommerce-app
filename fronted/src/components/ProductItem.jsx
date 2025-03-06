import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id,image,name,price}) => {

    const{currency}=useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
<div className='overflow-hidden'>
<img className='hover:scale-110 transition ease-in-out' src={Array.isArray(image)  && image.length > 0 ? image[0] : "https://via.placeholder.com/150"} alt={name}/>
</div>
<p className='pt-3 pb-1 text-sm'>{name}</p>
<p className='text-sm font-medium'>{currency || "$"} {price}</p>
    </Link>
  )
}

export default ProductItem;