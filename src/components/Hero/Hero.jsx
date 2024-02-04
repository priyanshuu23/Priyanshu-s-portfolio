import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Priyanshu </h1> 
        {/* <span className="blog-title-emoji">👋</span> */}
        <p className={styles.description}>
           I am a aspiring Full-Stack developer in the process of learning Computer Science & Engineering at GGITS.
           Exploring MERN Stack for crafting WebApps and Websites. Actively working on honing skills 
           through independent projects. 🚀💻
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.imgdiv}>
      <img
        src={getImageUrl("hero/bg.png")}
        alt="Hero background image"
        className={styles.heroBg}
      />
      <img
        src={getImageUrl("hero/img.png")}
        alt="Hero overlay image"
        className={`${styles.heroBg} ${styles.overlayImage}`}
      />
    </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
