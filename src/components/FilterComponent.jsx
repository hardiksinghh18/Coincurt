import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'; // Icon for dropdown

const Dropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label); // default label

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selecting an option
  };

  return (
    <div className="relative inline-block text-left ">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-40 px-4 my-2 py-2 border border-gray-300 shadow-sm text-xs font-medium text-white bg-[#161a21] focus:outline-none    rounded-md"
      >
        {selectedOption}
        <FiChevronDown className="ml-2 h-5 w-5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="origin-top-left absolute mt-2 w-40 rounded-md shadow-lg bg-[#161a21] text-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-0">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionClick(option)}
                className=" block px-4 py-2 text-xs cursor-pointer text-white hover:bg-black"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const FilterComponent = () => {
  return (
<div className="flex flex-wrap justify-center my-2 text-center md:my-0 space-x-2  md:space-x-4">
  {/* Token Issuance Dropdown */}
  <Dropdown
    label="Exchange_Type"
    options={['All','CEX', 'DEX']}
  />
  {/* Deal Type Dropdown */}
  <Dropdown
    label="Category"
    options={['All','Tier 1', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5']}
  />
  {/* Amount Range Dropdown */}
  <Dropdown
    label="Fee Range"
    options={['All','$0-$50k', '$50k - $100k', '$100k - $500k']}
  />
</div>

  );
};

export default FilterComponent;
