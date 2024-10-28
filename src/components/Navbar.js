import React from 'react';
import Logo from '../assets/Logo GB WebAssist.png';

function Navbar() {
    return (
    <nav>
        <div className="navbar-container"> 
            <img src={Logo} alt="Logo GB WebAssist" /> 
            <h1>GB WebAssist</h1>
            <ul>
                <li>Accueil</li>
                <li>Services</li>
                <li>Tarifs</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;