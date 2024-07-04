import React, { useState, useEffect } from 'react';
import { assets } from './assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import useWindowSize from '../useWindowSize';
import { MdMenu, MdClose } from 'react-icons/md'; // Import MdMenu and MdClose icons
import { GrReturn } from 'react-icons/gr';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // State to control animation

  // Function to toggle menu state and animate
  const toggleMenu = () => {
    setOpen(!open);
    setIsAnimating(true); // Start animation
  };

  // Function to close menu state and animate
  const closeMenu = () => {
    setOpen(false);
    setIsAnimating(true); // Start animation
  };

  // Effect to reset animation flag after animation completes
  useEffect(() => {
    let timeout;
    if (isAnimating) {
      timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Adjust duration as needed to match CSS transition duration
    }
    return () => clearTimeout(timeout);
  }, [isAnimating]);

  return (
    <div className="p-1.5 flex justify-between items-center relative">
      {/* Logo */}
    <Link to='/'>  <img src={assets.logo} alt="Logo" className="custom-width cursor-pointer" /></Link>

      {/* Menu Icons (MdMenu for mobile, MdClose for mobile menu open) */}
      {width < 786 ? (
        open ? (
          <MdClose
            className={`text-4xl cursor-pointer absolute top-4 right-4 ${isAnimating ? 'animate-close' : ''}`}
            onClick={closeMenu}
          />
        ) : (
          <MdMenu className="text-4xl cursor-pointer" onClick={toggleMenu} />
        )
      ) : (
        // Desktop Menu
        <>
          <ul className="flex list-none gap-5 text-black text-sm font-semibold">
            <li
              onClick={() => setMenu('home')}
              className={`cursor-pointer ${menu === 'home' && 'text-blue-500'}`}
            >
              Home
            </li>
            <li
              onClick={() => setMenu('menu')}
              className={`cursor-pointer ${menu === 'menu' && 'text-blue-500'}`}
            >
              Menu
            </li>
            <li
              onClick={() => setMenu('mobile-app')}
              className={`cursor-pointer ${menu === 'mobile-app' && 'text-blue-500'}`}
            >
              Mobile App
            </li>
            <Link to={'/contactus'}
              onClick={() => setMenu('contact-us')}
              className={`cursor-pointer ${menu === 'contact-us' && 'text-blue-500'}`}
            >
              Contact Us
            </Link>
          </ul>

          {/* Icons and Sign In Button */}
          <div className="flex items-center gap-5">
            <img src={assets.search_icon} alt="Search" />
            <div className="relative flex-wrap">
              <img src={assets.basket_icon} alt="Basket" />
              <div className="absolute w-2 h-2 bg-red-500 rounded-full top-0 right-0"></div>
            </div>
            <button
              className="text-sm font-bold text-gray-700 border border-orange-400 px-4  py-2 rounded-xl hover:text-blue-500 hover:bg-gray-400 hover:opacity-1 hover:duration-200 hover:transition-shadow"
              onClick={() => navigate('/login')}
            >
              Sign In
            </button>
          </div>
        </>
      )}

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ">
          <div className={`fixed left-0 top-0 w-full bg-white shadow-lg h-full transform transition-transform ease-in-out duration-300 ${isAnimating ? 'animate-menu' : ''}`}>
            <div className="p-4 relative">
              <GrReturn className="absolute right-0 mx-5 text-3xl cursor-pointer" onClick={closeMenu} />
              <ul className="py-8 flex flex-col gap-5 mt-20 keyframe">
                <li className="text-2xl hover:bg-gray-300 hover:rounded hover:text-white hover:w-full">
                  <a
                    href="/"
                    className={`block px-4 py-2 text-gray-800 hover:text-blue-500 ${
                      menu === 'home' && 'font-semibold'
                    }`}
                    onClick={() => {
                      setMenu('home');
                      closeMenu(); // Close menu on item click
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className="text-2xl hover:bg-gray-300 hover:rounded hover:text-white hover:w-full">
                  <a
                    href="/menu"
                    className={`block px-4 py-2 text-gray-800 hover:text-blue-500 ${
                      menu === 'menu' && 'font-semibold'
                    }`}
                    onClick={() => {
                      setMenu('menu');
                      closeMenu(); // Close menu on item click
                    }}
                  >
                    Menu
                  </a>
                </li>
                <li className="text-2xl hover:bg-gray-300 hover:rounded hover:text-white hover:w-full">
                  <a
                    href="mobile-app"
                    className={`block px-4 py-2 text-gray-800 hover:text-blue-500 ${
                      menu === 'mobile-app' && 'font-semibold'
                    }`}
                    onClick={() => {
                      setMenu('mobile-app');
                      closeMenu(); // Close menu on item click
                    }}
                  >
                    Mobile App
                  </a>
                </li>
                <li className="text-2xl hover:bg-gray-300 hover:rounded hover:text-white hover:w-full">
                  <Link
                    to="/contactus"
                    className={`block px-4 py-2 text-gray-800 hover:text-blue-500 ${
                      menu === 'contact-us' && 'font-semibold'
                    }`}
                    onClick={() => {
                      setMenu('contact-us');
                      closeMenu(); // Close menu on item click
                    }}
                  >
                    Contact Us
                  </Link>
              
                 
                </li>
                <li className="text-2xl hover:bg-gray-300 hover:rounded hover:text-white hover:w-full">
                  <Link
                    to="/signup"
                    className={`block px-4 py-2 text-gray-800 hover:text-blue-500 ${
                      menu === 'contact-us' && 'font-semibold'
                    }`}
                    onClick={() => {
                      setMenu('contact-us');
                      closeMenu(); // Close menu on item click
                    }}
                  >
                    Login
                  </Link>
              
                 
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
