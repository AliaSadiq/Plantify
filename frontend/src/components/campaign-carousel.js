import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { HeartIcon, UserGroupIcon } from '@heroicons/react/24/solid';


const campaigns = [
  {
    title: "Karachi Campaign",
    location: "Karachi",
    description: "Adventure is never far away",
    start_date: "23-11-14",
    image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Lahore Campaign",
    location: "Lahore",
    description: "Let your dreams come true",
    image: "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Sahiwal Campaign",
    location: "Sahiwal",
    description: "A piece of heaven",
    start_date: "23-11-14",
    image: "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Multan Campaign",
    location: "Multan",
    description: "A piece of heaven",
    start_date: "23-11-14",
    image: "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Peshawar Campaign",
    location: "Peshawar",
    description: "A piece of heaven",
    start_date: "23-11-14",
    image: "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  }
];


function Slide({ campaign, currentIndex, index, onClick }) {
  const totalSlides = campaigns.length;
  const distanceFromCurrent = (index - currentIndex + totalSlides) % totalSlides/2; // Looping calculation

  const slideWidth = 30; // Width of each slide
  const leftPosition = (distanceFromCurrent - 1) * slideWidth * 2; // Adjusted position to center the slides

  const opacity = 1 / (Math.abs(distanceFromCurrent - 1) + 1); // Adjust opacity based on distance
  const scale = `scale(${1 - (Math.abs(distanceFromCurrent - 1) * 0.1)})`; // Scale for 3D effect


  return (
    <div
      className="absolute top-1/4 transform -translate-y-1/2 rounded-lg shadow-lg transition-transform duration-300 w-80 h-52 overflow-hidden"
      style={{
        left: `calc(50% + ${leftPosition}px)`,
        zIndex: distanceFromCurrent === 1 ? 10 : 5, // The centered slide should have the highest z-index
        opacity: opacity,
        transform: `translateX(-50%) ${scale}`,
      }}
      onClick={() => onClick(index)}
    >
      <img 
        src={'/assets/campaign-4.jpeg'} 
        alt={campaign.title} 
        className="w-full h-full object-cover" 
      />
      <div className="absolute top-2 left-2 flex items-center mx-2">
        <h2 className="text-white text-lg font-semibold mr-2">{campaign.title}</h2>
        <button className="text-white bg-gray-100 border border-gray-100 px-[7px] py-[7px] mr-2">Donate</button>
        <HeartIcon className="h-[20px] w-[20px] text-white stroke-current hover=text-pink-500" />
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-between p-2 bg-white bg-opacity-50 py-6">
        <div className="text-gray-100">
          <p className="text-xs font-medium">Location: <span className="font-light">{campaign.location}</span></p>
          <p className="text-xs font-medium mt-2">Date: <span class="font-light">{campaign.start_date}</span></p>
        </div>
        <div>
          <div className="flex items-center text-gray-700">
            <UserGroupIcon className="h-4 w-4 text-gray-500 mr-1" />
            <p className="text-xs font-light">10 Volunteers</p>
          </div>
          <div className="bg-gray-200 h-2 rounded-full overflow-hidden border-2 border-white mt-2">
            <div className="bg-green-500 h-full" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CampaignCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with the middle slide

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < campaigns.length - 1 ? prev + 1 : 0)); // Auto-transition every 5 seconds
    }, 7000);

    return () => clearInterval(interval); // Cleanup to prevent memory leaks
  }, []);

  return (
    <div className="relative flex justify-center items-center h-96 overflow-visible"> 
      <div className="w-full max-w-3xl px-4 overflow-visible perspective"> 
        <div className="relative h-96"> 
          {campaigns.map((campaign, index) => (
            <Slide
              key={index}
              campaign={campaign}
              currentIndex={currentIndex}
              index={index}
              onClick={goToSlide}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CampaignCarousel;