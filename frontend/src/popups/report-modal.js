import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

export default function ReportModal({ campaign, showModal, closeModal }) {
  const [reason, setReason] = useState('');
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
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
      const response = await axios.post(`${apiUrl}/api/campaign-report`, reportData);
      console.log('Report submitted successfully', response.data);
      alert('Report Submitted succesfully');
      // Optionally, close the modal and reset the form
      closeModal();
      setReason('');
    } catch (error) {
      console.error('Failed to submit report', error);
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
            <div className="backdrop-blur-sm backdrop-filter relative bg-navygreen-100 rounded-lg p-8 max-w-md z-10 bg-opacity-100">
              <button className="absolute top-2 right-2 text-gray-100" onClick={closeModal}>
                <XMarkIcon className="h-6 w-6" />
              </button>
              <h2 className="font-josefin-sans text-center text-xl font-bold mb-4">Report Campaign</h2>
              <p className="font-josefin-sans text-center text-sm mb-4">Want to report this campaign? Write your reason, and we will consider your complaint.</p>
              <form className="flex flex-col space-y-4 text-gray-100" onSubmit={handleSubmit}>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
