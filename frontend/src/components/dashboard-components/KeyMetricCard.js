// import React from 'react';
// import Chart from 'react-apexcharts';

// const MetricCard = ({ title, value, percentage, trend, chartColor, chartData, chartType }) => {
//   const chartOptions = {
//     chart: {
//       sparkline: {
//         enabled: true,
//       },
//       type: chartType,
//     },
//     plotOptions: chartType === 'candlestick' ? {
//       candlestick: {
//         wick: {
//           useFillColor: true,
//         },
//       }
//     } : {}, // No plotOptions needed for area charts
//     xaxis: {
//       type: 'datetime',
//     },
//     tooltip: {
//       enabled: true,
//     },
//     fill: chartType === 'area' ? {
//       type: 'gradient',
//       gradient: {
//         shade: 'light',
//         gradientToColors: [chartColor || '#FFC107'], // Default color if chartColor is not provided
//         shadeIntensity: 1,
//         type: 'horizontal',
//         opacityFrom: 0.7,
//         opacityTo: 0.3,
//         stops: [0, 100],
//       },
//     } : {}, // No fill options needed for candlestick charts
//     stroke: {
//       width: 2,
//     },
//   };

//   return (
//     <div className="bg-white p-4 shadow-lg rounded-lg w-full lg:w-1/4 flex flex-col items-center justify-between m-2">
//       <div className="flex justify-between items-center w-full">
//         <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
//         <span className="text-gray-400">...</span>
//       </div>
//       <div className="flex items-center justify-between w-full mt-2">
//         <div>
//           <p className="text-2xl font-bold text-gray-900">{value}</p>
//           <p className={`text-sm font-semibold ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
//             {percentage}
//           </p>
//         </div>
//       </div>
//       <div className="w-full mt-4">
//         <Chart 
//           options={chartOptions} 
//           series={[{ data: chartData }]} 
//           type={chartType} 
//           height={100} 
//         />
//       </div>
//     </div>
//   );
// };

// export default MetricCard;
// import React from 'react';

// const MetricCard = ({ title, value }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-2xl font-bold">{value}</p>
//     </div>
//   );
// };

// export default MetricCard;
// import React, { useRef, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';

// const MetricCard = ({ title, value, chartData }) => {
//   const chartRef = useRef(null);

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-2xl font-bold mb-4">{value}</p>
      
//       {/* Mini Line Chart */}
//       <div className="w-full">
//         <Line 
//           ref={chartRef}
//           data={chartData} 
//           options={{
//             maintainAspectRatio: false,
//             plugins: {
//               legend: {
//                 display: false, // Hides the legend for simplicity
//               },
//             },
//             scales: {
//               x: {
//                 display: false, // Hide x-axis
//               },
//               y: {
//                 display: false, // Hide y-axis
//               },
//             },
//           }}
//           height={100} // Adjust the height of the chart
//         />
//       </div>
//     </div>
//   );
// };

// // export default MetricCard;
// import React from 'react';
// import { Line } from 'react-chartjs-2';

// const MetricCard = ({ title, value, chartData }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-2xl font-bold mb-4">{value}</p>
      
//       {/* Render chart only if chartData is available */}
//       {chartData ? (
//         <div className="w-full h-32">
//           <Line
//             data={chartData}
//             options={{
//               maintainAspectRatio: false,
//               plugins: {
//                 legend: {
//                   display: false, // Hides the legend for simplicity
//                 },
//               },
//               scales: {
//                 x: {
//                   display: false, // Hide x-axis
//                 },
//                 y: {
//                   display: false, // Hide y-axis
//                 },
//               },
//             }}
//           />
//         </div>
//       ) : (
//         <p className="text-sm text-gray-500">No data available</p>
//       )}
//     </div>
//   );
// };

// // export default MetricCard;
// import React from 'react';
// import { Line } from 'react-chartjs-2';

// const MetricCard = ({ title, value, chartData }) => {
//   return (
//     <div className="bg-white p-2 rounded-lg shadow-md w-54 h-44"> {/* Adjust size here */}
//       <h3 className="text-sm font-semibold">{title}</h3> {/* Smaller title text */}
//       <p className="text-lg font-bold mb-2">{value}</p> {/* Smaller value text */}
      
