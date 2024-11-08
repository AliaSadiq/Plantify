
// import React from "react";

// const CategoryCard = ({ title, image, large }) => {
//   return (
//     <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4">
//       <img
//         src={image}
//         alt={title}
//         className={`${large ? "h-[500px] w-full" : "h-[200px] w-full"} object-cover rounded-md`}
//       />
//       <h3 className="mt-4 text-lg font-semibold text-gray-700">{title}</h3>
//     </div>
//   );
// };

// const ShopByCategories = () => {
//   return (
//     <div className="pb-10  mr-10 w-full"> {/* Ensures full-screen width */}
//       <h2 className="text-center text-2xl font-josefin-sans mt-10 font-bold mb-3">Shop by Categories</h2>
//       <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-2">
//         {/* First column with one large category card */}
//         <div className="flex items-center w-screen justify-center">
//           <CategoryCard
//             title="Round Potted Plants"
//             image="/assets/products/pottingsoil.jpg"
//             large={true} // Large card for the first column
//           />
//         </div>

//         {/* Second column with two smaller category cards in a vertical layout */}
//         <div className="grid grid-rows-2 gap-6">
//           <CategoryCard
//             title="Square Potted Plants"
//             image="/assets/products/pottingsoil.jpg"
//             large={false} // Smaller card
//           />
//           <CategoryCard
//             title="All About Cactus"
//             image="/assets/products/pottingsoil.jpg"
//             large={false} // Smaller card
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopByCategories;

import React from "react";

function ShopByCategories() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">SHOP BY CATEGORIES</h1>

      <div className="grid grid-cols-3 gap-4 w-3/4 max-w-4xl">
        {/* Wide Box (Left Column) */}
        <div className="col-span-2 flex items-center justify-center bg-gray-200 p-10">
          <div className="text-center text-lg font-semibold">
            ROUND
            <br />
            POTTED PLANTS
          </div>
        </div>

        {/* Narrow Box (Top Right) */}
        <div className="col-span-1 flex items-center justify-center bg-gray-100 p-10">
          <div className="text-center text-lg font-semibold">
            SQUARE
            <br />
            POTTED PLANTS
          </div>
        </div>

        {/* Narrow Box (Bottom Right) */}
        <div className="col-span-1 flex items-center justify-center bg-gray-100 p-10">
          <div className="text-center text-lg font-semibold">
            ALL ABOUT CACTUS
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopByCategories;
