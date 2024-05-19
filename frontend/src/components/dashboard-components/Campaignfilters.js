// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FilterableCampaigns = () => {
//   const [filter, setFilter] = useState('all');
//   const [campaigns, setCampaigns] = useState([]);

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/campaigns'); // Replace '/api/campaigns' with your actual backend API endpoint
//         setCampaigns(response.data.campaigns);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       }
//     };

//     fetchCampaigns();
//   }, []); // Empty dependency array ensures this effect runs only once, equivalent to componentDidMount

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//   };

//   const filteredCampaigns = campaigns.filter(campaign => {
//     if (filter === 'all') {
//       return true;
//     }
//     return campaign.Status === filter;
//   });

 

//   return (
//     <div className="container  mx-auto py-0">
//       <div className="flex justify-center mb-4">
//         <h5 className="text-sm font-bold py-2 px-4 ml-auto">Filter by:</h5>
//         <button
//           className={`mx-2 py-1 px-14 rounded-3xl ${
//             filter === 'all' ? 'bg-gg text-black' : 'bg-gray-200'
//           }`}
//           onClick={() => handleFilterChange('all')}
//         >
//           All
//         </button>
//         <button
//           className={`mx-2 py-1 px-10 rounded-3xl ${
//             filter === 'ongoing' ? 'bg-gg text-black' : 'bg-gray-200'
//           }`}
//           onClick={() => handleFilterChange('ongoing')}
//         >
//           Ongoing
//         </button>
//         <button
//           className={`mx-2 py-1 px-14 rounded-3xl ${
//             filter === 'past' ? 'bg-gg text-black' : 'bg-gray-200'
//           }`}
//           onClick={() => handleFilterChange('past')}
//         >
//           Past
//         </button>
//         <button
//           className={`mx-2 py-1 px-12 rounded-3xl ${
//             filter === 'future' ? 'bg-gg text-black ' : 'bg-gray-200'
//           }`}
//           onClick={() => handleFilterChange('future')}
//         >
//           Future
//         </button>
//       </div>
//       <div className="overflow-y-auto max-h-[460px] pl-20">
//         <ul className="w-full">
       
//           {filteredCampaigns.map(campaign => (
//   <li key={campaign.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex">
//     <div className="w-1/2 pr-4">
//       <img src={campaign.image} alt={campaign.name} className="w-40 h-40 object-cover rounded-lg" />
//     </div>
//     <div className="w-1/2 flex flex-col justify-between">
//       <div>
//         <h3 className="text-xl font-semibold mb-1">{campaign.name}</h3>
//         <p className="text-gray-600 mb-1">{campaign.location}</p>
//         <p className="text-gray-600 mb-1">Date: {new Date(campaign.Date).toLocaleDateString()}</p>
//         <p className="text-gray-600 mb-2">Donations: {campaign.donations}</p>
//         <p className="text-sm text-gray-500">{campaign.status}</p>
       
//       </div>
      
//       <div className="flex justify-end">
//       <Link to={`/editCampaign`}>
//   <button className="flex items-center text-gray-500 mr-2">
//     <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM19 21a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h4l2-2h3a2 2 0 012 2v2l2 2v3a2 2 0 01-2 2h-1"></path>
//     </svg>
//     Edit
//   </button>
// </Link>

//         {/* Delete button */}
//         <button className="flex items-center text-red-500 mr-2">
//           <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//           </svg>
//           Delete
//         </button>
//         {/* View button */}
//         <Link to="/Insights.js" className="nav-link" >
//         <button className="flex items-center text-gray-500">
//           <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//           </svg>
//           View
//         </button>
//         </Link>
//       </div>
//     </div>
//   </li>
// ))}

//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FilterableCampaigns;
// CampaignFilters.js
// import React from "react";

// const CampaignFilters = () => {
//   return (
//     <div>
//       <select>
//         <option value="all">All</option>
//         <option value="ongoing">Ongoing</option>
//         <option value="past">Past</option>
//         <option value="future">Future</option>
//       </select>
//     </div>
//   );
// };

// export default CampaignFilters;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const FilterableCampaigns = () => {
//   const [filter, setFilter] = useState('all');
//   const [campaigns, setCampaigns] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     // Fetch campaigns here
//     const fetchCampaigns = async () => {
//             try {
//               const response = await axios.get('http://localhost:5000/api/campaigns'); // Replace '/api/campaigns' with your actual backend API endpoint
//               setCampaigns(response.data.campaigns);
//             } catch (error) {
//               console.error('Error fetching campaigns:', error);
//             }
//           };
      
//           fetchCampaigns();
      
