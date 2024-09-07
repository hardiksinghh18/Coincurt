import React from 'react'
import HeroSection from '../components/HeroSection'
import CardSection from '../components/CardSection'

import { NavLink } from 'react-router-dom'

const Home = ({ exchangeData }) => {
  return (
    < >
      <HeroSection />
      <h2 className='px-10 mt-8 md:mt-2 text-3xl font-bold'>Exchange</h2>
      <div className='px-2 flex flex-col items-center'>
        <CardSection data={exchangeData.slice(0, 4)} type={'exchange'} />

        <NavLink
          to={'/exchange'}
          className="bg-transparent text-[#27f7ab] border border-[#27f7ab] font-semibold py-2 px-6 mt-4 rounded-lg hover:text-black hover:bg-[#27f7ab] transition"
        >
          Show More
        </NavLink>
      </div>


    </>
  )
}

export default Home
