import React from 'react'
import GrantCard from '../components/GrantCard';

const Accelerator = () => {

  const grantsData = [
    {
      id: 1,
      logo: "https://example.com/ethereum-logo.png", // replace with actual image URLs
      name: "Ethereum Foundation Ecosystem Support Program",
    },
    {
      id: 2,
      logo: "https://example.com/uniswap-logo.png",
      name: "Uniswap Foundation Grants Program",
    },
    {
      id: 3,
      logo: "https://example.com/bnb-logo.png",
      name: "BNB Chain Builder Grants",
    },
    {
      id: 4,
      logo: "https://example.com/avalanche-logo.png",
      name: "Avalanche Multiverse Incentive Program",
    },
    {
      id: 5,
      logo: "https://example.com/aave-logo.png",
      name: "Aave Grants",
    },
    {
      id: 6,
      logo: "https://example.com/tron-logo.png",
      name: "The TRON DAO Grant Program",
    },
    {
      id: 7,
      logo: "https://example.com/metis-logo.png",
      name: "Metis Grants",
    },
    {
      id: 8,
      logo: "https://example.com/klaytn-logo.png",
      name: "Klaytn's Grant Programs",
    },
  ];

  
  return (
 <div className='px-12'>
 <h2 className='text-3xl font-bold mx-8 mt-8 mb-6'>Access & Grants</h2>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    {grantsData.map((grant) => (
      <GrantCard key={grant.id} logo={grant.logo} name={grant.name} />
    ))}
  </div>
 </div>
  )
}

export default Accelerator










