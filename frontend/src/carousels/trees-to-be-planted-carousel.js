// import { Carousel } from "@material-tailwind/react";
// import Slider from "react-slick/lib/slider";

// export function CarouselDefault({ trees = [] }) {
//   return (
//     <Slider className="rounded-xl">
//       {trees.map((tree, index) => (
//         <div 
//           key={index}
//           className="flex flex-col items-center justify-center space-y-2"
//         >
//           <img
//             src={`/assets/${tree.image}`}
//             alt={`${tree.name} image`}
//             className="w-full h-64 object-cover rounded-lg"
//           />
//           <p className="text-center font-semibold">Name: {tree.name}</p>
//           <p className="text-center">Price: Rs.{tree.price}</p>
//           <p className="text-center">Quantity: {tree.quantity}</p>
//         </div>
//       ))}
//     </Slider>
//   );
// }
import Slider from "react-slick/lib/slider";

export function CarouselDefault({ trees = [] }) {
  // Normalize `trees` to always be an array
  const normalizedTrees = Array.isArray(trees) ? trees : [trees];

  const settings = {
    dots: true,
    infinite: normalizedTrees.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings} className="rounded-xl">
      {normalizedTrees.map((tree, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center space-y-2"
        >
          <img
            src={`/assets/${tree.image}`}
            alt={`${tree.name} image`}
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-center font-semibold">Name: {tree.name}</p>
          <p className="text-center">Price: Rs.{tree.price}</p>
          <p className="text-center">Quantity: {tree.quantity}</p>
        </div>
      ))}
    </Slider>
  );
}
