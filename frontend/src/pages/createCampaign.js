
// import React, { useState } from 'react';
// import axios from 'axios';

// const addCampaign = async (formData) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/campaigns', formData);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const CreateCampaignForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     campaignName: '',
//     date: '',
//     image: '',
//     donationTarget: '',
//     location: '',
//     city: '',
//     province: '',
//     country: '',
//     teams: '',
//     volunteers: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleNextStep = () => {
//     setCurrentStep((prevStep) => prevStep + 1);
//   };

//   const handlePrevStep = () => {
//     setCurrentStep((prevStep) => prevStep - 1);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const createdCampaign = await addCampaign(formData);
//       console.log('Campaign created:', createdCampaign);
//     } catch (error) {
//       console.error('Error creating campaign:', error.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gg">
//       <h2 className="text-2xl font-bold mb-4">Create Campaign</h2>
//       <div className="w-[700px] h-[400px] items-center ml-30 p-6 bg-white rounded-lg shadow-lg">
//         <div className="flex justify-between mb-4">
//           <div className="flex items-center">
//             <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 1 ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
//               {currentStep >= 1 ? '1' : ''}
//             </div>
//             <p className="ml-2">Step 1</p>
//           </div>
//           <div className="flex items-center">
//             <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 2 ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
//               {currentStep >= 2 ? '2' : ''}
//             </div>
//             <p className="ml-2">Step 2</p>
//           </div>
//           <div className="flex items-center">
//             <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep === 3 ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
//               {currentStep === 3 ? '3' : ''}
//             </div>
//             <p className="ml-2">Step 3</p>
//           </div>
//         </div>
//         <form onSubmit={handleSubmit}>
//           {currentStep === 1 && (
//             <div className='flex flex-col '>
//               <p className="text-gray-500 mt-8 mb-2">Please enter campaign name</p>
//               <input type="text" name="campaignName" value={formData.campaignName} onChange={handleInputChange} placeholder="Campaign Name" className="mb-4 items-center bg-gray-200 rounded-lg px-4 py-2 w-full" />
//               <p className="text-gray-500 mb-2">Choose Image</p>
//               <input type="file" name="image" onChange={handleInputChange} className="mb-20 items-center bg-gray-200 rounded-lg px-4 py-2 w-full" />
//             </div>
//           )}
//           {currentStep === 2 && (
//             <div className="flex flex-col ">
//               <p className="text-gray-500 mt-8 mb-2">Select Date</p>
//               <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="mb-4 items-center bg-gray-200 rounded-lg px-4 py-2 w-full" />
//               <p className="text-gray-500 mb-2">Set Donation Target</p>
//               <input type="number" name="donationTarget" value={formData.donationTarget} onChange={handleInputChange} placeholder="Donation Target" className="mb-20 items-center bg-gray-200 rounded-lg px-4 py-2 w-full" />
//             </div>
//           )}
          
//             {currentStep === 3 && (
//   <div className="flex flex-col">
//     <p className="text-gray-500 mt-5 mb-2">Country</p>
//     <input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder="Country" className="mb-4 bg-gray-200 rounded-lg px-4 py-2 items-center" />
//     <p className="text-gray-500 mb-2">City</p>
//     <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="mb-4 bg-gray-200 rounded-lg px-4 py-2 items-center" />
//     <p className="text-gray-500 mb-2">Volunteers</p>
//     <button
//       type="button"
//       className={`relative w-12 h-6 flex mb-5 items-center rounded-full p-1 ${formData.volunteers ? 'bg-blue-500' : 'bg-gray-300'}`}
//       onClick={() => setFormData(prevData => ({ ...prevData, volunteers: !prevData.volunteers }))}>
//       <span className={`absolute left-0 inline-block w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${formData.volunteers ? 'translate-x-full' : 'translate-x-0'}`}></span>
//     </button>
//   </div>
//           )}
//           <div className="flex justify-between">
//             {currentStep > 1 && (
//               <button onClick={handlePrevStep} type="button" className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg">
//                 Back
//               </button>
//             )}
//             {currentStep < 3 ? (
//               <button onClick={handleNextStep} type="button" className="py-2 px-4 bg-green-500 text-white rounded-lg">
//                 Next
//               </button>
//             ) : (
//               <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg">
//                 Create
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateCampaignForm;
import React, { useState } from 'react';
import axios from 'axios';

const addCampaign = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/campaigns', formData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const CreateCampaignForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    campaignName: '',
    date: '',
    image: '',
    donationTarget: '',
    location: '',
    city: '',
    province: '',
    country: '',
    teams: '',
    volunteers: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdCampaign = await addCampaign(formData);
      console.log('Campaign created:', createdCampaign);
    } catch (error) {
      console.error('Error creating campaign:', error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Create Campaign</h2>
      <div className="w-[700px] p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          {[1, 2, 3].map(step => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= step ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                {currentStep >= step ? step : ''}
              </div>
              <p className="ml-2">Step {step}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className='flex flex-col'>
              <p className="text-gray-500 mt-8 mb-2">Please enter campaign name</p>
              <input type="text" name="campaignName" value={formData.campaignName} onChange={handleInputChange} placeholder="Campaign Name" className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
              <p className="text-gray-500 mb-2">Choose Image</p>
              <input type="file" name="image" onChange={handleInputChange} className="mb-20 bg-gray-200 rounded-lg px-4 py-2" />
            </div>
          )}
          {currentStep === 2 && (
            <div className="flex flex-col">
              <p className="text-gray-500 mt-8 mb-2">Select Date</p>
              <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
              <p className="text-gray-500 mb-2">Set Donation Target</p>
              <input type="number" name="donationTarget" value={formData.donationTarget} onChange={handleInputChange} placeholder="Donation Target" className="mb-20 bg-gray-200 rounded-lg px-4 py-2" />
            </div>
          )}
          {currentStep === 3 && (
            <div className="flex flex-col">
              <p className="text-gray-500 mt-8 mb-2">Country</p>
              <input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder="Country" className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
              <p className="text-gray-500 mb-2">City</p>
              <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
              <p className="text-gray-500 mb-2">Volunteers</p>
              <button
                type="button"
                className={`relative w-12 h-6 flex mb-5 items-center rounded-full p-1 ${formData.volunteers ? 'bg-blue-500' : 'bg-gray-300'}`}
                onClick={() => setFormData(prevData => ({ ...prevData, volunteers: !prevData.volunteers }))}>
                <span className={`absolute left-0 inline-block w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${formData.volunteers ? 'translate-x-full' : 'translate-x-0'}`}></span>
              </button>
            </div>
          )}
          <div className="flex justify-between">
            {currentStep > 1 && (
              <button onClick={handlePrevStep} type="button" className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg">
                Back
              </button>
            )}
            {currentStep < 3 ? (
              <button onClick={handleNextStep} type="button" className="py-2 px-4 bg-green-500 text-white rounded-lg">
                Next
              </button>
            ) : (
              <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg">
                Create
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaignForm;