//       {/* Render chart only if chartData is available */}
//       {chartData ? (
//         <div className="w-full h-24"> {/* Adjust chart size here */}
//           <Line
//             data={chartData}
//             options={{
//               maintainAspectRatio: false,
//               plugins: {
//                 legend: {
//                   display: false, // Hides the legend for simplicity
//                 },
//               },
//               scales: {
//                 x: {
//                   display: false, // Hide x-axis
//                 },
//                 y: {
//                   display: false, // Hide y-axis
//                 },
//               },
//             }}
//           />
//         </div>
//       ) : (
//         <p className="text-xs text-gray-500">No data available</p> 
//       )}
//     </div>
//   );
// };

// export default MetricCard;

// import React from 'react';
// import { Line } from 'react-chartjs-2';

// const MetricCard = ({ title, value, chartData }) => {
//   return (
//     <div className="bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md p-4 rounded-lg shadow-md w-54 h-48"> {/* Transparent background and adjusted size */}
//       <h3 className="text-sm font-semibold">{title}</h3> {/* Smaller title text */}
//       <p className="text-lg font-bold mb-2">{value}</p> {/* Value text size */}
      
//       {/* Render chart only if chartData is available */}
//       {chartData ? (
//         <div className="relative w-full h-[100px]"> {/* Adjust chart size */}
//           <Line
//             data={chartData}
//             options={{
//               maintainAspectRatio: false,
//               plugins: {
//                 legend: {
//                   display: false, // Hides the legend for simplicity
//                 },
//               },
//               scales: {
//                 x: {
//                   display: false, // Hide x-axis
//                 },
//                 y: {
//                   display: false, // Hide y-axis
//                 },
//               },
//             }}
//           />
//         </div>
//       ) : (
//         <p className="text-xs text-gray-500">No data available</p>
//       )}
//     </div>
//   );
// };

// export default MetricCard;
// import React, { useEffect, useRef } from 'react';
// import { AreaChart } from 'react-chartjs-2';
// import {
//   Chart as ChartJS, // Import ChartJS directly from chart.js
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// // Register the necessary chart components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend);

// const MetricCard = ({ title, value, chartData }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     // Cleanup to destroy the chart instance before re-rendering
//     return () => {
//       if (chartRef.current) {
//         chartRef.current.chartInstance?.destroy();
//       }
//     };
//   }, [chartData]);

//   return (
//     <div className="bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md p-4 rounded-lg shadow-md w-56 h-44">
//       <h3 className="text-sm font-semibold">{title}</h3>
//       <p className="text-lg font-bold mb-2">{value}</p>
      
//       {/* Render chart only if chartData is available */}
//       {chartData ? (
//         <div className="relative w-full h-[100px]">
//           <AreaChart
//             ref={chartRef} // Use ref to store the chart instance
//             data={chartData}
//             options={{
//               maintainAspectRatio: false,
//               plugins: {
//                 legend: {
//                   display: false, // Hides the legend for simplicity
//                 },
//               },
//               scales: {
//                 x: {
//                   display: false, // Hide x-axis
//                 },
//                 y: {
//                   display: false, // Hide y-axis
//                 },
//               },
//             }}
//           />
//         </div>
//       ) : (
//         <p className="text-xs text-gray-500">No data available</p>
//       )}
//     </div>
//   );
// };

// export default MetricCard;
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, // Import ChartJS directly from chart.js
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  Filler, // Import Filler for area chart support
} from 'chart.js';

// Register the necessary chart components including Filler for area chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement,Tooltip, Legend, Filler);

const MetricCard = ({ title, value, chartData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Cleanup to destroy the chart instance before re-rendering
    return () => {
      if (chartRef.current) {
        chartRef.current.chartInstance?.destroy();
      }
    };
  }, [chartData]);

  return (
    <div className="bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md p-4 rounded-lg shadow-md w-56 h-48">
      <h3 className="text-sm font-josefin-sans font-semibold">{title}</h3>
      <p className="text-lg  font-josefin-sans font-bold mb-2">{value}</p>
      
      {/* Render chart only if chartData is available */}
      {chartData ? (
        <div className="relative w-full h-[100px]">
          <Line
            ref={chartRef} // Use ref to store the chart instance
            data={chartData}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false, // Hides the legend for simplicity
                },
              },
              scales: {
                x: {
                  display: false, // Hide x-axis
                },
                y: {
                  display: false, // Hide y-axis
                },
              },
              elements: {
                line: {
                  tension: 0.4, // Smoothness of the line
                  fill: true, // Fill area below the line
                },
              },
            }}
          />
        </div>
      ) : (
        <p className="text-xs text-gray-500">No data available</p>
      )}
    </div>
  );
};

export default MetricCard;
