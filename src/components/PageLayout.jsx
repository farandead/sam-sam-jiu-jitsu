import React from 'react';

const PageLayout = ({ children, className }) => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${className}`}>

      <div className="w-full max-w-7xl p-4"> {/* Responsive content container with padding */}
        {children}
      </div>
    </div>
  );
};

export default PageLayout;