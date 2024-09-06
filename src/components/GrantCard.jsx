import React from 'react'

const GrantCard = ({logo,name}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center space-x-4">
    <div className="flex items-center space-x-4">
      <img src={logo} alt={`${name} Logo`} className="w-12 h-12 rounded-full" />
      <span className="text-md font-medium text-gray-900">{name}</span>
    </div>
    <button className="bg-orange-500 hover:bg-orange-600 text-xs text-white font-bold py-2 px-4 rounded-full">
      Apply
    </button>
  </div>
  )
}

export default GrantCard
