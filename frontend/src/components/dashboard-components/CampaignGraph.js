
// import React from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { year: 2022, campaigns: 10 },
//   { year: 2023, campaigns: 30 },
//   { year: 2024, campaigns: 50 },
//   { year: 2025, campaigns: 70 },
//   { year: 2026, campaigns: 90 },
//   { year: 2027, campaigns: 80 },
//   { year: 2028, campaigns: 100 },
// ];

// const CampaignChart = () => {
//   return (
//     <div className="flex justify-center bg-transparent">
//       <ResponsiveContainer width={600} height={300}>
//         <AreaChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#f0ebeb" />
//           <XAxis dataKey="year" stroke="#333" />
//           <YAxis domain={[0, 100]} stroke="#333" />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="campaigns"
//             stroke="#99BC85"
//             fill="url(#colorGreen)"
//             strokeWidth={2}
//           />
//           <defs>
//             <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#99BC85" stopOpacity={0.7} />
//               <stop offset="100%" stopColor="#99BC85" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };
// // export default CampaignChart;
// import React, { useEffect, useState } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import axios from 'axios';

// const CampaignGraph = () => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await axios.get('BACKEND_URL/api/campaigns/data/${socialId}'); // Adjust the endpoint as per your backend route
//         const { campaignCountByYear } = response.data;

//         if (campaignCountByYear && Array.isArray(campaignCountByYear)) {
//           // Format the data for Recharts
//           const formattedData = campaignCountByYear.map(item => {
//             const year = item._id ? item._id.toString() : 'year'; // Ensure _id exists and convert to string
//             const campaigns = item?.count || 0;

//             return {
//               year,
//               campaigns,
//             };
//           });

//           setChartData(formattedData);
//         } else {
//           console.error("campaignCountByYear is not an array or is undefined");
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//       }
//     };

//     fetchCampaignData();
//   }, []);

//   return (
//     <div className="flex justify-center bg-transparent">
//       <ResponsiveContainer width={600} height={300}>
//         <AreaChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" stroke="f0ebeb" />
//           <XAxis dataKey="year" stroke="#333" />
//           <YAxis domain={[0, 10]} stroke="#333" />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="campaigns"
//             stroke="#99BC85"
//             fill="url(#colorGreen)"
//             strokeWidth={2}
//           />
//           <defs>
//             <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#99BC85" stopOpacity={0.7} />
//               <stop offset="100%" stopColor="#99BC85" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// // export default CampaignGraph;
// import React, { useEffect, useState } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import axios from 'axios';

// const CampaignGraph = ({ socialId }) => { // Assuming socialId is passed as a prop
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await axios.get(`BACKEND_URL/api/campaigns/data/${socialId}`); // Use template literals here
//         const { campaignCountByYear } = response.data;

//         if (campaignCountByYear && Array.isArray(campaignCountByYear)) {
//           const formattedData = campaignCountByYear.map(item => ({
//             year: item._id?.toString() || 'year',
//             campaigns: item.count || 0,
//           }));

//           setChartData(formattedData);
//         } else {
//           console.error("campaignCountByYear is not an array or is undefined");
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//       }
//     };

//     fetchCampaignData();
//   }, [socialId]);

//   return (
//     <div className="flex justify-center bg-transparent">
//       <ResponsiveContainer width={600} height={300}>
//         <AreaChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" stroke="f0ebeb" />
//           <XAxis dataKey="year" stroke="#333" />
//           <YAxis domain={[0, 10]} stroke="#333" />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="campaigns"
//             stroke="#99BC85"
//             fill="url(#colorGreen)"
//             strokeWidth={2}
//           />
//           <defs>
//             <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#99BC85" stopOpacity={0.7} />
//               <stop offset="100%" stopColor="#99BC85" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// // export default CampaignGraph;
// import React, { useEffect, useState } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import axios from 'axios';

