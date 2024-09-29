import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import SearchBar from '../components/search-bar';

function CampaignHeaderCarousel({ campaigns, setFilteredCampaigns }) {
  const slides = [
    {
      img: `${process.env.PUBLIC_URL}/assets/images/carousel-1.jpeg`,
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/carousel-2.jpeg`,
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/carousel-3.jpeg`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto slide change after 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  useEffect(() => {
    const filtered = campaigns.filter(campaign =>
      campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCampaigns(filtered);
  }, [searchQuery, campaigns, setFilteredCampaigns]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className='max-w-full h-[400px] w-full m-auto relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      >
        <div className="absolute bottom-20 left-[350px] flex flex-col items-center z-10 justify-center font-josefin-sans text-3xl font-bold text-white">
          <h3>Join the Initiatives</h3>
          <p className='font-md text-md'>Become a part of these campaigns and make your contribution in preserving the greenery.</p>
          <div className='w-full text-gray-100 mt-6'>
            <SearchBar onSearch={handleSearch} placeholder={"Search Campaigns"}/>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-ivory bg-opacity-40"></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampaignHeaderCarousel;
