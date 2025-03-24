// import React, { useState } from 'react';
// import { XMarkIcon } from '@heroicons/react/24/solid';
// import axios from 'axios';

// export default function ReportModal({ campaign, showModal, closeModal }) {
//   const [reason, setReason] = useState('');

//   const handleChange = (e) => {
//     setReason(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const reportData = {
//       campaign: campaign._id,
//       reason,
//     };

//     try {
//       const response = await axios.post('https://plantify-backend.vercel.app/api/campaign-report', reportData);
//       console.log('Report submitted successfully', response.data);
//       alert('Report Submitted succesfully');
//       // Optionally, close the modal and reset the form
//       closeModal();
//       setReason('');
//     } catch (error) {
//       console.error('Failed to submit report', error);
//     }
//   };

//   return (
//     <>
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-30">
//           <div className="absolute inset-0 flex items-center bg-navygreen-100 justify-center bg-opacity-40">
//             <div className="relative w-full max-w-md mx-4 sm:mx-6 lg:mx-8 bg-navygreen-100 rounded-pl p-8 z-10">
//               <button className="absolute top-2 right-2 p-2 hover:bg-navygreen-200 rounded-pl text-gray-100" onClick={closeModal}>
//                   <XMarkIcon className="h-6 w-6"/>
//               </button>
//               <h2 className="font-josefin-sans text-center text-xl font-bold mb-4">Report Campaign</h2>
//               <p className="font-josefin-sans text-center text-sm mb-4">Want to report this campaign? Write your reason, and we will consider your complaint.</p>
//               <form className="flex flex-col space-y-4 text-gray-100" onSubmit={handleSubmit}>
//                 <div className='self-center w-80'>
//                   <label htmlFor="reason" className="block text-sm font-medium">Write your reason</label>
//                   <textarea
//                     id="reason"
//                     name="reason"
//                     maxLength='250'
//                     placeholder='Enter the reason'
//                     value={reason}
//                     onChange={handleChange}
//                     className="px-2 py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg"
//                   />
//                 </div>
//                 <button type="submit" className="self-center bg-navygreen-300 w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-navygreen-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
import React, { useState } from 'react';
import Modal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

const ReportModal = ({ campaign, showModal, closeModal }) => {
  const [reason, setReason] = useState('');

  const handleChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reportData = {
      campaign: campaign._id,
      reason,
    };

    try {
      const response = await axios.post('https://plantify-backend.vercel.app/api/campaign-report', reportData);
      console.log('Report submitted successfully', response.data);
      alert('Report Submitted succesfully');
      closeModal();
      setReason('');
    } catch (error) {
      console.error('Failed to submit report', error);
    }
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Report Campaign"
      className="bg-white border-2 border-gray-300 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
    >
      <button className="absolute top-2 right-2 p-2 hover:bg-gray-200 rounded-full text-gray-600" onClick={closeModal}>
        <XMarkIcon className="h-6 w-6" />
      </button>
      <h2 className="font-josefin-sans text-center text-xl font-bold mb-4">Report Campaign</h2>
      <p className="font-josefin-sans text-center text-sm mb-4">Want to report this campaign? Write your reason, and we will consider your complaint.</p>
      <form className="flex flex-col space-y-4 text-gray-600" onSubmit={handleSubmit}>
        <div className='self-center w-80'>
          <label htmlFor="reason" className="block text-sm font-medium">Write your reason</label>
          <textarea
            id="reason"
            name="reason"
            maxLength='250'
            placeholder='Enter the reason'
            value={reason}
            onChange={handleChange}
            className="px-2 py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg"
          />
        </div>
        <button type="submit" className="self-center bg-navygreen-300 w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-navygreen-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default ReportModal;
