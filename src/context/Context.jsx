import React, { createContext, useState, useContext, useEffect } from "react";

const FintechContext = createContext();

export const FinTechProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <FintechContext.Provider value={{ user, login, logout }}>
      {children}
    </FintechContext.Provider>
  );
};

export const useFinTechContext = () => {
  return useContext(FintechContext);
};
