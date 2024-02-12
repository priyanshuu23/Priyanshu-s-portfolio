import React from "react";
import styles from "./Experience.module.css";

const ExperienceItem = ({ jobProfile, companyName, duration, workDescription, skills }) => {
  return (
    <div className={styles.xpSkelleton}>
      <div className={styles.companyDetails}>
        <div className={styles.companyHead}>
          <div className={styles.logo}></div>
          <div className={styles.about}>
            <h1 className={styles.jobProfile}>{jobProfile}</h1>
            <h1 className={styles.componyName}>{companyName}</h1>
            <h1 className={styles.duration}>{duration}</h1>
          </div>
        </div>
        <div className={styles.aboutText}>
          <p className={styles.work}>{workDescription}</p>
          <br />
          <p className={styles.skills}>{skills}</p>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  const experienceData = [
    {
      jobProfile: "Frontend Engineer Intern",
      companyName: "Company 1",
      duration: "Duration 1",
      workDescription: "Built Flipr Connect Platforms using React Js integrated GraphQL with AXIOS, created High level Design and Figma design. Built Backend with GraphQL and Node JS and connected with MongoDb - Reducing API calls by 20%. Dockerized and automated with Kubernetes & Jenkins CI/CD deployed in AWS-EC2 added Prometheus & Grafana for monitoring Built Flipr Connect Platforms using React Js integrated GraphQL with AXIOS, created High level Design and Figma design. Built Backend with GraphQL and Node JS and connected with MongoDb - Reducing API calls by 20%. Dockerized and automated with Kubernetes & Jenkins CI/CD deployed in AWS-EC2 added Prometheus & Grafana for monitoring.",
      skills: "Skills 1: ReactJS, Redux, NodeJs, CSS, HTML, Material UI, Javascript",
    },
    {
      jobProfile: "Frontend Engineer Intern",
      companyName: "Company 2",
      duration: "Duration 2",
      workDescription: "Work description 2",
      skills: "Skills 2: ReactJS, Redux, NodeJs, CSS, HTML, Material UI, Javascript",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h1>Experience</h1>
        <p>My work experience as a software engineer and working on different companies and projects.</p>
      </div>
      <div className={styles.xpOut}>
        {experienceData.map((item, index) => (
          <ExperienceItem
            key={index}
            jobProfile={item.jobProfile}
            companyName={item.companyName}
            duration={item.duration}
            workDescription={item.workDescription}
            skills={item.skills}
          />
        ))}
      </div>
    </div>
  );
};
