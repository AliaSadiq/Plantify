// import React, { useState, useEffect } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

// function ShopHeaderCarousel() {
//   const navigate = useNavigate();
//   const slides = [
//     { image: "/assets/products/carousel-1.jpg" },
//     { image: "/assets/products/carousel-2.jpg" },
   
//   ];

//   const cards = [
//     { name: "PLANTS", image: "/assets/Plants.jpg" },
//     { name: "SOILS", image: "/assets/soil.jpg" },
//     { name: "TOOLS", image: "/assets/tools.jpg" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlide();
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, [currentIndex]);

//   const openModal = () => {
//     navigate("/shop");
//   };

//   return (
//     <div className="relative w-full max-w-screen h-[400px] sm:h-[500px] md:h-[600px] m-auto group">
//       <div
//         style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
//         className="w-full h-full bg-center bg-cover duration-500"
//       >
//         <div className="flex flex-col md:flex-row items-left  w-full px-4 sm:px-8 md:px-16 lg:px-24 py-10 relative">
//           <div className="text-left sm:mt-10 md:text-left w-full md:w-1/2 font-josefin-sans text-gray-100 mt-5 md:mt-10">
//             <p className="text-sm sm:text-lg font-semibold">
//               Explore Our Unique
//             </p>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
//               Plant Collection,
//             </h1>
//             <p className="mt-4 sm:mt-6 text-xs sm:text-md">
//               Enhance your space with our diverse selection of plants. Choose
//               your favorite from our wide variety and bring nature into your
//               home today.
//             </p>
//             <div className="flex justify-start mt-6 md:mt-10">
//               <button
//                 onClick={openModal}
//                 type="button"
//                 className="font-josefin-sans text-xs sm:text-sm font-semibold text-white bg-gray-100 p-3 sm:p-4 rounded hover:rounded-full border-2 border-gray-100 mr-2 sm:mr-4"
//               >
//                 Explore Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Carousel Navigation */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 sm:left-5 text-2xl rounded-full p-1 sm:p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 sm:right-5 text-2xl rounded-full p-1 sm:p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>

//       {/* Cards Section */}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4 sm:px-10 md:px-16 lg:px-32 sm:-mt-10 md:-mt-10 lg:-mt-28">
//         {cards.map((card) => (
//           <div
//             key={card.name}
//             className="relative h-36 sm:h-48 md:h-56 bg-gray-800 text-white rounded-lg overflow-hidden w-full flex items-center justify-center"
//           >
//             <img
//               src={card.image}
//               alt={card.name}
//               className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-1000 transform hover:scale-125"
//             />
//             <div className="relative text-center">
//               <h3 className="text-sm sm:text-md md:text-lg font-bold">
//                 {card.name}
//               </h3>
//               <a
//                 onClick={openModal}
//                 className="text-white px-2 py-1 sm:px-3 underline sm:py-1 mt-2 rounded-md text-xs sm:text-sm"
//               >
//                 SHOP NOW
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ShopHeaderCarousel;
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ShopHeaderCarousel() {
  const navigate = useNavigate();
  const slides = [
    { image: "/assets/pp.jpg" },
    { image: "/assets/pg.jpg" },
  ];

  const cards = [
    { name: "SOILS", image: "/assets/sso.jpg", link: "/soils" },
    { name: "PLANTS", image: "/assets/plant.jpg", link: "/plants" },
    { name: "TOOLS", image: "/assets/tt.jpg", link: "/tools" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const openModal = (path) => {
    navigate(path);
  };

  return (
    <div className="relative w-full max-w-screen  h-[400px] sm:h-[500px] md:h-[600px] m-auto group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="flex flex-col md:flex-row items-left w-full px-4 sm:px-8 md:px-16 lg:px-24 py-10 relative">
          <div className="text-left sm:mt-10 md:text-left w-full md:w-1/2 font-josefin-sans text-gray-100 mt-5 md:mt-10">
            <p className="text-sm sm:text-lg font-semibold">
              Explore Our Exclusive
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Plants Collection,
            </h1>
            <p className="mt-4 sm:mt-6 text-xs sm:text-md">
              Enhance your space with our diverse selection of plants. Choose
              your favorite from our wide variety and bring nature into your
              home today.
            </p>
            <div className="flex justify-start mt-6 md:mt-10">
              <button
                onClick={() => openModal("/shop")}
                type="button"
                className="font-josefin-sans text-xs sm:text-sm font-semibold text-white bg-gray-100 p-3 sm:p-4 rounded hover:rounded-full border-2 border-gray-100 mr-2 sm:mr-4"
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 sm:left-5 text-2xl rounded-full p-1 sm:p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 sm:right-5 text-2xl rounded-full p-1 sm:p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4 sm:px-10 md:px-16 lg:px-32 sm:-mt-10 md:-mt-10 lg:-mt-36">
        {cards.map((card) => (
          <div
            key={card.name}
            className="relative h-36 sm:h-48 md:h-56 bg-gray-800 text-white rounded-lg overflow-hidden w-full flex items-center justify-center"
          >
            <img
              src={card.image}
              alt={card.name}
              className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-1000 transform hover:scale-125"
            />
            <div className="relative text-center">
              <h3 className="text-sm sm:text-md md:text-lg font-bold">
                {card.name}
              </h3>
              <a
                onClick={() => openModal(card.link)}
                className="text-white px-2 py-1 sm:px-3 underline sm:py-1 mt-2 rounded-md text-xs sm:text-sm cursor-pointer"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopHeaderCarousel;
