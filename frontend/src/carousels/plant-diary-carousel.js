import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function PlantDiaryCarousel({ images }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="max-w-sm"> {/* Set a fixed width and center the slider */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="bg-navygreen-100 max-w-fit rounded-lg hover:shadow-lg mx-2"> {/* Add margin */}
            <img src={`/assets/products/${image}`} alt="Plant image" className="w-40 object-cover rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
