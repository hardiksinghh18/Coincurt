import React from 'react';

const HeroSection = () => {
  return (
    <div className="text-white  flex flex-col items-center justify-center text-center">
      {/* Header Text */}
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 px-4">A Web3.0 Consulting & Resource Platform</h1>
      {/* <h2 className="text-5xl font-bold text-blue-500 mb-6">Coincurt</h2> */}

      {/* Line below heading */}
      {/* <div className="w-24 mb-6 border-t-4 border-transparent bg-gradient-to-r from-blue-400 via-yellow-400 to-green-400">
</div> */}

  <div className="w-96 h-1 rounded-full bg-gradient-to-r from-blue-700 via-yellow-400 to-green-400"></div>
      {/* Description */}
     

      {/* Buttons */}
      {/* <div className="flex space-x-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition">
          Bidding
        </button>
        <button className="bg-white text-blue-500 border border-blue-500 font-semibold py-2 px-6 rounded-lg hover:bg-blue-100 transition">
          Asking
        </button>
      </div> */}
    </div>
  );
};

export default HeroSection;
