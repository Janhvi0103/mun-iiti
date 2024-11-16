import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import '../css/Navbar.css'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
=======
import "../css/Navbar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
>>>>>>> 73d8f2e ( merged Past Edition Page)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-black">
      <div className="nav-bar relative z-1000 flex items-center justify-between p-4">
<<<<<<< HEAD
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
=======
        <img
          src="http://mun.iiti.ac.in/assets/img/logowhite.png"
          alt="Logo"
          className="h-12 md:h-14"
        />

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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
>>>>>>> 73d8f2e ( merged Past Edition Page)
            </svg>
          )}
        </button>

        <nav className="hidden md:flex md:flex-row md:items-center">
<<<<<<< HEAD
          <Link to='/' className={`element text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>Home</Link>
          <Link to='/about' className={`element text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/about' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>About Us</Link>
          <Link to='/apply' className={`element text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/apply' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>Apply</Link>
          <Link to='/team' className={`element text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/team' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>Secretariat</Link>
          <Link to='/sponsors' className={`element text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/sponsors' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>Sponsors</Link>
          <Link to='/committees' className={`element text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/committees' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>Committee</Link>
          <Link to='/past-editions' className={`element  text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/past-editions' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>Past Editions</Link>
        </nav>
      </div>

      <div className={`md:hidden transition-all duration-3000 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <nav className="flex flex-col items-center p-0">
          <Link to='/' className={`element text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>Home</Link>
          <Link to='/about' className={`element text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/about' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>About Us</Link>
          <Link to='/apply' className={`element text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/apply' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>Apply</Link>
          <Link to='/team' className={`element text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/team' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>Secretariat</Link>
          <Link to='/sponsors' className={`element text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/sponsors' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>Sponsors</Link>
          <Link to='/committees' className={`element text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/committees' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>Committee</Link>
          <Link to='/past-editions' className={`element mb-3 text-white text-lg py-2 px-4 border-b-2 ${location.pathname === '/past-editions' ? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition-colors duration-3000`}>Past Editions</Link>
=======
          <Link
            to="/"
            className={`element text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`element text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/about"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            About Us
          </Link>
          <Link
            to="/apply"
            className={`element text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/apply"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            Apply
          </Link>
          <Link
            to="/team"
            className={`element text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/team"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            Secretariat
          </Link>
          <Link
            to="/sponsors"
            className={`element text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/sponsors"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            Sponsors
          </Link>
          <Link
            to="/committees"
            className={`element text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/committees"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            Committee
          </Link>
          <Link
            to="/past-edition"
            className={`element  text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/past-editions"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            Past Editions
          </Link>
        </nav>
      </div>

      <div
        className={`md:hidden transition-all duration-3000 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-center p-0">
          <Link
            to="/"
            className={`element text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`element text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/about"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            About Us
          </Link>
          <Link
            to="/apply"
            className={`element text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/apply"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            Apply
          </Link>
          <Link
            to="/team"
            className={`element text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/team"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            Secretariat
          </Link>
          <Link
            to="/sponsors"
            className={`element text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/sponsors"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            Sponsors
          </Link>
          <Link
            to="/committees"
            className={`element text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/committees"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            Committee
          </Link>
          <Link
            to="/past-edition"
            className={`element mb-3 text-white text-lg py-2 px-4 border-b-2 ${
              location.pathname === "/past-editions"
                ? "border-red-600"
                : "border-transparent"
            } hover:border-red-600 transition-colors duration-3000`}
          >
            Past Editions
          </Link>
>>>>>>> 73d8f2e ( merged Past Edition Page)
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
