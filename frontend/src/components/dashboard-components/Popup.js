// import React, { useState } from 'react';

// const Popup = ({ eventFormData, handleInputChange, handleSubmit, handleClose }) => {
//   const [validationError, setValidationError] = useState('');

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (new Date(eventFormData.endDate) < new Date(eventFormData.startDate)) {
//       setValidationError('End date must be after start date.');
//     } else {
//       setValidationError('');
//       handleSubmit(e);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg relative">
//         <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={handleClose}>
//           ×
//         </button>
//         <form onSubmit={handleFormSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Title:</label>
//             <input
//               type="text"
//               name="title"
//               value={eventFormData.title}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description:</label>
//             <textarea
//               name="description"
//               value={eventFormData.description}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Start:</label>
//             <input
//               type="date"
//               name="startDate"
//               value={eventFormData.startDate}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">End:</label>
//             <input
//               type="date"
//               name="endDate"
//               value={eventFormData.endDate}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           {validationError && (
//             <div className="text-red-500 text-sm">
//               {validationError}
//             </div>
//           )}
//           <div>
//             <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Popup;
import React, { useState, useEffect } from 'react';

const Popup = ({ eventFormData, handleInputChange, handleSubmit, handleClose }) => {
  const [validationError, setValidationError] = useState('');
  const [minEndDate, setMinEndDate] = useState('');

  useEffect(() => {
    if (eventFormData.startDate) {
      // Calculate the minimum end date
      const startDate = new Date(eventFormData.startDate);
      const minDate = new Date(startDate.getTime() + (24 * 60 * 60 * 1000)).toISOString().split('T')[0];
      setMinEndDate(minDate);
    }
  }, [eventFormData.startDate]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (new Date(eventFormData.endDate) <= new Date(eventFormData.startDate)) {
      setValidationError('End date must be after the start date.');
    } else {
      setValidationError('');
      handleSubmit(e);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={handleClose}>
          ×
        </button>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={eventFormData.title}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              name="description"
              value={eventFormData.description}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Start:</label>
            <input
              type="date"
              name="startDate"
              value={eventFormData.startDate}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">End:</label>
            <input
              type="date"
              name="endDate"
              value={eventFormData.endDate}
              onChange={handleInputChange}
              min={minEndDate}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {validationError && (
            <div className="text-red-500 text-sm">
              {validationError}
            </div>
          )}
          <div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
