

// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import axios for making HTTP requests
// import { useParams } from 'react-router-dom';
// import CampaignCard from '../components/campaign-card-sh';
// import Profile from './profile-card';
// import TeamCarousel from './my-team';

// function SocialProfilePage() {
//   const { id } = useParams();
//   console.log(id);
//   const [campaigns, setCampaigns] = useState([]); // To store fetched campaigns
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [activeTab, setActiveTab] = useState('campaigns'); // To manage active tab

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/campaigns/socialgroup/${id}`); // Correctly match the backend route // Use the correct route
//         console.log("Campaigns fetched for socialId:", id);
//         setCampaigns(response.data); // Set the fetched campaigns
//       } catch (error) {
//         console.error('Error fetching campaigns:', error); // Handle error
//       }
//     };

//     fetchCampaigns(); // Call the fetch function
//   }, [id]); // Add 'id' to the dependency array

//   const openPopup = (campaign) => {
//     setSelectedCampaign(campaign);
//   };

//   const closePopup = () => {
//     setSelectedCampaign(null);
//   };

//   // Handle tab switching
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className='w-full bg-white mt-[110px]'>
//       <Profile />
//       <div className='w-[1100px] mt-[50px] bg-white p-4 mx-auto'>
//         <div className="flex flex-col xs:flex-row xs:items-start xs:justify-start gap-4 xs:gap-8 pl-4 xs:pl-8 text-lg">
//           <h3
//             className={`text-inherit font-josefin-sans font-semibold cursor-pointer ${
//               activeTab === 'campaigns' ? 'border-b-2 border-solid border-black font-bold' : ''
//             }`}
//             onClick={() => handleTabClick('campaigns')}
//           >
//             Campaigns
//           </h3>
//           <h3
//             className={`text-inherit font-josefin-sans  font-normal text-darkgray cursor-pointer ${
//               activeTab === 'impact' ? 'border-b-2 border-solid border-black font-bold' : ''
//             }`}
//             onClick={() => handleTabClick('impact')}
//           >
//             Impact
//           </h3>
//         </div>

//         <div className="flex flex-col justify-start gap-[30px] mt-10">
//           {activeTab === 'campaigns' && (
//             <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mb-10 gap-y-2">
//               {campaigns.slice(0, 6).map(campaign => (
//                 <CampaignCard key={campaign._id} campaign={campaign} openPopup={openPopup} />
//               ))}
//             </div>
//           )}
//           {activeTab === 'impact' && (
//             <div className="box-border max-w-full py-0 pr-0 pl-8">
//               {/* Placeholder for Impact content */}
//               Work in progress........
//             </div>
//           )}
//         </div>
//         <div className="w-full xs:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto p-4">
//           <TeamCarousel />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SocialProfilePage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import avatar from '../images/testimonial-2.jpeg';
import header from '../images/about-1.jpeg';
import profile from '../images/carousel-1.jpeg';
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
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/socialgroup/${id}`);
        setProfileData(response.data);
        setTeamMembers(response.data.teamMembers);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/campaigns/socialgroup/${id}`);
        console.log("Campaigns fetched for socialId:", id);
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchProfileData();
    fetchCampaigns();
  }, [id]);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  const totalRating = profileData.totalRating || 4.5;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex flex-wrap mt-[80px]">
        <div className="w-full md:w-1/4 p-2 mb-4 md:mb-0 md:mr-2">
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

        <div className="flex-grow bg-white shadow-lg rounded-tl-11xl rounded-tr-11xl relative">
          <div className="relative bg-gray-200 rounded-tl-11xl rounded-tr-11xl overflow-hidden">
            <img src={header} alt="Background" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-20 left-6 w-24 h-24 bg-white rounded-full overflow-hidden border-4 border-white">
              <img src={profile} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="p-4">
            <div className="mt-2 flex space-x-2">
              <span className="text-sm font-semibold text-gray-800">{profileData.followers} Followers</span>
              <span className="text-sm font-semibold text-gray-800">{profileData.following} Following</span>
            </div>
            <div className="mt-2 flex items-center space-x-2">
              <h1 className="text-lg font-bold">{profileData.name}</h1>
              <button
                className={`px-4 py-2 rounded-lg ml-11 ${
                  isFollowing ? 'bg-black text-white' : 'bg-green-900 text-white'
                }`}
                onClick={handleFollowClick}
              >
                {isFollowing ? 'Unfollow' : 'Follow'}
              </button>
            </div>
            {/* <p className="text-sm text-black">{profileData.initiative}</p> */}

            <div className="mt-6">
              <div className="flex items-center">
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
                <span className="ml-2 text-sm text-gray-800">{totalRating.toFixed(1)} out of 5</span>
                <div className="ml-auto flex items-center">
                  <FaMapMarkerAlt className="text-gray-800" />
                  <span className="text-sm text-gray-800 ml-1">{profileData.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-6">
            <ul className="flex justify-center space-x-8 bg-gray-50 p-2 rounded-lg max-w-1xl mx-auto">
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

            <div className="mt-4">
              {activeTab === 'campaign' && (
                <div className="p-4 max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold">Campaigns</h2>
                  <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mb-10 gap-y-2">
                    {campaigns.slice(0, 6).map(campaign => (
                      <CampaignCardSh key={campaign._id} campaign={campaign} />
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 'social-media' && (
                <div id="social-media">
                  <h2 className="text-xl font-bold">Social Media</h2>
                  <p>Social media details here...</p>
                </div>
              )}
              {activeTab === 'impact' && (
              <ImpactComponent />
              )}
              {activeTab === 'reviews' && <ReviewComponent  groupId={id}/>}
              {activeTab === 'questions' && <QuestionComponent groupId={id}/>}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
