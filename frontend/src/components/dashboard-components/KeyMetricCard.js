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
