import React from 'react'
import CardSection from '../components/CardSection'

const Kols = ({kols}) => {
  return (
    <div className='px-12'>
      <h2 className='text-3xl font-bold mx-10 mt-6'>KOLs (Key Opinion Leaders)
      </h2>
      <CardSection data={kols} type={'kol'}/>
    </div>
  )
}

export default Kols
