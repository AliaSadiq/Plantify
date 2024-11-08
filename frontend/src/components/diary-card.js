import React from 'react';
import OptionsDropdown from '../dropdowns/options-dropdown';

export default function DiaryCard () {
    return (
        <div className="relative flex items-center gap-4 bg-navygreen-50 border-2 border-navygreen-200 max-w-fit p-2 rounded-pl">
            <div className='absolute top-2 right-2'>
                <OptionsDropdown/>
            </div>
            <div className='absolute bottom-2 right-2 flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#9cbce9" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 2.5C12 2.5 6 9 6 13.5C6 17.642 9.358 21 13.5 21C17.642 21 21 17.642 21 13.5C21 9 12 2.5 12 2.5ZM13.5 19C10.738 19 8.5 16.762 8.5 14C8.5 11.238 10.738 9 13.5 9C16.262 9 18.5 11.238 18.5 14C18.5 16.762 16.262 19 13.5 19Z"/>
                    <line x1="4" y1="4" x2="20" y2="20" stroke="#9cbce9" stroke-width="2"/>
                </svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFB74D" viewBox="0 0 24 24" width="24" height="24">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v3M4.222 4.222l2.121 2.121M1 12h3M4.222 19.778l2.121-2.121"/>
                </svg>

            </div>
            

            <img 
                src="/assets/products/plant-1.jpeg" 
                alt="plant image"
                className="w-40 h-40 object-cover rounded-pl"
            />
            <div className='text-sm'>
                <p className='mb-2'><span className='font-bold'>Plant Status:</span> Blooming</p>
                <p><span className='font-bold'>Diary:</span> The plant today is in a very fiesty mood.</p>
                <p className='font-semibold text-xs text-gray-600 place-self-end mt-2'>20-3-24</p>
            </div>
            <div className='flex'>
                
            </div>
        </div>
    );
}