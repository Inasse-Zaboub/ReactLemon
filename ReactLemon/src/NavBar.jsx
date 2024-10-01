import React from "react";
import LemonLogo from "./assets/LemonLogo.jpg";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container innerWidth">
        <div className="nav-logo">
          <img src={LemonLogo} alt="" />
        </div>
        <div className="nav-actions">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order</li>
          </ul>
        </div>
        <div className="nav-button">
          <button>LOGIN</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
