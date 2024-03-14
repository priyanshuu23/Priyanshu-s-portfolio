import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { TypeAnimation } from 'react-type-animation';


function randomInspectElementMessage() {
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
}

randomInspectElementMessage();


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <a
          href="mailto:priyanshu00023@gmail.com?subject=Hello&body=Hello"
          target="_blank"
          className={styles.aTag}
        >
          <TypeAnimation
            className={styles.title}
            preRenderFirstString={true}
            sequence={["Hi,", 100, "Hi, I'm Priyanshu", 500]}
            speed={50}
            repeat={false}
          />{" "}
        </a>

        {/* <h1 className={styles.title}>Hi, I'm Priyanshu </h1>  */}
        {/* <span className="blog-title-emoji">👋</span> */}
        <p className={styles.description}>
          I am a aspiring Full-Stack developer in the process of learning
          Computer Science & Engineering at GGITS. Exploring MERN Stack for
          crafting WebApps and Websites. Actively working on honing skills
          through independent projects. 🚀💻
          <br />
          <a
            href="mailto:priyanshu00023@gmail.com?subject=Hello&body=Hello"
            target="_blank"
            className={styles.aTag}
          >
            <TypeAnimation
              className={styles.info}
              sequence={[
                2000,
                "Welcome to my digital playground!",
                900,
                "where creativity meets strategy!",
                900,
                "Ready to colaborate? Let's chat!",
                900,
              ]}
              speed={75}
              repeat={false}
            />{" "}
          </a>
          <a
            href="mailto:priyanshu00023@gmail.com?subject=Hello&body=Hello"
            target="_blank"
            className={styles.aTag}
          >
            <TypeAnimation
              className={styles.infoo}
              style={{ fontSize: "0.8em" }}
              sequence={[2000, "Ready to colaborate? Let's chat!", 900]}
              speed={75}
              repeat={false}
            />{" "}
          </a>
        </p>

        <a
          href="mailto:priyanshu00023@gmail.com?subject=Hello&body=Hello"
          target="_blank"
          className={styles.button}
        >
          <span className={styles.button__text}>contact me</span>
          <img
            src={getImageUrl("hero/cone.png")}
            alt=""
            className={styles.button__cone}
          />
          <img
            src={getImageUrl("hero/torus.png")}
            alt=""
            className={styles.button__torus}
          />
          <img
            src={getImageUrl("hero/icosahedron.png")}
            alt=""
            className={styles.button__icosahedron}
          />
          <img
            src={getImageUrl("hero/sphere.png")}
            alt=""
            className={styles.button__sphere}
          />
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