//   }, []);

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//     setShowDropdown(false); // Close dropdown after selecting a filter
//   };

//   const filteredCampaigns = campaigns.filter(campaign => {
//     if (filter === 'all') {
//       return true;
//     }
//     return campaign.Status === filter;
//   });

//   return (
//     <div className="container mx-auto py-0">
//       <div className="flex justify-center mb-4 relative">
//         <h5 className="text-sm font-bold py-2 px-4 ml-auto">Filter by:</h5>
//         <button
//           className="mx-2 py-1 px-4 rounded-full bg-gray-200"
//           onClick={() => setShowDropdown(!showDropdown)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
//           </svg>
//         </button>
//         {showDropdown && (
//           <div className="absolute right-0 top-full bg-white rounded-md shadow-lg py-1 mt-1 ">
//             {/* top-full left-0 bg-white rounded-md shadow-lg py-1 mt-1" */}
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('all')}>All</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('ongoing')}>Ongoing</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('past')}>Past</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('future')}>Future</button>
//           </div>
//         )}
//       </div>
//       <div className="overflow-y-auto max-h-[460px] w-[650px] pl-20">
//         <ul className="w-full">
//           {filteredCampaigns.map(campaign => (
//             <li key={campaign.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex">
//               <div className="w-1/2 pr-4">
//                 <img src={campaign.image} alt={campaign.name} className="w-40 h-40 object-cover rounded-lg" />
//               </div>
//               <div className="w-1/2 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-1">{campaign.name}</h3>
//                   <p className="text-gray-600 mb-1">Location: {campaign.location}</p>
//                   <p className="text-gray-600 mb-1">Date: {new Date(campaign.Date).toLocaleDateString()}</p>
//                   <p className="text-gray-600 mb-2">Donations: {campaign.donations}</p>
//                   <p className="text-sm text-gray-500">{campaign.status}</p>
//                 </div>
//                 <div className="flex justify-end">
//                   <Link to={`/editCampaign`}>
//                     <button className="flex items-center text-gray-500 mr-2">
//                       <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM19 21a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h4l2-2h3a2 2 0 012 2v2l2 2v3a2 2 0 01-2 2h-1"></path>
//                       </svg>
//                       Edit
//                     </button>
//                   </Link>
//                   {/* Delete button */}
//                   <button className="flex items-center text-red-500 mr-2">
//                     <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                     </svg>
//                     Delete
//                   </button>
//                   {/* View button */}
//                   <Link to="/Insights.js" className="nav-link" >
//                     <button className="flex items-center text-gray-500">
//                       <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                       </svg>
//                       View
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FilterableCampaigns;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// const FilterableCampaigns = () => {
//   const [filter, setFilter] = useState('all');
//   const [campaigns, setCampaigns] = useState([]);
//   const [showOptions, setShowOptions] = useState(null);

//   useEffect(() => {
//     // Fetch campaigns here
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/campaigns'); // Replace '/api/campaigns' with your actual backend API endpoint
//         setCampaigns(response.data.campaigns);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//   };

//   const handleEdit = (id) => {
//     // Handle edit logic here
//     console.log('Edit campaign with id:', id);
//   };

//   const handleDelete = async (id) => {
//     // Handle delete logic here
//     try {
//       await axios.delete(`http://localhost:5000/api/campaigns/${id}`);
//       setCampaigns(campaigns.filter(campaign => campaign.id !== id));
//       console.log('Deleted campaign with id:', id);
//     } catch (error) {
//       console.error('Error deleting campaign:', error);
//     }
//   };

//   const toggleOptions = (id) => {
//     setShowOptions(showOptions === id ? null : id);
//   };

//   const filteredCampaigns = campaigns.filter(campaign => {
//     if (filter === 'all') {
//       return true;
//     }
//     return campaign.status === filter;
//   });

