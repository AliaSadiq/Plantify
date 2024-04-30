import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import camp from '../../assets/campaign.jpg';

const HomePageCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000, // Slide change interval in milliseconds (4 seconds)
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false, // Remove arrows
      centerMode: true, // Center the current slide
      centerPadding: '0px' // Adjust padding for centered slide
    };
  
    return (
        <div className="w-screen overflow-hidden">
            <Slider {...settings}>
                <div >
                <img src={camp} alt="Slide 1" className="w-full object-cover h-[550px]"/>
                </div>
                <div>
                <img src={camp} alt="Slide 2" className="w-full object-cover h-[550px]"/>
                </div>
                <div>
                <img src={camp} alt="Slide 3" className="w-full object-cover h-[550px]"/>
                </div>
            </Slider>
        </div>
    );
  };

  export default HomePageCarousel;  