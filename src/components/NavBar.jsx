import react from "react";
import reactdom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <header>
      <div className="nav-bar bg-transparent relative z-1000">
        <a className="element">Home</a>
        <a className="element">About Us</a>
        <a className="element">Apply</a>
        <a className="element">Secretariat</a>
      </div>
    </header>
  );
}

export default NavBar;