//   return (
//     <div className="container mx-auto py-0">
//       <div className="flex justify-center mb-4 relative">
//         <h5 className="text-sm font-bold py-2 px-4 ml-auto">Filter by:</h5>
//         <button
//           className="mx-2 py-1 px-4 rounded-full bg-gray-200"
//           onClick={() => setShowOptions(!showOptions)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
//           </svg>
//         </button>
//         {showOptions && (
//           <div className="absolute right-0 top-full bg-white rounded-md shadow-lg py-1 mt-1">
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('all')}>All</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('ongoing')}>Ongoing</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('past')}>Past</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('future')}>Future</button>
//           </div>
//         )}
//       </div>
//       <div className="overflow-y-auto max-h-[460px] w-[650px] pl-20">
//         <ul className="w-full">
//           {filteredCampaigns.map(campaign => (
//             <li key={campaign.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex relative">
//               <div className="w-1/2 pr-4">
//                 <img src={campaign.image} alt={campaign.name} className="w-40 h-40 object-cover rounded-lg" />
//               </div>
//               <div className="w-1/2 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-1">{campaign.name}</h3>
//                   <p className="text-gray-600 mb-1">Location: {campaign.location}</p>
//                   <p className="text-gray-600 mb-1">Date: {new Date(campaign.date).toLocaleDateString()}</p>
//                   <p className="text-gray-600 mb-2">Donations: {campaign.donations}</p>
//                   <p className="text-sm text-gray-500">{campaign.status}</p>
//                 </div>
//                 <div className="absolute top-0 right-0 mt-2 mr-2">
//                   <button onClick={() => toggleOptions(campaign.id)} className="text-xs">
//                     <FontAwesomeIcon icon={faEllipsisV} className="text-black" />
//                   </button>
//                   {showOptions === campaign.id && (
//                     <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-md">
//                       <button onClick={() => handleEdit(campaign.id)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Edit</button>
//                       <button onClick={() => handleDelete(campaign.id)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Delete</button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FilterableCampaigns;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// const FilterableCampaigns = () => {
//   const [filter, setFilter] = useState('all');
//   const [campaigns, setCampaigns] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showOptions, setShowOptions] = useState(null);

//   useEffect(() => {
//     // Fetch campaigns here
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/campaigns'); // Replace '/api/campaigns' with your actual backend API endpoint
//         setCampaigns(response.data.campaigns);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//     setShowDropdown(false); // Close dropdown after selecting a filter
//   };

//   const handleEdit = (id) => {
//     // Handle edit logic here
//     console.log('Edit campaign with id:', id);
//   };

//   const handleDelete = async (id) => {
//     // Handle delete logic here
//     try {
//       await axios.delete(`http://localhost:5000/api/campaigns/${id}`);
//       setCampaigns(campaigns.filter(campaign => campaign.id !== id));
//       console.log('Deleted campaign with id:', id);
//     } catch (error) {
//       console.error('Error deleting campaign:', error);
//     }
//   };

//   const toggleOptions = (id) => {
//     setShowOptions(showOptions === id ? null : id);
//   };

//   const filteredCampaigns = campaigns.filter(campaign => {
//     if (filter === 'all') {
//       return true;
//     }
//     return campaign.status === filter;
//   });

//   return (
//     <div className="container mx-auto py-0">
//       <div className="flex justify-center mb-4 relative">
//         <h5 className="text-sm font-bold py-2 px-4 ml-auto">Filter by:</h5>
//         <button
//           className="mx-2 py-1 px-4 rounded-full bg-gray-200"
//           onClick={() => setShowDropdown(!showDropdown)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
//           </svg>
//         </button>
//         {showDropdown && (
//           <div className="absolute right-0 top-full bg-white rounded-md shadow-lg py-1 mt-1">
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('all')}>All</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('ongoing')}>Ongoing</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('past')}>Past</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('future')}>Future</button>
//           </div>
//         )}
//       </div>
//       <div className="overflow-y-auto max-h-[460px] w-[650px] pl-20">
//         <ul className="w-full">
//           {filteredCampaigns.map(campaign => (
//             <li key={campaign.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex relative">
//               <div className="w-1/2 pr-4">
//                 <img src={campaign.image} alt={campaign.name} className="w-40 h-40 object-cover rounded-lg" />
//               </div>
//               <div className="w-1/2 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-1">{campaign.name}</h3>
//                   <p className="text-gray-600 mb-1">Location: {campaign.location}</p>
//                   <p className="text-gray-600 mb-1">Date: {new Date(campaign.date).toLocaleDateString()}</p>
//                   <p className="text-gray-600 mb-2">Donations: {campaign.donations}</p>
//                   <p className="text-sm text-gray-500">{campaign.status}</p>
//                 </div>
//                 <div className="absolute top-0 right-0 mt-2 mr-2">
//                   <button onClick={() => toggleOptions(campaign.id)} className="text-xs">
//                     <FontAwesomeIcon icon={faEllipsisV} className="text-black" />
//                   </button>
//                   {showOptions === campaign.id && (
//                     <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-md">
//                       <button onClick={() => handleEdit(campaign.id)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Edit</button>
//                       <button onClick={() => handleDelete(campaign.id)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Delete</button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FilterableCampaigns;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// const FilterableCampaigns = () => {
//   const [filter, setFilter] = useState('all');
//   const [campaigns, setCampaigns] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showOptions, setShowOptions] = useState(null);

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/campaigns'); // Replace with your actual backend API endpoint
//         setCampaigns(response.data.campaigns);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//     setShowDropdown(false); // Close dropdown after selecting a filter
//   };

