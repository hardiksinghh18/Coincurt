import React from 'react'

const GrantCard = ({logo,name}) => {
  return (
    <div className="bg-[#161a21] text-white shadow-md rounded-lg p-4 flex justify-between items-center space-x-4">
    <div className="flex items-center space-x-4">
      <img src={logo} alt={`${name} Logo`} className="w-12 h-12 rounded-full text-xs overflow-hidden" />
      <span className="text-xs md:text-md font-medium">{name}</span>
    </div>
    <button className="bg-[#27f7ab] hover:bg-black text-xs text-black hover:text-[#27f7ab] font-bold py-2 px-4 rounded-full">
      Apply
    </button>
  </div>
  )
}

export default GrantCard
