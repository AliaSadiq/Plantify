import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image: "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image: "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image: "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image: "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  }
];

function Slide({ slide, currentIndex, index, onClick }) {
  const slideWidth = 40; // width of each slide
  const containerWidth = 2 * slideWidth; // width of container for 3 slides

  // Calculate the left position relative to the center of the container
  const distanceFromCurrent = index - currentIndex;
  const leftPosition = (distanceFromCurrent * slideWidth + containerWidth / 2 - slideWidth / 4);

  const distance = Math.abs(distanceFromCurrent);
  const opacity = 1 / (distance + 1);
  const transform = `scale(${1 - distance * 0.1})`;

  return (
    <div
      className="slide absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-80 rounded-lg shadow-lg transition-transform duration-500"
      style={{
        left: `calc(50% + ${leftPosition}px)`,
        zIndex: currentIndex === index ? 10 : 5,
        opacity: opacity,
        transform: `translateX(-50%) ${transform}`
      }}
      onClick={() => onClick(index)}
    >
      <div className="relative w-full h-full">
        <div className="bg-cover bg-center w-full h-full rounded-lg" style={{ backgroundImage: `url('${slide.image}')` }}></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 rounded-b-lg">
          <h2 className="text-white text-lg font-semibold">{slide.title}</h2>
          <p className="text-white text-sm">{slide.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function Crousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="w-full max-w-3xl px-4 overflow-hidden perspective" style={{ marginLeft: '50px' }}>
        <div className="flex justify-center items-center h-96">
          {slides.map((slide, index) => (
            <Slide key={index} slide={slide} currentIndex={currentIndex} index={index} onClick={goToSlide} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Crousel;