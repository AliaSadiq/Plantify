import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditCampaignForm = () => {
  const { campaignId } = useParams();
  const [user, setUser] = useState(null);
  const [step, setStep] = useState(1);
  const [volunteerToggle, setVolunteerToggle] = useState(false);
  const [bannerFileName, setBannerFileName] = useState('');
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const [formDataStep1, setFormDataStep1] = useState({
    user: '',
    name: '',
    description: '',
    image: '',
    start_date: '',
    end_date: '',
  });

  const [formDataStep2, setFormDataStep2] = useState({
    targetDonation: '',
    volunteer: 0,
    location: ''
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  useEffect(() => {
    if (user) {
      setFormDataStep1(prevState => ({
        ...prevState,
        user: user._id || ''
      }));
    }
  }, [user]);

  useEffect(() => {
    if (campaignId) {
      axios.get(`${apiUrl}/api/campaigns/${campaignId}`)
        .then(response => {
          const campaign = response.data;
          console.log("Fetched campaign:", campaign); // Debugging log
          setFormDataStep1({
            user: campaign.user || '',
            name: campaign.name || '',
            description: campaign.description || '',
            image: campaign.image || '',
            start_date: campaign.start_date ? new Date(campaign.start_date).toISOString().split('T')[0] : '',
            end_date: campaign.end_date ? new Date(campaign.end_date).toISOString().split('T')[0] : ''
          });
          setFormDataStep2({
            targetDonation: campaign.target_donation || '',
            volunteers: campaign.volunteers || 0,
            location: campaign.location || ''
          });
          setVolunteerToggle(campaign.volunteers > 0);
        })
        .catch(error => {
          console.error("Error fetching campaign data:", error);
        });
    }
  }, [campaignId]);

  const handleFileInputChange = (event, setFileState, setFormData, fieldName) => {
    const file = event.target.files[0];
    if (file) {
      setFileState(file.name);
      setFormData(prevState => ({
        ...prevState,
        [fieldName]: file.name
      }));
    }
  };

  const handleInputChange = (e, setFormData) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNumberInputChange = (e, setFormData) => {
    const { name, value } = e.target;
    const numberValue = parseInt(value, 10);
    if (!isNaN(numberValue)) {
      setFormData(prevState => ({
        ...prevState,
        [name]: numberValue
      }));
    }
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBackButton = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handleStep2Submit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        ...formDataStep1,
        ...formDataStep2,
      };

      if (campaignId) {
        const response = await axios.put(`${apiUrl}/api/campaigns/${campaignId}`, formData);
        console.log("Campaign updated:", response.data);
        alert("Campaign updated");
      } else {
        const response = await axios.post(`${apiUrl}/api/campaigns`, formData);
        console.log("Campaign created:", response.data);
        alert("Campaign created");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const renderStep1Form = () => (
    <form onSubmit={handleStep1Submit}>
      <h1 className="font-josefin-sans text-2xl text-black font-bold mb-6">Update Campaign</h1>
      
      <label htmlFor="image" className="block font-mini font-josefin-sans mb-1">Banner</label>
      <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
        <input
          id="image"
          className="bg-inherit pl-2 w-full outline-none border-none"
          type="file"
          name="image"
        
          onChange={(e) => handleFileInputChange(e, setBannerFileName, setFormDataStep1, 'image')}
        />
        {formDataStep1.image && (
          <img className="mt-2 w-12 h-12 rounded-full object-cover" src={`/assest/${formDataStep1.image}`} alt="Campaign Banner" />
        )}
      </div>
      <label htmlFor="name" className="block font-mini font-josefin-sans mb-1">Title</label>
      <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
        <input
          id="name"
          className="bg-inherit pl-2 w-full outline-none border-none"
          type="text"
          name="name"
          placeholder="Enter your group's title"
          required
          value={formDataStep1.name || ''}
          onChange={(e) => handleInputChange(e, setFormDataStep1)}
        />
      </div>
      <label htmlFor="description" className="block font-mini font-josefin-sans mb-1">Description</label>
      <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
        <textarea
          id="description"
          className="bg-inherit pl-2 w-full outline-none border-none"
          name="description"
          placeholder="Enter detail about your campaign"
          maxLength="250"
          required
          value={formDataStep1.description || ''}
          onChange={(e) => handleInputChange(e, setFormDataStep1)}
        />
      </div>
      <label htmlFor="start_date" className="block font-mini font-josefin-sans mb-1">Start Date</label>
      <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
        <input
          id="start_date"
          className="bg-inherit pl-2 w-full outline-none border-none"
          type="date"
          name="start_date"
          required
          value={formDataStep1.start_date || ''}
          onChange={(e) => handleInputChange(e, setFormDataStep1)}
        />
      </div>
      <label htmlFor="end_date" className="block font-mini font-josefin-sans mb-1">End Date</label>
      <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
        <input
          id="end_date"
          className="bg-inherit pl-2 w-full outline-none border-none"
          type="date"
          name="end_date"
          required
          value={formDataStep1.end_date || ''}
          onChange={(e) => {
            const start_date = new Date(formDataStep1.start_date);
            const end_date = new Date(e.target.value);
            if (end_date <= start_date) {
              alert("End Date cannot be before or the same as Start Date");
            } else {
              handleInputChange(e, setFormDataStep1);
            }
          }}
        />
      </div>
      <div className="mt-4">
        <button type="submit" className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Next</button>
      </div>
    </form>
  );

  const renderStep2Form = () => (
    <form onSubmit={handleStep2Submit}>
      <h1 className="font-josefin-sans text-2xl text-black font-bold mb-6">Update Campaign</h1>
      <label htmlFor="targetDonation" className="block font-mini font-josefin-sans mb-1">Target Donation</label>
      <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
        <input
          id="targetDonation"
          className="bg-inherit pl-2 w-full outline-none border-none"
          type="number"
          name="targetDonation"
          placeholder="Enter your target donation amount"
          required
          max={99999}
          min={10}
          value={formDataStep2.targetDonation || ''}
          onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
        />
      </div>
      <label htmlFor="volunteers" className="block font-mini font-josefin-sans mb-1">Volunteers</label>
      <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
        <input
          id="volunteerToggle"
          type="checkbox"
          className="mr-2"
          checked={volunteerToggle}
          onChange={(e) => setVolunteerToggle(e.target.checked)}
        />
        <label htmlFor="volunteerToggle" className="font-mini font-josefin-sans">Need Volunteers?</label>
      </div>
      {volunteerToggle && (
        <div>
          <label htmlFor="volunteers" className="block font-mini font-josefin-sans mb-1">Volunteers Needed</label>
          <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
            <input
              id="volunteers"
              className="bg-inherit pl-2 w-full outline-none border-none"
              type="number"
              name="volunteers"
              placeholder="Enter the number of volunteers needed"
              value={formDataStep2.volunteers || 0}
              onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
            />
          </div>
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="location" className="block font-mini font-josefin-sans mb-1">Location</label>
        <select
          id="location"
          name="location"
          className="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4"
          value={formDataStep2.location || ''}
          onChange={(e) => handleInputChange(e, setFormDataStep2)}
        >
          <option value="" disabled>Select The City</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Rawalpindi">Rawalpindi</option>
          <option value="Lahore">Lahore</option>
          <option value="Balochistan">Balochistan</option>
        </select>
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={handleBackButton} className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Back</button>
        <button type="submit" className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Submit</button>
      </div>
    </form>
  );

  return (
    <div className="flex items-center gap-[100px] justify-center min-h-screen">
      {step === 1 ? (
        <>
          <div className="border-2 border-gray-100 bg-white p-8 px-5 rounded-lg w-[400px]">
            {renderStep1Form()}
          </div>
          <img src={`${process.env.PUBLIC_URL}/assest/Seeding-bro.png`} alt="leaves illustration" className="w-[500px] mt-8" />
        </>
      ) : (
        <>
          <img src={`${process.env.PUBLIC_URL}/assest/Reforestation-bro.png`} alt="leaves illustration" className="self-center w-[450px]" />
          <div className="bg-white p-8 rounded-lg w-[400px] mt-8">
            {renderStep2Form()}
          </div>
        </>
      )}
    </div>
  );
};
export default EditCampaignForm;
