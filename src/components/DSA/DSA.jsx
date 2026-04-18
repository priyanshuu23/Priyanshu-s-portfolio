import React from "react";
import styles from "./DSA.module.css";

export const DSA = () => {
  return (
    <section className={styles.container} id="dsa">
      <h2 className={styles.title}>Problem Solving</h2>
      <p className={styles.subtitle}>Consistent practice — not just theory</p>

      <div className={styles.content}>
        <div className={styles.statRow}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>300+</span>
            <span className={styles.statLabel}>Problems Solved</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>LeetCode</span>
            <span className={styles.statLabel}>Primary Platform</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>CodeStudio</span>
            <span className={styles.statLabel}>Also Active</span>
          </div>
        </div>

        <div className={styles.details}>
          <ul className={styles.list}>
            <li>Strong in <strong>Arrays, Strings, Recursion</strong> and basic Dynamic Programming</li>
            <li>Consistent daily practice focused on interview-pattern problems</li>
            <li>Applied DSA thinking in debugging production-level systems at HCLTech</li>
          </ul>

          <div className={styles.profileLinks}>
            <a
              href="https://leetcode.com"
              target="_blank"
              className={styles.profileLink}
            >
              LeetCode Profile ↗
            </a>
            <a
              href="https://codingninjas.com"
              target="_blank"
              className={styles.profileLink}
            >
              CodeStudio Profile ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
