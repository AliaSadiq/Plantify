import React from 'react';

export default function DiaryCard () {
    return (
        <div className="relative flex items-center gap-4 bg-navygreen-100 max-w-fit p-2 rounded-pl shadow-lg">
            <button className='absolute top-2 right-2'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
            </button>
            

            <img 
                src="/assets/products/plant-1.jpeg" 
                alt="plant image"
                className="w-40 h-40 object-cover rounded-pl"
            />
            <div className='text-sm'>
                <p className='font-semibold mb-4'>Dated: 20-3-24</p>
                <p className='mb-2'><span className='font-bold'>Plant Status:</span> Blooming</p>
                <p><span className='font-bold'>Diary:</span> The plant today is in a very fiesty mood.</p>
            </div>
        </div>
    );
}