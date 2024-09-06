import React from 'react'
import CardSection from '../components/CardSection'

const Aggregator = ({aggregator}) => {
  return (
    <div className='px-12'>
           <h2 className='text-3xl font-bold mx-10 mt-6'>Aggregator Platforms</h2>
           <CardSection data={aggregator} type={'aggregator'} />
    </div>
  )
}

export default Aggregator
