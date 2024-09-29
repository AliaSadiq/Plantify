import useUser from "../hooks/useFetchUserLocalStorage";
import useDonationsByCampaign from "../hooks/useDonationsByCampaign";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Button from '../components/button';
import { Link } from "react-router-dom";
import VolunteeringModal from "../popups/volunteering-modal";
import ReportModal from "../popups/report-modal";
import DonationModal from "../popups/donation-modal";
import Tabs from "../components/tabs";
import { CarouselDefault } from "../carousels/trees-to-be-planted-carousel";
import ProgressBar from "../components/progress-bar";

export default function CampaignDetailsPage() {
    const { id } = useParams();
    const user = useUser();
    const [campaign, setCampaign] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    // const [isReportModalOpen, setIsReportModalOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const { donations, loading, error } = useDonationsByCampaign(id);
    const [newComment, setNewComment] = useState("");
    const [activeStage, setActiveStage] = useState(0); // State for managing active stage

    // Define stages and descriptions
    const stages = [
        { 
            title: 'Fundraising', 
            description: 'We are currently in the fundraising phase of our campaign. This is a crucial stage where every contribution, no matter how small, brings us closer to our goal. Your donations will help us acquire the necessary resources to make this campaign a success. With your support, we can transform our vision into reality. Join us in this journey of hope and growth, and be a part of something truly impactful. Together, we can make a difference and leave a lasting legacy for future generations.' 
        },
        { 
            title: 'Buying Plants', 
            description: 'We are now entering the exciting phase of buying plants for our campaign. The funds raised are being used to procure a diverse range of trees and plants that are not only beautiful but also beneficial to the environment. This stage marks the beginning of tangible progress, as we prepare to bring greenery and life to our community. Your contributions are making it possible for us to select the best species that will thrive and make a lasting impact. Stay tuned as we move closer to the plantation phase, where your support will bloom into a greener future.' 
        },
        { 
            title: 'Plantation', 
            description: 'We are thrilled to announce that we have reached the plantation phase of our campaign. This is the moment where all our collective efforts come to fruition. Volunteers are actively planting the trees, ensuring they are carefully placed and nurtured to grow strong and healthy. This stage is not just about planting trees; it\'s about planting hope, sustainability, and a better future. Your support has been instrumental in reaching this milestone, and we are grateful for your commitment to our cause. Let\'s continue to work together to create a greener, more vibrant community.' 
        },
    ];

    //tabs
    const [activeTab, setActiveTab] = useState('progress'); // State for managing active tab
    //declaring tabs 
    const tabs = [
        { value: 'progress', label: 'Campaign Progress' },
        { value: 'trees', label: 'Trees to be Planted' }
    ];


    //volunteers popup
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    //volunteers popup
    // const handleReportModalOpen = () => {
    //     setIsReportModalOpen(true);
    // };

    // const handleReportModalClose = () => {
    //     setIsReportModalOpen(false);
    // };

    //fetching the campaign and the campaign commments
    useEffect(() => {
        const fetchCampaignDetails = async () => {
            try {
               
                const campaignResponse = await axios.get(`${apiUrl}/api/campaigns/${id}`);
                setCampaign(campaignResponse.data);
    
                const commentsResponse = await axios.get(`${apiUrl}/api/campaign-comment/campaign/${id}`);
                setComments(commentsResponse.data);
            } catch (error) {
                console.error("Error fetching campaign details or comments:", error);
            }
        };
    
        fetchCampaignDetails();
    }, [id]);

    const handleAddComment = async (e) => {
        e.preventDefault();
        if (user?._id) {
            try {
               
                const response = await axios.post(`${apiUrl}/api/campaign-comment`, {
                    user: user._id,
                    campaign: id,
                    comment: newComment,
                });
                setComments([...comments, response.data]);
                setNewComment("");
            } catch (error) {
                console.error("Error adding comment:", error);
            }
        }
    };

    const handleShare = () => {
        
        const shareUrl = `${apiUrl}/campaign-details/${id}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert("Link copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy the link: ", err);
        });
    };

    const handleReport = () => {
        
        const shareUrl = `${apiUrl}/campaign-details/${id}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert("Link copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy the link: ", err);
        });
    };

    if (!campaign) {
        return <div>Loading...</div>; // Add a loading state while campaign data is being fetched
    }

    return (
        <div className="min-h-screen bg-white"> 
            <div className="flex flex-col items-center justify-center pt-40">
                <h1 className="font-bold text-2xl">{campaign.name}</h1>
                <p className="font-semibold text-mini mb-10 flex items-center justify-center gap-2">
                    a campaign by
                    <div className="flex items-center bg-navygreen-100 hover:bg-navygreen-200 p-2 rounded-[20px] gap-2">
                        <img src={`/assets/${campaign.socialGroup.image}`} className="w-8 h-8 rounded-full" alt="Social Group Logo" />
                        <Link to={`/campaign/social-group/${campaign.socialGroup._id}`} className="">
                            {campaign.socialGroup.name}
                        </Link>
                    </div>
                </p>
            </div>
            <div className="flex flex-col min-h-screen md:flex-row gap-6 mb-10 items-start justify-center">
                {/* Wider Div */}
                <div className="w-full md:w-[60%] lg:w-[55%] bg-white p-4 rounded-[20px] drop-shadow-lg">
                    <div className="relative">
                        <div className="absolute flex flex-row gap-2 items-center justify-center top-4 right-4 p-2 rounded-full bg-navygreen-100">
                            {/* like button */}
                            <button className="p-2 rounded-full hover:bg-navygreen-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>
                            {/* share button */}
                            <button onClick={handleShare} className="p-2 rounded-full hover:bg-navygreen-200">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke="currentColor" 
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                </svg>
                            </button>
                            {/* Report button */}
                            <button onClick={handleOpenModal} className="p-2 rounded-full hover:bg-navygreen-200">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke="currentColor" 
                                    className="size-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </button>
                        </div>


                        <img className="w-full h-[500px] object-cover rounded-[20px]" src={`/assets/${campaign.image}`} alt="campaign image"/>
                        <div className="absolute left-4 bottom-4 w-[40%] p-4 bg-white rounded-[20px]">
                            <h1 className="font-semibold text-md">Campaign Details</h1>
                            <div className="flex gap-2 mt-2">
                                <div className="flex items-center mb-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-1"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                    <span className="text-sm">12.06.2024</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-1"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span className="text-sm">11:00 pm</span>
                                </div>
                            </div>
                            <div className="flex items-center mb-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4 mr-1"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <span className="text-sm">Location</span>
                            </div>
                            <img
                                className="w-full h-[200px] object-cover rounded-[20px]"
                                src="/assets/map.jpeg"
                                alt="Map"
                            />
                        </div>
                    </div>
                     <div className="mt-4 p-2 rounded-pl border border-2 border-neutral">
                        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <div className="p-4 mt-2 rounded-b-lg">
                            {activeTab === 'progress' && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-4">Campaign Progress</h2>
                                    <p>Details about campaign progress...</p>
                                    <div className="flex flex-row gap-2 justify-center px-8 mt-8">
                                        {stages.map((stage, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center justify-center rounded-pl bg-navygreen-100 h-12 transition-all duration-300 ${activeStage === index ? 'flex-grow p-4' : 'w-40'}`}
                                                onClick={() => setActiveStage(index)}
                                            >
                                                <p className={`text-center ${activeStage === index ? 'text-white' : 'text-gray-500'}`}>{stage.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-center text-justify mt-4">
                                        {stages[activeStage].description}
                                    </p>
                                </div>
                            )}
                            {activeTab === 'trees' && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-4">Trees to be Planted</h2>
                                    <p>Details about trees to be planted...</p>
                                    <div className="flex flex-row justify-center">
                                        <div className="mt-10 p-8 rounded-pl bg-navygreen-100 w-1/2">
                                            <CarouselDefault />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
        
                {/* Narrower Div */}
                <div className="w-full md:w-[40%] lg:w-[35%] bg-white p-4 rounded-[20px] shadow-md">
                    {/* Donation Bar Div */}
                    <div className="bg-inherit w-full h-auto rounded-[20px] p-4 border-neutral border-2">
                        <h1 className="font-bold text-lg text-center">{campaign.collected_donation} PKR raised off {campaign.target_donation} PKR</h1>
                        <ProgressBar width={80} className="mt-4 mx-10"/>
                        <div className="flex items-center justify-center mt-8">
                            <Button text="Donate" onClick={handleOpenModal} className="bg-gray-100 text-white py-2 shadow-md"/>
                        </div>
                    </div>
                    {/* About Div */}
                    <div className="bg-inherit w-full h-auto rounded-[20px] p-4 mt-4 border-neutral border-2">
                        <h1 className="font-bold text-xl text-center mt-6">About the Campaign</h1>
                        <p className="mx-10 text-center mt-4 text-sm">
                            {campaign.description}
                        </p>
                        <div className="flex gap-4 items-center justify-center mt-4">
                            <Button text="Follow Campaign" />
                            <Button text="Volunteer in Campaign" onClick={handleOpenModal}/>
                        </div>
                    </div>
                    {/* Comments Div */}
                    <div className="bg-inherit w-full p-2 border-neutral border-2 rounded-[20px] mt-4">
                        <h2 className="font-semibold text-md text-center py-2">Comments</h2>
                        <ul className="flex flex-col items-start overflow-y-auto max-h-96">
                            {comments.map((comment) => (
                                <li className="relative w-full p-4 border-b-2 border-neutral">
                                    <div className="w-full flex flex-row items-center">
                                        <img src="/assets/testimonial-2.jpeg" className="w-14 h-14 object-cover rounded-full" alt="user avatar"/>
                                        <div className="ml-2 w-full flow-root">
                                            <p className="float-left font-semibold ml-2">{comment.user.username}</p>
                                            <p className="float-right text-gray-500 text-sm">{new Date(comment.date).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <p className="mt-2 mr-4 text-justify text-sm">{comment.comment}</p>
                                    <p className="text-right">Reply</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex items-center bg-neutral py-2 px-3 rounded-2xl">
                            <textarea 
                                id="comment" 
                                className="bg-inherit pl-2 w-full outline-none border-none"
                                style={{ resize: "none" }}
                                name="comment" 
                                placeholder="Add a comment..." 
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                required
                            />
                            <button 
                                className="p-2 rounded-2xl ml-2 hover:bg-navygreen-200"
                                onClick={handleAddComment}
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke="currentColor" 
                                    className="size-6"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" 
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* donors div */}
                    {/* <div className="bg-inherit w-full p-2 border-neutral border-2 rounded-[20px] mt-4">
                        <h2 className="font-semibold text-md text-center py-2">Donors</h2>
                        <div className="flex justify-between items-center my-4 mx-2 border-2 p-2 border-neutral rounded-pl bg-navygreen-100 bg-opacity-40">
                            <div className="flex items-center justify-start bg-navygreen-100 p-2 rounded-pl">
                                <img src="/assets/testimonial-1.jpeg" className="w-8 rounded-full" alt="user avatar"/>
                                <p className="mx-2 ">Alia donated</p>
                            </div>
                            <img className="mr-2" src="/assets/leaves.png" />
                        </div>
                        <div className="flex justify-between items-center my-4 mx-2 border-2 p-2 border-neutral rounded-pl bg-navygreen-100 bg-opacity-40">
                            <div className="flex items-center justify-start bg-navygreen-100 p-2 rounded-pl">
                                <img src="/assets/testimonial-1.jpeg" className="w-8 rounded-full" alt="user avatar"/>
                                <p className="mx-2 ">Alia donated</p>
                            </div>
                            <img className="mr-2" src="/assets/leaves.png" />
                        </div>
                        <div className="flex justify-between items-center my-4 mx-2 border-2 p-2 border-neutral rounded-pl bg-navygreen-100 bg-opacity-40">
                            <div className="flex items-center justify-start bg-navygreen-100 p-2 rounded-pl">
                                <img src="/assets/testimonial-1.jpeg" className="w-8 rounded-full" alt="user avatar"/>
                                <p className="mx-2 ">Alia donated</p>
                            </div>
                            <img className="mr-2" src="/assets/leaves.png" alt="leaves"/>
                        </div>
                    </div> */}
                    <div className="bg-inherit w-full p-2 border-neutral border-2 rounded-[20px] mt-4">
                        <h2 className="font-semibold text-md text-center py-2">Donors</h2>

                        {/* Display the donations */}
                        {donations.length > 0 ? (
                            donations.map((donation, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center my-4 mx-2 border-2 p-2 border-neutral rounded-pl bg-navygreen-100 bg-opacity-40"
                            >
                                <div className="flex items-center justify-start bg-navygreen-100 p-2 rounded-pl">
                                {/* Donor's avatar and name */}
                                <img
                                    src={`/assets/avatars/${donation.user.avatar}`} // Use a default image if donor doesn't have an avatar
                                    className="w-8 rounded-full"
                                    alt="user avatar"
                                />
                                <p className="mx-2">{donation.user.username} donated</p>
                                </div>
                                <img className="mr-2" src="/assets/leaves.png" alt="leaves" />
                            </div>
                            ))
                        ) : (
                            <p className="text-center">No donations yet.</p>
                        )}
                    </div>
                </div>
            </div>
            <VolunteeringModal showModal={isModalOpen} closeModal={handleCloseModal} campaign={campaign} />
            <ReportModal showModal={isModalOpen} closeModal={handleCloseModal} campaign={campaign}/>
            <DonationModal showModal={isModalOpen} closeModal={handleCloseModal} campaignId={campaign._id} userId={user._id}/>
        </div>
    );        
}
