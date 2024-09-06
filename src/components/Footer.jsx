import React from 'react';
import logo from '../images/coincurtLogo.png'
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 md:p-16 mt-16">
      <div className="container mx-auto flex flex-row flex-wrap justify-between items-start space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className='w-[35%]'>
         <img className='h24 w-24' src={logo} alt="" />
          <p className="text-gray-700 text-xs font-semibold mt-2">
            A Reliable Crypto Asset Data Platform, Committed to Making Crypto Investing Easier.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons */}
            <a href="/" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-x-twitter text-2xl"></i> {/* Replace with appropriate icon */}
            </a>
            <a href="/" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-discord text-2xl"></i>
            </a>
            <a href="/" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-medium text-2xl"></i>
            </a>
            <a href="/" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-telegram text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Middle Section - Products */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Products</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">Research</a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">Submit Project</a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900 flex items-center">
                Coincurt API <span className="ml-2">🚀</span>
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">Point Rules</a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">FAQs</a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">Coincurt App</a>
            </li>
          </ul>
        </div>

        {/* Middle Section - Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">Contact Support</a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">Business Cooperation</a>
            </li>
          </ul>
        </div>

        {/* Middle Section - About */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">About</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">About Us</a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">Disclaimer</a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">Terms & Conditions</a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">Coincurt LIST</a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">We're hiring!</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Partner */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Partner</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">ChainCatcher <i className="fas fa-external-link-alt"></i></a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">BitouchNews <i className="fas fa-external-link-alt"></i></a>
            </li>
          </ul>
        </div>
      </div>

      {/* App Store & Play Store Links */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-8">
        <p className="text-gray-600 text-sm">© 2024 Coincurt, all rights reserved</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/" className="text-gray-600 hover:text-gray-800 flex items-center gap-2 ">
           <FaApple className='text-4xl'/>Download on the App Store
          </a>
          <a href="/" className="text-gray-600 hover:text-gray-800 flex items-center gap-2 ">
           <IoLogoAndroid className='text-4xl'/> Download for Android APK
          </a>
          <a href="/" className="text-gray-600 hover:text-gray-800 flex items-center gap-2 ">
          <FaGooglePlay className='text-4xl'/> Get it on Google Play
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
