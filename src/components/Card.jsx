import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Card = ({ name, introduction, exchangeType, category, trustRating, listingFee, serviceFee, auditFee, fee,type }) => {

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs flex flex-col justify-between">
      <div className="flex items-center mb-4">
        {/* <img src={logo} alt={`${title} logo`} className="w-10 h-10 rounded-full" /> */}
        <h2 className=" text-lg font-bold text-gray-800">{name}</h2>
        {/* <span className="ml-2 text-blue-400 font-bold">NEW</span> */}
      </div>
      <p className="text-gray-500 mb-4 text-sm">{introduction.substring(0, 110)}<NavLink to={`/${type}/${name}`} className='text-sm font-semibold text-blue-600'>... Read more</NavLink></p>
      <div className="text-sm  mb-4 flex w-full justify-between ">
        {exchangeType ? (<div className=' w-[50%] space-y-1' ><p className='text-gray-500'>Exchange Type:</p> <p>{exchangeType ? exchangeType : '--'}</p></div>) : ''}
        <div className=' w-[50%] space-y-1'><p className='text-gray-500'>Category:</p><p> {category ? category : '--'}</p></div>
      </div>
      <div className="text-sm text-gray-600 mb-4 flex w-full ">
        <div className=' w-[50%] space-y-1'><p className='text-gray-500'>Trust Rating:</p> <p>{trustRating ? trustRating : '--'}</p></div>
        {listingFee ? (<div className=' w-[50%] space-y-1'><p className='text-gray-500'>Listing Fee:</p> <p>{listingFee ? listingFee : '--'}</p></div>) : ''}
        {serviceFee ? (<div className=' w-[50%] space-y-1'><p className='text-gray-500'>Service Fee:</p> <p>{serviceFee ? serviceFee : '--'}</p></div>) : ''}
        {auditFee ? (<div className=' w-[50%] space-y-1'><p className='text-gray-500'>Audit Fee:</p> <p>{auditFee ? auditFee : '--'}</p></div>) : ''}
        {fee ? (<div className=' w-[50%] space-y-1'><p className='text-gray-500'> Fee:</p> <p>{fee ? fee : '--'}</p></div>) : ''}
      </div>
  
      <button className="w-full py-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
        Consulting
      </button>
    </div>
  )
}

export default Card
