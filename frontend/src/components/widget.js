import React from 'react';
//import widget from '/assets/campaign-5.jpg';

export default function Widget() {
    return(
        <div className='max-w-full h-full px-4 mb-10'>
            <div className='flex flex-col'> 
                <p className='text-bold text-lg text-gray-100 font-josefin-sans mb-4'>RECENTS</p>
                <div className='grid grid-cols-1 gap-y-4'>
                    <div className='flex flex-row gap-6'>
                        <img src={'/assets/campaign-5.jpeg'} alt='campaign pic' className='w-20 h-20'></img>
                        <div className='self-center flex flex-col'>
                            <h3 className='text-sm font-semibold'>Sindh Campaign by Riphah Green Club</h3>
                            <p className='text-sm font-josefin-sans text-gray-500'>20-4-2024</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-6'>
                    <img src={'/assets/campaign-5.jpeg'} alt='campaign pic' className='w-20 h-20'></img>
                    <div className='self-center flex flex-col'>
                        <h3 className='text-sm font-semibold'>Sindh Campaign by Riphah Green Club</h3>
                        <p className='text-sm font-josefin-sans text-gray-500'>20-4-2024</p>
                    </div>
                    </div>
                    <div className='flex flex-row gap-6'>
                    <img src={'/assets/campaign-5.jpeg'} alt='campaign pic' className='w-20 h-20'></img>
                    <div className='self-center flex flex-col'>
                        <h3 className='text-sm font-semibold'>Sindh Campaign by Riphah Green Club</h3>
                        <p className='text-sm font-josefin-sans text-gray-500'>20-4-2024</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}