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
      "Ah, the Inspect Element adventurers have arrived! Bravo! 🕵️‍♂️ But wait, before you delve deeper into the matrix, why not save your precious time? Our entire codebase is readily available on GitHub. Happy exploring! 💻✨",
      "Well, well, well, another Inspect Element aficionado graces us with their presence! 🧐 You've uncovered our digital secrets, but did you know? The real treasure lies in our GitHub repository. Dive in, if you dare! 💼💾",
      "Ah, the Inspect Element detectives strike again! 🔍 How thrilling! But hey, why stop at peeking behind the curtains when you can have the whole show? GitHub is where the real coding magic happens. Abracadabra! 🎩✨",
      "Round of applause for our Inspect Element connoisseur! 👏 Your skills are truly unmatched. But why settle for breadcrumbs when you can feast on the whole loaf? GitHub awaits, dear explorer! 🍞🔍",
      "Impressive! Another visitor with a keen eye for detail! 👀 You've uncovered our website's secrets, but the real revelation awaits on GitHub. It's like finding the key to a treasure chest...only better! 🗝️💰",
      "Bravo, Inspect Element virtuoso! 🎭 Your talents shine bright as you uncover the inner workings of our site. But why stop there? GitHub is where the real coding party's at. Join us, won't you? 🎉💻",
      "Hats off to our Inspect Element maestro! 🎩 You've cracked the code and peered into the digital abyss. But why settle for a glimpse when you can have the whole enchilada on GitHub? ¡Olé! 🌮🕵️‍♂️",
      "A standing ovation for our Inspect Element sleuth! 🎉 Your detective skills are truly remarkable. But here's a little secret: GitHub holds all the keys to our digital kingdom. Care to unlock the door? 🔑🏰",
      "Well, well, well, what do we have here? Another Inspect Element prodigy gracing us with their presence! 🌟 But why stop at surface-level exploration when GitHub offers a deep dive into our digital universe? 🌊🚀",
      "Ah, the Inspect Element adventurers strike again! 🚀 You've boldly gone where many fear to tread. But here's the real kicker: GitHub is the ultimate treasure map. Ready to embark on the coding quest of a lifetime? 🗺️💻"
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
