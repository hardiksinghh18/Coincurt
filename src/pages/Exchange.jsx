import React from 'react'
import CardSection from '../components/CardSection'

const Exchange = ({ exchangeData, dexData }) => {
  return (
    <div className='px-12'>
      <div>
        <h2 className='text-3xl font-bold mx-10 mt-6'>Centralised Exchanges</h2>
        <CardSection data={exchangeData.slice(0, 8)} type={'exchange'} />
      </div>

      <div>
        <h2 className='text-3xl font-bold mx-10 mt-6'>Decentralised Exchanges</h2>
        <CardSection data={dexData.slice(0, 8)} type={'dex'} />
      </div>
    </div>
  )
}

export default Exchange
