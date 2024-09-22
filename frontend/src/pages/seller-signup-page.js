import React, { useState } from 'react';
import Button from '../components/button';
import useCreateSeller from '../hooks/useCreateSeller';

const Step1 = ({ onNext }) => {
    const [storeName, setStoreName] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [businessContact, setBusinessContact] = useState('');
    const [storeDescription, setStoreDescription] = useState('');

    const handleNext = () => {
        // Send data to parent when moving to the next step
        onNext({
            storeName,
            businessEmail,
            businessContact,
            storeDescription,
        });
    };
    return (
        <form>
            {/* Step 1 Form Content */}
            <div className='mb-4'>
                <label htmlFor="store-name" className="block text-sm font-medium font-semibold">Store Name</label>
                <input
                    type="text"
                    name="storename"
                    className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                    placeholder="Enter your store name"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    required
                />
            </div>
            <div className="flex gap-3 mb-4 w-full">
                <div className='w-full'>
                    <label htmlFor="business-email" className="block text-sm font-medium font-semibold">Business Email</label>
                    <input
                        type="email"
                        name="businessemail"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Enter your business email"
                        value={businessEmail}
                        onChange={(e) => setBusinessEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='w-full'>
                    <label htmlFor="business-contact" className="block text-sm font-medium font-semibold">Business Contact</label>
                    <input
                        type="text"
                        name="business-contact"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Enter your store contact"
                        value={businessContact}
                        onChange={(e) => setBusinessContact(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className='mb-4'>
                <label htmlFor="store-desc" className="block text-sm font-medium font-semibold">Store Description</label>
                <textarea
                    name="store-desc"
                    className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                    placeholder="Tell us about your store"
                    resize="none"
                    value={storeDescription}
                    onChange={(e) => setStoreDescription(e.target.value)}
                    required
                />
            </div>
            
            <Button 
                text="Next" 
                type="button" 
                className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md" 
                onClick={handleNext}
            />
        </form>
    );
};

const Step2 = ({ onBack, onNext }) => {
    const [sellerName, setSellerName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');

    const handleNext = () => {
        // Send data to parent when moving to the next step
        onNext({
            sellerName,
            email,
            contact,
            password,
        });
    };
    return (
    <form>
        {/* Step 2 Form Content */}
        <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium font-semibold">Full Name</label>
            <input
                type="text"
                name="name"
                className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                placeholder="Enter your full name"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium font-semibold">Email</label>
            <input
                type="email"
                name="email"
                className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium font-semibold">Contact</label>
            <input
                type="text"
                name="contact"
                className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                placeholder="Enter your contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium font-semibold">Password</label>
            <input
                type="password"
                name="password"
                className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                placeholder="Enter a new password for your store"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </div>
        <div className="flex gap-4 justify-between">
            <Button 
                text="Back" 
                type="button" 
                className="w-full mt-2 bg-transparent shadow-md" 
                onClick={onBack}
            />
            <Button 
                text="Next" 
                type="button" 
                className="w-full mt-2 bg-gray-100 text-white shadow-md"
                onClick={handleNext}
            />
        </div>
    </form>
    );
};
const Step3 = ({ onBack, sellerData }) => {
    const { createSeller, loading, error } = useCreateSeller();
    const [businessCertificate, setBusinessCertificate] = useState(null);
    const [cnic, setCnic] = useState('');
    const [taxID, setTaxID] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare form data
        const formData = new FormData();
        formData.append('taxID', taxID)
        formData.append('cnic', cnic);
        formData.append('businessCertificate', businessCertificate);
        // Append other seller data from previous steps
        Object.keys(sellerData).forEach((key) => {
        formData.append(key, sellerData[key]);
        });

        // console.log("name" + formData.na);

        // Send data to API
        await createSeller(formData);
    };

    return (
        <form>
            {/* Step 3 Form Content */}
            <div className="mb-4">
                <label htmlFor="business-certificate" className="block text-sm font-medium font-semibold">Business Certificate</label>
                <input
                    type="file"
                    name="business-certificate"
                    className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                    accept="image/*"
                    onChange={(e) => setBusinessCertificate(e.target.files[0])}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="cnic" className="block text-sm font-medium font-semibold">CNIC</label>
                <input
                    type="text"
                    name="cnic"
                    className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                    placeholder="Enter your CNIC"
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="tax-id" className="block text-sm font-medium font-semibold">Tax ID</label>
                <input
                    type="text"
                    name="tax-id"
                    className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                    placeholder="Enter your Tax ID"
                    value={taxID}
                    onChange={(e) => setTaxID(e.target.value)}
                    required
                />
            </div>
            <div className="flex gap-4 justify-between">
                <Button 
                    text="Back" 
                    type="button" 
                    className="w-full mt-2 bg-transparent shadow-md" 
                    onClick={onBack}
                />
                <Button 
                    text="Submit" 
                    type="submit" 
                    className="w-full mt-2 bg-gray-100 text-white shadow-md"
                    onClick={handleSubmit}
                />
            </div>
        </form>
    );
};

const SellerSignup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    storeName: '',
    businessEmail: '',
    businessContact: '',
    storeDesc: '',
    sellerName: '',
    email: '',
    contact: '',
    password: '',
  });

  const handleNext = (newData) => {
    setFormData({ ...formData, ...newData });
    setStep(step + 1);
  };
  const handleBack = () => setStep(step - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral">
      <div className="flex bg-white rounded-pl p-2 shadow-xl overflow-hidden min-h-[650px] min-w-[1200px] mx-auto">
        {/* Left Section */}
        <div className="hidden rounded-pl md:flex md:w-1/2 flex-col justify-between bg-cover bg-center p-8" style={{ backgroundImage: `url('/assets/products/plant-1.jpeg')` }}>
            <div className="text-white">
                <button className="bg-transparent border border-white px-3 py-1 rounded-md mb-6 hover:bg-white hover:text-[#1a1523] transition duration-300">
                Back to website →
                </button>
            </div>
            <div className="text-white text-md font-semibold mb-4">
                Capturing Moments, Creating Memories
            </div>
        </div> 

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8 bg-inherit font-josefin-sans rounded-[20px]">
          <div className="flex flex-col justify-center h-full">
            <ol className="flex self-center gap-4 w-full items-center justify-center w-1/2 mb-4 sm:mb-5">
                <li className={`flex justify-center items-center ${step === 1 ? 'text-gray-100' : 'text-gray-100'}`}>
                    <div
                        className={`flex items-center border-2 border-gray-100 justify-center w-10 h-10 ${step === 1 ? 'bg-gray-100 text-white' : 'bg-transparent text-gray-100'} rounded-full lg:h-12 lg:w-12 shrink-0`}
                    >
                        1
                    </div>
                </li>
                <li className={`flex justify-center items-center ${step === 2 ? 'text-gray-100' : 'text-gray-100'}`}>
                    <div
                        className={`flex items-center border-2 border-gray-100 justify-center w-10 h-10 ${step === 2 ? 'bg-gray-100 text-white' : 'bg-transparent text-gray-100'} rounded-full lg:h-12 lg:w-12 shrink-0`}
                    >
                        2
                    </div>
                </li>
                <li className={`flex justify-center items-center ${step === 3 ? 'text-gray-100' : 'text-gray-100'}`}>
                    <div
                        className={`flex items-center border-2 border-gray-100 justify-center w-10 h-10 ${step === 3 ? 'bg-gray-100 text-white' : 'bg-transparent text-gray-100'} rounded-full lg:h-12 lg:w-12 shrink-0`}
                    >
                        3
                    </div>
                </li>
            </ol>

            {/* Heading */}
            <h2 className="text-lg font-bold mb-8">Create your store on Plantify</h2>

            {/* Form Steps */}
            <div>
                {step === 1 && <Step1 onNext={handleNext} />}
                {step === 2 && <Step2 onNext={handleNext} onBack={handleBack} />}
                {step === 3 && <Step3 onBack={handleBack} sellerData={formData}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerSignup;
