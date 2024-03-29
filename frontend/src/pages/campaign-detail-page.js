import React from 'react';
import campaign from '../assets/campaign.jpg';

export default function CampaignDetailPage(){
    return(
        <div>
            <div className="text-center mt-60 font-josefins font-bold text-light-black">
                <h1 className="text-xl">BLEH Campaign</h1>
                <p className="font-light text-xm ">a campaign by <a href='https://www.instagram.com/riphahgreenclub/?hl=en' className='font-semibold hover:text-sage-200'>Riphah Green Club</a></p>
            </div>
            <div className='flex justify-center flow-root mt-20'>
                <div className="pl-60 float-left">
                    <img src={campaign} alt="Campaign" className="max-w-lg rounded-lg opacity-80" style={{ width: '600px', height: '380px' }} />
                </div>
                <div className="pr-60 float-right">
                    <div className='rounded-lg border-sage-200 border-2' style={{ width: '400px', height: '380px' }}>

                    </div>
                </div>
            </div>
            <div className='mb-20 ml-60 mr-60 text-left mt-20 font-josefins text-light-black'>
                <h1 className="text-xl font-bold">About the Campaign</h1>
                <p className="text-justified font-light text-xm ">Join us in Rawalpindi's green revolution! Our plant campaign aims to beautify our city while 
                promoting environmental sustainability. Together, we'll plant native trees and flowers, creating vibrant green spaces for our 
                community to enjoy. Let's work hand in hand to make Rawalpindi a greener, healthier place for generations to come. Get involved 
                today and help us grow a brighter future!</p>
            </div>
        </div>
    );
}