import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ name, introduction, exchangeType, category, trustRating, listingFee, serviceFee, auditFee, fee, type }) => {

  return (
    <div className="bg-[#161a21] text-white rounded-lg shadow-lg p-6 border-gray-800 border-[1px] min-w-64 h-[25rem] flex flex-col justify-between">
      <div className="flex justify-between items-center mb-4">
        <div className='flex gap-2 items-center'>
        <img src='' alt={`${name} logo`} className="w-6 h-6 rounded-full overflow-hidden" />
        <h2 className=" text-lg font-bold text-white">{name}</h2>
        </div>
        {/* <span className="ml-2 text-blue-400 font-bold">NEW</span> */}
        <NavLink to={`/${type}/${name}`} className='text-sm font-semibold text-[#27f7ab] hover:text-[#2fb785]'><FaExternalLinkAlt /></NavLink>

      </div>
      <p className="text-white opacity-85 mb-4 text-sm">{introduction.substring(0, 130)}...</p>
      <div className="text-sm mb-4 grid grid-cols-2 gap-x-4 gap-y-6 w-full">
        {exchangeType ? (
          <div className="space-y-1">
            <p className="text-gray-400">Exchange Type</p>
            <p className="font-semibold">{exchangeType ? exchangeType : '--'}</p>
          </div>
        ) : ''}

        <div className="space-y-1">
          <p className="text-gray-400">Category</p>
          <p className="font-semibold">{category ? category : '--'}</p>
        </div>

        <div className="space-y-1">
          <p className="text-gray-400">Trust Rating</p>
          <p className="font-semibold">{trustRating ? trustRating : '--'}</p>
        </div>

        {listingFee ? (
          <div className="space-y-1">
            <p className="text-gray-400">Listing Fee</p>
            <p className="font-semibold">{listingFee ? listingFee : '--'}</p>
          </div>
        ) : ''}

        {serviceFee ? (
          <div className="space-y-1">
            <p className="text-gray-400">Service Fee</p>
            <p className="font-semibold">{serviceFee ? serviceFee : '--'}</p>
          </div>
        ) : ''}

        {auditFee ? (
          <div className="space-y-1">
            <p className="text-gray-400">Audit Fee</p>
            <p className="font-semibold">{auditFee ? auditFee : '--'}</p>
          </div>
        ) : ''}

        {fee ? (
          <div className="space-y-1">
            <p className="text-gray-400">Fee</p>
            <p className="font-semibold">{fee ? fee : '--'}</p>
          </div>
        ) : ''}
      </div>

      <div className="text-sm  mb-4 flex w-full ">
      </div>

      <div className='w-full flex justify-center'>
        <button className="w-fit px-4 py-2 items-center text-sm font-semibold text-[#27f7ab] border border-[#27f7ab] rounded-full hover:bg-[#27f7ab] hover:text-black transition">
          Consulting
        </button>
      </div>
    </div>
  )
}

export default Card
