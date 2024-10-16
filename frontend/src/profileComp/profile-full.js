import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewComponent from './review-profile';
import QuestionComponent from './profile-question';
import ImpactComponent from './impact-profile';
import CampaignCardSh from '../components/campaign-card-sh';
import { useParams } from 'react-router-dom';

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
    // const fetchTeamMembers = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:5000/api/socialteams/${id}/team`);
    //     console.log("Campaigns fetched for socialId:", id);
    //     setTeamMembers(response.data);
    //   } catch (error) {
    //     console.error('Error fetching teams:', error);
    //   }
    // };
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
<div className="min-h-screen ml-64 bg-gray-50 p-6">
  <div className="flex flex-wrap md:flex-nowrap mt-[80px] ml-11">
    {/* Profile Section - Larger Width */}
    <div className="w-full md:w-2/3 p-2">
      <div className="flex-grow bg-white shadow-lg rounded-tl-11xl rounded-tr-11xl relative">
        <div className="relative bg-gray-200 rounded-tl-11xl rounded-tr-11xl overflow-hidden">
          <img src={'/assets/about-1.jpeg'} alt="Background" className="w-full h-56 object-cover" />
          
          <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="absolute top-40 left-6 w-[120px] h-[120px] bg-white rounded-full overflow-hidden border-4 border-white">
            <img src={'/assets/carousel-1.jpeg'} alt="Profile" className="w-full h-full object-cover" />
          </div>
       

        <div className="p-6">
          <div className="mt-16 flex space-x-2">
            <span className="text-sm font-semibold text-gray-800">
              {profileData.followers} 41k Followers
            </span>
        
          </div>

          <div className="mt-2 flex items-center space-x-2">
            <h1 className="text-lg font-bold">{profileData.name}</h1>
            <button
              className={`px-4 py-2 rounded-pl ml-11 ${
                isFollowing ? 'bg-black text-white' : 'bg-green-900 text-white'
              }`}
              onClick={handleFollowClick}
            >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
          </div>

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
            <div className="ml-auto flex gap-1 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-800">{profileData.location}</span>
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
        {/* <div className="ml-0 sm:ml-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mb-10 gap-y-2 bg-pinky"> */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2">
          {campaigns.slice(0, 6).map(campaign => (
            <CampaignCardSh key={campaign._id} campaign={campaign} />
          ))}
        </div>
      </div>
    )}
    {activeTab === 'social-media' && (
      <div id="social-media" className="p-4 max-w-full md:max-w-3xl mx-auto">
        <h2 className="w-full text-xl font-bold">Social Media</h2>
        <p>Social media details here...</p>
      </div>
    )}
    {activeTab === 'impact' && (
      <div className="p-4 w-full md:max-w-3xl mx-auto">
        <ImpactComponent />
      </div>
    )}
    {activeTab === 'reviews' && (
      <div className="p-4 full md:max-w-3xl mx-auto">
        <ReviewComponent groupId={id} />
      </div>
    )}
    {activeTab === 'questions' && (
      <div className="p-4 full md:max-w-3xl mx-auto">
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
      <div className="mb-4 p-4 bg-white shadow-lg rounded-pl">
        <h3 className="text-md font-bold text-gray-800">Social Links</h3>
        <div className="flex items-center gap-4 mt-6">
          <a href={profileData.facebook} className="text-blue-600 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" id="meta">
              <path fill="#5E94FF" fill-rule="evenodd" d="M7.70394 6.75C6.36944 6.75 5.16583 7.55241 4.65256 8.78425C4.20875 9.8494 3.61974 12.4519 3.35759 13.6725C3.28162 14.0261 3.24636 14.3458 3.27291 14.6429C3.35558 15.5678 3.64775 16.0575 3.9664 16.3276C4.29458 16.6059 4.76682 16.75 5.39545 16.75C6.13513 16.75 6.82263 16.369 7.21466 15.7417L8.86055 13.1083L11.1255 9.3333L10.5385 8.35486C9.94107 7.35921 8.86507 6.75 7.70394 6.75ZM12.0002 7.87556L11.8247 7.58311C10.9562 6.13566 9.39195 5.25 7.70394 5.25C5.76389 5.25 4.01412 6.41651 3.26794 8.20733C2.75866 9.42961 2.14128 12.1924 1.89103 13.3575C1.79815 13.7899 1.73384 14.2726 1.77887 14.7764C1.88564 15.9711 2.29447 16.8766 2.99635 17.4717C3.68869 18.0588 4.55652 18.25 5.39545 18.25C6.65232 18.25 7.82052 17.6025 8.48666 16.5367L10.1362 13.8975L12.0002 10.791L13.857 13.8859L15.5137 16.5367C16.1798 17.6025 17.348 18.25 18.6049 18.25C19.5419 18.25 20.489 17.9835 21.1952 17.2419C21.8968 16.5053 22.2502 15.4155 22.2502 14C22.2502 13.1196 21.9122 11.8102 21.5866 10.7307C21.2506 9.61708 20.8879 8.62354 20.7765 8.32387C20.7513 8.25603 20.7221 8.18098 20.6872 8.10234C19.9172 6.37101 18.1983 5.25 16.2964 5.25C14.6084 5.25 13.0441 6.13567 12.1756 7.58315L12.0002 7.87556ZM12.8748 9.33331L15.1398 13.1083L16.7857 15.7417C17.1777 16.369 17.8652 16.75 18.6049 16.75C19.2669 16.75 19.7675 16.5661 20.1091 16.2074C20.4554 15.8437 20.7502 15.1835 20.7502 14C20.7502 13.3735 20.4837 12.2685 20.1505 11.1639C19.8275 10.0934 19.4769 9.13291 19.3704 8.84626C19.3509 8.79359 19.3339 8.75069 19.3166 8.71187C18.7871 7.52112 17.6046 6.75 16.2964 6.75C15.1353 6.75 14.0593 7.35922 13.4619 8.35489L12.8748 9.33331Z" clip-rule="evenodd"></path>
              <path fill="#5485E5" fill-rule="evenodd" d="M12 7.87525V10.7913L10.1433 13.8859L10.1363 13.8976L10.1362 13.8975L8.48666 16.5367C7.82052 17.6025 6.65232 18.25 5.39545 18.25C4.55652 18.25 3.68869 18.0588 2.99635 17.4717C2.29447 16.8766 1.88564 15.9711 1.77887 14.7764C1.73384 14.2726 1.79815 13.7899 1.89103 13.3575C2.14128 12.1924 2.75866 9.42961 3.26794 8.20733C4.01412 6.41651 5.76389 5.25 7.70394 5.25C9.39195 5.25 10.9562 6.13565 11.8247 7.5831L11.8247 7.58311L12 7.87525ZM4.65256 8.78425C5.16583 7.55241 6.36944 6.75 7.70394 6.75C8.86507 6.75 9.94107 7.35921 10.5385 8.35486L11.1255 9.3333L8.86055 13.1083L7.21466 15.7417C6.82263 16.369 6.13513 16.75 5.39545 16.75C4.76682 16.75 4.29458 16.6059 3.9664 16.3276C3.64775 16.0575 3.35558 15.5678 3.27291 14.6429C3.24636 14.3458 3.28162 14.0261 3.35759 13.6725C3.61974 12.4519 4.20875 9.8494 4.65256 8.78425Z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href={profileData.twitter} className="text-blue-400 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
              <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/" className="text-pink-600 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
          </a>
        </div>
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
              <img src={member.avatar || '/assets/testimonial-1.jpeg'} alt="Team Member" className="rounded-full w-12 h-12" />
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
