import React from 'react'
import CardSection from '../components/CardSection'
import FilterComponent from '../components/FilterComponent'

const Exchange = ({ exchangeData, dexData }) => {
  return (
    <div className='px-2'>
      <div>
        <div className='flex flex-col  md:flex-row w-full justify-between items-center md:px-8 mt-8'>
          <h2 className='text-3xl font-bold my-2  '>Centralised Exchange</h2>
          <FilterComponent />
        </div>
        <CardSection data={exchangeData.slice(0, 8)} type={'exchange'} />
      </div>

      <div>
        <h2 className='text-3xl font-bold md:px-8 mt-8'>Decentralised Exchange</h2>
        <CardSection data={dexData.slice(0, 8)} type={'dex'} />
      </div>
    </div>
  )
}

export default Exchange
