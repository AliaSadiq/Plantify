// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// const AreaChart = () => {
//   const [campaignCountByMonth, setCampaignCountByMonth] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       // Fetch campaign count by month
//       const response = await axios.get('http://localhost:5000/api/campaigns');
//       const { campaignCountByMonth } = response.data;

//       // Log the response data to verify its structure
//       console.log('API Response:', response.data);

//       // Ensure the data is in the expected format
//       if (!Array.isArray(campaignCountByMonth)) {
//         throw new Error('Invalid data format');
//       }

//       // Sort the data by month in ascending order
//       campaignCountByMonth.sort((a, b) => new Date(`${a.month}-01`) - new Date(`${b.month}-01`));

//       // Log the sorted data to verify correctness
//       console.log('Sorted Data:', campaignCountByMonth);

//       // Set fetched and sorted data to state
//       setCampaignCountByMonth(campaignCountByMonth);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <AreaChart
//         width={450}
//         height={220}
//         data={campaignCountByMonth.map(({ month, count }) => ({ month, count }))}
//         margin={{ top: 50, right: 40, left: 0, bottom: 10 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis />
//         <Tooltip />
//         <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#5B935B" />
//       </AreaChart>
//     </div>
//   );
// };

// export default AreaChart;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useMediaQuery } from '@mui/material';

const ResponsiveAreaChart = () => {
  const [campaignCountByMonth, setCampaignCountByMonth] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:960px)');
  const isLargeScreen = useMediaQuery('(min-width:960px)');

  const chartWidth = isSmallScreen ? 300 : isMediumScreen ? 450 : 600;
  const chartHeight = isSmallScreen ? 200 : isMediumScreen ? 250 : 300;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/campaigns');
      const { campaignCountByMonth } = response.data;

      console.log('API Response:', response.data);

      if (!Array.isArray(campaignCountByMonth)) {
        throw new Error('Invalid data format');
      }

      campaignCountByMonth.sort((a, b) => new Date(`${a.month}-01`) - new Date(`${b.month}-01`));

      console.log('Sorted Data:', campaignCountByMonth);

      setCampaignCountByMonth(campaignCountByMonth);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <AreaChart
        width={chartWidth}
        height={chartHeight}
        data={campaignCountByMonth.map(({ month, count }) => ({ month, count }))}
        margin={{ top: 50, right: 40, left: 0, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#5B935B" />
      </AreaChart>
    </div>
  );
};

export default AreaChart;
