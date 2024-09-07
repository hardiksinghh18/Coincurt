import React from 'react'
import CardSection from '../components/CardSection'

const LaunchPad = ({ launchpads }) => {
    // console.log(launchpads])
    return (
        <div className='px-2'>
            <h2 className='text-3xl font-bold px-8 mt-8'>Launchpad</h2>
            <CardSection data={launchpads} type={'launchpad'} />
        </div>
    )
}

export default LaunchPad
