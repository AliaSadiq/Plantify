import React,  {useState, useEffect} from 'react';
import AdminTable from '../../tables/admin-table';
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
        <div className='mt-40 ml-80 mr-20'> 
            <AdminTable socialGroups={socialGroups}/>
        </div>
    );
}