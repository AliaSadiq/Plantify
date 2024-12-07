import React from 'react';

const RejectPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800  flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Campaign Rejected</h2>
        <p className="mb-4">The campaign has been rejected and the user has been informed.</p>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RejectPopup; // Ensure it's a default export
