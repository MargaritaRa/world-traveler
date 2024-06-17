import React, { createContext, useState, useEffect } from 'react';

const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    fetch('/api/check-session')
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Failed to fetch session');
        }
      })
      .then(sessionData => {
        const loggedInUser = sessionData.user || sessionData;
        setCurrentUser(loggedInUser);
      })
      .catch(error => {
        console.error('Error fetching session:', error);
        setCurrentUser(null);
      });
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    fetch('/api/logout', { method: 'DELETE' })
      .then(response => {
        if (response.status === 200) {
        } else {
          console.error('Error logging out');
        }
      });
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, logout }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;

