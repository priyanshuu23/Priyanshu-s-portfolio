import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, description, bullets, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      {bullets?.length > 0 && (
        <ul className={styles.bullets}>
          {bullets.slice(0, 4).map((b, i) => (  // LIMIT bullets (important)
            <li key={i} className={styles.bullet}>
              {b}
            </li>
          ))}
        </ul>
      )}

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className={styles.link}>
            Demo ↗
          </a>
        )}
        {source && (
          <a href={source} target="_blank" rel="noreferrer" className={styles.link}>
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
};