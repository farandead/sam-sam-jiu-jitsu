import React from 'react';

const Button = ({ text }) => {
  return (
    <button
      className="px-6 py-3 border-2 border-[#23b6cb] text-white font-semibold rounded-lg hover:bg-[#23b6cb] hover:text-white transition duration-300 ease-in-out"
    >
      {text}
    </button>
  );
};

export default Button;
