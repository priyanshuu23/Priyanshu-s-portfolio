import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png") // Display close icon when the menu is open or else 
              : getImageUrl("nav/menuIcon.png")  // This display menu icon when the menu is closed
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)} // Toggle the menuOpen state when itclicked
        />
       
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)} // Close the menu when a navigation item is clicked

           /*This dynamically setting the className for the list 
        the "${styles.menuItems}" provides the base styling for the menu items &
        "${menuOpen && styles.menuOpen}" conditionally adds the menuOpen class,
         altering the appearance based on the menuOpen state */

        >
          <li>
            <span className={styles.heading}><a href="#about">About</a></span>
          </li>
          <li>
            <span className={styles.heading}><a href="#education">Education</a></span>
          </li>
          <li>
            <span className={styles.heading}><a href="#projects">Projects</a></span>
          </li>
          <li>
            <span className={styles.heading}><a href="#contact">Contact</a></span>
          </li>
        </ul>
      </div>
    </nav>
  );
};
