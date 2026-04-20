import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let's talk.</p>
            <p3>I'm looking for backend developer roles where I can write real code and build things that scale. If that's something you're hiring for, I'd love to connect.</p3>
        <p className={styles.tagline}>Let's build something together.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:priyanshu00023@gmail.com">priyanshu00023@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/priyanshu23/" target="_blank" rel="noreferrer">
            linkedin.com/in/priyanshu23
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
          <a href="https://github.com/priyanshuu23" target="_blank" rel="noreferrer">
            github.com/priyanshuu23
          </a>
        </li>
      </ul>
    </footer>
  );
};
