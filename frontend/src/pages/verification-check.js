import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../components/button';

export default function VerificationCheck() {
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSocialGroupStatus = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    const response = await axios.get(`https://plantify-backend.vercel.app/api/socialgroup/user/${user._id}`);
                    const socialGroup = response.data;
                    
                    if (socialGroup) {
                        setStatus(socialGroup.status);
                        if (socialGroup.status === 'accepted') {
                            navigate(`/social-dashboard/${socialGroup._id}`);
                        }
                    } else {
                        setStatus('No social group found for this user.');
                    }
                }
            } catch (error) {
                console.error('Error fetching social group status:', error);
                setStatus('Unable to determine the status of your social group.');
            }
        };

        fetchSocialGroupStatus();
    }, [navigate]);

    const getVerificationMessage = () => {
        switch (status) {
            case 'on wait':
                return 'Your request is still under checking.';
            case 'rejected':
                return 'Your request for the social group has been rejected. Try again with authentic information.';
            case 'accepted':
                return ''; // Already handled in useEffect for navigation
            default:
                return status || 'Unable to determine the status of your social group.';
        }
    };

    return (
        <div className='flex flex-col gap-y-4 min-h-screen items-center justify-center'>
            <p className='text-lg'>{getVerificationMessage()}</p>
            <img src='/assets/clockwise.png' className='w-20 mb-4'/>
            <Link to="/"><Button text="Go to Homepage" className="py-2 bg-gray-100 text-white"/></Link>
        </div>
    );
}