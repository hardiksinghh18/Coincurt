import React from 'react'
import GrantCard from '../components/GrantCard';

const Grant = () => {

  const grantsData = [
    { "id": 1,  "logo": "https://example.com/klaytn-logo.png", "name": "Ethereum Foundation Ecosystem Support Program" },
    { "id": 2,  "logo": "https://example.com/klaytn-logo.png", "name": "Uniswap Foundation Grants Program" },
    { "id": 3,  "logo": "https://example.com/klaytn-logo.png", "name": "BNB Chain Builder Grants" },
    { "id": 4,  "logo": "https://example.com/klaytn-logo.png", "name": "Avalanche Multiverse Incentive Program" },
    { "id": 5,  "logo": "https://example.com/klaytn-logo.png", "name": "Aave Grants" },
    { "id": 6,  "logo": "https://example.com/klaytn-logo.png", "name": "Metis Grants" },
    { "id": 7,  "logo": "https://example.com/klaytn-logo.png", "name": "The TRON DAO Grant Program" },
    { "id": 8,  "logo": "https://example.com/klaytn-logo.png", "name": "Klaytn's Grant Programs" },
    { "id": 9,  "logo": "https://example.com/klaytn-logo.png", "name": "Arweave Investments & Grants" },
    { "id": 10, "logo": "https://example.com/klaytn-logo.png", "name": "Immutable Grants" },
    { "id": 11, "logo": "https://example.com/klaytn-logo.png", "name": "Lido Ecosystem Grants" },
    { "id": 12, "logo": "https://example.com/klaytn-logo.png", "name": "Kraken Grants" },
    { "id": 13, "logo": "https://example.com/klaytn-logo.png", "name": "dYdX grants" },
    { "id": 14, "logo": "https://example.com/klaytn-logo.png", "name": "FTM Incentive Program" },
    { "id": 15, "logo": "https://example.com/klaytn-logo.png", "name": "Aptos Foundation Grant program" },
    { "id": 16, "logo": "https://example.com/klaytn-logo.png", "name": "Optimism Grants" },
    { "id": 17, "logo": "https://example.com/klaytn-logo.png", "name": "Celo Community Fund" },
    { "id": 18, "logo": "https://example.com/klaytn-logo.png", "name": "Axelar Ecosystem Funding Program" }
  ]
  

  
  return (
 <div className='px-8'>
 <h2 className='text-3xl font-bold px-8 mt-8 mb-6'>Grant</h2>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    {grantsData.map((grant) => (
      <GrantCard key={grant.id} logo={grant.logo} name={grant.name} />
    ))}
  </div>
 </div>
  )
}

export default Grant

