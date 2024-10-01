import React, { useState, useEffect } from "react";
import Button from "../components/button";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const SocialSignUpPage = () => {
    const [imageFileName, setImageFileName] = useState('');
    const [bannerFileName, setBannerFileName] = useState('');
    const [faceImageFileName, setFaceImageFileName] = useState('');
    const [user, setUser] = useState(null);
    const [step, setStep] = useState(1);
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve user information from local storage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        }
    }, []);
    const [formDataStep1, setFormDataStep1] = useState({
        user: '',
        name: '',
        initiative: '',
        image: '',
        banner: '',
        location: ''
    });

    useEffect(() => {
        if (user) {
            // Update formDataStep1 with user._id when user state is set
            setFormDataStep1(prevState => ({
                ...prevState,
                user: user._id
            }));
        }
    }, [user]); 

    const [formDataStep2, setFormDataStep2] = useState({
        cnic: '',
        faceImage: '',
        contact: '',
        address: '',
        status: '',
    });

    // const handleFileInputChange = (event, setFileState, setFormData, fieldName) => {
    //     const file = event.target.files[0];
    //     if (file && file.type.startsWith("image/")) {
    //         setFileState(file.name);
    //         setFormData(prevState => ({
    //             ...prevState,
    //             [fieldName]: file.name
    //         }));
    //     } else {
    //         alert("Please select a valid image file.");
    //     }
    // };

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

    const handleInputChange = (e, setFormData) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleStep1Submit = (e) => {
        e.preventDefault();
        setStep(2);
        console.log('user' + formDataStep1.user)
        console.log('image: ' + formDataStep1.image);
        console.log('banner: ' + formDataStep1.banner);
        console.log('name: ' + formDataStep1.name);
        console.log('initiative: ' + formDataStep1.initiative);
        console.log('location: ' + formDataStep1.location);
    };

    const handleBackButton = (e) => {
        e.preventDefault();
        setStep(1);
    };

    const handleStep2Submit = async (e) => {
        e.preventDefault();
        console.log('faceimage: ' + formDataStep2.faceImage);
        console.log('cnic: ' + formDataStep2.cnic);
        console.log('contact: ' + formDataStep2.contact);
        console.log('address: ' + formDataStep2.address);
        console.log('status: ' + formDataStep2.status);
        try {
            const formData = {
                ...formDataStep1,
                ...formDataStep2,
            };
            console.log('full: ' + formData.user);
            console.log('full: ' + user.isSocial);
            console.log('full: ' + formData.user);
            console.log('full: ' + formData.image);
            console.log('full: ' + formData.banner);
            console.log('full: ' + formData.contact);
            console.log('full: ' + formData.faceImage);

            const response = await axios.post(`${apiUrl}/api/socialgroup`, formData);
            console.log("Data submitted:", response.data);
            // Redirect or show success message

            const userUpdateResponse = await axios.put(`${apiUrl}/api/user/${user._id}`, { isSocial: true });
            console.log("User updated:", userUpdateResponse.data);

            // Update user in local storage
            const updatedUser = { ...user, isSocial: true };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);

            navigate('/');
            alert('Please wait until your social group has been verified, It can take a few days.')
        } catch (error) {
            console.error("Error submitting data:", error);
            
            // Handle error
        }
    };

    const renderStep1Form = () => {
        return (
            <form onSubmit={handleStep1Submit}>
                <h1 className="font-josefin-sans text-2xl text-gray-100 font-bold mb-6">Social Group Details</h1>
                <label htmlFor="image" className="block font-mini font-josefin-sans mb-1">Logo</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="image" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="file" 
                        name="image" 
                        accept="image/*"
                        required
                        onChange={(e) => handleFileInputChange(e, setImageFileName, setFormDataStep1, 'image')}
                    />
                </div>
                <label htmlFor="banner" className="block font-mini font-josefin-sans mb-1">Banner</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="banner" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="file" 
                        name="banner" 
                        accept="image/*"
                        required
                        onChange={(e) => handleFileInputChange(e, setBannerFileName, setFormDataStep1, 'banner')}
                    />
                </div>
                <label htmlFor="name" className="block font-mini font-josefin-sans mb-1">Name</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="name" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="text" 
                        name="name" 
                        placeholder="Enter your group's name" 
                        required
                        value={formDataStep1.name}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <label htmlFor="initiative" className="block font-mini font-josefin-sans mb-1">Initiative</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <textarea 
                        id="initiative" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        name="initiative" 
                        placeholder="Enter detail about your social group" 
                        maxLength="400"
                        required
                        value={formDataStep1.initiative}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block font-mini font-josefin-sans mb-1">Location</label>
                    <select 
                        id="location" 
                        name="location" 
                        className="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4"
                        value={formDataStep1.location}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    >
                        <option value="" disabled>Select The City</option>
                        <option value="Islamabad">Islamabad</option>
                    </select>
                </div>
                <div className="mt-4">
                    <button type="submit" className="font-josefin-sans bg-gray-100 text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Next</button>
                </div>
            </form>
        );
    };

    const renderStep2Form = () => {
        return (
            <form onSubmit={handleStep2Submit}>
                <h1 className="font-josefin-sans text-2xl text-gray-100 font-bold mb-6">Get yourself Verified</h1>
                <label htmlFor="faceImage" className="block font-mini font-josefin-sans mb-1">Face Image</label>
                <div className="flex items-center mb-4 py-2 rounded-2xl">
                    <input 
                        id="faceImage" 
                        className="pl-2 w-full outline-none border-none" 
                        type="file" 
                        name="faceImage" 
                        accept="image/*"
                        required
                        onChange={(e) => handleFileInputChange(e, setFaceImageFileName, setFormDataStep2, 'faceImage')}
                    />
                </div>
                <label htmlFor="cnic" className="block font-mini font-josefin-sans mb-1">CNIC</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="cnic" 
                        className="bg-inherit font-josefin-sans pl-2 w-full outline-none border-none" 
                        type="text" 
                        name="cnic" 
                        placeholder="Enter your CNIC"
                        required
                        maxLength="15" // Set maximum length to 15 characters (including hyphens)
                        value={formDataStep2.cnic}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const numericValue = inputValue.replace(/\D/g, '');
                            const formattedValue = numericValue.replace(/^(\d{5})(\d{7})(\d{1})?$/, '$1-$2-$3');
                            handleInputChange({
                                target: { name: 'cnic', value: formattedValue }
                            }, setFormDataStep2);
                        }}
                        onKeyPress={(e) => {
                            const keyCode = e.keyCode || e.which;
                            const keyValue = String.fromCharCode(keyCode);
                            const regex = /[0-9-]/;
                            if (!regex.test(keyValue)) {
                                e.preventDefault();
                            }
                        }}
                    />
                </div>
                <label htmlFor="contact" className="block font-mini font-josefin-sans mb-1">Contact number</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="contact" 
                        className="bg-inherit pl-2 font-josefin-sans w-full outline-none border-none" 
                        type="text" 
                        name="contact" 
                        placeholder="Enter your contact number" 
                        maxLength="11"
                        required
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
                    />
                </div>
                <label htmlFor="address" className="block font-mini font-josefin-sans mb-1">Address</label>
                <div className="flex bg-neutral items-center mb-4 py-2 px-3 rounded-2xl">
                    <textarea 
                        id="address" 
                        className="bg-inherit pl-2 font-josefin-sans w-full outline-none border-none" 
                        name="address" 
                        placeholder="Enter your full address" 
                        required
                        value={formDataStep2.address}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
                    />
                </div>
                <div className="flex gap-4 mt-4">
                    <Button onClick={handleBackButton} text='Back'/>
                    <button type="submit">submit</button>
                </div>
            </form>
        );
    };

    return (
      <div className="pt-40 pb-20 flex flex-col justify-center items-center min-h-screen bg-neutral">
        <h1 className="mb-8 text-xl font-bold">Social Group Request Form</h1>
        <ol className="flex gap-4 items-center justify-center w-1/2  mb-4 sm:mb-5">
          <li className={`flex justify-center items-center ${step === 1 ? 'text-gray-100' : 'text-gray-100'}`}>
            <div
              className={`flex items-center justify-center w-10 h-10 ${step === 1 ? 'bg-navygreen-300' : 'bg-navygreen-200'} rounded-full lg:h-12 lg:w-12 shrink-0`}
            >
              1
            </div>
          </li>
          <li className={`flex justify-center items-center ${step === 2 ? 'text-gray-100' : 'text-gray-100'}`}>
            <div
              className={`flex items-center justify-center w-10 h-10 ${step === 2 ? 'bg-navygreen-300' : 'bg-navygreen-200'} rounded-full lg:h-12 lg:w-12 shrink-0`}
            >
              2
            </div>
          </li>
        </ol>
        <div className="p-8 rounded-pl bg-white shadow-md w-full max-w-2xl">
          {step === 1 && renderStep1Form()}
          {step === 2 && renderStep2Form()}
        </div>
      </div>
    );
}

export default SocialSignUpPage;


