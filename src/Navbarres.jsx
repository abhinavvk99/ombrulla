import React, { useState } from "react";
import logo from './img/logo.svg';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsProductsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <div className="app">
      <nav className="bg-blue-100">
        <div className="max-w-7xl mx-auto flex justify-between w-5/6">
          <div className="flex items-center gap-16 my-12">
            <div>
              <a href="/" className="flex gap-1 font-bold text-gray-700 items-center">
                <img src={logo} alt="Logo" className="w-36" />
              </a>
            </div>
            <div className="hidden lg:flex gap-8"> 
              <a href="#" className="font-sans font-bold text-black hover:text-blue-600 md:ml-80">
                Home
              </a>
              <div className="relative" onMouseEnter={toggleServicesDropdown} onClick={toggleServicesDropdown}>
                <a href="#" className="text-black font-bold hover:text-blue-600 px-4">Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 14.95a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.087l3.293-3.55a1 1 0 111.414 1.414l-4 4z" clipRule="evenodd" />
                  </svg>
                </a>
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-md py-3 w-72 mt-2" onMouseLeave={closeDropdowns}>
                    <a href="#" className="block text-black hover:text-blue-600 font-semibold py-5 px-4">AI Visual Inspection</a>
                    <hr />
                    <a href="#" className="block text-black hover:text-blue-600 font-semibold  py-5 px-4">AI Infrastructre Inspection</a>
                    <hr />
                    <a href="#" className="block text-black hover:text-blue-600 font-semibold  py-5 px-4">AI People Tracking</a>
                    <hr />
                    <a href="#" className="block text-black hover:text-blue-600 font-semibold py-5 px-4">AI Data Analytics</a>
                  </div>
                )}
              </div>
              <div className="relative" onMouseEnter={toggleProductsDropdown} onClick={toggleProductsDropdown}>
                <a href="#" className="text-black font-bold hover:text-blue-600 px-4">Products
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 14.95a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.087l3.293-3.55a1 1 0 111.414 1.414l-4 4z" clipRule="evenodd" />
                  </svg>
                </a>
                {isProductsDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-md py-2 px-4 w-72 mt-2" onMouseLeave={closeDropdowns}>
                    <a href="#" className="block text-black hover:text-blue-600 font-semibold py-5">Asset Performance Management</a>
                  </div>
                )}
              </div>
              <a href="#" className="font-sans font-bold text-black hover:text-blue-600">About</a>
              <a href="#" className="font-sans font-bold text-black hover:text-blue-600">Blog</a>
              <a href="#" className="font-sans font-bold text-black hover:text-blue-600">Contact</a>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="hidden xs:flex items-center gap-10">
              <div className="hidden lg:flex items-center gap-2">
                <img src="moon_icon_url_here" alt="Moon Icon" className="h-6 w-6" />
                <img src="sun_icon_url_here" alt="Sun Icon" className="h-6 w-6" />
              </div>
            </div>
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`fixed z-40 w-full bg-blue-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"}`}>
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="font-sans font-bold text-black hover:text-blue-600">Home</a>
              <div className="relative" onMouseEnter={toggleServicesDropdown} onClick={toggleServicesDropdown}>
                <a href="#" className="text-black font-bold hover:text-blue-600 px-4">Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 14.95a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.087l3.293-3.55a1 1 0 111.414 1.414l-4 4z" clipRule="evenodd" />
                  </svg>
                </a>
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-md py-3 w-72 mt-2" onMouseLeave={closeDropdowns}>
                    <a href="#" className="block text-black hover:text-blue-600 font-semibold py-5 px-4">AI Visual Inspection</a>
                    <hr />
                    <a href="#" className="block text-black hover:text-blue-600 font-semibold  py-5 px-4">AI Infrastructre Inspection</a>
                    <hr />
                    <a href="#" className="block text-black hover:text-blue-600 font-semibold  py-5 px-4">AI People Tracking</a>
                    <hr />
                    <a href="#" className="block text-black hover:text-blue-600 font-semibold py-5 px-4">AI Data Analytics</a>
                  </div>
                )}
              </div>
              <div className="relative" onMouseEnter={toggleProductsDropdown} onClick={toggleProductsDropdown}>
                <a href="#" className="text-black font-bold hover:text-blue-600 px-4">Products
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 14.95a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.087l3.293-3.55a1 1 0 111.414 1.414l-4 4z" clipRule="evenodd" />
                  </svg>
                </a>
                {isProductsDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-md py-2 px-4 w-72 mt-2" onMouseLeave={closeDropdowns}>
                    <a href="#" className="block text-black hover:text-blue-600 font-semibold py-5">Asset Performance Management</a>
                  </div>
                )}
              </div>
              <a href="#" className="font-sans font-bold text-black hover:text-blue-600">About</a>
              <a href="#" className="font-sans font-bold text-black hover:text-blue-600">Blog</a>
              <a href="#" className="font-sans font-bold text-black hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
