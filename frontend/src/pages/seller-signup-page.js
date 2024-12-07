import React, { useState } from 'react';
import Button from '../components/button';
import useCreateSeller from '../hooks/useCreateSeller';
import { Link } from 'react-router-dom';


const SellerSignup = () => {
    const [step, setStep] = useState(1);
    const { createSeller, loading, error_r } = useCreateSeller();
    const [businessCertificate, setBusinessCertificateFileName] = useState('');

    const [formDataStep1, setFormDataStep1] = useState({
        storeName: '',
        businessEmail: '',
        businessContact: '',
        storeDescription: '',
        businessAddress: '',
    });

    const [formDataStep2, setFormDataStep2] = useState({
        sellerName: '',
        email: '',
        contact: '',
        password: '',
    });

    const [formDataStep3, setFormDataStep3] = useState({
        businessCertificate: '',
        cnic: '',
        taxID: '',
    });

    //handling image file inputs
    const handleFileInputChange = (event, setFileState, setFormData, fieldName) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setFileState(file.name);
            setFormData(prevState => ({
                ...prevState,
                [fieldName]: file.name
            }));
        } else {
            alert("Please select a valid image file.");
            // Clear the file input field
            event.target.value = ""; // Reset the input value
        }
    };

    //handling text inputs
    const handleInputChange = (e, setFormData) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleStep1Submit = (e) => {
        e.preventDefault();
        // Check for empty fields
        if (
            !formDataStep1.storeName ||
            !formDataStep1.businessEmail ||
            !formDataStep1.businessContact ||
            !formDataStep1.storeDescription ||
            !formDataStep1.businessAddress
        ) {
            alert("Please fill out all fields in Step 1.");
            return;
        }

        // Check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formDataStep1.businessEmail)) {
            alert("Please enter a valid business email.");
            return;
        }
        setStep(step + 1);
        console.log('storeName' + formDataStep1.storeName);
    };
    const handleStep2Submit = (e) => {
        e.preventDefault();
        if (
            !formDataStep2.sellerName ||
            !formDataStep2.email ||
            !formDataStep2.contact ||
            !formDataStep2.password
        ) {
            alert("Please fill out all fields in Step 2.");
            return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formDataStep2.email)) {
            alert("Please enter a valid email.");
            return;
        }
        setStep(step + 1);
        console.log('sellerName' + formDataStep2.sellerName);
    };
    const handleStep3Submit = (e) => {
        e.preventDefault();
        // try {
        //     console.log('cnic' + formDataStep3.cnic);
        //     const formData  = {
        //         ...formDataStep1,
        //         ...formDataStep2,
        //         ...formDataStep3,
        //     }
        //     createSeller(formData);
        // } catch (error) {
        //     console.log("error submiting seller data: " + error_r);
        // }
        if (
            !formDataStep3.businessCertificate ||
            !formDataStep3.cnic ||
            !formDataStep3.taxID
        ) {
            alert("Please fill out all fields in Step 3.");
            return;
        }
    
        createSeller({
            ...formDataStep1,
            ...formDataStep2,
            ...formDataStep3,
        });
    };

    const handleBack = (e) => {
        e.preventDefault();
        setStep(step - 1);
    };

    const Step1 = () => {
        return (
            <form>
                {/* Step 1 Form Content */}
                <div className='mb-4'>
                    <label htmlFor="storeName" className="block text-sm font-medium font-semibold">Store Name</label>
                    <input
                        type="text"
                        name="storeName"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Enter your store name"
                        value={formDataStep1.storeName}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                        required
                    />
                </div>
                <div className="flex gap-3 mb-4 w-full">
                    <div className='w-full'>
                        <label htmlFor="businessEmail" className="block text-sm font-medium font-semibold">Business Email</label>
                        <input
                            type="email"
                            name="businessEmail"
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="Enter your business email"
                            value={formDataStep1.businessEmail}
                            onChange={(e) => handleInputChange(e, setFormDataStep1)}
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="businessContact" className="block text-sm font-medium font-semibold">Business Contact</label>
                        <input
                            type="text"
                            name="businessContact"
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="Enter your store contact"
                            value={formDataStep1.businessContact}
                            onKeyPress={(e) => {
                                const keyCode = e.keyCode || e.which;
                                const keyValue = String.fromCharCode(keyCode);
                                const regex = /[0-9]/;
                                if (!regex.test(keyValue)) {
                                    e.preventDefault();
                                }
                            }}
                            onInput={(e) => {
                                const inputValue = e.target.value;
                                if (inputValue.length >= 11) {
                                    e.preventDefault();
                                }
                            }}
                            onChange={(e) => handleInputChange(e, setFormDataStep1)}
                            required
                        />
                    </div>
                </div>
                <div className="flex gap-3 mb-4 w-full">
                    <div className='w-full'>
                        <label htmlFor="storeDescription" className="block text-sm font-medium font-semibold">Store Description</label>
                        <textarea
                            name="storeDescription"
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="Tell us about your store"
                            resize="none"
                            value={formDataStep1.storeDescription}
                            onChange={(e) => handleInputChange(e, setFormDataStep1)}
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="businessAddress" className="block text-sm font-medium font-semibold">Store Address</label>
                        <textarea
                            name="businessAddress"
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="Tell us about your store"
                            resize="none"
                            value={formDataStep1.businessAddress}
                            onChange={(e) => handleInputChange(e, setFormDataStep1)}
                            required
                        />
                    </div>
                </div>
                
                
                <Button 
                    text="Next" 
                    type="submit" 
                    className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md" 
                    onClick={handleStep1Submit}
                />
            </form>
        );
    };

    const Step2 = () => {
        return (
            <form>
                {/* Step 2 Form Content */}
                <div className="mb-4">
                    <label htmlFor="sellerName" className="block text-sm font-medium font-semibold">Full Name</label>
                    <input
                        type="text"
                        name="sellerName"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Enter your full name"
                        value={formDataStep2.sellerName}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
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
                        value={formDataStep2.email}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
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
                        value={formDataStep2.contact}
                        onKeyPress={(e) => {
                            const keyCode = e.keyCode || e.which;
                            const keyValue = String.fromCharCode(keyCode);
                            const regex = /[0-9]/;
                            if (!regex.test(keyValue)) {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            const inputValue = e.target.value;
                            if (inputValue.length >= 11) {
                                e.preventDefault();
                            }
                        }}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
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
                        value={formDataStep2.password}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
                        required
                    />
                </div>
                <div className="flex gap-4 justify-between">
                    <Button 
                        text="Back" 
                        type="button" 
                        className="w-full mt-2 bg-transparent py-2 shadow-md" 
                        onClick={handleBack}
                    />
                    <Button 
                        text="Next" 
                        type="submit" 
                        className="w-full mt-2 bg-gray-100 py-2 text-white shadow-md"
                        onClick={handleStep2Submit}
                    />
                </div>
            </form>
        );
    };

    const Step3 = () => {
        return (
            <form>
                {/* Step 3 Form Content */}
                <div className="mb-4">
                    <label htmlFor="businessCertificate" className="block text-sm font-medium font-semibold">Business Certificate</label>
                    <input
                        type="file"
                        name="businessCertificate"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        accept="image/*"
                        onChange={(e) => handleFileInputChange(e, setBusinessCertificateFileName, setFormDataStep3, 'businessCertificate')}
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
                        maxLength="15"
                        value={formDataStep3.cnic}
                        //onChange={(e) => handleInputChange(e, setFormDataStep3)}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const numericValue = inputValue.replace(/\D/g, '');
                            const formattedValue = numericValue.replace(/^(\d{5})(\d{7})(\d{1})?$/, '$1-$2-$3');
                            handleInputChange({
                                target: { name: 'cnic', value: formattedValue }
                            }, setFormDataStep3);
                        }}
                        onKeyPress={(e) => {
                            const keyCode = e.keyCode || e.which;
                            const keyValue = String.fromCharCode(keyCode);
                            const regex = /[0-9-]/;
                            if (!regex.test(keyValue)) {
                                e.preventDefault();
                            }
                        }}
                        required
                    />
                    
                </div>
                <div className="mb-4">
                    <label htmlFor="taxID" className="block text-sm font-medium font-semibold">Tax ID</label>
                    <input
                        type="text"
                        name="taxID"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Enter your Tax ID"
                        required
                        value={formDataStep3.taxID}
                        onChange={(e) => handleInputChange(e, setFormDataStep3)}  
                    />
                </div>
                <div className="flex gap-4 justify-between">
                    <Button 
                        text="Back" 
                        type="button" 
                        className="w-full mt-2 bg-transparent shadow-md" 
                        onClick={handleBack}
                    />
                    <Button 
                        text="Submit" 
                        type="submit" 
                        className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md"
                        onClick={handleStep3Submit}
                    />
                </div>
            </form>
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral">
            <div className="flex bg-white rounded-pl p-2 shadow-xl overflow-hidden min-h-[650px] min-w-[1200px] mx-auto">
                {/* Left Section */}
                <div className="hidden rounded-pl md:flex md:w-1/2 flex-col justify-between bg-cover bg-center p-8" style={{ backgroundImage: `url('/assets/products/plant-1.jpeg')` }}>
                    <div className="text-white">
                        <Link to="/">
                            <button className="bg-transparent border border-white px-3 py-1 rounded-md mb-6 hover:bg-white hover:text-[#1a1523] transition duration-300">
                                Back to website →
                            </button>
                        </Link>
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
                            {step === 1 && Step1()}
                            {step === 2 && Step2()}
                            {step === 3 && Step3()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerSignup;