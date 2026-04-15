import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hasRun = useRef(false); 

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    randomInspectElementMessage();
  }, []);

  const randomInspectElementMessage = () => {
    const messages = [
      "👀 Snooping around? Nice.\nCode's on GitHub → go stalk it properly 😄",
      "🚨 Dev detected.\nRelax, no secrets here.\nGitHub has everything 😎",
      "Welcome to devtools 👋\nReal code lives on GitHub → go check it out.",
      "Caught you inspecting 👀\nDon’t worry, I’d do the same.\nFull code → GitHub 🚀"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[randomIndex]);
  };

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
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
       
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><span className={styles.heading}><a href="#about">About</a></span></li>
          <li><span className={styles.heading}><a href="#education">Education</a></span></li>
          <li><span className={styles.heading}><a href="#projects">Projects</a></span></li>
          <li><span className={styles.heading}><a href="#contact">Contact</a></span></li>
        </ul>
      </div>
    </nav>
  );
};