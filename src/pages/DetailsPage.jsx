import React from 'react';
import { useParams } from 'react-router-dom';
import {exchangeData,dexData,launchpads,securityFirms,marketMakingFirms,kols,pressRelease,aggregator} from '../store';
import { FaTwitter } from 'react-icons/fa';

const DetailsPage = () => {
  const {type,name} = useParams();

  // Function to match category based on the type parameter
  const getCategoryData = (type) => {
    switch (type) {
      case 'exchange':
        return exchangeData;
      case 'dex':
        return dexData;
      case 'launchpad':
        return launchpads;
      case 'securityFirm':
        return securityFirms;
      case 'marketMaker':
        return marketMakingFirms;
      case 'kol':
        return kols;
      case 'pressRelease':
        return pressRelease;
      case 'aggregator':
        return aggregator;
      default:
        return [];
    }
  };

  // Get the data from the matched category
  const categoryData = getCategoryData(type);

  // Find the specific entry by name
  const details = categoryData.find((item) => item.name === name);

  if (!details) {
    return <div className="text-center text-red-600">Details not found for {name}</div>;
  }

  return (
    <div className="bg-white px-8 md:px-16 pb-8 rounded-lg shadow-md max-w-4xl mx-auto mt-8 md:mt-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-4">
        {/* Logo Placeholder */}
        {/* <img
          src="https://via.placeholder.com/64"
          alt={`${details.name} Logo`}
          className="w-16 h-16 rounded-full"
        /> */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 my-4 md:my-8">{details.name}</h1>
          <p className="text-gray-600">{details.introduction}</p>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex space-x-2 mt-4">
        <a
          href={details.website}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 text-xs md:text-sm"
        >
          {details.website ? "Visit Website" : "Website"}
        </a>
        <a
          href="/"
          className="px-3 py-1 flex items-center bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 text-xs md:text-sm"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Details Section */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 text-sm">
        <div className="bg-gray-100 px-4 py-2 w-fit rounded-lg flex gap-2">
          <h2 className="text-gray-900 font-medium">Category:</h2>
          <p className="text-gray-600">{details.category}</p>
        </div>
        <div className="bg-gray-100 px-4 py-2 w-fit rounded-lg flex gap-2">
          <h2 className="text-gray-900 font-medium">Trust Rating:</h2>
          <p className="text-gray-600">{details.trustRating}</p>
        </div>
       {details.serviceFee?( <div className="bg-gray-100 px-4 py-2 w-fit rounded-lg flex gap-2 col-span-1">
          <h2 className="text-gray-900 font-medium">Service Fee:</h2>
          <p className="text-gray-600">{details.serviceFee}</p>
        </div>):''}

        {details.listingFee ? ( <div className="bg-gray-100 px-4 py-2 w-fit rounded-lg flex gap-2 col-span-1">
          <h2 className="text-gray-900 font-medium">Listing Fee:</h2>
          <p className="text-gray-600">{details.listingFee}</p>
        </div>) : ''}
        {details.auditFee ? ( <div className="bg-gray-100 px-4 py-2 w-fit rounded-lg flex gap-2 col-span-1">
          <h2 className="text-gray-900 font-medium">Audit Fee:</h2>
          <p className="text-gray-600">{details.auditFee}</p>
        </div>) : ''}
        {details.fee ? ( <div className="bg-gray-100 px-4 py-2 w-fit rounded-lg flex gap-2 col-span-1">
          <h2 className="text-gray-900 font-medium">Fee:</h2>
          <p className="text-gray-600">{details.fee}</p>
        </div>) : ''}
    
      </div>
    </div>
  );
};

export default DetailsPage;
