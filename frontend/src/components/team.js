import React, { useState, useEffect } from 'react';

const Team = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        // Fetch data from API
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/Team');
                const data = await response.json();
                setTeamData(data);
            } catch (error) {
                console.error('Error fetching team data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="absolute right-2 top-72 p-1 bg-white rounded-md h-auto w-72 shadow-md">
            <h2 className="text-xs font-bold text-black mb-4">Team</h2>
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
                {teamData.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {member.profilePic.length > 0 && (
                            <img className="w-12 h-12 rounded-full object-cover" src={`http://localhost:5000/assest/${member.profilePic[0]}`} alt="Profile Picture" />
                        )}
                        <span className="text-sm font-medium mt-2">{member.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
