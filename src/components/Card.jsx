import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Card = ({ name, introduction, exchangeType, category, trustRating, listingFee, serviceFee, auditFee, fee,type }) => {

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-gray-300 border-[1px] min-w-64 h-[25rem] flex flex-col justify-between">
      <div className="flex items-center mb-4">
        {/* <img src={logo} alt={`${title} logo`} className="w-10 h-10 rounded-full" /> */}
        <h2 className=" text-lg font-bold text-gray-800">{name}</h2>
        {/* <span className="ml-2 text-orange-400 font-bold">NEW</span> */}
      </div>
      <p className="text-gray-500 mb-4 text-sm">{introduction.substring(0, 110)}<NavLink to={`/${type}/${name}`} className='text-sm font-semibold text-orange-600'>... Read more</NavLink></p>
      <div className="text-sm  mb-4 flex w-full justify-between ">
        {exchangeType ? (<div className=' w-[50%] space-y-1' ><p className='text-gray-400'>Exchange Type</p> <p className='font-semibold'>{exchangeType ? exchangeType : '--'}</p></div>) : ''}
        <div className=' w-[50%] space-y-1'><p className='text-gray-400 '>Category</p><p className='font-semibold'> {category ? category : '--'}</p></div>
      </div>
      <div className="text-sm  mb-4 flex w-full ">
        <div className=' w-[50%] space-y-1'><p className='text-gray-400'>Trust Rating</p> <p className='font-semibold'>{trustRating ? trustRating : '--'}</p></div>
        {listingFee ? (<div className=' w-[50%] space-y-1'><p className='text-gray-400'>Listing Fee</p> <p className='font-semibold'>{listingFee ? listingFee : '--'}</p></div>) : ''}
        {serviceFee ? (<div className=' w-[50%] space-y-1'><p className='text-gray-400'>Service Fee</p> <p className='font-semibold'>{serviceFee ? serviceFee : '--'}</p></div>) : ''}
        {auditFee ? (<div className=' w-[50%] space-y-1'><p className='text-gray-400'>Audit Fee</p> <p className='font-semibold'>{auditFee ? auditFee : '--'}</p></div>) : ''}
        {fee ? (<div className=' w-[50%] space-y-1'><p className='text-gray-400'> Fee</p> <p className='font-semibold'>{fee ? fee : '--'}</p></div>) : ''}
      </div>
   
      <div className='w-full flex justify-center'>
        <button className="w-fit px-4 py-2 items-center text-sm font-semibold text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition">
        Consulting
      </button>
      </div>
    </div>
  )
}

export default Card
