// DonationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    pp_TxnType: 'MWALLET',
    pp_Amount: '',
    pp_BillReference: '',
    pp_Description: '',
    ppmpf_1: '', // Additional fields like phone number
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/donate', formData);
      console.log('Payment Response:', response.data);
    } catch (error) {
      console.error('Error making payment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="donation-form">
      <label>Amount (PKR):</label>
      <input 
        type="number" 
        name="pp_Amount" 
        value={formData.pp_Amount} 
        onChange={handleChange} 
        required 
      />

      <label>Bill Reference:</label>
      <input 
        type="text" 
        name="pp_BillReference" 
        value={formData.pp_BillReference} 
        onChange={handleChange} 
        required 
      />

      <label>Description:</label>
      <textarea 
        name="pp_Description" 
        value={formData.pp_Description} 
        onChange={handleChange} 
        required 
      />

      <label>Phone Number:</label>
      <input 
        type="text" 
        name="ppmpf_1" 
        value={formData.ppmpf_1} 
        onChange={handleChange} 
        required 
      />

      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
