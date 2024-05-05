import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { HeartIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import camp from '../assets/campaign-card.jpeg';

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
  const slideWidth = 40; // width of each slide
  const containerWidth = 2 * slideWidth; // width of container for 3 slides

  // Calculate the left position relative to the center of the container
  const distanceFromCurrent = index - currentIndex;
  const leftPosition = (distanceFromCurrent * slideWidth + containerWidth / 2 - slideWidth / 4);

  const distance = Math.abs(distanceFromCurrent);
  const opacity = 1 / (distance + 1);
  const transform = `scale(${1 - distance * 0.1})`;

  return (
    // <div
    //   className="slide absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-80 rounded-lg shadow-lg transition-transform duration-500"
    //   style={{
    //     left: `calc(50% + ${leftPosition}px)`,
    //     zIndex: currentIndex === index ? 10 : 5,
    //     opacity: opacity,
    //     transform: `translateX(-50%) ${transform}`
    //   }}
    //   onClick={() => onClick(index)}
    // >
    //   <div className="relative w-full h-full">
    //     <div className="bg-cover bg-center w-full h-full rounded-lg" style={{ backgroundImage: `url('${slide.image}')` }}></div>
    //     <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 rounded-b-lg">
    //       <h2 className="text-white text-lg font-semibold">{slide.title}</h2>
    //       <p className="text-white text-sm">{slide.subtitle}</p>
    //     </div>
    //   </div>
      <div className="slide absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg transition-transform duration-500 w-80 h-52  overflow-hidden" 
      style={{
            left: `calc(50% + ${leftPosition}px)`,
            zIndex: currentIndex === index ? 10 : 5,
            opacity: opacity,
            transform: `translateX(-50%) ${transform}`
          }}
       onClick={() => onClick(index)}>
        <img src={camp} alt="Campaign Background" className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 flex items-center font-josefin-sans mx-2">
          <h2 className="text-white text-lg font-semibold mr-2">{campaign.title}</h2>
          <button className="text-white bg-gray-100 border border-gray-100 px-[7px] py-[7px]  mr-2">Donate</button>
          <HeartIcon className="h-[20px] w-[20px] text-white stroke-current mr-2 hover:text-pinky" />
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-between p-2 bg-white bg-opacity-50 font-josefin-sans py-6">
          <div className="text-gray-100">
            <p className="text-xs font-medium">Location: <span className="font-light">{campaign.location}</span></p>
            <p className="text-xs font-medium mt-2">Date: <span className="font-light">{campaign.start_date}</span></p>
          </div>
          <div className="text-white font-josefin-sans">
            <div className="text-gray-100 flex items-center">
              <UserGroupIcon className="h-4 w-4 text-gray-100 mr-1" />
              <p className="text-xs font-light">10 Volunteers</p>
            </div>
            <div className="bg-sage-100 h-2 rounded-full overflow-hidden border-2 border-white mt-[8px]">
              <div className="bg-navygreen-300 h-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

function CampaignCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="w-full max-w-3xl px-4 overflow-hidden perspective" style={{ marginLeft: '50px', marginTop: '0' }}>
        <div className="flex justify-center items-center h-96">
          {campaigns.map((campaign, index) => (
            <Slide key={index} campaign={campaign} currentIndex={currentIndex} index={index} onClick={goToSlide} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CampaignCarousel;