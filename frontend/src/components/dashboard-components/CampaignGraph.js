
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
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// // // const CampaignGraph = () => {
// // //   const [campaignCountByMonth, setCampaignCountByMonth] = useState([]);

// // //   useEffect(() => {
// // //     fetchData();
// // //   }, []);

// // //   const fetchData = async () => {
// // //     try {
// // //       // Fetch campaign count by month
// // //       const response = await axios.get('http://localhost:5000/api/campaigns');
// // //       const { campaignCountByMonth } = response.data;
      
// // //       // Sort the data by month in ascending order
// // //       campaignCountByMonth.sort((a, b) => new Date(a._id) - new Date(b._id));

// // //       // Set fetched and sorted data to state
// // //       setCampaignCountByMonth(campaignCountByMonth);
// // //     } catch (error) {
// // //       console.error('Error fetching data:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <AreaChart
// // //         width={450}
// // //         height={220}
// // //         data={campaignCountByMonth.map(({ _id, count }) => ({ month: _id, count }))}
// // //         margin={{ top: 50, right: 40, left: 0, bottom: 10 }}
// // //       >
// // //         <CartesianGrid strokeDasharray="3 3" />
// // //         <XAxis dataKey="month" />
// // //         <YAxis />
// // //         <Tooltip />
        
// // //         <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#5B935B" />
// // //       </AreaChart>
// // //     </div>
// // //   );
// // // };

// // // export default CampaignGraph;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// // const CampaignGraph = () => {
// //   const [campaignCountByMonth, setCampaignCountByMonth] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       // Fetch campaign count by month
// //       const response = await axios.get('http://localhost:5000/api/campaigns');
// //       const { campaignCountByMonth } = response.data;

// //       // Log the response data to verify its structure
// //       console.log('API Response:', response.data);

// //       // Ensure the data is in the expected format
// //       if (!Array.isArray(campaignCountByMonth)) {
// //         throw new Error('Invalid data format');
// //       }

// //       // Sort the data by month in ascending order
// //       campaignCountByMonth.sort((a, b) => new Date(`${a.month}-01`) - new Date(`${b.month}-01`));

// //       // Log the sorted data to verify correctness
// //       console.log('Sorted Data:', campaignCountByMonth);

// //       // Set fetched and sorted data to state
// //       setCampaignCountByMonth(campaignCountByMonth);
// //       setLoading(false);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //       setError(error.message);
// //       setLoading(false);
// //     }
// //   };

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div>
// //       <AreaChart
// //         width={450}
// //         height={220}
// //         data={campaignCountByMonth.map(({ month, count }) => ({ month, count }))}
// //         margin={{ top: 50, right: 40, left: 0, bottom: 10 }}
// //       >
// //         <CartesianGrid strokeDasharray="3 3" />
// //         <XAxis dataKey="month" />
// //         <YAxis />
// //         <Tooltip />
// //         <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#5B935B" />
// //       </AreaChart>
// //     </div>
// //   );
// // };

// // export default CampaignGraph;

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
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// const CampaignGraph = () => {
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

// export default CampaignGraph;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// const CampaignChart = () => {
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

// export default CampaignChart;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const CampaignChart = () => {
  const [campaignCountByYear, setCampaignCountByYear] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

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
      setLoading(false); // Update loading state
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Update loading state in case of error
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
        
        <Area type="monotone" dataKey="count" stroke="#9ECA8F" fill="#F2F3E6" />
      </AreaChart>
    </div>
  );
};

export default CampaignChart;
