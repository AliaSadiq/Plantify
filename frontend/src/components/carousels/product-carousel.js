import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prod1 from '../../assets/product-4.png';
import prod2 from '../../assets/product-5.png';
import prod3 from '../../assets/product-6.png';
import prod4 from '../../assets/product-7.png';

// Custom arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#8E9688", borderRadius: "25px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#8E9688", borderRadius: "25px" }}
      onClick={onClick}
    />
  );
}

export default function ProductCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const products = [
    {
        image: prod1,
    },
    {
        image: prod2,
    },
    {
        image: prod3,
    },
    {
        image: prod4,
    },
  ];

  return (
    <Slider {...settings}>
        {products.map((product) => (
            <div className='bg-navygreen-100 p-8 w-60 rounded-lg hover:shadow-lg'>
            <img src={product.image} alt="Product 1" className="w-full h-full object-cover rounded-lg" />
        </div>
        ))}
    </Slider>
  );
}
