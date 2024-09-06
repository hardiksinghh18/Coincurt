import React from 'react'
import CardSection from '../components/CardSection'

const SecurityAudit = ({ securityFirms }) => {
    return (
        <div className='px-2'>
            <h2 className='text-3xl font-bold mx-10 mt-6'>Security Audit</h2>
            <CardSection data={securityFirms} type={'securityFirm'}/>

        </div>
    )
}

export default SecurityAudit
