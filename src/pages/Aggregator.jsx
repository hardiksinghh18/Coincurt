import React from 'react'
import CardSection from '../components/CardSection'

const Aggregator = ({aggregator}) => {
  return (
    <div className='px-2'>
           <h2 className='text-3xl font-bold mx-10 mt-6'>Indexer</h2>
           <CardSection data={aggregator} type={'aggregator'} />
    </div>
  )
}

export default Aggregator
