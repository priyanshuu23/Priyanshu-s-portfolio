// Splash Screen Component
import React from 'react';
import styles from "./SplashScreen.module.css";

const SplashScreen = () => {
  return (
    <div className={styles.SplashScreen}>
      
      <div className={styles.navcontainer}>
          <div className={styles.rectangleone}></div>
          <div className={styles.rectangletwo}></div> </div>

      <div className={styles.parentcontainer}>
          <div className={styles.maincontainer}>
              <div className={styles.heading}></div>
              <div className={styles.content}></div>
              <div className={styles.content1}></div>
              <div className={styles.content2}></div>
              <div className={styles.maincontent}></div>
              <div className={styles.maincontent3}></div>
              <div className={styles.maincontent4}></div>
              <div className={styles.maincontent5}></div>
              <div className={styles.maincontent6}></div>
              <div className={styles.btn}></div>
          </div>

      <div className={styles.imgcontainer}></div> </div>

    </div>
  );
}

export default SplashScreen;
