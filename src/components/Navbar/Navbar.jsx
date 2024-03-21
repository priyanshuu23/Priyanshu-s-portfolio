import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    randomInspectElementMessage();
  }, []);

  const randomInspectElementMessage = () => {
    const messages = [
      
        "Give someone a program; you frustrate them for a day; teach them how to program, and you frustrate them for a lifetime. – David Leinweber 😄💻",
        "Don’t comment bad code – rewrite it. – Brian Kernighan 🚫💬",
        "No one in the brief history of computing has ever written a piece of perfect software. It’s unlikely that you’ll be the first. – Andy Hunt 🖥️🔍",
        "A programming language is for thinking about programs, not for expressing programs you’ve already thought of. It should be a pencil, not a pen. – Paul Graham 📝✏️",
        "Sometimes it pays to stay in bed on Monday rather than spending the rest of the week debugging Monday’s code. – Dan Salomon 😴💡",
        "Bad programmers worry about the code. Good programmers worry about data structures and their relationships. – Linus Torvalds 👨‍💻🔧",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler 🧠💡",
        "One of my most productive days was throwing away 1000 lines of code. – Ken Thompson 🗑️💯",
        "Fix the cause, not the symptom. – Steve Maguire 🔍💡",
        "Truth can only be found in one place: the code. – Robert C. Martin 🕵️‍♂️💻",

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
              ? getImageUrl("nav/closeIcon.png") // Display close icon when the menu is open or else 
              : getImageUrl("nav/menuIcon.png")  // This display menu icon when the menu is closed
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)} // Toggle the menuOpen state when it clicked
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
