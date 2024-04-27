import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from '../../assets/product-1.jpeg';
import product2 from '../../assets/product-2.jpeg';
import product3 from '../../assets/product-3.jpeg';

// Custom arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FEC467", borderRadius: "25px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FEC467", borderRadius: "25px" }}
      onClick={onClick}
    />
  );
}

export default function ProductCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const products = [
    {
        image: {product1}
    },
    {
        image: {product2}
    },
    {
        image: {product3}
    },
  ];

  return (
    <Slider {...settings}>
        {products.map((product) => (
            <div className="">
                <img className="w-1/4 rounded-md" loading="lazy" alt=""
                src={product.image}
                />
            </div>
        ))}
    </Slider>
  );
}