import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function TestimonialCarousel() {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const [testimonials, setTestimonials] = useState([]);
  useEffect(()=>{
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    axios.get(`${apiUrl}/api/testimonial`)
    .then((response) => {
      setTestimonials(response.data);
      console.log('testimonials: ' + testimonials);
      testimonials.map((testimonial) => {
        console.log(testimonial.image);
      })
    })
  }, [])

  return (
    <Slider {...settings}>
        {testimonials.map((testimonial) => (
            <div className="w-full overflow-hidden flex flex-row justify-start px-2 py-4 relative text-black text-sm font-inter">
                <img
                className="w-40 h-40 lg:h-64 lg:w-64 rounded-full object-cover mr-10"
                loading="lazy"
                alt=""
                src={`/assets/${testimonial.image}`}
                />
                <div className="bg-pale-100 rounded-lg p-4 z-10 relative ml-[100px] mt-[-50px] lg:ml-[180px] mr-10 lg:mt-[-100px]">
                    <div className="absolute top-0 right-0 bottom-0 left-0 rounded-lg bg-oldlace" />
                    <div className="text-left text-sm font-josefin-sans">{testimonial.testimony}</div>
                    <div className="text-right mt-4 text-sm font-josefin-sans font-semibold">{testimonial.name}</div>
                </div>
            </div>
        ))}
    </Slider>
  );
}
