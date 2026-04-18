import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <a href="https://ggits.org/" className="link" target="_blank">
            <li className={styles.aboutItem}>
              <div className={styles.educationEntry}>
                <h3 className={styles.course}>
                  B.Tech – Computer Science & Engineering
                </h3>
                <br />
                <p>
                  <strong className={styles.title}>Institution:</strong>{" "}
                  <span className={styles.clgName}>
                    Gyan Ganga Institute of Technology and Sciences, Jabalpur
                  </span>
                </p>
                <br />
                <p>
                  <strong className={styles.title}>Duration:</strong>{" "}
                  <span className={styles.highlight}>2021 – 2024</span>
                </p>
                <br />
                <p className={styles.details}>
                  <span className={styles.title}>Core Subjects:</span>{" "}
                  Data Structures & Algorithms, Object-Oriented Programming,
                  Database Management System, Operating Systems, Computer Networks
                </p>
              </div>
            </li>
          </a>

          <a href="https://takshshila.org/" className="link" target="_blank">
            <li className={styles.aboutItem}>
              <div className={styles.educationEntry}>
                <h3 className={styles.course}>Diploma – Electrical & Electronics Engineering</h3>
                <br />
                <p>
                  <strong className={styles.title}>Institution:</strong>{" "}
                  <span className={styles.clgName}>
                    Takshshila Institute of Engineering & Technology
                  </span>
                </p>
                <br />
                <p>
                  <strong className={styles.title}>Duration:</strong>{" "}
                  <span className={styles.highlight}>2018 – 2021</span>
                </p>
              </div>
            </li>
          </a>
        </ul>
      </div>
    </section>
  );
};

export default Education;
