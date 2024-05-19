// import React from 'react';
// import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const dummyData = [
//   { name: 'Mon', value: 400 },
//   { name: 'Tue', value: 300 },
//   { name: 'Wed', value: 500 },
//   { name: 'Thu', value: 200 },
//   { name: 'Fri', value: 300 },
//   { name: 'Sat', value: 250 },
//   { name: 'Sun', value: 400 },
// ];

// const Insight = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-3 gap-4 mb-4">
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <h2 className="text-gray-600 text-sm">Avg Impression</h2>
//           <h1 className="text-2xl font-bold">1,213K</h1>
//           <ResponsiveContainer width="100%" height={80}>
//             <BarChart data={dummyData}>
//               <Bar dataKey="value" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <h2 className="text-gray-600 text-sm">Avg Engagement Rate</h2>
//           <h1 className="text-2xl font-bold">89.4%</h1>
//           <ResponsiveContainer width="100%" height={80}>
//             <BarChart data={dummyData}>
//               <Bar dataKey="value" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <h2 className="text-gray-600 text-sm">Avg Reach</h2>
//           <h1 className="text-2xl font-bold">823K</h1>
//           <ResponsiveContainer width="100%" height={80}>
//             <BarChart data={dummyData}>
//               <Bar dataKey="value" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <h2 className="text-gray-600 text-sm">Profile Growth & Discover</h2>
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={dummyData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="value" stroke="#8884d8" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <h2 className="text-gray-600 text-sm">Monitoring</h2>
//           <div className="flex justify-between items-center mb-4">
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-blue-600">+200K</h3>
//               <p className="text-gray-600">Subscriptions</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-blue-600">-0.5K</h3>
//               <p className="text-gray-600">Unsubs</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-blue-600">800,000</h3>
//               <p className="text-gray-600">Subscriptions</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-blue-600">4,000</h3>
//               <p className="text-gray-600">Traffic</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white shadow-md rounded-lg p-4 mb-4">
//         <h2 className="text-gray-600 text-sm">Post Insight</h2>
//         <ResponsiveContainer width="100%" height={200}>
//           <BarChart data={dummyData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="value" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//         <div className="flex justify-between items-center mt-4">
//           <div>
//             <p className="text-gray-600">Best Performance</p>
//             <p className="font-bold">Monday</p>
//           </div>
//           <div>
//             <p className="text-gray-600">Worst Performance</p>
//             <p className="font-bold">Saturday</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Insight;
// src/pages/Insight.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const dummyData = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 500 },
  { name: 'Thu', value: 200 },
  { name: 'Fri', value: 300 },
  { name: 'Sat', value: 250 },
  { name: 'Sun', value: 400 },
];

const Insight = () => {
  const { campaignId } = useParams();

  // Fetch or compute the metrics for the campaign using the campaignId
  // For example, you might fetch data from an API
  const metrics = {
    // Example metrics data
    graphs: 'Graphs data here',
    stats: 'Statistics data here',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold p-full pt-5 pl-2">Campaign Insights {campaignId}</h1>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-white shadow-md w-56 rounded-lg p-4">
          <h2 className="text-gray-600 text-sm">Recieved Donations</h2>
          <h1 className="text-2xl font-bold">1,213K</h1>
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={dummyData}>
              <Bar dataKey="value" fill="#8AA07C" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white shadow-md w-56 rounded-lg p-4">
          <h2 className="text-gray-600 text-sm">Target Donation</h2>
          <h1 className="text-2xl font-bold">823K</h1>
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={dummyData}>
              <Bar dataKey="value" fill="#8AA07C" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white shadow-md w-56 rounded-lg p-4">
          <h2 className="text-gray-600 text-sm">Likes</h2>
          <h1 className="text-2xl font-bold">100</h1>
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={dummyData}>
              <Bar dataKey="value" fill="#8AA07C" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white shadow-md w-56 rounded-lg p-4">
          <h2 className="text-gray-600 text-sm">Followers</h2>
          <h1 className="text-2xl font-bold">100</h1>
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={dummyData}>
              <Bar dataKey="value" fill="#8AA07C" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 s gap-4 mb-4">
        <div className="bg-white shadow-md h-80 rounded-lg p-4">
          <h2 className="text-gray-600 text-sm">Donation Insight</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={dummyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8AA07C" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-gray-600 text-sm">Monitoring</h2>
          <div className="flex justify-between items-center mb-4">
            <div className="text-center">
              <h3 className="text-lg font-bold text-blue-600">+200K</h3>
              <p className="text-gray-600">Subscriptions</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-blue-600">-0.5K</h3>
              <p className="text-gray-600">Unsubs</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-blue-600">800,000</h3>
              <p className="text-gray-600">Subscriptions</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-blue-600">4,000</h3>
              <p className="text-gray-600">Traffic</p>
            </div>
          </div>
        </div> */}
         <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-gray-600 h-80text-sm">Campaign Growth & Discover</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8AA07C" />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-gray-600">Best Performance</p>
            <p className="font-bold">Wednessday</p>
          </div>
          <div>
            <p className="text-gray-600">Worst Performance</p>
            <p className="font-bold">Saturday</p>
          </div>
        </div>
      </div>
      </div>

      {/* <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-gray-600 text-sm">Post Insight</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-gray-600">Best Performance</p>
            <p className="font-bold">Monday</p>
          </div>
          <div>
            <p className="text-gray-600">Worst Performance</p>
            <p className="font-bold">Saturday</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Insight;
