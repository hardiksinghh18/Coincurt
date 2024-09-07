import React from 'react'
import CardSection from '../components/CardSection'

const MarketMaker = ({marketMakingFirms}) => {
  return (
    <div className='px-2'>
         <h2 className='text-3xl font-bold px-8 mt-8'>Market Maker</h2>
         <CardSection data={marketMakingFirms} type={'marketMaker'} />
    </div>
  )
}

export default MarketMaker
