import React, { useState } from 'react';
import logo from "../assets/logo2.png"
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import './style.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-container'>
      <nav>
        <div className="logo">
          <img src={logo} className='logo-icon' />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <GiHamburgerMenu className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`} />
        </button>
        <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <button className="hamburger" onClick={toggleMenu}>
            <IoCloseSharp className='hamburger-icon--active' />
          </button>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
};

export { Navbar };

