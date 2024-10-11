import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../css/Navbar.css'

function NavBar() {
  return (
    <header>
      <div className="navbar">
        <Link to='/'><a className="element">Home</a></Link>
        <Link to='/'><a className="element">About Us</a></Link>
        <Link to='/'><a className="element">Apply</a></Link>
        <Link to='/team'><a className="element">Secretariat</a></Link>
        <Link to='/sponsers'><a className="element">Sponsors</a></Link>
      </div>
    </header>
  );
}

export default NavBar;
