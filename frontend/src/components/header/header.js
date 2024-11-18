import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#mision">Misión, Visión y Valores</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
