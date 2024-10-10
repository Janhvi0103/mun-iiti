import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div className="nav-bar bg-transparent relative z-1000">
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
