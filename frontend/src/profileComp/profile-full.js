// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import avatar from '../images/testimonial-2.jpeg';
// import header from '../images/about-1.jpeg';
// import profile from '../images/carousel-1.jpeg';
// import ReviewComponent from './review-profile';
// import QuestionComponent from './profile-question';
// import ImpactComponent from './impact-profile';
// import CampaignCardSh from '../components/campaign-card-sh';
// import { useParams } from 'react-router-dom';
// import { FaMapMarkerAlt } from 'react-icons/fa';

// const MainPage = () => {
//   const [activeTab, setActiveTab] = useState('campaign');
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [profileData, setProfileData] = useState(null);
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [campaigns, setCampaigns] = useState([]);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const { id } = useParams();
//   const user = JSON.parse(localStorage.getItem('user'));
//   const userId = user ? user._id : null;

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/socialgroup/${id}`);
//         setProfileData(response.data);
//         setTeamMembers(response.data.teamMembers);
//         const followers = data.followers || [];
//         const data = response.data;
//         setProfileData({
//           ...data,
//           followers, // set the followers array
//         });

//         // Check if the logged-in user is already following this group
//         if (userId && followers.includes(userId)) {
//           setIsFollowing(true); }
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//       }
//     };

//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/campaigns/socialgroup/${id}`);
//         console.log("Campaigns fetched for socialId:", id);
//         setCampaigns(response.data);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       }
//     };
//     // const fetchTeamMembers = async () => {
//     //   try {
//     //     const response = await axios.get(`http://localhost:5000/api/socialteams/${id}/team`);
//     //     console.log("Campaigns fetched for socialId:", id);
//     //     setTeamMembers(response.data);
//     //   } catch (error) {
//     //     console.error('Error fetching teams:', error);
//     //   }
//     // };
//     fetchProfileData();
//     fetchCampaigns();
//   }, [id, userId]);

//   // const handleFollowClick = () => {
//   //   setIsFollowing(!isFollowing);
//   // };
//   const handleFollowClick = async () => {
//     if (!userId) {
//       alert('Please log in to follow this group.');
//       return;
//     }

//     try {
//       const response = await axios.post(`http://localhost:5000/api/socialgroup/${id}/follow`);
//       setIsFollowing(!isFollowing);
//       alert(response.data.message);
//     } catch (error) {
//       console.error('Error updating follow status:', error);
//     }
//   };
//   if (!profileData) {
//     return <div>Loading...</div>;
//   }

//    // Use the calculated average rating from the backend
//    const totalRating = profileData.averageRating || 0;

//   return (
// <div className="min-h-screen bg-gray-50 p-6">
//   <div className="flex flex-wrap md:flex-nowrap mt-[80px] ml-11">
//     {/* Profile Section - Larger Width */}
//     <div className="w-full md:w-2/3 p-2">
//       <div className="flex-grow bg-white shadow-lg rounded-tl-11xl rounded-tr-11xl relative">
//         <div className="relative bg-gray-200 rounded-tl-11xl rounded-tr-11xl overflow-hidden">
//           <img src={`/assets/${profileData.banner}`} alt="Background" className="w-full h-56 object-cover" />
          
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           </div>
//           <div className="absolute top-40 left-6 w-[120px] h-[120px] bg-white rounded-full overflow-hidden border-4 border-white">
//             <img src={`/assets/${profileData.image}`} alt="Profile" className="w-full h-full object-cover" />
//           </div>
       

//         <div className="p-6">
//           <div className="mt-16 flex space-x-2">
//             <span className="text-sm font-semibold text-gray-800">
//             {/* {profileData.followers.length || 0} Followers */}
//             </span>
        
//           </div>

