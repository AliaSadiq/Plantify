import React,  {useState, useEffect} from 'react';
import axios from 'axios';
import SocialGroupTable from '../components/tables/social-groups-table';
export default function SocialGroupPage () {
    const [socialGroups, setSocialGroups] = useState([]);

    useEffect(() => {
        const fetchSocialGroups = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/socialgroup/accepted'); // Assuming you set up this route in your backend
            setSocialGroups(response.data);
            console.log("social group: " + socialGroups);
        } catch (error) {
            console.error('Error fetching social groups:', error);
        }
        };

        fetchSocialGroups();
    }, []);

    return(
        <div className='min-h-screen ml-[245px] p-4'> 
            <div className='min-h-screen p-8 rounded-pl bg-neutral'>
                <h1 className='mb-6 text-lg font-semibold'>Verified Social Groups on Plantify</h1>
                <SocialGroupTable socialGroups={socialGroups} setSocialGroups={setSocialGroups}/>
            </div>
        </div>
    );
}