//   const handleEdit = (id) => {
//     // Handle edit logic here
//     console.log('Edit campaign with id:', id);
//   };

//   const handleDelete = async (id) => {
//     // Handle delete logic here
//     try {
//       await axios.delete(`http://localhost:5000/api/campaigns/${id}`);
//       setCampaigns(campaigns.filter(campaign => campaign.id !== id));
//       console.log('Deleted campaign with id:', id);
//     } catch (error) {
//       console.error('Error deleting campaign:', error);
//     }
//   };

//   const toggleOptions = (id) => {
//     setShowOptions(showOptions === id ? null : id);
//   };

//   const filteredCampaigns = campaigns.filter(campaign => {
//     if (filter === 'all') {
//       return true;
//     }
//     return campaign.status === filter;
//   });

//   return (
//     <div className="container mx-auto py-0">
//       <div className="flex justify-center mb-4 relative">
//         <h5 className="text-sm font-bold py-2 px-4 ml-auto">Filter by:</h5>
//         <button
//           className="mx-2 py-1 px-4 rounded-full bg-gray-200"
//           onClick={() => setShowDropdown(!showDropdown)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
//           </svg>
//         </button>
//         {showDropdown && (
//           <div className="absolute right-0 top-full bg-white rounded-md shadow-lg py-1 mt-1">
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('all')}>All</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('ongoing')}>Ongoing</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('past')}>Past</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('future')}>Future</button>
//           </div>
//         )}
//       </div>
//       <div className="overflow-y-auto max-h-[460px] w-[650px] pl-20">
//         <ul className="w-full">
//           {filteredCampaigns.map(campaign => (
//             <li key={campaign.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex relative">
//               <div className="w-1/2 pr-4">
//                 <img src={campaign.image} alt={campaign.name} className="w-40 h-40 object-cover rounded-lg" />
//               </div>
//               <div className="w-1/2 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-1">{campaign.name}</h3>
//                   <p className="text-gray-600 mb-1">Location: {campaign.location}</p>
//                   <p className="text-gray-600 mb-1">Date: {new Date(campaign.date).toLocaleDateString()}</p>
//                   <p className="text-gray-600 mb-2">Donations: {campaign.donations}</p>
//                   <p className="text-sm text-gray-500">{campaign.status}</p>
//                 </div>
//                 {/* <div className="relative "> */}
//                 <div className="absolute top-0 right-5 mt-1 mr-1">
//                   <button onClick={() => toggleOptions(campaign.id)} className="text-xs">
//                     <FontAwesomeIcon icon={faEllipsisV} className="text-black" />
//                   </button>
//                   {showOptions === campaign.id && (
//                     <div className="absolute right-2 mt-2 w-24 bg-white border rounded shadow-md">
//                       <button onClick={() => handleEdit(campaign.id)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Edit</button>
//                       <button onClick={() => handleDelete(campaign.id)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Delete</button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FilterableCampaigns;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// const FilterableCampaigns = () => {
//   const [filter, setFilter] = useState('all');
//   const [campaigns, setCampaigns] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showOptions, setShowOptions] = useState(null);

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/campaigns'); // Replace with your actual backend API endpoint
//         setCampaigns(response.data.campaigns);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//     setShowDropdown(false); // Close dropdown after selecting a filter
//   };

//   const handleEdit = (id) => {
//     // Handle edit logic here
//     console.log('Edit campaign with id:', id);
//   };

//   const handleDelete = async (id) => {
//     // Handle delete logic here
//     try {
//       await axios.delete(`http://localhost:5000/api/campaigns/${id}`);
//       setCampaigns(campaigns.filter(campaign => campaign.id !== id));
//       console.log('Deleted campaign with id:', id);
//     } catch (error) {
//       console.error('Error deleting campaign:', error);
//     }
//   };

//   const toggleOptions = (id) => {
//     setShowOptions(showOptions === id ? null : id);
//   };

//   const filteredCampaigns = campaigns.filter(campaign => {
//     if (filter === 'all') {
//       return true;
//     }
//     return campaign.status === filter;
//   });

