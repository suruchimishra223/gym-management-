import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">METHIL FITNESS CLUB</h1>

        {/* Hamburger Icon */}
        <Link to="/dashboard"><div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div></Link>

        {/* Nav Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/dashboard/about" onClick={toggleMenu}>About</Link>
          <Link to="/dashboard/program" onClick={toggleMenu}>Programs</Link>
          <Link to="/dashboard/membership" onClick={toggleMenu}>Membership</Link>
          <Link to="/dashboard/contact" onClick={toggleMenu}>Contact</Link>
        </nav>

      <Link to="Register">  <button className="join-btn">Join Now</button></Link>
      </div>
    </header>
  );
};

export default Navbar;
