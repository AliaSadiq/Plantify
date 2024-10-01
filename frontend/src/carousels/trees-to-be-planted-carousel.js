import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <div className="flex items-center justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/product-4.png`}
          alt="image 1"
          className="object-cover"
        />
      </div>
      <div className="flex items-center justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/product-4.png`}
          alt="image 1"
          className="object-cover"
        />
      </div>
      <div className="flex items-center justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/product-4.png`}
          alt="image 1"
          className="object-cover"
        />
      </div>
    </Carousel>
  );
}