//   return (
//     <div className="container mx-auto py-0">
//       <div className="flex justify-center mb-4 relative">
//         <h5 className="text-sm font-bold py-2 px-4 ml-auto">Filter by:</h5>
//         <button
//           className="mx-2 py-1 px-4 rounded-full bg-gray-200"
//           onClick={() => setShowDropdown(!showDropdown)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
//           </svg>
//         </button>
//         {showDropdown && (
//           <div className="absolute right-0 top-full bg-white rounded-md shadow-lg py-1 mt-1">
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('all')}>All</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('ongoing')}>Ongoing</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('past')}>Past</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('future')}>Future</button>
//           </div>
//         )}
//       </div>
//       <div className="overflow-y-auto max-h-[460px] w-[650px] pl-20">
//         <ul className="w-full">
//           {filteredCampaigns.map(campaign => (
//             <li key={campaign.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex relative">
//               <div className="w-1/2 pr-4">
//                 <img src={campaign.image} alt={campaign.name} className="w-40 h-40 object-cover rounded-lg" />
//               </div>
//               <div className="w-1/2 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-1">{campaign.name}</h3>
//                   <p className="text-gray-600 mb-1">Location: {campaign.location}</p>
//                   <p className="text-gray-600 mb-1">Date: {new Date(campaign.date).toLocaleDateString()}</p>
//                   <p className="text-gray-600 mb-2">Donations: {campaign.donations}</p>
//                   <p className="text-sm text-gray-500">{campaign.status}</p>
//                 </div>
//                 <div className="absolute top-0 right-5 mt-1 mr-1">
//                   <button onClick={() => toggleOptions(campaign.id)} className="text-xs">
//                     <FontAwesomeIcon icon={faEllipsisV} className="text-black" />
//                   </button>
//                   {showOptions === campaign.id && (
//                     <div className="absolute right-2 mt-2 w-24 bg-white border rounded shadow-md">
//                       <button onClick={() => handleEdit(campaign.id)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Edit</button>
//                       <button onClick={() => handleDelete(campaign.id)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Delete</button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FilterableCampaigns;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FilterableCampaigns = () => {
  const [filter, setFilter] = useState('all');
  const [campaigns, setCampaigns] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Fetch campaigns here
    const fetchCampaigns = async () => {
            try {
              const response = await axios.get('http://localhost:5000/api/campaigns'); // Replace '/api/campaigns' with your actual backend API endpoint
              setCampaigns(response.data.campaigns);
            } catch (error) {
              console.error('Error fetching campaigns:', error);
            }
          };
      
          fetchCampaigns();
      
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setShowDropdown(false); // Close dropdown after selecting a filter
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    if (filter === 'all') {
      return true;
    }
    return campaign.Status === filter;
  });

  return (
    <div className="container mx-auto py-0">
      <div className="flex justify-center mb-4 relative">
        <h5 className="text-sm font-bold py-2 px-4 ml-auto">Filter by:</h5>
        <button
          className="mx-2 py-1 px-4 rounded-full bg-gray-200"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
          </svg>
        </button>
        {showDropdown && (
          <div className="absolute right-0 top-full bg-white rounded-md shadow-lg py-1 mt-1 ">
            {/* top-full left-0 bg-white rounded-md shadow-lg py-1 mt-1" */}
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('all')}>All</button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('ongoing')}>Ongoing</button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('past')}>Past</button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('future')}>Future</button>
          </div>
        )}
      </div>
      <div className="overflow-y-auto max-h-[460px] w-[650px] pl-20">
        <ul className="w-full">
          {filteredCampaigns.map(campaign => (
            <li key={campaign.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex">
              <div className="w-1/2 pr-4">
                <img src={campaign.image} alt={campaign.name} className="w-40 h-40 object-cover rounded-lg" />
              </div>
              <div className="w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{campaign.name}</h3>
                  <p className="text-gray-600 mb-1">Location: {campaign.location}</p>
                  <p className="text-gray-600 mb-1">Date: {new Date(campaign.Date).toLocaleDateString()}</p>
                  <p className="text-gray-600 mb-2">Donations: {campaign.donations}</p>
                  <p className="text-sm text-gray-500">{campaign.status}</p>
                </div>
                <div className="flex justify-end">
                  <Link to={`/editCampaign`}>
                    <button className="flex items-center text-gray-500 mr-2">
                      <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM19 21a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h4l2-2h3a2 2 0 012 2v2l2 2v3a2 2 0 01-2 2h-1"></path>
                      </svg>
                      Edit
                    </button>
                  </Link>
                  {/* Delete button */}
                  <button className="flex items-center text-red-500 mr-2">
                    <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    Delete
                  </button>
                  {/* View button */}
                  <Link to="/Insights.js" className="nav-link" >
                    <button className="flex items-center text-gray-500">
                      <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterableCampaigns;