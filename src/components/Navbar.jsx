import React, { useState } from 'react';
import logo from '../images/coincurtLogo.png';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For toggling the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeClassName = 'text-blue-500 md:max-w-16 font-semibold'; // Customize this class as needed

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-6 ">
          <NavLink to={'/'}>
            <img src={logo} alt="Logo" className="w-14 h-12 bg-cover inline-block mr-2" />
          </NavLink>
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold ">
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
              className={({ isActive }) => (isActive ? activeClassName : 'text-black md:max-w-16 hover:text-gray-600')}
            >
              Security Audit
            </NavLink>
            <NavLink
              to={'/marketmaker'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black md:max-w-16 hover:text-gray-600')}
            >
              Market Makers
            </NavLink>
            <NavLink
              to={'/aggregatorplatform'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black md:max-w-16 hover:text-gray-600')}
            >
              Aggregator Platforms
            </NavLink>
            <NavLink
              to={'/kols'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black hover:text-gray-600')}
            >
              KOLs
            </NavLink>
            <NavLink
              to={'/pressrelease'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black md:max-w-16 hover:text-gray-600')}
            >
              Press Release
            </NavLink>
            <NavLink
              to={'/accelerator'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black md:max-w-16 hover:text-gray-600')}
            >
              Accelerator & Grants
            </NavLink>
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
          <a href="/" className="hidden md:inline-block bg-blue-500 text-white font-semibold py-2 px-4 text-sm rounded-lg hover:bg-blue-700 transition">
            Sign in
          </a>
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
        <div className="md:hidden bg-white shadow-md mt-4 pb-8">
          <div className="flex flex-col items-center space-y-4 text-xs font-semibold">
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
              Aggregator Platform
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
            <NavLink
              to={'/accelerator'}
              className={({ isActive }) => (isActive ? activeClassName : 'text-black  hover:text-gray-600')}
              onClick={toggleMenu}
            >
              Accelerator & Grants
            </NavLink>
            <input
              type="text"
              className="rounded-full pl-3 pr-10 py-1 bg-gray-100 text-black focus:outline-none mt-2"
              placeholder="Search"
            />
            <a href="/" className="bg-blue-500 text-white font-semibold py-2 px-4 text-sm rounded-lg hover:bg-blue-700 transition">
              Sign in
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
