import React from "react";
import styles from "./techstack.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Techstack = () => {
  // Group skills by category
  const categories = {
    'web technologies': [],
    'graphics and editing': [],
    'programming languages': [],
    "IDE's and tools": []
  };

  // Populate categories with respective skills
  skills.forEach(skill => {
    if (categories.hasOwnProperty(skill.category)) {
      categories[skill.category].push(skill);
    }
  });

  return (
    <section className={styles.container} id="Techstack">
      <h2 className={styles.title}>Techstack</h2>
      <div className={styles.content}>
        {Object.entries(categories).map(([category, skills], index) => (
          <div key={index} className={styles.category}>
            <h3> ---&lt; {category} &gt;--- </h3>
            <div className={styles.skills}>
              {skills.map((skill, id) => (
                <a key={id} href={skill.url} target="_blank" className={styles.skill} data-cursor-effect={skill.cursorEffect || "default"} style={{ cursor: `url(${skill.cursorImage}), auto` }} >
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
