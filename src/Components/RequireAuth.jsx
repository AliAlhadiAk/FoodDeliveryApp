import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const isLoggedIn = true; // Adjust this based on your Redux state structure
  const location = useLocation();

  return isLoggedIn ? (
    // Render the protected component if user is authenticated
    <>{children}</>
  ) : (
    // Redirect to signup page with the current location state
    <Navigate to="/signup" state={{ from: location }} replace />
  );
};

export default RequireAuth;
