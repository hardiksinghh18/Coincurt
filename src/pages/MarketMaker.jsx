import React from 'react'
import CardSection from '../components/CardSection'

const MarketMaker = ({marketMakingFirms}) => {
  return (
    <div className='px-12'>
         <h2 className='text-3xl font-bold mx-10 mt-6'>Market Makers</h2>
         <CardSection data={marketMakingFirms} type={'marketMaker'} />
    </div>
  )
}

export default MarketMaker
