import React,{useState}  from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, ShareIcon, ExclamationCircleIcon, HeartIcon} from '@heroicons/react/24/solid';
import CampaignDetailsCarousel from '../carousels/campaign-detail-carousel';
import ReportModal from './report-modal';

const CampaignDetailsPopup = ({ campaign, closePopup }) => {
  //for the popup
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
      setShowModal(true);
  }

  const closeModal = () => {
      setShowModal(false);
  }

  if (!campaign) return null;  

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="absolute backdrop-blur-sm backdrop-filter relative bg-no-repeat bg-cover p-8 max-w-4xl z-10 bg-opacity-60 flex flex-col items-center" style={{ backgroundImage: `url(/assets/${campaign.image})` }}>
        <div className="absolute inset-0 backdrop-blur-sm backdrop-filter bg-navygreen-100 bg-opacity-40 "></div>
        <button 
          className="absolute top-2 right-2 text-gray-100 hover:text-gray-800 focus:outline-none" 
          onClick={closePopup}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className='absolute flex flex-row gap-2 top-2 left-2'>
          {/* <button 
            className="text-gray-100 hover:text-gray-800 focus:outline-none" 
          >
            <ShareIcon className="h-6 w-6" />
          </button> */}
          {/* Like Icon */}
          {/* <button 
            className="text-gray-100 hover:text-gray-800 focus:outline-none" 
          >
            <HeartIcon className="h-6 w-6" />
          </button> */}
          {/* Report Icon */}
          <button 
            onClick={openModal}
            className="text-gray-100 hover:text-gray-800 focus:outline-none" 
          >
            <ExclamationCircleIcon className="h-6 w-6" />
          </button>
        </div>
        {/* Share Icon */}
        <div className='text-center font-josefin-sans'>
          <h1 className='relative text-xl font-bold'>{campaign.name}</h1>
          <p className='relative font-light'>A campaign by <Link to={`/campaign/social-group/${campaign.socialGroup._id}`} className="text-gray-100 hover:text-pinky"><span className='font-semibold'>{campaign.socialGroup.name}</span></Link></p>
        </div>
        <div className='mx-20 mt-10 max-w-3xl'>
          <CampaignDetailsCarousel campaign={campaign}/>
        </div>
      </div>
      <ReportModal campaign={campaign} showModal={showModal} closeModal={closeModal} />
    </div>

  );
}
export default CampaignDetailsPopup;