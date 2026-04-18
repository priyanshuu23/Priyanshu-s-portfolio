import React from "react";
import styles from "./techstack.module.css";

const skillGroups = [
  {
    category: "Backend Development",
    skills: [
      { name: "Java (Core + OOP)", note: "Primary language" },
      { name: "Spring Boot", note: "REST APIs & MVC" },
      { name: "REST API Design", note: "Enterprise patterns" },
      { name: "Node.js", note: "Secondary backend" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", note: "Joins, Indexing" },
      { name: "MongoDB", note: "NoSQL" },
      { name: "Firebase", note: "Real-time DB" },
    ],
  },
  {
    category: "CS Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", note: "300+ solved" },
      { name: "DBMS", note: "Core theory" },
      { name: "Operating Systems", note: "Core theory" },
      { name: "Object-Oriented Programming", note: "Design principles" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", note: "Version control" },
      { name: "Postman", note: "API testing" },
      { name: "ServiceNow", note: "Enterprise platform" },
      { name: "VS Code", note: "Primary IDE" },
    ],
  },
];

export const Techstack = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Technical Skills</h2>
      <p className={styles.subtitle}>Backend-focused stack built for production systems</p>
      <div className={styles.content}>
        {skillGroups.map((group, gi) => (
          <div key={gi} className={styles.category}>
            <h3 className={styles.categoryTitle}>{group.category}</h3>
            <ul className={styles.skills}>
              {group.skills.map((skill, si) => (
                <li key={si} className={styles.skill}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillNote}>{skill.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
