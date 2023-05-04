import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <img src="https://st.depositphotos.com/1006899/4990/i/950/depositphotos_49900661-stock-photo-404-error-page-not-found.jpg" alt="404 not found" className="w-72" />
      <h1 className="text-3xl font-bold mb-2">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-4">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
