import React from 'react';
import Modal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/solid';

const MessageModal = ({ isOpen, onClose, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Message Modal"
      className="bg-white border-2 border-gray-300 p-6 rounded-lg shadow-lg w-3/4 lg:w-1/2 mx-auto mt-10"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
    >
      <div className="flex justify-between items-center mb-4">
        {/* <h2 className="text-lg font-bold">Notification</h2> */}
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-navygreen-100"
        >
          <XMarkIcon className='w-6' />
        </button>
      </div>
      <p className="text-center mb-4">{message}</p>
      {/* <button
        onClick={onClose}
        className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Close
      </button> */}
    </Modal>
  );
};

export default MessageModal;
