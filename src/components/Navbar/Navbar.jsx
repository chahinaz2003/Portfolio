import React, { useState, useEffect } from 'react';
import styles from "./Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 830);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 830);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <nav className={styles.nav}>
      <a className={styles.title} href="/">portfolio</a>

      <div className={styles.menu}>
        {isMobile && (
          menuOpen ? (
            <FiX className={styles.menuBtn} onClick={toggleMenu} />
          ) : (
            <FiMenu className={styles.menuBtn} onClick={toggleMenu} />
          )
        )}

        <ul className={`${styles.menuItems} ${menuOpen && isMobile ? styles.menuOpen : ''}`} onClick={() => setMenuOpen(false)}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
