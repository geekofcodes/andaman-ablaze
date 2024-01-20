import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const zillaSlabBoldStyle = {
    fontFamily: 'Zilla Slab, serif',
    fontWeight: 700,
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            {/* Replace the logo and website name with your own */}
            <p className="px-1 pt-1 border-b-2 border-transparent  font-medium text-gray-500 hover:text-gray-700 " style={zillaSlabBoldStyle}>
                Andaman Ablaze
            </p>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex space-x-4" style={zillaSlabBoldStyle}>
              {/* Replace the navigation links with your own */}
              <a
                href="/"
                className="text-gray-600 py-2 px-2 hover:text-red-400 transition-colors duration-300 ease-in-out border-red-400 hover:border-b-1"
              >
                Home
              </a>
              <a
                href="#/about-us"
                className="text-gray-600 py-2 px-2 hover:text-red-400 transition-colors duration-300 ease-in-out border-red-400 hover:border-b-1"
              >
                About
              </a>
              <a
                href="#/contact-us"
                className="text-gray-600 py-2 px-2 hover:text-red-400 transition-colors duration-300 ease-in-out border-red-400 hover:border-b-1"
              >
                Contact Us
              </a>
              <a
                href="#/pricing"
                className="text-gray-600 py-2 px-2 hover:text-red-400 transition-colors duration-300 ease-in-out border-red-400 hover:border-b-1"
              >
                Pricing Options
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-600"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-300 ease-in-out transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-300 ease-in-out transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" ref={menuRef}>
          <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3" style={zillaSlabBoldStyle}>
            {/* Replace the navigation links with your own */}
            <a
              href="/"
              className="text-gray-600 hover:text-red-400 transition-colors duration-300 ease-in-out py-2"
            >
              Home
            </a>
            <a
              href="#/about-us"
              className="text-gray-600 hover:text-red-400 transition-colors duration-300 ease-in-out py-2"
            >
              About
            </a>
            <a
              href="#/contact-us"
              className="text-gray-600 hover:text-red-400 transition-colors duration-300 ease-in-out py-2"
            >
              Contact Us
            </a>
            <a
              href="#/pricing"
              className="text-gray-600 hover:text-red-400 transition-colors duration-300 ease-in-out py-2"
            >
              Pricing Options
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
