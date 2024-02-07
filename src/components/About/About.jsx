import React from "react";

import styles from "./About.module.css";
import useScroll from '../../useScroll';
import { getImageUrl } from "../../utils";


export const About = () => {
  const shouldAnimate = useScroll(/* scroll threshold for About */);
  return (

    
    <section className={`${styles.container} ${shouldAnimate ? styles.textScrolling : ''}`} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>


        <img
          src={getImageUrl("about/imgg.svg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>

          <li className={styles.aboutItem}>
            
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" className={styles.logoImg} />
           
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p style={{ fontSize: '16px' }}>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>


          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" className={styles.logoImg} />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p style={{ fontSize: '16px' }}>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>


          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/androidIcon.png")} alt="UI icon" className={styles.logoImg} />
            <div className={styles.aboutItemText}>
              <h3 className="androidDev" >Android Developer</h3>
              <p  style={{ fontSize: '16px' }} className="androidDev">
                
                  I have experience developing Android applications and have designed multiple
                  user interfaces for mobile apps.
                
              </p>
            </div>
          </li>

        </ul>
      </div>

      {/* bottomBar */}

      <div className={styles.contentBottom}>


        <ul className={styles.aboutItemsLeft}>


          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graphics.png")} alt="graphics icon" className={styles.logoImg} />
            <div className={styles.aboutItemText}>
              <h3>Graphics Designer</h3>
              <p style={{ fontSize: '16px' }}>
              I design user interfaces for Android apps, bringing a creative touch to 
              mobile experiences.
              </p>
            </div>
          </li>


          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/dsa.png")} alt="UI icon" className={styles.logoImg} />
            <div className={styles.aboutItemText}>
              <h3 className="androidDev" >Problem Solving</h3>
              <p  style={{ fontSize: '16px' }} className="androidDev">
                
              I excel in coding and Data Structures & Algorithms (DSA), 
              having successfully solved a diverse range of problems across various applications.
                
              </p>
            </div>
          </li>

        </ul>
        <img
          src={getImageUrl("about/imggBottom.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImageBottom}
        />
      </div>
    </section>
  );
};