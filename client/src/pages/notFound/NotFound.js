import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl font-medium text-gray-600 mb-8">Page not found</p>
      {/* <button
        className="mt-4 px-6 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
        onClick={() => window.location.href = '/'}
      > */}
        {/* Go to home
      </button> */}
    </div>
  );
}

export default NotFound;
