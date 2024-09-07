import React from 'react'
import CardSection from '../components/CardSection'

const Kols = ({kols}) => {
  return (
    <div className='px-2'>
      <h2 className='text-3xl font-bold px-10 mt-6'>KOLs (Key Opinion Leaders)
      </h2>
      <CardSection data={kols} type={'kol'}/>
    </div>
  )
}

export default Kols
