import React, { useState } from 'react';
import axios from 'axios';

const InviteMemberModal = ({ show, onClose, onInvite }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [picture, setPicture] = useState(null);

    const handleInvite = () => {
        if (name && email) {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            if (picture) {
                formData.append('picture', picture);
            }

            // Call the invite function passed from the parent component
            onInvite(formData);
        }
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Invite Team Member</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="file"
                    onChange={(e) => setPicture(e.target.files[0])}
                />
                <button onClick={handleInvite}>Send Invite</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default InviteMemberModal;
