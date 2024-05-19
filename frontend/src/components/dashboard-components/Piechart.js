import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChartGraph = () => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: 'donut',
        width: '2px', // Set the width of the chart
        height: '2px',
      },
      labels: [],
      colors: ['#243624', '#406440', '#5B935B', '#77C077'],
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/campaigns');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();

      // Perform transformation
      const counts = {};
      data.campaigns.forEach(campaign => {
        counts[campaign.location] = (counts[campaign.location] || 0) + 1;
      });
      const locationArray = Object.keys(counts);
      const countsArray = Object.values(counts);

      // Set chart data
      setChartData({
        series: countsArray.map(count => Number(count)),
        options: {
          ...chartData.options,
          labels: locationArray,
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div>
        {/* Your select dropdown and other UI elements */}
      </div>
      <div>
        <div>
          <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
        </div>
      </div>
      <div>
        {/* Your legend or any other additional information */}
      </div>
    </div>
  );
};


export default PieChartGraph;
