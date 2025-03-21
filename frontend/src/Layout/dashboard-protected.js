import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import useFetchUserLocalStorage from '../hooks/useFetchUserLocalStorage';
const DashboardProtected = ({ children }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams(); // Get group ID from the URL
    const userData = useFetchUserLocalStorage();
    const userId = userData?._id; // Get userId from localStorage
  
    useEffect(() => {
      if (!userId) {
        // Delay execution until userId is fetched
        console.log('Waiting for userId to load...');
        return;
      }
  
      console.log('Fetched User ID:', userId);
      console.log('Group ID from URL:', id);
  
      // Send request to check if the user is authorized
      axios
        .get(`BACKEND_URL/api/socialgroup/authorize/${id}`, {
          headers: { 'x-user-id': userId }, // Pass userId as a header
        })
        .then(() => {
          console.log('Authorization successful');
          setIsAuthorized(true);
        })
        .catch((err) => {
          console.error('Authorization error:', err.response || err);
          const msg =
            err.response?.data?.message ||
            'You are not authorized to access this page. If you are not the owner, kindly back away.';
          setErrorMessage(msg);
        });
    }, [userId, id]); // Only run when userId or id changes
  
    if (!isAuthorized && errorMessage) {
      return (
        <div>
          <h3>{errorMessage}</h3>
          <button onClick={() => navigate('/')}>Go Back</button>
        </div>
      );
    }
  
    return isAuthorized ? children : null;
  };
  
  export default DashboardProtected;
  
