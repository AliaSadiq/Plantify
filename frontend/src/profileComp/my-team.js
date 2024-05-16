import React, { useState } from 'react';

const Carousel = ({ images, quotes }) => {
  const middleIndex = Math.floor(images.length / 2);
  const [currentIndex, setCurrentIndex] = useState(middleIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="text-lg  w[1100px]items-center font-extrabold ">        
   <div className="text-lg font-extrabold text-center">Meet our team</div>

<div className="flex flex-col justify-center items-center mt-20">
  <div className="flex items-center space-x-6"> {/* Adjusted spacing and alignment */}
    <button
      onClick={handlePrev}
      className="p-3 bg-gradient-to-r from-green-100 to-green-00 text-black rounded-full hover:bg-gradient-to-l hover:from-green-600 hover:to-cyan-500 transition-transform duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 active:scale-95"
      aria-label="Previous"
    >
      ←
    </button>

    <div className="flex space-x-1"> {/* Space between images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-32 h-32 bg-cover bg-center transition-all cursor-pointer transform-gpu duration-300 ${
            currentIndex === index
              ? 'scale-125 opacity-100 z-10'
              : 'opacity-60 hover:opacity-100'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            borderRadius: '50%',
          }}
          onClick={() => handleSelect(index)}
        />
      ))}
    </div>

    <button
      onClick={handleNext}
      className="p-3 bg-gradient-to-r from-green-100 to-green-00 text-black rounded-full hover:bg-gradient-to-l hover:from-green-600 hover:to-cyan-500 transition-transform duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 active:scale-95"
      aria-label="Next"
    >
      →
    </button>
  </div>
 


<div className="mt-6 text-center">
  <div className="w-80 h-40  flex items-center justify-center bg-white rounded-lg">
    <p className="text-mini font-semibold text-black-800">
      “{quotes[currentIndex]}”
    </p>
  </div>
</div>
</div>
    </div>
  );
};

const App = () => {
    const images = [
      'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
     
    ];
  
    const quotes = [
      'Success is not the key to happiness.',
      'Happiness is the key to success.',
      'TThe only limit to our realization of tomorrow is our doubts of today.',
      'The future belongs to those who believe in the beauty of their dreams.',
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      'Success is not the key to happiness.',
      'Success is not the key to happiness.',
    ];
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-b-200">
        <Carousel images={images} quotes={quotes} />
      </div>
    );
  };
  
  export default App;
  