import React, { useState } from 'react';
import logo from '../images/coincurtLogo.png';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu and close
import { FiChevronDown } from 'react-icons/fi'; // Icon for dropdown


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For toggling the mobile menu
  const [isHovered, setIsHovered] = useState(false); // For hovering on Grant

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const activeClassName = 'text-orange-500  flex font-semibold'; // Customize this class as needed

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-6 ">
          <NavLink to={'/'}>
            <img src={logo} alt="Logo" className="w-14 h-12 bg-cover inline-block mr-2" />
          </NavLink>
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-sm font-semibold ">
            <NavLink
              to={'/exchange'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
            >
              Exchange
            </NavLink>
            <NavLink
              to={'/launchpad'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
            >
              Launchpad
            </NavLink>
            <NavLink
              to={'/securityaudit'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
            >
              Security Audit
            </NavLink>
            <NavLink
              to={'/marketmaker'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
            >
              Market Makers
            </NavLink>
            <NavLink
              to={'/aggregatorplatform'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
            >
              Indexer
            </NavLink>
            <NavLink
              to={'/kols'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
            >
              KOLs
            </NavLink>
            <NavLink
              to={'/pressrelease'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
            >
              Press Release
            </NavLink>

            {/* Grant with Dropdown */}
            <div
              className="relative hover:cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >


              <p

                className="inline-flex justify-between items-center w-30     font-semibold text-gray-700 bg-white hover:bg-gray-50 "
              >
                Fundraising
                <FiChevronDown className="ml-2 h-5 w-5" />
              </p>


              {/* Dropdown Menu */}
              {isHovered && (
                <div className="absolute left-0 mt-0 w-40 bg-white border-gray-50 rounded-md shadow-lg z-10">
                  <ul className="py-1 text-sm text-gray-700">
                    <li>
                      <NavLink
                        to={'/accelerator'}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Accelerator

                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={'/grant'}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Grant
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right side options */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block relative">
            <input
              type="text"
              className="rounded-full pl-3 pr-10 py-1 bg-gray-100 text-black focus:outline-none"
              placeholder="Search"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white mt-4 pb-8">
          <div className="flex flex-col items-center space-y-6 text-sm font-semibold">
            <NavLink
              to={'/exchange'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
              onClick={toggleMenu}
            >
              Exchange
            </NavLink>
            <NavLink
              to={'/launchpad'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
              onClick={toggleMenu}
            >
              Launchpad
            </NavLink>
            <NavLink
              to={'/securityaudit'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
              onClick={toggleMenu}
            >
              Security Audit
            </NavLink>
            <NavLink
              to={'/marketmaker'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
              onClick={toggleMenu}
            >
              Market Maker
            </NavLink>
            <NavLink
              to={'/aggregatorplatform'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
              onClick={toggleMenu}
            >
              Indexer
            </NavLink>
            <NavLink
              to={'/kols'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
              onClick={toggleMenu}
            >
              KOLs
            </NavLink>
            <NavLink
              to={'/pressrelease'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
              onClick={toggleMenu}
            >
              Press Release
            </NavLink>
            <div
              className="relative hover:cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >


              <p

                className="inline-flex justify-between items-center w-30     font-semibold text-gray-700 bg-white hover:bg-gray-50 "
              >
                Fundraising
                <FiChevronDown className="ml-2 h-5 w-5" />
              </p>


              {/* Dropdown Menu */}
              {isHovered && (
                <div className="absolute left-0 mt-0 w-40 bg-white border-gray-50 rounded-md shadow-lg z-10">
                  <ul className="py-1 text-sm text-gray-700">
                    <li>
                      <NavLink
                        to={'/accelerator'}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Accelerator

                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={'/grant'}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Grant
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <input
              type="text"
              className="rounded-full pl-5 pr-10 py-3 bg-gray-100 text-black focus:outline-none mt-2"
              placeholder="Search"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
