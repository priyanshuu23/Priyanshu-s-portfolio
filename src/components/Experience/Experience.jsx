import React from "react";
import styles from "./Experience.module.css";

const ExperienceItem = ({ jobProfile, companyName, duration, bullets, skills, logo, certificate }) => {
  return (
    <div className={styles.xpSkelleton}>
      <div className={styles.companyDetails}>
        <div className={styles.companyHead}>
          <div className={styles.logo}>
            <img src={logo} alt={`${companyName} logo`} className={styles.logoImg} />
          </div>
          <div className={styles.about}>
            <h1 className={styles.jobProfile}>{jobProfile}</h1>
            <h2 className={styles.componyName}>{companyName}</h2>
            <h3 className={styles.duration}>{duration}</h3>
          </div>
        </div>
        <div className={styles.aboutText}>
          <ul className={styles.bulletList}>
            {bullets.map((b, i) => (
              <li key={i} className={styles.bullet} dangerouslySetInnerHTML={{ __html: b }} />
            ))}
          </ul>
          {certificate && (
            <a href={certificate} target="_blank">
              <p className={styles.p1}>View Certificate →</p>
            </a>
          )}
        </div>
        <div className={styles.skillTags}>
          {skills.map((s, i) => (
            <span key={i} className={styles.skillTag}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  const experienceData = [
    {
      jobProfile: "IT Analyst",
      companyName: "HCLTech",
      duration: "2024 – Present",
      bullets: [
        "Resolved <strong>50+ production issues</strong> through systematic root cause analysis and targeted debugging",
        "Worked on enterprise applications using the <strong>ServiceNow platform</strong>, improving system stability",
        "Performed system monitoring and <strong>performance optimization</strong> on live production environments",
        "Worked with <strong>REST APIs and backend workflows</strong> in enterprise-scale systems",
        "Collaborated with cross-functional teams to maintain reliability and reduce resolution time",
      ],
      skills: ["ServiceNow", "REST APIs", "Incident Management", "Debugging", "System Optimization"],
      logo: "https://cdn.brandfetch.io/id8i2DmKRE/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1668706744617",
      certificate: null,
    },
    // {
    //   jobProfile: "Web Development Intern",
    //   companyName: "CodeClause",
    //   duration: "2023",
    //   bullets: [
    //     "Built responsive web applications using <strong>ReactJS, HTML, CSS, and JavaScript</strong>",
    //     "Developed reusable components that improved UI performance and reduced code duplication",
    //     "Delivered a production-ready ReactJS component ahead of schedule",
    //   ],
    //   skills: ["ReactJS", "Node.js", "HTML", "CSS", "JavaScript"],
    //   logo: "https://imgbox.com/cRDlkVwy",
    //   certificate: "https://onedrive.live.com/?authkey=%21AD%5FcaRaT1M2LcuY&cid=4747028FD57E5130&id=4747028FD57E5130%21310&parId=4747028FD57E5130%21309&o=OneUp",
    // },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h1>Experience</h1>
        <p>Professional experience in enterprise systems and software engineering</p>
      </div>
      <div className={styles.xpOut}>
        {experienceData.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
