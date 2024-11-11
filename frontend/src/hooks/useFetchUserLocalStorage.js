// import { useState, useEffect } from 'react';

// const useFetchUserLocalStorage = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUser(parsedUser);
//     }
//   }, []);

//   return user;
// };

// export default useFetchUserLocalStorage;

import { useState, useEffect } from 'react';

const useFetchUserLocalStorage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser._id) { // Check if parsedUser and _id exist
          setUser(parsedUser);
        } else {
          setUser(null); // Set user to null if _id is missing
        }
      } else {
        setUser(null); // Set user to null if there's no stored user
      }
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      setUser(null); // Set user to null if parsing fails
    }
  }, []);

  return user;
};

export default useFetchUserLocalStorage;
