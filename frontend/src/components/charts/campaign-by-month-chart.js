import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(
    LineElement, 
    CategoryScale, 
    LinearScale, 
    PointElement
);

const CampaignByMonthChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('BACKEND_URL/api/campaigns/campaigns-by-month');
        const data = response.data;

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const labels = months;
        const campaignCounts = Array(12).fill(0);

        data.forEach(item => {
          campaignCounts[item._id - 1] = item.count;
        });

        setChartData({
          labels: labels,
          datasets: [{
            data: campaignCounts,
            backgroundColor: 'transparent',
            borderColor: '#87c52f',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.4
          }]
        });

      } catch (error) {
        console.error('Error fetching campaign data:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    plugins: {
      legend: false
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        min: 0,
        ticks: {
          stepSize: 1
        },
        grid: {
          borderDash: [10]
        }
      }
    }
  };

  return (
    chartData && <Line data={chartData} options={options} />
  );
};

export default CampaignByMonthChart;
