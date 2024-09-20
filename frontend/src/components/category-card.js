import React from 'react';
import Button from './button';

const CategoryCard = () => {
  return (
    <div className='relative flex flex-row lg:flex-col rounded-pl w-full h-[400px] bg-cover bg-center' style={{ backgroundImage: `url('/assets/products/category-2.jpeg')` }}>
        <div className='absolute place-self-center inset-x-0 bottom-4'>
            <Button text="{category name}" className="bg-gray-100 text-white py-4"/>
        </div>
    </div>
  );
};

export default CategoryCard;
