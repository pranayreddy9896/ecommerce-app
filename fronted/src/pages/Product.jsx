import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from './RelatedProducts';
import { assets } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { products, currency ,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    console.log("Product ID from URL:", productId);
    console.log("Available products:", products);

    if (!products || products.length === 0) {
      console.warn("No products available in context.");
      return;
    }

    const foundProduct = products.find((item) => String(item._id) === String(productId));
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(Array.isArray(foundProduct.image) ? foundProduct.image[0] : foundProduct.image);
    } else {
      setProductData(null);
    }
  }, [productId, products]);

  if (!products) {
    return <div className="text-center text-gray-500 mt-10">Loading products...</div>;
  }

  if (!productData) {
    return <div className="text-center text-gray-500 mt-10">Product not found.</div>;
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image && productData.image.map((item, index) => (
              <img onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt="Product"
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="Selected Product" />
          </div>
        </div>

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(4)].map((_, index) => (
              <img key={index} src={assets.star_icon} alt="star" className="w-3" />
            ))}
            <img src={assets.star_dull_icon} alt="" className="w-3" /> 
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes && productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          
          <button  onClick ={()=>addToCart(productData._id,size)}className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* description and reviews */}

      <div className='mt-20'>
        <div className='flex'>
         
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet.It server as a virtual marketplace where bussinesses and individuals can showcase their products,interact with customers and conduct transcationds without the need for a physical presence.</p>
          <p>E-commerce website typically display products or services along with deatailed descriptions, images, prices,and any available varitions(e.g.. sizes,color,rating).Each product usually has its own dedicated page with relevant information</p>
        </div>
      </div>
{/* related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;
