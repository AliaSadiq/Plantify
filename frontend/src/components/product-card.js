// src/components/ProductCard.js
import Button from './button';
import React, {useState} from 'react';

const ProductCard = ({ image, title, price }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-transparent rounded-pl">
      <div className='relative rounded-pl bg-yolk'>
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover rounded-lg mb-4"
        />
        <button
          onClick={toggleLike}
          className='absolute bg-white top-4 right-4 rounded-full p-2 shadow-md'
        >

          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill={isLiked ? '#f25e77' : 'none'} 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke={isLiked ? '#f25e77' : '#222222'} 
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>
      </div>
      
      <div className='w-full flex flex-col items-start'>
        <p className="text-sm font-bold">Rs. {price}</p>
        <h3 className="text-mini font-semibold mt-1">{title}</h3>
        <h4 className='text-xmini'>by Majnu Plant Shop</h4>
        <div className='mt-2 w-full flex gap-2'>
          <Button text="add to cart" className="py-2 w-full"/>
          {/* <Button text="buy now" className="w-full bg-gray-100 text-white py-2"/> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
