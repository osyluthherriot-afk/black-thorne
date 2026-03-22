import React, { createContext, useState, useEffect, useContext } from 'react';
import { VALID_CREDENTIALS } from '../data/credentials';
import { sha256 } from '../utils/hash';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// SHA-256("Hummingbird") — Osyluth master override
const OSYLUTH_NAME = 'heriot, osyluth';
const OSYLUTH_PASS_HASH = 'c84c951192c3a51197845ed4661b8907a87e8dbe418fa975e8acd53bbb725733';

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

  const login = async (name, password, locationKey) => {
    const normalizedInputName = name.trim().toLowerCase();
    const [passHash, locHash] = await Promise.all([
      sha256(password),
      sha256(locationKey),
    ]);

    // Osyluth master override path
    if (
      normalizedInputName === OSYLUTH_NAME &&
      passHash === OSYLUTH_PASS_HASH &&
      locHash === VALID_CREDENTIALS.locationKeyHash
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
      passHash === VALID_CREDENTIALS.passwordHash &&
      locHash === VALID_CREDENTIALS.locationKeyHash
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
