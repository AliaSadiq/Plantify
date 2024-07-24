import { Carousel } from "@material-tailwind/react";
import prod1 from '../images/product-4.png';
import prod2 from '../images/product-5.png';
import prod3 from '../images/product-6.png';
import prod4 from '../images/product-7.png';
 
export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <div className="flex items-center justify-center">
        <img
          src={prod1}
          alt="image 1"
          className="object-cover"
        />
      </div>
      <div className="flex items-center justify-center">
        <img
          src={prod1}
          alt="image 1"
          className="object-cover"
        />
      </div>
      <div className="flex items-center justify-center">
        <img
          src={prod1}
          alt="image 1"
          className="object-cover"
        />
      </div>
    </Carousel>
  );
}