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
                Bachelor of Technology (B.Tech) in Computer Science and
                Engineering
              </h3>
              <br />

              <p>
                <strong className={styles.title}>College:</strong>{" "}
                <span className={styles.clgName}>
                  Gyan Ganga Institute of Technology and Sciences, Jabalpur  
                  <br />
                  2021 - 2024 (Pursuing)
                </span>
              </p>
              <br />

              <p>
                <strong className={styles.title}>Affiliated to :</strong>{" "}
                <span className={styles.highlight}>
                  Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)
                </span>
              </p>
              <br />

              <p className={styles.details}>
                <span className={styles.title}>Important Subjects:</span>{" "}
                Data Structures and Algorithms, Object-Oriented Programming,
                Computer Networks, Database Management System, Operating Systems
                <br />
                <br />
                <span className={styles.title}>Experience:</span>   During my
                B.Tech, I had the opportunity to work on various projects and
                gain hands-on experience in software development, system design,
                and problem-solving. I also participated in coding competitions
                and hackathons, further enhancing my skills.
                <br />
                <span className={styles.title}>Projects:</span> I have built
                several projects including a social media platform using
                React.js, a web-based chat application using Node.js and
                Socket.io, and a task management system using Firebase and
                Angular.
              </p>
          </div>
          </li>
          </a>
          <a href="https://takshshila.org/" className="link" target="_blank"> 
          <li className={styles.aboutItem}>
          <div className={styles.educationEntry}>
              <h3 className={styles.course}>Diploma in Electrical & Electronics Engineering</h3>
              <br />

              <p>
                <strong className={styles.title}>College:</strong>{" "}
                <span className={styles.clgName}>
                  Takshshila Institute of Engineering & Technology
                  <br />
                  2018 - 2021
                </span>
              </p>
              <br />


              <p>
                <strong className={styles.title}>University:</strong>{" "}
                <span className={styles.highlight}>
                  Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)
                </span>
              </p>
              <br />

              <p className={styles.details}>
                <span className={styles.title}>Important Subjects:</span>{" "}
                Electrical Machines, Power Systems, Control Systems, Electrical
                Measurements, Digital Electronics
                <br />
                <br />
                <span className={styles.title}>Experience:</span> During my
                diploma, I gained practical experience through vocational
                training in various aspects of electrical engineering, including
                power transmission and electrical equipment.
                <br />
                <span className={styles.title}>Projects:</span> I worked on
                projects such as a smart streetlight management system using
                Arduino, a power monitoring system using Raspberry Pi, and a
                home automation system using IoT devices.
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
