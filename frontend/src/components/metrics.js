// import React from 'react';
// //import { motion } from 'framer-motion';

// const KPI = ({ label, value }) => {
//   return (
//     <motion.div 
//       className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 m-2 sm:w-1/2 md:w-1/3 lg:w-1/4"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h3 className="text-lg font-semibold mb-2">{label}</h3>
//       <p className="text-3xl font-bold">{value}</p>
//     </motion.div>
//   );
// };

// export default KPI;
import React from 'react';

const KPI = () => {
  return (
    <div className="flex flex-row items-center justify-center transition-transform duration-300 transform hover:scale-105">
  <div className="bg-gradient-to-b from-green-400 to-white-500 rounded-lg shadow-lg ml-14 w-full sm:w-32 lg:w-52 h-full sm:h-32 h- lg:h-52 m-2 flex flex-col justify-center items-center">
    <div>
      <h3 className="text-lg font-semibold text-black mb-2">Recieved</h3>
      <p className="text-3xl font-bold text-black">14.5k</p>
    </div>
  </div>
  <div className="bg-gradient-to-b from-green-400 to-white-500 rounded-lg shadow-lg w-full sm:w-32 lg:w-52 h-full sm:h-32 lg:h-52 m-2 flex flex-col justify-center items-center">
    <div>
      <h3 className="text-lg font-semibold text-black mb-2">Target</h3>
      <p className="text-3xl font-bold text-black">20k</p>
    </div>
  </div>
</div>

  );
};

export default KPI;
