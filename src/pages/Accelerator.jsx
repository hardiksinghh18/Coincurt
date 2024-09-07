import React from 'react'
import GrantCard from '../components/GrantCard';

const Accelerator = () => {

  const acceleratorData = [
    { "id": 1, "logo": "", "name": "Aleph Zero Ecosystem Accelerator" },
    { "id": 2, "logo": "", "name": "CMC Labs Web3 Startup Accelerator" },
    { "id": 3, "logo": "", "name": "Consensys Fellowship Program" },
    { "id": 4, "logo": "", "name": "Cointelegraph Accelerator Program" },
    { "id": 5, "logo": "", "name": "MoonRealm Express Accelerator" },
    { "id": 6, "logo": "", "name": "Sandbox x Brinc Metaverse Accelerator" },
    { "id": 7, "logo": "", "name": "Cronos Labs third accelerator program" },
    { "id": 8, "logo": "", "name": "Tachyon Accelerator" },
    { "id": 9, "logo": "", "name": "Algorand​ Accelerate 2023" },
    { "id": 10, "logo": "", "name": "Beacon Accelerator" }
  ]



  return (
    <div className='px-8'>
      <h2 className='text-3xl font-bold px-8 mt-8 mb-6'>Accelerator</h2>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {acceleratorData.map((ele) => (
          <GrantCard key={ele.id} logo={ele.logo} name={ele.name} />
        ))}
      </div>
    </div>
  )
}

export default Accelerator










