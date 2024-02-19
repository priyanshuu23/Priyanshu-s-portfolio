import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>

      <a href="mailto:xyz@gmail.com?subject=Hello&body=Hello" target="_blank" className={styles.aTag}>
        <TypeAnimation className={styles.title} 
        
            sequence={[
              "Hi,",
              100,
              "Hi, I'm Priyanshu",
              500,
            ]}
            speed={50}
            repeat={false} /> </a>


      <a href="mailto:xyz@gmail.com?subject=Hello&body=Hello" target="_blank" className={styles.aTag}>
        <TypeAnimation className={styles.info}  
           style={{ whiteSpace: 'pre-line', height: '40px', display: 'block' }}
              sequence={[
                2000,
               "Welcome to my digital playground!",
              900,
              "where creativity meets strategy!",
              900,
              "I design experiences that captivate users and drive results.",
              900,
              "I turn complex ideas into user-friendly solutions.",
              900,
              "Ready to elevate your brand? Let's chat!",
              900,
              ]}   
              speed={75}
            repeat={false} />   </a>


        {/* <h1 className={styles.title}>Hi, I'm Priyanshu </h1>  */}
        {/* <span className="blog-title-emoji">👋</span> */}
        <p className={styles.description}>I am a aspiring Full-Stack developer in the process of learning Computer Science & Engineering at GGITS. Exploring MERN Stack for crafting WebApps and Websites. Actively working on honing skills through independent projects. 🚀💻 </p>

        <a href="mailto:xyz@gmail.com?subject=Hello&body=Hello" target="_blank" className={styles.contactBtn}>
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
