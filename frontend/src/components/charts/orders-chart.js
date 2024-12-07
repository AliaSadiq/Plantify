// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

// ChartJS.register(
//     BarElement, 
//     CategoryScale, 
//     LinearScale
// );

// const OrdersChart = () => {
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Adjust API endpoint if needed for orders data
//         const response = await axios.get('http://localhost:5000/api/campaigns/campaigns-by-month');
//         const data = response.data;

//         // Assuming your response data looks like [{_id: 1, count: 10}, {_id: 2, count: 20}, ...]
//         const months = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
//         const labels = months;
//         const ordersCounts = Array(12).fill(0);

//         // Populate the orders counts for each month
//         data.forEach(item => {
//           ordersCounts[item._id - 1] = item.count; // Assuming count is the number of orders for the month
//         });

//         // Set the chart data
//         setChartData({
//           labels: labels,
//           datasets: [{
//             label: 'Total Orders',  // Optional label for the dataset
//             data: ordersCounts,
//             backgroundColor: '#87c52f', // Color for the bars
//             borderColor: '#64a524', // Border color for bars
//             borderWidth: 1,
//           }]
//         });

//       } catch (error) {
//         console.error('Error fetching orders data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const options = {
//     plugins: {
//       legend: {
//         display: true,  // Optional to display the legend for dataset
//       }
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false // Optional to remove grid lines from the x-axis
//         }
//       },
//       y: {
//         min: 0, // Start y-axis from 0
//         ticks: {
//           stepSize: 10 // Adjust depending on the range of your data
//         },
//         grid: {
//           borderDash: [10] // Dashed grid lines
//         }
//       }
//     }
//   };

//   return (
//     chartData ? <Bar data={chartData} options={options} /> : <p>Loading...</p>
//   );
// };

// export default OrdersChart;
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
);

const OrdersChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Hardcoded data for orders
    const months = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
    const ordersCounts = [12, 19, 5, 10, 4, 15, 8];  // Example order counts for each day of the week

    // Set the chart data with hardcoded values
    setChartData({
      labels: months,
      datasets: [{
        label: 'Total Orders',
        data: ordersCounts,
        backgroundColor: '#DDE6D6', // Color for the bars
        borderColor: '#64a524', // Border color for bars
        borderWidth: 1,
      }]
    });
  }, []);

  const options = {
    plugins: {
      legend: {
        display: true,  // Optional to display the legend for dataset
      }
    },
    scales: {
      x: {
        grid: {
          display: false // Optional to remove grid lines from the x-axis
        }
      },
      y: {
        min: 0, // Start y-axis from 0
        ticks: {
          stepSize: 5 // Adjust depending on the range of your data
        },
        grid: {
          borderDash: [10] // Dashed grid lines
        }
      }
    }
  };

  return (
    chartData ? <Bar data={chartData} options={options} /> : <p>Loading...</p>
  );
};

export default OrdersChart;