//           <div className="mt-2 flex items-center space-x-2">
//             <h1 className="text-lg font-bold">{profileData.name}</h1>
//             {/* <button
//               className={`px-4 py-2 rounded-pl ml-11 ${
//                 isFollowing ? 'bg-black text-white' : 'bg-green-900 text-white'
//               }`}
//               onClick={handleFollowClick}
//             >
//               {isFollowing ? 'Unfollow' : 'Follow'}
//             </button> */}
//              <button
//         onClick={handleFollowClick}
//         className={`px-4 py-2 rounded ${
//           isFollowing ? 'bg-black text-white' : 'bg-green-900 text-white'
//         }`}
//       >
//         {isFollowing ? 'Unfollow' : 'Follow'}
//       </button>
//           </div>
//           <p className="text-sm text-black">{profileData.initiative}</p>
//           <div className="mt-6 flex items-center">
//             {[...Array(5)].map((star, i) => (
//               <svg
//                 key={i}
//                 className={`w-6 h-6 ${i < Math.round(totalRating) ? 'text-black' : 'text-gray-300'}`}
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.049 2.927C9.324 2.065 10.676 2.065 10.951 2.927L12.234 7.12L16.92 7.67C17.825 7.77 18.231 8.895 17.623 9.517L14.284 12.866L15.144 17.56C15.286 18.464 14.38 19.135 13.592 18.751L9.999 16.915L6.408 18.751C5.62 19.135 4.714 18.464 4.856 17.56L5.716 12.866L2.376 9.517C1.769 8.895 2.175 7.77 3.08 7.67L7.766 7.12L9.049 2.927Z" />
//               </svg>
//             ))}
//             <span className="ml-2 text-sm text-gray-800">
//               {totalRating.toFixed(1)} out of 5
//             </span>
//             <div className="ml-auto flex items-center">
//               <FaMapMarkerAlt className="text-gray-800" />
//               <span className="text-sm text-gray-800 ml-1">{profileData.location}</span>
//             </div>
//           </div>
//         </div>
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import avatar from '../images/testimonial-2.jpeg';
import header from '../images/about-1.jpeg';
import profileImg from '../images/carousel-1.jpeg';
import ReviewComponent from './review-profile';
import QuestionComponent from './profile-question';
import ImpactComponent from './impact-profile';
import CampaignCardSh from '../components/campaign-card-sh';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('campaign');
  const [selectedMember, setSelectedMember] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const { id } = useParams();
  
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user ? user._id : null;

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/socialgroup/${id}`);
        const data = response.data;

        // Ensure followers array exists
        const followers = data.followers || [];

        setProfileData({
          ...data,
          followers, // Set the followers array safely
        });

        setTeamMembers(data.teamMembers || []);

        // Check if the logged-in user is already following this group
        if (userId && followers.includes(userId)) {
          setIsFollowing(true);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/campaigns/socialgroup/${id}`);
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchProfileData();
    fetchCampaigns();
  }, [id, userId]);

  const handleFollowClick = async () => {
    if (!userId) {
      alert('Please log in to follow this group.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/socialgroup/${id}/follow`, { userId });
      setIsFollowing(!isFollowing);
      alert(response.data.message);
    } catch (error) {
      console.error('Error updating follow status:', error);
    }
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  // Use the calculated average rating from the backend
  const totalRating = profileData.averageRating || 0;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex flex-wrap md:flex-nowrap mt-[80px] ml-11">
        {/* Profile Section - Larger Width */}
        <div className="w-full md:w-2/3 p-2">
          <div className="flex-grow bg-white shadow-lg rounded-tl-11xl rounded-tr-11xl relative">
            <div className="relative bg-gray-200 rounded-tl-11xl rounded-tr-11xl overflow-hidden">
              <img src={`/assets/${profileData.banner}`} alt="Background" className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute top-40 left-6 w-[120px] h-[120px] bg-white rounded-full overflow-hidden border-4 border-white">
              <img src={`/assets/${profileData.image}`} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="mt-16 flex space-x-2">
                <span className="text-sm font-semibold text-gray-800">
                  {profileData.followers.length || 0} Followers
                </span>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <h1 className="text-lg font-bold">{profileData.name}</h1>
                <button
                  className={`px-4 py-2 rounded ${
                    isFollowing ? 'bg-black text-white' : 'bg-green-900 text-white'
                  }`}
                  onClick={handleFollowClick}
                >
                  {isFollowing ? 'Unfollow' : 'Follow'}
                </button>
              </div>
              <p className="text-sm text-black">{profileData.initiative}</p>
              <div className="mt-6 flex items-center">
                {[...Array(5)].map((star, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${i < Math.round(totalRating) ? 'text-black' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927C9.324 2.065 10.676 2.065 10.951 2.927L12.234 7.12L16.92 7.67C17.825 7.77 18.231 8.895 17.623 9.517L14.284 12.866L15.144 17.56C15.286 18.464 14.38 19.135 13.592 18.751L9.999 16.915L6.408 18.751C5.62 19.135 4.714 18.464 4.856 17.56L5.716 12.866L2.376 9.517C1.769 8.895 2.175 7.77 3.08 7.67L7.766 7.12L9.049 2.927Z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-800">
                  {totalRating.toFixed(1)} out of 5
                </span>
                <div className="ml-auto flex items-center">
                  <FaMapMarkerAlt className="text-gray-800" />
                  <span className="text-sm text-gray-800 ml-1">{profileData.location}</span>
                </div>
              </div>
            </div>





{/* Tabs Section - Impact, Campaign, Social Media, etc. */}
<div className="mt-6 px-6">
  {/* Tabs Navigation */}
  <ul className="flex justify-center flex-wrap space-x-4 sm:space-x-8 bg-gray-50 p-2 rounded-lg max-w-full md:max-w-4xl mx-auto">
    {['campaign', 'social-media', 'impact', 'reviews', 'questions'].map((tab) => (
      <li key={tab} className="py-2">
        <button
          className={`px-4 py-2 ${
            activeTab === tab ? 'bg-white text-black shadow rounded-lg' : 'text-black'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.replace('-', ' ')}
        </button>
      </li>
    ))}
  </ul>

  {/* Tabs Content */}
  <div className="mt-4 w-full">
    {activeTab === 'campaign' && (
      <div className="p-4 w-full mx-auto">
        <h2 className="text-2xl font-bold">Campaigns</h2>
        {/* <div className="ml-0 sm:ml-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mb-10 gap-y-2"> */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2">
          {campaigns.slice(0, 6).map(campaign => (
            <CampaignCardSh key={campaign._id} campaign={campaign} />
          ))}
        </div>
      </div>
    )}
    {activeTab === 'social-media' && (
      <div id="social-media" className="p-4 max-w-full md:max-w-3xl mx-auto">
        <h2 className="text-xl font-bold">Social Media</h2>
        <p>Social media details here...</p>
      </div>
    )}
    {activeTab === 'impact' && (
      <div className="p-4 max-w-full md:max-w-3xl mx-auto">
        <ImpactComponent />
      </div>
    )}
    {activeTab === 'reviews' && (
      <div className="p-4 max-w-full md:max-w-3xl mx-auto">
        <ReviewComponent groupId={id} />
      </div>
    )}
    {activeTab === 'questions' && (
      <div className="p-4 max-w-full md:max-w-3xl mx-auto">
        <QuestionComponent groupId={id}/>
      </div>
    )}
  </div>
</div>

      </div>
    </div>

    {/* Right Section for Social Links and Team - Smaller Width */}
    <div className="w-full md:w-1/4 p-2 ml-6">
      {/* Social Links */}
      <div className="mb-4 p-4 bg-white shadow-lg rounded-lg">
  <h3 className="text-md font-bold text-gray-800">Social Links</h3>
  {profileData.facebook || profileData.twitter || profileData.instagram ? (
    <div className="flex items-center gap-4 mt-6">
      {profileData.facebook && (
        <a href={profileData.facebook} className="text-blue-600 hover:underline">
          {/* Facebook SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="#5E94FF" d="..." />
          </svg>
        </a>
      )}
      {profileData.twitter && (
        <a href={profileData.twitter} className="text-blue-400 hover:underline">
          {/* Twitter SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
            <path d="..." />
          </svg>
        </a>
      )}
      {profileData.instagram && (
        <a href={profileData.instagram} className="text-pink-600 hover:underline">
          {/* Instagram SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
            <path d="..." />
          </svg>
        </a>
      )}
    </div>
  ) : (
    <p className="text-gray-500 mt-4">No social links available.</p>
  )}
</div>


      {/* Team Section */}
      <div className="p-4 bg-white shadow-lg rounded-pl">
        <h3 className="text-md font-bold text-gray-800">Team</h3>
        <ul className="space-y-4 mt-4">
          {teamMembers.map((member, index) => (
            <li
              key={index}
              className={`flex items-center space-x-4 p-2 rounded-lg cursor-pointer ${
                selectedMember?.name === member.name ? 'bg-white border border-white shadow-sm' : ''
              }`}
              onClick={() => setSelectedMember(member)}
            >
              <img src={member.avatar || avatar} alt="Team Member" className="rounded-full w-12 h-12" />
              <div>
                <h4 className="text-sm font-semibold text-black">{member.name}</h4>
              </div>
            </li>
          ))}
        </ul>
        {selectedMember && (
          <div className="mt-11 p-4 bg-white shadow-lg rounded-lg">
            <h4 className="text-sm font-bold text-black">{selectedMember.name}</h4>
            <p className="text-sm text-gray-500">{selectedMember.email}</p>
            <p className="text-sm text-gray-500">{selectedMember.role}</p>
          </div>
        )}
      </div>
    </div>
  </div>
</div>

  

    // <div className="min-h-screen bg-gray-50 p-6">
    //   <div className="flex flex-wrap mt-[80px]">
    //     <div className="w-full md:w-1/4 p-2 mb-4 md:mb-0 md:mr-2">
    //       <h3 className="text-md font-bold text-gray-800">Team</h3>
    //       <ul className="space-y-4 mt-4">
    //         {teamMembers.map((member, index) => (
    //           <li
    //             key={index}
    //             className={`flex items-center space-x-4 p-2 rounded-lg cursor-pointer ${
    //               selectedMember?.name === member.name ? 'bg-white border border-white shadow-sm' : ''
    //             }`}
    //             onClick={() => setSelectedMember(member)}
    //           >
    //             <img src={member.avatar || avatar} alt="Team Member" className="rounded-full w-12 h-12" />
    //             <div>
    //               <h4 className="text-sm font-semibold text-black">{member.name}</h4>
            
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //       {selectedMember && (
    //         <div className="mt-11 p-4 bg-white shadow-lg rounded-lg">
    //           <h4 className="text-sm font-bold text-black">{selectedMember.name}</h4>
    //           <p className="text-sm text-gray-500">{selectedMember.email}</p>
    //           <p className="text-sm text-gray-500">{selectedMember.role}</p>
    //         </div>
    //       )}
    //     </div>

    //     <div className="flex-grow bg-white shadow-lg rounded-tl-11xl rounded-tr-11xl relative">
    //       <div className="relative bg-gray-200 rounded-tl-11xl rounded-tr-11xl overflow-hidden">
    //         <img src={header} alt="Background" className="w-full h-48 object-cover" />
    //         <div className="absolute inset-0 bg-black opacity-50"></div>
    //         <div className="absolute top-20 left-6 w-24 h-24 bg-white rounded-full overflow-hidden border-4 border-white">
    //           <img src={profile} alt="Profile" className="w-full h-full object-cover" />
    //         </div>
    //       </div>

    //       <div className="p-4">
    //         <div className="mt-2 flex space-x-2">
    //           <span className="text-sm font-semibold text-gray-800">{profileData.followers} Followers</span>
    //           <span className="text-sm font-semibold text-gray-800">{profileData.following} Following</span>
    //         </div>
    //         <div className="mt-2 flex items-center space-x-2">
    //           <h1 className="text-lg font-bold">{profileData.name}</h1>
    //           <button
    //             className={`px-4 py-2 rounded-lg ml-11 ${
    //               isFollowing ? 'bg-black text-white' : 'bg-green-900 text-white'
    //             }`}
    //             onClick={handleFollowClick}
    //           >
    //             {isFollowing ? 'Unfollow' : 'Follow'}
    //           </button>
    //         </div>
    //         {/* <p className="text-sm text-black">{profileData.initiative}</p> */}

    //         <div className="mt-6">
    //           <div className="flex items-center">
    //             {[...Array(5)].map((star, i) => (
    //               <svg
    //                 key={i}
    //                 className={`w-6 h-6 ${i < Math.round(totalRating) ? 'text-black' : 'text-gray-300'}`}
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //               >
    //                 <path d="M9.049 2.927C9.324 2.065 10.676 2.065 10.951 2.927L12.234 7.12L16.92 7.67C17.825 7.77 18.231 8.895 17.623 9.517L14.284 12.866L15.144 17.56C15.286 18.464 14.38 19.135 13.592 18.751L9.999 16.915L6.408 18.751C5.62 19.135 4.714 18.464 4.856 17.56L5.716 12.866L2.376 9.517C1.769 8.895 2.175 7.77 3.08 7.67L7.766 7.12L9.049 2.927Z" />
    //               </svg>
    //             ))}
    //             <span className="ml-2 text-sm text-gray-800">{totalRating.toFixed(1)} out of 5</span>
    //             <div className="ml-auto flex items-center">
    //               <FaMapMarkerAlt className="text-gray-800" />
    //               <span className="text-sm text-gray-800 ml-1">{profileData.location}</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="mt-6 px-6">
    //         <ul className="flex justify-center space-x-8 bg-gray-50 p-2 rounded-lg max-w-1xl mx-auto">
    //           {['campaign', 'social-media', 'impact', 'reviews', 'questions'].map((tab) => (
    //             <li key={tab} className="py-2">
    //               <button
    //                 className={`px-4 py-2 ${
    //                   activeTab === tab ? 'bg-white text-black shadow rounded-lg' : 'text-black'
    //                 }`}
    //                 onClick={() => setActiveTab(tab)}
    //               >
    //                 {tab.replace('-', ' ')}
    //               </button>
    //             </li>
    //           ))}
    //         </ul>

    //         <div className="mt-4">
    //           {activeTab === 'campaign' && (
    //             <div className="p-4 max-w-3xl mx-auto">
    //               <h2 className="text-2xl font-bold">Campaigns</h2>
    //               <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mb-10 gap-y-2">
    //                 {campaigns.slice(0, 6).map(campaign => (
    //                   <CampaignCardSh key={campaign._id} campaign={campaign} />
    //                 ))}
    //               </div>
    //             </div>
    //           )}
    //           {activeTab === 'social-media' && (
    //             <div id="social-media">
    //               <h2 className="text-xl font-bold">Social Media</h2>
    //               <p>Social media details here...</p>
    //             </div>
    //           )}
    //           {activeTab === 'impact' && (
    //           <ImpactComponent />
    //           )}
    //           {activeTab === 'reviews' && <ReviewComponent />}
    //           {activeTab === 'questions' && <QuestionComponent />}
              
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MainPage;
