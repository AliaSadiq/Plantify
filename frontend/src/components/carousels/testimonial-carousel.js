import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from '../../assets/testimonial-1.jpeg';
import testimonial2 from '../../assets/testimonial-2.jpeg';
import testimonial3 from '../../assets/testimonial-3.jpeg';

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const testimonials = [
    {
        image: testimonial1,
        name: 'Farwa',
        testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
    {
        image: testimonial2,
        name: 'Alia',
        testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
    {
        image: testimonial3,
        name: 'Shabeeh',
        testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
    {
        image: testimonial1,
        name: 'Talha Anjum',
        testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
  ];

  return (
    <Slider {...settings}>
        {testimonials.map((testimonial) => (
            <div className="w-full overflow-hidden flex flex-row justify-start px-2 py-4 relative text-black text-sm font-inter">
                <img
                className="h-64 w-64 rounded-full object-cover mr-10"
                loading="lazy"
                alt=""
                src={testimonial.image}
                />
                <div className="bg-pale-100 rounded-lg p-4 z-10 relative ml-[180px] mr-10 mt-[-100px]">
                    <div className="absolute top-0 right-0 bottom-0 left-0 rounded-lg bg-oldlace" />
                    <div className="text-left">{`TO BHAILOG BHT MAST APP HAI AAP WI USE KRO FULL MASTI`}</div>
                    <div className="text-right mt-4">{`~ John Doe`}</div>
                </div>
            </div>
        ))}
    </Slider>
  );
}
