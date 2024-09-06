import React from 'react'
import Card from './Card';


const CardSection = ({data,type}) => {


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
    {data.map((card, index) => (
      <Card key={index} {...card} type={type} />
    ))}
  </div>
  )
}

export default CardSection
