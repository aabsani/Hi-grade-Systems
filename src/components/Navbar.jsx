
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#0a5825', padding: '10px' }}>
      <Link to="/" style={{ margin: '0 15px', color: 'white' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 15px', color: 'white' }}>About</Link>
      <Link to="/services" style={{ margin: '0 15px', color: 'white' }}>Services</Link>
      <Link to="/projects" style={{ margin: '0 15px', color: 'white' }}>Projects</Link>
      <Link to="/contact" style={{ margin: '0 15px', color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
