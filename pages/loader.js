// components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-50 bg-white">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-blue-500 h-12 w-12"></div>
    </div>
  );
};

export default Loader;
