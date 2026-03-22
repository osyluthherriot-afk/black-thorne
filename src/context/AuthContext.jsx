import React, { createContext, useState, useEffect, useContext } from 'react';
import { VALID_CREDENTIALS } from '../data/credentials';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const OSYLUTH_NAME = 'heriot, osyluth';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOsyluth, setIsOsyluth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorVisible, setErrorVisible] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const storedOsyluth = localStorage.getItem('bt_osyluth_token');
    const storedAuth = localStorage.getItem('bt_auth_token');
    if (storedOsyluth === 'osyluth_omega_clearance') {
      setIsOsyluth(true);
    } else if (storedAuth === 'verified_clearance_t7') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (name, password, locationKey) => {
    const normalizedInputName = name.trim().toLowerCase();

    // Osyluth master override path
    if (
      normalizedInputName === OSYLUTH_NAME &&
      password === VALID_CREDENTIALS.password &&
      locationKey === VALID_CREDENTIALS.locationKey
    ) {
      setIsOsyluth(true);
      setErrorVisible(false);
      setAttempts(0);
      localStorage.setItem('bt_osyluth_token', 'osyluth_omega_clearance');
      return true;
    }

    const isNameValid = VALID_CREDENTIALS.validNames.some(
      n => n.toLowerCase() === normalizedInputName
    );

    if (
      isNameValid &&
      password === VALID_CREDENTIALS.password &&
      locationKey === VALID_CREDENTIALS.locationKey
    ) {
      setIsAuthenticated(true);
      setErrorVisible(false);
      setAttempts(0);
      localStorage.setItem('bt_auth_token', 'verified_clearance_t7');
      return true;
    } else {
      setAttempts((prev) => prev + 1);
      setErrorVisible(true);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsOsyluth(false);
    localStorage.removeItem('bt_auth_token');
    localStorage.removeItem('bt_osyluth_token');
  };

  const clearError = () => {
    setErrorVisible(false);
  };

  const value = {
    isAuthenticated,
    isOsyluth,
    loading,
    errorVisible,
    attempts,
    login,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
