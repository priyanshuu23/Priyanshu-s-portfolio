import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, description, bullets, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className={styles.bullets}>
          {bullets.map((b, i) => (
            <li key={i} className={styles.bullet}>{b}</li>
          ))}
        </ul>
      )}
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} target="_blank" className={styles.link}>
          Demo ↗
        </a>
        <a href={source} target="_blank" className={styles.link}>
          GitHub ↗
        </a>
      </div>
    </div>
  );
};
