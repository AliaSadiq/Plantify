
import React, { useState, useEffect } from "react";
import axios from "axios";

const  CreateCampaignForm= () => {
    const [imageFileName, setImageFileName] = useState('');
    const [bannerFileName, setBannerFileName] = useState('');
    const [faceImageFileName, setFaceImageFileName] = useState('');
    const [user, setUser] = useState(null);
    const [step, setStep] = useState(1);
    const [volunteerToggle, setVolunteerToggle] = useState(false);

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
        title: '',
        description: '',
        image: '',
        banner: '',
        startDate: '',
        endDate: '',
        targetDonation: '',
        volunteer: 0,
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

    const handleStep1Submit = (e) => {
        e.preventDefault();
        setStep(2);
        console.log('banner: ' + formDataStep1.banner);
        console.log('title: ' + formDataStep1.title);
        console.log('description: ' + formDataStep1.description);
        console.log('startDate: ' + formDataStep1.startDate);
        console.log('endDate: ' + formDataStep1.endDate);
       
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

            const response = await axios.post("http://localhost:5000/api/socialgroup", formData);
            console.log("Data submitted:", response.data);
            // Redirect or show success message
        } catch (error) {
            console.error("Error submitting data:", error);
            // Handle error
        }
    };

    const renderStep1Form = () => {
        return (
            <form onSubmit={handleStep1Submit}>
                <h1 className="font-josefin-sans text-2xl text-black font-bold mb-6">Create Campaign</h1>
                {/* <label htmlFor="image" className="block font-mini font-josefin-sans mb-1">Logo</label>
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
                </div> */}
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
                <label htmlFor="title" className="block font-mini font-josefin-sans mb-1">Title</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="title" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="text" 
                        name="title" 
                        placeholder="Enter your group's title" 
                        required
                        value={formDataStep1.title}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <label htmlFor="description" className="block font-mini font-josefin-sans mb-1">Description</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <textarea 
                        id="description" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        name="description" 
                        placeholder="Enter detail about your social group" 
                        maxLength="250"
                        required
                        value={formDataStep1.description}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <label htmlFor="startDate" className="block font-mini font-josefin-sans mb-1">Start Date</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="startDate" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="date" 
                        name="startDate" 
                        required
                        value={formDataStep1.startDate}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <label htmlFor="endDate" className="block font-mini font-josefin-sans mb-1">End Date</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="endDate" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="date" 
                        name="endDate" 
                        required
                        value={formDataStep1.endDate}
                        onChange={(e) => {
                            if (new Date(e.target.value) < new Date(formDataStep1.endDate)) {
                                alert("End Date cannot be before Start Date");
                            } else {
                                handleInputChange(e, setFormDataStep1);
                            }
                        }}
                    />
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
                <h1 className="font-josefin-sans text-2xl text-gray-100 font-bold mb-6">Create Camapign</h1>
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
                        value={formDataStep1.targetDonation}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
                    />
                </div>
                <label htmlFor="volunteer" className="block font-mini font-josefin-sans mb-1">Volunteers</label>
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
                    <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                        <input 
                            id="volunteer" 
                            className="bg-inherit pl-2 w-full outline-none border-none" 
                            type="number" 
                            name="volunteer" 
                            placeholder="Enter number of volunteers" 
                            required
                            max={20}
                            min={0}
                            value={formDataStep1.volunteer}
                            onChange={(e) => handleInputChange(e, setFormDataStep2)}
                        />
                    </div>
                )}
                <div className="mb-4">
                    <label htmlFor="location" className="block font-mini font-josefin-sans mb-1">Location</label>
                    <select 
                        id="location" 
                        name="location" 
                        className="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4"
                        value={formDataStep1.location}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
                    >
                        <option value="" disabled>Select The City</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Rawalpindi">Rawalpindi</option>
                        <option value="lahore">Lahore</option>
                        <option value="Balochistan">Balochistan</option>
                    </select>
                </div>
                <div className="flex gap-4 mt-4">
                    <button onClick={handleBackButton} text='Back'/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    };

    return (
        <div className="flex items-center py-96 gap-[100px] justify-center pt-2 pb-20">
            {step === 1 ? (
                <>
                    <div className="border  border-2 border-gray-100 bg-white px-5 pt-2 rounded-lg ml-[30px] w-[450px]">
                        {renderStep1Form()}
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/assets/group.svg`} alt='leaves illustration' className="w-[600px] mt-8"/>
                </>
            ) : (
                <>
                    <img src={`${process.env.PUBLIC_URL}/assets/verify.svg`} alt='leaves illustration' className="self-center w-[450px]"/>
                    <div className="bg-white p-8 rounded-lg ml-[100px] w-[450px] mt-8">
                        {renderStep2Form()}
                    </div>
                </>
            )}
        </div>
    );
}

export default CreateCampaignForm;
