import React from 'react'
import CardSection from '../components/CardSection'

const LaunchPad = ({ launchpads }) => {
    // console.log(launchpads])
    return (
        <div className='px-12'>
            <h2 className='text-3xl font-bold mx-10 mt-6'>Launch Pads</h2>
            <CardSection data={launchpads} type={'launchpad'} />
        </div>
    )
}

export default LaunchPad
