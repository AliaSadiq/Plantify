import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InviteMemberModal from '../dashboard-components/InvitePopup';

const Team = () => {
    const [members, setMembers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get('/api/members')
            .then(response => setMembers(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleInvite = (formData) => {
        axios.post('/api/members/invite', formData)
            .then(response => {
                setMembers([...members, response.data]);
                setShowModal(false);
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Group's Team</h1>
            <button onClick={() => setShowModal(true)}>Invite</button>
            <ul>
                {members.map(member => (
                    <li key={member._id}>{member.name} - {member.status}</li>
                ))}
            </ul>
            <InviteMemberModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onInvite={handleInvite}
            />
        </div>
    );
};

export default Team;
