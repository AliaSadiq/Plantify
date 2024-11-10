import React,  {useState, useEffect} from 'react';
import VerificationTable from '../components/tables/verification-table';
import axios from 'axios';

export default function SocialGroupverificationPage () {
    const [socialGroups, setSocialGroups] = useState([]);

    useEffect(() => {
        const fetchSocialGroups = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/socialgroup/onWait'); // Assuming you set up this route in your backend
            setSocialGroups(response.data);
            console.log("social group: " + socialGroups);
        } catch (error) {
            console.error('Error fetching social groups:', error);
        }
        };

        fetchSocialGroups();
    }, []);

    return(
        <div className='min-h-screen lg:ml-[245px] p-4'> 
            <div className='min-h-screen p-8 rounded-pl bg-neutral'>
                <h1 className='mb-6 text-lg font-semibold'>Social Groups to be Verified</h1>
                <VerificationTable socialGroups={socialGroups}/>
            </div>
        </div>
    );
}