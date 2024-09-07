import React from 'react';
import { useParams } from 'react-router-dom';
import { exchangeData, dexData, launchpads, securityFirms, marketMakingFirms, kols, pressRelease, aggregator } from '../store';
import { FaTwitter } from 'react-icons/fa';

const DetailsPage = () => {
  const { type, name } = useParams();

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
    <div className="bg-[#161a21] text-white px-8 md:px-16 pb-8 rounded-lg shadow-md max-w-4xl mx-auto mt-4 ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start space-y-4 ">

        <div>
          <div className='flex items-center gap-8'>
            <img src={details.name} alt={`${details.name} Logo`} className="w-8 h-8 rounded-full text-xs overflow-hidden" />
            <h1 className="text-2xl md:text-3xl font-bold text-white my-4 md:my-8">{details.name}</h1>

          </div>

          {/* Links Section */}
          <div className="flex space-x-2 mt-2">
            <a
              href={details.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-black text-white rounded-full hover:bg-black text-xs md:text-sm"
            >
              {details.website ? "Visit Website" : "Website"}
            </a>
            <a
              href="/"
              className="px-2 py-1 flex items-center bg-black text-white rounded-full hover:bg-black text-xs md:text-sm"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Details Section */}
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 text-sm">
            <div className="bg-black text-white px-4 py-2 w-fit rounded-lg flex gap-2">
              <h2 className=" font-medium">Category:</h2>
              <p className="">{details.category}</p>
            </div>
            <div className="bg-black text-white  px-4 py-2 w-fit rounded-lg flex gap-2">
              <h2 className=" font-medium">Trust Rating:</h2>
              <p className="">{details.trustRating}</p>
            </div>
            {details.serviceFee ? (<div className="bg-black text-white  px-4 py-2 w-fit rounded-lg flex gap-2 col-span-1">
              <h2 className=" font-medium">Service Fee:</h2>
              <p className="">{details.serviceFee}</p>
            </div>) : ''}

            {details.listingFee ? (<div className="bg-black text-white  px-4 py-2 w-fit rounded-lg flex gap-2 col-span-1">
              <h2 className=" font-medium">Listing Fee:</h2>
              <p className="">{details.listingFee}</p>
            </div>) : ''}
            {details.auditFee ? (<div className="bg-black text-white  px-4 py-2 w-fit rounded-lg flex gap-2 col-span-1">
              <h2 className=" font-medium">Audit Fee:</h2>
              <p className="">{details.auditFee}</p>
            </div>) : ''}
            {details.fee ? (<div className="bg-black text-white  px-4 py-2 w-fit rounded-lg flex gap-2 col-span-1">
              <h2 className=" font-medium">Fee:</h2>
              <p className="">{details.fee}</p>
            </div>) : ''}

          </div>
        </div>
      </div>
      <div className='py-8'>
        <p className="text-white">{details.introduction}</p>
      </div>

      <button className=" text-[#27f7ab] border border-[#27f7ab] font-semibold py-2 px-6 mt-0 rounded-lg hover:bg-[#27f7ab] hover:text-black transition"
      >
        Consulting
      </button>



    </div>
  );
};

export default DetailsPage;
