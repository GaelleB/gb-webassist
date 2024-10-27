import React from 'react';
import Logo from '../assets/Logo GB WebAssist.png';

function Navbar() {
    return (
    <nav>
        <div className="navbar-container"> 
            <img src={Logo} alt="Logo GB WebAssist" /> 
            <h1>GB WebAssist</h1>
            <div>
                <div><a href="#accueil" class="heberg">Accueil</a></div>
                <div><a href="#services" class="acti">Services</a></div>
                <div><a href="#tarifs" class="inscription">Tarifs</a></div>
                <div><a href="#contact" class="inscription">Contact</a></div>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;