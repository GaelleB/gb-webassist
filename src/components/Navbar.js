// Navbar.js
import React, { useState } from "react";
import logo from "../assets/Logo GB WebAssist.png"; // Importez le logo

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" role="navigation">
      <div className="container">
        <div className="navbar-brand-container"> {/* Ajout du conteneur pour le logo */}
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo GB WebAssist" className="logo" />
            <span className="brand-name">GB WebAssist</span>
          </a>
        </div>
        <button
          className={`navbar-toggler ${isMenuOpen ? "open" : ""}`}
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tarifs">
                Tarifs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;