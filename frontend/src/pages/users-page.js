import React,  {useState, useEffect} from 'react';
import UserTable from '../tables/user-table';
import axios from 'axios';

export default function UsersPage () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchSocialGroups = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/user'); // Assuming you set up this route in your backend
            setUsers(response.data);
            console.log("users: " + users);
        } catch (error) {
            console.error('Error fetching social groups:', error);
        }
        };

        fetchSocialGroups();
    }, []);

    return(
        <div className='mt-40 ml-80 mr-20'> 
            <UserTable users={users}/>
        </div>
    );
}