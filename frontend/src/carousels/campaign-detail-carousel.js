import React, {useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from '../images/testimonial-2.jpeg';
import Button from "../components/button";
import DonationModal from "../popups/donation-modal";

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

export default function CampaignDetailsCarousel({campaign}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const doners = [
    {
        name: "Shabeeh",
        amount: 100,
        comment: "Baun naice campaign"
    },
    {
        name: "Farwa",
        amount: 330,
        comment: "It was a great campaign had fun planting. Great experience"
    },
    {
        name: "Alia",
        amount: 460,
        comment: "Volunteer kr k acha laga, next time mass murder-"
    },
    {
        name: "Amna",
        amount: 900,
        comment: "Baun naice campaign"
    },
  ];
//for donation modal
  //for the popup
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user._id) {
        setUserId(user._id);
    }
}, []);

  const openModal = () => {
      setShowModal(true);
  }

  const closeModal = () => {
      setShowModal(false);
  }

  return (
    <>
    <Slider {...settings}>
        {/* Slide 1: About */}
        <div className="h-auto w-80 p-6 bg-neutral max-h-lg">
            <h1 className="mt-4 font-semibold text-lg font-josefin-sans text-center mx-8">{campaign.collected_donation} PKR raised of {campaign.target_donation} PKR</h1>
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
            <DonationModal showModal={showModal} closeModal={closeModal} campaignId={campaign._id} userId={userId} />
        </div>
        {/* Slide 2: Volunteering */}
        <div className="h-auto w-80 p-6 bg-neutral">
            <h1 className="mt-4 font-semibold text-lg font-josefin-sans text-center mx-8">Volunteer in the Campaign</h1>
            <p className="mt-2 text-sm font-josefin-sans text-center mx-10">Become an integral part of the campaign by volunteering your time and efforts. When you volunteer, you'll be actively contributing to the campaign's success and helping to make a positive impact. Your willingness to volunteer demonstrates your commitment to the cause and your desire to effect change. Keep in mind that social groups associated with the campaign will review and consider your volunteer requests, ensuring that your contributions align with their goals and objectives. Together, we can make a difference!</p>
            <div className="mt-8 flex flex-row gap-2 items-center justify-center">
                <Button text="I want to volunteer!"/>
            </div>
        </div>
        {/* Slide 3: Leaderboard */}
        <div className="h-auto w-80 p-6 bg-neutral">
            <h1 className="mt-4 font-semibold text-lg font-josefin-sans text-center mx-8">Leaderboard</h1>
            <div className="flex flex-row gap-2 items-center justify-center">
                <div className="grow font-josefin-sans p-6 mx-10 rounded-md bg-navygreen-50 drop-shadow-md">
                    <p className="text-md font-semibold">Donations</p>
                    {doners.map((doner) => (
                        <div className="text-sm flow-root mt-2 rounded-lg bg-navygreen-100 p-2 drop-shadow-sm hover:drop-shadow-md">
                            <p className="float-left">{doner.name}</p>
                            <p className="float-right">{doner.amount}PKR</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="overflow-y-auto max-h-96 h-auto w-80 p-6 bg-neutral">
            <h1 className="mt-4 font-semibold text-lg font-josefin-sans text-center mx-8">Comments</h1>
            <div className="flex flex-row gap-2 items-center justify-center">
                <div className="font-josefin-sans p-6 mx-10">
                    {doners.map((doner) => (
                        <div class="relative grid grid-cols-1 gap-4 p-4 mb-8 bg-navygreen-100 shadow-lg">
                            <div class="relative flex gap-4">
                                <img src={avatar} class="relative rounded-lg -top-[25px] -mb-4 bg-navygreen-100 h-16 w-16" alt="" loading="lazy"/>
                                <div class="flex flex-col w-full">
                                    <div class="flex flex-row justify-between">
                                        <p class="relative text-mini whitespace-nowrap truncate overflow-hidden">{doner.name}</p>
                                        <a class="text-gray-500 text-sm" href="#"><i class="fa-solid fa-trash"></i></a>
                                    </div>
                                    <p class="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
                                </div>
                            </div>
                            <p class="-mt-4 text-gray-500">{doner.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Slider>
    <DonationModal showModal={showModal} closeModal={closeModal} />
    </>
  );
}
