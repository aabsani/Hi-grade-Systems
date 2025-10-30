import styles from "./Navbar.module.css";

import React from "react";
import { useState, useEffect } from "react";

import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Navbar() {
  // handle navbar scrolling state
  const [scrolled, setScrolled] = useState(false);

  // useEffect for listening to scrolling event, to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      // if user scrolls more than 50px vertically, scrolled becomes true
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
    >
      <NavLink to="/">
        <img src="/images/logo-1.jpeg" alt="logo" className={styles.logo} />
      </NavLink>

      <ul>
        <li>
          <NavLink to="/" className={styles.navItem}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={styles.navItem}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={styles.navItem}>
            Services
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/gallery" className="nav-item">
            Gallery
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/contact" className={styles.navItem}>
            Contact Us
          </NavLink>
        </li>
      </ul>

      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={12} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={12} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={12} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
