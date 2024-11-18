
import { useState } from 'react';
import { BellIcon, PlusIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import CreatePost from './create-post-form';

const SuggestionsBox = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCreatePost = () => setShowCreatePost(true);
  const handleCloseCreatePost = () => setShowCreatePost(false);
  const toggleSuggestionsBox = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Toggle Button for Small Screens */}
      {!isOpen && (
        <button 
          onClick={toggleSuggestionsBox} 
          className="fixed top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-l-full z-50 text-white lg:hidden"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
      )}

      {/* SuggestionsBox Container */}
      <div 
        className={`fixed inset-y-0 right-0 bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:relative lg:translate-x-0 lg:w-full`}
      >
        {/* Button to Close the Sidebar on Small Screens */}
        <button 
          onClick={toggleSuggestionsBox} 
          className="absolute top-1/2 transform -translate-y-1/2 -left-6 bg-green-500 p-2 rounded-full z-50 text-white lg:hidden"
        >
          <ChevronLeftIcon className="w-6 h-6 rotate-180" />
        </button>

        {/* Search, Notification, and Create Post Section */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-4 space-y-2 sm:space-y-0 p-4">
          {/* Search Input */}
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 w-full sm:w-2/3"
          />
          
          <button  
            className="shadow-md bg-black text-white p-2 rounded-full flex items-center justify-center w-10 h-10"
            onClick={handleOpenCreatePost}
          >
            <PlusIcon className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Suggestions Box Content */}
        <div className="bg-white bg-opacity-90 backdrop-blur-md border border-gray-100 p-4 sm:p-6 rounded-lg mt-4">
          {/* Suggestions For You Section */}
          <div className="mb-6">
            <p className="text-gray-700 font-semibold mb-4">Suggestions For You</p>
            <div className="space-y-4">
              {['Sarah Tancredi', 'Arthur Shelby', 'Vin Diesel'].map((user, idx) => (
                <div key={idx} className="flex justify-between items-center bg-white p-2 sm:p-4 rounded-pl border border-gray-50">
                  <div className="flex items-center space-x-4">
                    <img 
                      src="https://via.placeholder.com/100" 
                      alt={user} 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <p className="text-gray-700 text-sm sm:text-base">{user}</p>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 text-sm sm:text-base">Follow</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Create Post Popup Form (Outside the Sidebar) */}
      {showCreatePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-11/12 sm:w-2/3 md:w-1/2">
            <CreatePost onClose={handleCloseCreatePost} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestionsBox;
// import { useState } from 'react';
// import { BellIcon, PlusIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
// import CreatePost from './create-post-form';
// import socialPlantAnimate from '../../images/social-media-plant.png';

// const SuggestionsBox = () => {
//   const [showCreatePost, setShowCreatePost] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [animationComplete, setAnimationComplete] = useState(false);

//   const handleOpenCreatePost = () => {
//     setAnimationComplete(false);  // Reset animation before showing
//     setTimeout(() => setAnimationComplete(true), 2000); // 2s duration for tree animation
//     setShowCreatePost(true); // Trigger the form
//   };
  
//   const handleCloseCreatePost = () => setShowCreatePost(false);
//   const toggleSuggestionsBox = () => setIsOpen(!isOpen);

//   return (
//     <div className="relative">
//       {/* Toggle Button for Small Screens */}
//       {!isOpen && (
//         <button 
//           onClick={toggleSuggestionsBox} 
//           className="fixed top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-l-full z-50 text-white lg:hidden"
//         >
//           <ChevronLeftIcon className="w-6 h-6" />
//         </button>
//       )}

//       {/* SuggestionsBox Container */}
//       <div 
//         className={`fixed inset-y-0 right-0 bg-white transition-transform duration-300 ease-in-out ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         } lg:relative lg:translate-x-0 lg:w-full mr-10`}
//       >
//         {/* Button to Close the Sidebar on Small Screens */}
//         <button 
//           onClick={toggleSuggestionsBox} 
//           className="absolute top-1/2 transform -translate-y-1/2 -left-6 bg-green-500 p-2 rounded-full z-50 text-white lg:hidden"
//         >
//           <ChevronLeftIcon className="w-6 h-6 rotate-180" />
//         </button>

//         {/* Search, Notification, and Create Post Section */}
//         <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-4 space-y-2 sm:space-y-0 p-4">
//           {/* Search Input */}
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 w-full sm:w-2/3"
//           />
          
//           <button  
//             className="shadow-md bg-black text-white p-2 rounded-full flex items-center justify-center w-10 h-10"
//             onClick={handleOpenCreatePost}
//           >
//             <PlusIcon className="w-6 h-6 text-white" />
//           </button>
//         </div>

//         {/* Suggestions Box Content */}
//         <div className="bg-white bg-opacity-90 backdrop-blur-md border border-gray-100 p-4 sm:p-6 rounded-lg mt-4">
//           {/* Suggestions For You Section */}
//           <div className="mb-6">
//             <p className="text-gray-700 font-semibold mb-4">Suggestions For You</p>
//             <div className="space-y-4">
//               {['Sarah Tancredi', 'Arthur Shelby', 'Vin Diesel'].map((user, idx) => (
//                 <div key={idx} className="flex justify-between items-center bg-white p-2 sm:p-4 rounded-pl border border-gray-50">
//                   <div className="flex items-center space-x-4">
//                     <img 
//                       src="https://via.placeholder.com/100" 
//                       alt={user} 
//                       className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
//                     />
//                     <p className="text-gray-700 text-sm sm:text-base">{user}</p>
//                   </div>
//                   <button className="text-purple-600 hover:text-purple-700 text-sm sm:text-base">Follow</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tree Growing Animation */}
//       {showCreatePost && !animationComplete && (
//         <div className="fixed inset-0 flex items-center justify-center z-40">
//           <div className="w-48 h-48 flex justify-center items-center animate-growTree">
//             {/* Add a tree or plant image here */}
//             <img 
//               src={socialPlantAnimate}
//               alt="Growing Tree" 
//               className="transition-all duration-2000 ease-out"
//             />
//           </div>
//         </div>
//       )}

//       {/* Create Post Popup Form (Outside the Sidebar) */}
//    {showCreatePost && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded-lg w-11/12 sm:w-2/3 md:w-1/2">
//             <CreatePost onClose={handleCloseCreatePost} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SuggestionsBox;
