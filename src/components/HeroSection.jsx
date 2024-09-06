import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white min-h-[70vh] flex flex-col items-center justify-center text-center">
      {/* Header Text */}
      <h1 className="text-4xl font-bold text-black mb-4">Making Crypto Investing Easier</h1>
      <h2 className="text-5xl font-bold text-blue-800 mb-6">Coincurt</h2>

      {/* Line below heading */}
      <div className="border-t-4 border-blue-400 w-24 mb-6"></div>

      {/* Description */}
      <p className="text-gray-600 text-lg max-w-2xl mb-10">
      A Web3.0 Consulting & Resources Platform.
      {/* A More Structured and Trustworthy Crypto Data Layer */}
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition">
          Bidding
        </button>
        <button className="bg-white text-blue-500 border border-blue-500 font-semibold py-2 px-6 rounded-lg hover:bg-blue-100 transition">
          Asking
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
