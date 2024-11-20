import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo GB WebAssist.png';
import '../styles/global.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <img src={Logo} alt="Logo GB WebAssist" className="logo" />
        </Link>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;