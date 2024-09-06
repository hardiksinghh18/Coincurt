import React from 'react';
import { useParams } from 'react-router-dom';
import {exchangeData,dexData,launchpads,securityFirms,marketMakingFirms,kols,pressRelease,aggregator} from '../store'
import { FaTwitter } from 'react-icons/fa';

const DetailsPage = () => {
  const {type,name}=useParams();
  console.log(type,name)
  

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
    return <div>Details not found for {name}</div>;
  }

  return (
    <div className="bg-white px-16 pb-8 rounded-lg shadow-md">
    {/* Header Section */}
    <div className="flex items-start space-x-4">
      {/* Logo Placeholder */}
      <img
        src="https://via.placeholder.com/64"
        alt={`${details.name} Logo`}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h1 className="text-3xl font-bold text-gray-900 my-8">{details.name}</h1>
        <p className="text-gray-600 mt-2">{details.introduction}</p>
      </div>
    </div>

    {/* Links Section */}
    <div className="flex space-x-2 mt-4">
      <a
        href={details.website}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
      >
        {details.website ? "Visit Website" : "Website"}
      </a>
      <a
        href="/"
        className="px-3 py-1 flex items-center bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
      >
        <FaTwitter/>
      </a>
    </div>

    {/* Details Section */}
    <div className="mt-6  flex gap-4 text-sm">
      <div className="bg-gray-100 px-4 py-2 items-center w-fit rounded-lg flex gap-2">
        <h2 className="text-gray-900  font-medium">Category :</h2>
        <p className="text-gray-600">{details.category}</p>
      </div>
      <div className="bg-gray-100 px-4 py-2 w-fit rounded-lg flex gap-2">
        <h2 className="text-gray-900 font-medium">Trust Rating</h2>
        <p className="text-gray-600">{details.trustRating}</p>
      </div>
      <div className="bg-gray-100 px-4 py-2 w-fit rounded-lg col-span-2 flex gap-2">
        <h2 className="text-gray-900 font-medium">Service Fee</h2>
        <p className="text-gray-600">{details.serviceFee}</p>
      </div>
    </div>
  </div>
  );
};

export default DetailsPage;
