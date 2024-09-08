import React from 'react';
import logo from '../images/coincurtLogo.png'
// import { FaApple } from "react-icons/fa";
// import { IoLogoAndroid } from "react-icons/io";
// import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#161a21] p-8 md:p-16 mt-16">
      <div className="container mx-auto flex flex-row flex-wrap justify-between items-start space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className=' md:w-[35%] flex justify-center  items-center '>
         <img className='h24 w-24' src={logo} alt="" />
          <p className="text-white text-xs font-semibold mt-2 ml-8">
            A Reliable Crypto Asset Data Platform, Committed to Making Crypto Investing Easier.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons */}
            <a href="/" className="text-white hover:text-gray-300">
              <i className="fab fa-x-twitter text-2xl"></i> {/* Replace with appropriate icon */}
            </a>
            <a href="/" className="text-white hover:text-gray-300">
              <i className="fab fa-discord text-2xl"></i>
            </a>
            <a href="/" className="text-white hover:text-gray-300">
              <i className="fab fa-medium text-2xl"></i>
            </a>
            <a href="/" className="text-white hover:text-gray-300">
              <i className="fab fa-telegram text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Middle Section - Products */}
        <div>
          <h3 className="text-lg font-semibold text-white">Products</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="/" className="text-white hover:text-gray-300">Research</a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">Submit Project</a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300 flex items-center">
                Coincurt API <span className="ml-2">🚀</span>
              </a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">Point Rules</a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">FAQs</a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">Coincurt App</a>
            </li>
          </ul>
        </div>

        {/* Middle Section - Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="/" className="text-white hover:text-gray-300">Contact Support</a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">Business Cooperation</a>
            </li>
          </ul>
        </div>

        {/* Middle Section - About */}
        <div>
          <h3 className="text-lg font-semibold text-white">About</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="/" className="text-white hover:text-gray-300">About Us</a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">Disclaimer</a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">Terms & Conditions</a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">Privacy Policy</a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">Coincurt LIST</a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">We're hiring!</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Partner */}
        <div>
          <h3 className="text-lg font-semibold text-white">Partner</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="/" className="text-white hover:text-gray-300">ChainCatcher <i className="fas fa-external-link-alt"></i></a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">BitouchNews <i className="fas fa-external-link-alt"></i></a>
            </li>
          </ul>
        </div>
      </div>

      {/* App Store & Play Store Links */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center mt-8">
        <p className="text-white text-sm">© 2024 Coincurt, all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
