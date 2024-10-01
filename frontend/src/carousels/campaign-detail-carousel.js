import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../components/button";
import DonationModal from "../popups/donation-modal";
import axios from 'axios';

// Custom arrow components
function SampleNextArrow(props) {
  
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#8E9688", borderRadius: "25px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#8E9688", borderRadius: "25px" }}
      onClick={onClick}
    />
  );
}

export default function CampaignDetailsCarousel({ campaign }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  //Donation 

  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user._id) {
        setUserId(user._id);
        console.log("Fetched userId from localStorage:", user._id);

    }
  }, [1]);
  //leaderboard
const [donors, setDonors] = useState([null]);

useEffect(() => {
    const fetchLeaderboard = async () => {
        try {
          const apiUrl = process.env.REACT_APP_API_BASE_URL;
          const response = await axios.get(`${apiUrl}/api/donations/leaderboard?campaignId=${campaign._id}`);
        console.log(campaign._id)
            setDonors(response.data);
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        }
    };
    fetchLeaderboard();
}, []);

 
  // State for popup
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState({
            user: '',
            campaign: campaign._id,
            comment: '',
    })
    useEffect(() => {
        // Retrieve user information from local storage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        }
    }, []);

    useEffect(() => {
        if (user) {
            // Update comment with user._id when user state is set
            setComment(prevState => ({
                ...prevState,
                user: user._id
            }));
        }
    }, [user]); 

    const handleInputChange = (e, setFormData) => {
        const { name, value } = e.target;
        setComment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("comment: " + comment.campaign);
            console.log("comment: " + comment.comment);
            console.log("comment: " + comment.user);
            const apiUrl = process.env.REACT_APP_API_BASE_URL;
            const response = await axios.post(`${apiUrl}/api/campaign-comment`, comment);
            console.log("Data submitted:", response.data);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
              const apiUrl = process.env.REACT_APP_API_BASE_URL;
                const response = await axios.get(`${apiUrl}/api/campaign-comment/campaign/${campaign._id}`);
                setComments(response.data || []); // Ensure comments is always an array
            } catch (error) {
                console.error("Error fetching comments:", error);
                setComments([]); // Set comments to an empty array if there's an error
            }
        };

        fetchComments();
    }, [campaign._id]);

    if (comments === null) {
        return <div>No comments</div>; // or display an error message
    }
  return (
    <>
      <Slider {...settings}>
        {/* Slide 1: About */}
        <div className="h-auto w-80 p-6 bg-neutral max-h-lg">
          <h1 className="mt-4 font-semibold text-lg font-josefin-sans text-center mx-8">{campaign.collected_donation}PKR raised of {campaign.target_donation}PKR</h1>
          <div className="flex items-center justify-center">
            <div className="bg-sage-100 w-80 h-4 rounded-full overflow-hidden border-2 border-sage-200">
              <div className="bg-navygreen-100 h-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="mt-8 flex flex-row gap-2 items-center justify-center">
            <Button onClick={openModal} text="Donate" color="fill" />
          </div>
          <h1 className="mt-4 font-semibold text-lg font-josefin-sans text-center mx-8">About the Campaign</h1>
          <p className="mt-2 text-sm font-josefin-sans text-center mx-10">{campaign.description}</p>
        </div>
        {/* Slide 2: Volunteering */}
        <div className="h-auto w-80 p-6 bg-neutral">
          <h1 className="mt-4 font-semibold text-lg font-josefin-sans text-center mx-8">Volunteer in the Campaign</h1>
          <p className="mt-2 text-sm font-josefin-sans text-center mx-10">Become an integral part of the campaign by volunteering your time and efforts. When you volunteer, you'll be actively contributing to the campaign's success and helping to make a positive impact. Your willingness to volunteer demonstrates your commitment to the cause and your desire to effect change. Keep in mind that social groups associated with the campaign will review and consider your volunteer requests, ensuring that your contributions align with their goals and objectives. Together, we can make a difference!</p>
          <div className="mt-8 flex flex-row gap-2 items-center justify-center">
            <Button text="I want to volunteer!" />
          </div>
        </div>
        {/* Slide 3: Leaderboard */}
        <div className="h-auto w-80 p-6 bg-neutral">
        <h1 className="mt-4 font-semibold text-lg font-josefin-sans text-center mx-8">Leaderboard</h1>
        <div className="flex flex-row gap-2 items-center justify-center">
       <div className="grow font-josefin-sans p-6 mx-10 rounded-md bg-navygreen-50 drop-shadow-md">
        <p className="text-md font-semibold">Donations</p>
        {donors && donors.map((donor, index) => ( donor && (
        <div key={index} className="text-sm flow-root mt-2 rounded-lg bg-navygreen-100 p-2 drop-shadow-sm hover:drop-shadow-md">
            <p className="float-left">{index + 1}. {donor.username}</p>
        </div> )
      ))}

                </div>
            </div>
        </div>
        {/* Slide 4: Comments */}
        <div className="gap-y-4 max-h-96 h-auto w-80 p-6 bg-neutral">
          <h1 className="mt-4 font-semibold text-lg font-josefin-sans text-center mx-8">Comments</h1>
          <div className="flex flex-row gap-2 items-center justify-center">
            <div className="overflow-y-auto max-h-60 font-josefin-sans p-6 mx-10">
              {comments.map((comment) => (
                <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 bg-navygreen-100 shadow-lg">
                  <div className="relative flex gap-4">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/testimonial-2.jpeg`} className="relative rounded-lg -top-[25px] -mb-4 bg-navygreen-100 h-16 w-16" alt="" loading="lazy" />
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row justify-between">
                        <p className="relative text-mini whitespace-nowrap truncate overflow-hidden">{comment.user && comment.user.username ? comment.user.username : 'Anonymous'}</p>
                        <a className="text-gray-500 text-sm" href="#"><i className="fa-solid fa-trash"></i></a>
                      </div>
                      <p className="text-gray-400 text-sm">{new Date(comment.date).toLocaleDateString('en-GB')}</p>
                    </div>
                  </div>
                  <p className="-mt-4 text-gray-500">{comment.comment}</p>
                </div>
              ))}
            </div>
          </div>
          <form className="self-center" onSubmit={handleCommentSubmit}>
            <div className="self-center flex items-center bg-navygreen-100 mb-4 py-2 px-3 rounded-2xl">
              <input
                id="comment"
                className="self-center bg-inherit pl-2 w-full outline-none border-none"
                type="text"
                name="comment"
                placeholder="Enter your comment"
                required
                value={comment.comment}
                onChange={(e) => handleInputChange(e, setComment)}
                />
              <button type="submit" onClick={handleCommentSubmit} className="text-gray-500 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </Slider>
      <DonationModal showModal={showModal} closeModal={closeModal} campaignId={campaign._id} userId={userId}/>
    </>
  );
}