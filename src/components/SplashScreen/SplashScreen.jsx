import React, { useState, useEffect } from 'react';
import styles from './SplashScreen.module.css';

function SplashScreen() {
  const [showText, setShowText] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    // Change background color after 3 seconds
    const colorTimeout = setTimeout(() => {
      setBackgroundColor("#04152d");
    }, 1000);

    // Hide text after 5 seconds
    const textTimeout = setTimeout(() => {
      setShowText(false);
    }, 1000);

    return () => {
      clearTimeout(colorTimeout);
      clearTimeout(textTimeout);
    };
  }, []);

  return (
    <div className={`${styles.splashScreen}`} style={{ backgroundColor }}>
      {showText && (
        <div className={`${styles.text} ${showText ? styles.fadeIn : styles.fadeOut}`}>
          Welcome
        </div>
      )}
    </div>
  );
}

export default SplashScreen;
