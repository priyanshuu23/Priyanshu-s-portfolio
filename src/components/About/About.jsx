import React from "react";
import styles from "./About.module.css";
import useScroll from '../../useScroll';
import { getImageUrl } from "../../utils";

const cards = [
  {
    icon: "cursorIcon.png",
    title: "IT Analyst @ HCLTech",
    capability: "Operate enterprise systems on ServiceNow platform",
    proof: "Resolved 50+ production incidents — cut resolution time through RCA",
  },
  {
    icon: "serverIcon.png",
    title: "Java Backend Developer",
    capability: "Build scalable APIs using Java & Spring Boot",
    proof: "Built production-ready REST APIs with JWT authentication & MySQL",
  },
  {
    icon: "dsa.png",
    title: "Problem Solver — DSA",
    capability: "Strong in arrays, strings, recursion & basic DP",
    proof: "Solved 300+ problems on LeetCode / Codechef",
  },
];

const bottomCards = [
  {
    icon: "cursorIcon.png",
    title: "CS Fundamentals",
    capability: "OOP, DBMS, OS, Computer Networks",
    proof: "Applied in live enterprise systems & backend architecture",
  },
  {
    icon: "androidIcon.png",
    title: "Real-World Experience",
    capability: "Production debugging, system monitoring, RCA",
    proof: "I don't just build projects — I solve problems under constraints",
  },
];

export const About = () => {
  const shouldAnimate = useScroll();
  return (
    <section className={`${styles.container} ${shouldAnimate ? styles.textScrolling : ''}`} id="about">
      <h2 className={styles.title}>About</h2>
      <p className={styles.subtitle}>Java Backend Developer · IT Analyst @ HCLTech</p>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/imgg.svg")}
          alt="Priyanshu Urkade"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {cards.map((card, i) => (
            <li key={i} className={styles.aboutItem}>
              <img src={getImageUrl(`about/${card.icon}`)} alt={card.title} className={styles.logoImg} />
              <div className={styles.aboutItemText}>
                <h3>{card.title}</h3>
                <p className={styles.capability}>→ {card.capability}</p>
                <p className={styles.proof}>→ <em>{card.proof}</em></p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.contentBottom}>
        <ul className={styles.aboutItemsLeft}>
          {bottomCards.map((card, i) => (
            <li key={i} className={styles.aboutItem}>
              <img src={getImageUrl(`about/${card.icon}`)} alt={card.title} className={styles.logoImg} />
              <div className={styles.aboutItemText}>
                <h3>{card.title}</h3>
                <p className={styles.capability}>→ {card.capability}</p>
                <p className={styles.proof}>→ <em>{card.proof}</em></p>
              </div>
            </li>
          ))}
        </ul>
        <img
          src={getImageUrl("about/imggBottom.png")}
          alt="Priyanshu Urkade"
          className={styles.aboutImageBottom}
        />
      </div>
    </section>
  );
};