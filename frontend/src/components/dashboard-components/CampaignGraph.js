// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// const CampaignGraph = () => {
//   const [campaignCountByYear, setCampaignCountByYear] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       // Fetch campaign count by year
//       const response = await axios.get('http://localhost:5000/api/campaigns');
//       const { campaignCountByYear } = response.data;
      
//       // Sort the data by year in ascending order
//       campaignCountByYear.sort((a, b) => a._id - b._id);

//       // Set fetched and sorted data to state
//       setCampaignCountByYear(campaignCountByYear);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const gradientOffset = () => {
//     const dataMin = Math.min(...campaignCountByYear.map(({ count }) => count));
//     const dataMax = Math.max(...campaignCountByYear.map(({ count }) => count));
    
//     const targetValue = 2;

//     if (dataMax <= targetValue) {
//       return 1;
//     }
//     if (dataMin >= targetValue) {
//       return 0;
//     }

//     const offset = (targetValue - dataMax) / (dataMax - dataMin);
//     return offset;
//   };

//   const off = gradientOffset();

//   return (
//     <div>
//       <AreaChart
//         width={450}
//         height={220}
//         data={campaignCountByYear.map(({ _id, count }) => ({ year: _id, count }))}
//         margin={{ top: 50, right: 40, left: 0, bottom: 10 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="year" />
//         <YAxis />
//         <Tooltip />
        
//         <defs>
//           <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
//           <stop offset={0 - off} stopColor="#5B935B" stopOpacity={1} />
//           <stop offset={2 - off} stopColor="red" stopOpacity={2} />
           
//           </linearGradient>
//         </defs>
//         <Area type="monotone" dataKey="count" stroke="#8884d8" fill="url(#splitColor)" />
//       </AreaChart>
//     </div>
//   );
// };

// export default CampaignGraph;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// const CampaignGraph = () => {
//   const [campaignCountByYear, setCampaignCountByYear] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       // Fetch campaign count by year
//       const response = await axios.get('http://localhost:5000/api/campaigns');
//       const { campaignCountByYear } = response.data;
      
//       // Set fetched data to state
//       setCampaignCountByYear(campaignCountByYear);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <AreaChart
//         width={450}
//         height={220}
//         data={campaignCountByYear.map(({ _id, count }) => ({ year: _id, count }))}
//         margin={{ top: 50, right: 40, left: 0, bottom: 10 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="year" />
//         <YAxis />
//         <Tooltip />
        
//         <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#5B935B" />
//       </AreaChart>
//     </div>
//   );
// };

// export default CampaignGraph;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const CampaignGraph = () => {
  const [campaignCountByYear, setCampaignCountByYear] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch campaign count by year
      const response = await axios.get('http://localhost:5000/api/campaigns');
      const { campaignCountByYear } = response.data;
      
      // Sort the data by year in ascending order
      campaignCountByYear.sort((a, b) => a._id - b._id);

      // Set fetched and sorted data to state
      setCampaignCountByYear(campaignCountByYear);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <AreaChart
        width={450}
        height={220}
        data={campaignCountByYear.map(({ _id, count }) => ({ year: _id, count }))}
        margin={{ top: 50, right: 40, left: 0, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        
        <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#5B935B" />
      </AreaChart>
    </div>
  );
};

export default CampaignGraph;
