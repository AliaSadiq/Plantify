<div className="w-full md:w-2/3 p-2">
      <div className="flex-grow bg-white shadow-lg rounded-tl-11xl rounded-tr-11xl relative">
        <div className="relative bg-gray-200 rounded-tl-11xl rounded-tr-11xl overflow-hidden">
          <img src={header} alt="Background" className="w-full h-56 object-cover" />
          
          <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="absolute top-40 left-6 w-[120px] h-[120px] bg-white rounded-full overflow-hidden border-4 border-white">
            <img src={profile} alt="Profile" className="w-full h-full object-cover" />
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
  <div className="mt-4">
    {activeTab === 'campaign' && (
      <div className="p-4 max-w-full md:max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold">Campaigns</h2>
        <div className="ml-0 sm:ml-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mb-10 gap-y-2">
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