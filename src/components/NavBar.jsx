import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";
import Logo from '../assets/committees/mun_b.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-navbar ${isScrolled ? "bg-solid" : ""}`}>
      <div className="nav-bar flex items-center justify-between p-4">
        <img
          src={Logo}
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
            </svg>
          )}
        </button>
        <nav className="hidden md:flex md:flex-wrap md:items-center">
          {[ 
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Secretariat", path: "/team" },
            { name: "Sponsors", path: "/sponsors" },
            { name: "Committee", path: "/committees" },
            { name: "Past Editions", path: "/past-edition" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`element text-white text-lg py-2 px-4 border-b-2 ${
                location.pathname === item.path
                  ? "border-red-600"
                  : "border-transparent"
              } hover:border-red-600 transition-colors duration-300`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="https://unstop.com/conferences/model-united-nations-80-iit-indore-iit-indore-1193062"
            className="register-button text-white text-lg py-2 px-4 border-2 border-transparent rounded-lg hover:bg-green-900 hover:border-green-900 transition-all duration-300"
          >
            Register
          </Link>
        </nav>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-center p-0">
          {[ 
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Secretariat", path: "/team" },
            { name: "Sponsors", path: "/sponsors" },
            { name: "Committee", path: "/committees" },
            { name: "Past Editions", path: "/past-edition" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`element text-white text-lg py-2 px-4 border-b-2 ${
                location.pathname === item.path
                  ? "border-red-600"
                  : "border-transparent"
              } hover:border-red-600 transition-colors duration-300`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="https://unstop.com/conferences/model-united-nations-80-iit-indore-iit-indore-1193062"
            className="register-button text-white text-lg py-2 px-4 border-2 border-transparent rounded-lg hover:bg-green-900 hover:border-green-900 transition-all duration-300"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
