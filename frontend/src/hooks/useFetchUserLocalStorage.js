import { useState, useEffect } from 'react';

const useFetchUserLocalStorage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  return user;
};

export default useFetchUserLocalStorage;
