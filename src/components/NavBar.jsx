import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import '../css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-navbar">
      <div className="nav-bar relative z-1000 flex items-center justify-between p-4">
        <img src="http://mun.iiti.ac.in/assets/img/logowhite.png" alt="Logo" className="h-12 md:h-14" />
        
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        <nav className="hidden md:flex md:flex-wrap md:items-center">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Apply', path: '/apply' },
            { name: 'Secretariat', path: '/team' },
            { name: 'Sponsors', path: '/sponsors' },
            { name: 'Committee', path: '/committees' },
            { name: 'Past Editions', path: '/past-editions' }
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`element text-white text-lg py-2 px-4 border-b-2 ${
                location.pathname === item.path ? 'border-red-600' : 'border-transparent'
              } hover:border-red-600 transition-colors duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className={`md:hidden transition-all duration-3000 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <nav className="flex flex-col items-center p-0">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Apply', path: '/apply' },
            { name: 'Secretariat', path: '/team' },
            { name: 'Sponsors', path: '/sponsors' },
            { name: 'Committee', path: '/committees' },
            { name: 'Past Editions', path: '/past-editions' }
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`element text-white text-lg py-2 px-4 border-b-2 ${
                location.pathname === item.path ? 'border-red-600' : 'border-transparent'
              } hover:border-red-600 transition-colors duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
