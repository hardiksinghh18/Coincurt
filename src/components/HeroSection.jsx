import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-white via-orange-50 to-white min-h-[30vh] flex flex-col items-center justify-center text-center">
      {/* Header Text */}
      <h1 className="text-4xl font-bold text-black mb-4 px-4">A Web3.0 Consulting & Resource Platform</h1>
      {/* <h2 className="text-5xl font-bold text-orange-500 mb-6">Coincurt</h2> */}

      {/* Line below heading */}
      <div className="border-t-4 border-orange-400 w-24 mb-6"></div>

      {/* Description */}
     

      {/* Buttons */}
      {/* <div className="flex space-x-4">
        <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-700 transition">
          Bidding
        </button>
        <button className="bg-white text-orange-500 border border-orange-500 font-semibold py-2 px-6 rounded-lg hover:bg-orange-100 transition">
          Asking
        </button>
      </div> */}
    </div>
  );
};

export default HeroSection;
