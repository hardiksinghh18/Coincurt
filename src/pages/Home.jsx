import React from 'react'
import HeroSection from '../components/HeroSection'
import CardSection from '../components/CardSection'
import DetailsPage from './DetailsPage'
import FilterComponent from '../components/FilterComponent'

const Home = ({ exchangeData }) => {
  return (
    < >
      <HeroSection />
      <div  className='px-2'>
        <h2 className='ml-8 text-3xl font-bold'>Exchanges</h2>
        <CardSection data={exchangeData.slice(0, 4)} type={'exchange'} />
      </div>

      
    </>
  )
}

export default Home