// const CampaignGraph = ({ socialId }) => { // Ensure socialId is passed as a prop
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     if (!socialId) {
//       console.error("socialId is undefined");
//       return;
//     }

//     const fetchCampaignData = async () => {
//       try {
//         const response = await axios.get(`BACKEND_URL/api/campaigns/data/${socialId}`);
//         const { campaignCountByYear } = response.data;

//         if (campaignCountByYear && Array.isArray(campaignCountByYear)) {
//           const formattedData = campaignCountByYear.map(item => ({
//             year: item._id?.toString() || 'year',
//             campaigns: item.count || 0,
//           }));

//           setChartData(formattedData);
//         } else {
//           console.error("campaignCountByYear is not an array or is undefined");
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//       }
//     };

//     fetchCampaignData();
//   }, [socialId]);

//   return (
//     <div className="flex justify-center bg-transparent">
//       <ResponsiveContainer width={600} height={300}>
//         <AreaChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" stroke="f0ebeb" />
//           <XAxis dataKey="year" stroke="#333" />
//           <YAxis domain={[0, 10]} stroke="#333" />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="campaigns"
//             stroke="#99BC85"
//             fill="url(#colorGreen)"
//             strokeWidth={2}
//           />
//           <defs>
//             <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#99BC85" stopOpacity={0.7} />
//               <stop offset="100%" stopColor="#99BC85" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default CampaignGraph;
// In CampaignGraph.js
// import React, { useEffect, useState } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import axios from 'axios';

// const CampaignGraph = ({ id }) => {
//   const [chartData, setChartData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!id) {
//       console.error("socialId is undefined");
//       return;
//     }

//     const fetchCampaignData = async () => {
//       try {
//         const response = await axios.get(`BACKEND_URL/api/campaigns/${id}`);
//         const { campaignCountByYear } = response.data;

//         if (campaignCountByYear && Array.isArray(campaignCountByYear)) {
//           const formattedData = campaignCountByYear.map(item => ({
//             year: item._id?.toString() || 'Unknown Year',
//             campaigns: item.count || 0,
//           }));

//           setChartData(formattedData);
//         } else {
//           console.error("campaignCountByYear is not an array or is undefined");
//           setError("No campaign data available");
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//         setError("Failed to fetch campaign data");
//       }
//     };

//     fetchCampaignData();
//   }, [id]);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="flex justify-center bg-transparent">
//       <ResponsiveContainer width="100%" height={300}>
//         <AreaChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#f0ebeb" />
//           <XAxis dataKey="year" stroke="#333" />
//           <YAxis domain={[0, 'auto']} stroke="#333" />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="campaigns"
//             stroke="#99BC85"
//             fill="url(#colorGreen)"
//             strokeWidth={2}
//           />
//           <defs>
//             <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#99BC85" stopOpacity={0.7} />
//               <stop offset="100%" stopColor="#99BC85" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default CampaignGraph;

// import React, { useEffect, useState } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import axios from 'axios';

// const CampaignGraph = ({ id }) => {
//   const [chartData, setChartData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!id) return;

//     const fetchCampaignData = async () => {
//       try {
//         const response = await axios.get(`BACKEND_URL/api/campaigns/${id}`);
//         const { campaignCountByYear } = response.data;

//         if (campaignCountByYear && Array.isArray(campaignCountByYear)) {
//           const formattedData = campaignCountByYear.map(item => ({
//             year: item._id || 'Unknown Year',
//             campaigns: item.count || 0,
//           }));

//           setChartData(formattedData);
//         } else {
//           setError("No campaign data available");
//         }
//       } catch (error) {
//         setError("Failed to fetch campaign data");
//       }
//     };

//     fetchCampaignData();
//   }, [id]);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="flex justify-center bg-transparent">
//       <ResponsiveContainer width="100%" height={300}>
//         <AreaChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#f0ebeb" />
//           <XAxis dataKey="year" stroke="#333" />
//           <YAxis domain={[0, 'auto']} stroke="#333" />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="campaigns"
//             stroke="#99BC85"
//             fill="url(#colorGreen)"
//             strokeWidth={2}
//           />
//           <defs>
//             <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#99BC85" stopOpacity={0.7} />
//               <stop offset="100%" stopColor="#99BC85" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// // export default CampaignGraph;
// import React, { useEffect, useState } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import axios from 'axios';

// const CampaignGraph = ({ socialGroupId }) => {
//   const [chartData, setChartData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!socialGroupId) return;

//     const fetchCampaignData = async () => {
//       try {
//         const response = await axios.get(`BACKEND_URL/api/campaigns/${socialGroupId}`);
//         const { campaignCountByYear } = response.data;

//         if (campaignCountByYear && Array.isArray(campaignCountByYear)) {
//           const formattedData = campaignCountByYear.map(item => ({
//             year: item._id || 'Unknown Year',
//             campaigns: item.count || 0,
//           }));

//           setChartData(formattedData);
//         } else {
//           setError("No campaign data available");
//         }
//       } catch (error) {
//         setError("Failed to fetch campaign data");
//       }
//     };

//     fetchCampaignData();
//   }, [socialGroupId]);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="flex justify-center bg-transparent">
//       <ResponsiveContainer width="100%" height={300}>
//         <AreaChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#f0ebeb" />
//           <XAxis dataKey="year" stroke="#333" />
//           <YAxis domain={[0, 'auto']} stroke="#333" />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="campaigns"
//             stroke="#99BC85"
//             fill="url(#colorGreen)"
//             strokeWidth={2}
//           />
//           <defs>
//             <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#99BC85" stopOpacity={0.7} />
//               <stop offset="100%" stopColor="#99BC85" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default CampaignGraph;
// import React, { useEffect, useState } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import axios from 'axios';

// const CampaignGraph = ({ socialGroupId }) => {
//   const [chartData, setChartData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!socialGroupId) return;

//     const fetchCampaignData = async () => {
//       try {
//         const response = await axios.get(`BACKEND_URL/api/campaigns/${socialGroupId}`);
//         console.log('API response data:', response.data); // Debug log

//         const { campaignCountByYear } = response.data;

//         if (campaignCountByYear && Array.isArray(campaignCountByYear)) {
//           const formattedData = campaignCountByYear.map(item => ({
//             year: item._id || 'Unknown Year',
//             campaigns: item.count || 0,
//           }));

//           console.log('Formatted chart data:', formattedData); // Debug log
//           setChartData(formattedData);
//         } else {
//           setError("No campaign data available");
//         }
//       } catch (error) {
//         console.error('Error fetching campaign data:', error); // Debug log
//         setError("Failed to fetch campaign data");
//       }
//     };

//     fetchCampaignData();
//   }, [socialGroupId]);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="flex justify-center bg-transparent">
//       <ResponsiveContainer width="100%" height={300}>
//         <AreaChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#f0ebeb" />
//           <XAxis dataKey="year" stroke="#333" />
//           <YAxis domain={[0, 'auto']} stroke="#333" />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="campaigns"
//             stroke="#99BC85"
//             fill="url(#colorGreen)"
//             strokeWidth={2}
//           />
//           <defs>
//             <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#99BC85" stopOpacity={0.7} />
//               <stop offset="100%" stopColor="#99BC85" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// // export default CampaignGraph;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const CampaignGraph = () => {
//   const { id } = useParams();
//   const [chartData, setChartData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!id) {
//       setError("Social Group ID is missing");
//       return;
//     }

//     const fetchCampaignData = async () => {
//       try {
//         const response = await axios.get(`BACKEND_URL/api/socialgroup/${id}`);
//         console.log('API response data:', response.data); // Debug log

//         const { campaignCountByYear } = response.data;

//         if (campaignCountByYear && Array.isArray(campaignCountByYear)) {
//           const formattedData = campaignCountByYear.map(item => ({
//             year: item._id || 'Unknown Year',
//             campaigns: item.count || 0,
//           }));

//           console.log('Formatted chart data:', formattedData); // Debug log
//           setChartData(formattedData);
//         } else {
//           setError("No campaign data available");
//         }
//       } catch (error) {
//         console.error('Error fetching campaign data:', error); // Debug log
//         setError("Failed to fetch campaign data");
//       }
//     };

//     fetchCampaignData();
//   }, [id]);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="flex justify-center bg-transparent">
//       <ResponsiveContainer width="100%" height={300}>
//         <AreaChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#f0ebeb" />
//           <XAxis dataKey="year" stroke="#333" />
//           <YAxis domain={[0, 'auto']} stroke="#333" />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="campaigns"
//             stroke="#99BC85"
//             fill="url(#colorGreen)"
//             strokeWidth={2}
//           />
//           <defs>
//             <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#99BC85" stopOpacity={0.7} />
//               <stop offset="100%" stopColor="#99BC85" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default CampaignGraph;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CampaignGraph = () => {
  const { id } = useParams(); // id corresponds to socialId
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) {
      console.log("Social Group ID is missing"); // Log if ID is missing
      setError("Social Group ID is missing");
      setLoading(false);
      return;
    }
  
    const fetchCampaignData = async () => {
      try {
        console.log('Fetching data for social group ID:', id); // Log the social group ID being used
        const response = await axios.get(`BACKEND_URL/api/campaigns/socialg/${id}`);
        
        console.log('API response data:', response.data); // Debug log full API response
  
        const { campaignCountByYear } = response.data;
  
        if (campaignCountByYear && Array.isArray(campaignCountByYear)) {
          const formattedData = campaignCountByYear.map(item => ({
            year: item._id || 'Unknown Year',
            campaigns: item.count || 0,
          }));
  
          console.log('Formatted chart data:', formattedData); // Debug log the formatted data for the chart
          setChartData(formattedData);
        } else {
          console.log('No campaign data available for the given social group ID');
          setError("No campaign data available");
        }
      } catch (error) {
        console.error('Error fetching campaign data:', error); // Debug log in case of an error
        setError("Failed to fetch campaign data");
      } finally {
        setLoading(false);
      }
    };
  
    fetchCampaignData();
  }, [id]);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!chartData.length) return <div>No data available for this Social Group</div>;

  return (
    <div className="flex justify-center bg-transparent">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0ebeb" />
          <XAxis dataKey="year" stroke="#333" />
          <YAxis domain={[0, 'auto']} stroke="#333" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="campaigns"
            stroke="#99BC85"
            fill="url(#colorGreen)"
            strokeWidth={2}
          />
          <defs>
            <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#99BC85" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#99BC85" stopOpacity={0} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CampaignGraph;
