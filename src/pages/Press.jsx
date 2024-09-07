import React from 'react'
import CardSection from '../components/CardSection'

const Press = ({pressRelease}) => {
  return (
    <div className='px-2'>
      
      <h2 className='text-3xl font-bold px-10 mt-8'>Press Releases</h2>
      <CardSection data={pressRelease} type={'pressRelease'}/>
    </div>
  )
}

export default Press
