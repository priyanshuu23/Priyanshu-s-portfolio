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
        </div>
        <p className={styles.skils} > <a href="#experience"> <b>{skills}</b> </a> </p>
      </div>
    </div>
  );
};

export const Experience = () => {
  const experienceData = [
    {
      jobProfile: "Web Dev Intern",
      companyName: "Code Clause",
      workDescription: "      As a Web Development Intern at CodeClause, I completed a dynamic one-month internship focused on honing my skills in web development. I delved into various facets like ReactJS ⚛️, HTML, CSS, and JavaScript ⚡. My tenure enhanced my proficiency in ReactJS, allowing me to contribute significantly to building a responsive and user-centric website in collaboration with a talented development team ‍‍. I showcased adept problem-solving abilities and clear communication throughout, culminating in the development of a bespoke ReactJS component ✨ and the successful implementation of a new CSS framework ️. My commitment to writing clean, maintainable code underscores my dedication to excellence in web development.",

      skills: "Skills: ReactJS, NodeJs, CSS, HTML, Material UI, Javascript",
    },
    {
      jobProfile: "Frontend Engineer Intern",
      companyName: "Company 2",
      duration: "Duration 2",
      workDescription: "Work description 2",
      skills: "Skills : ReactJS, Redux, NodeJs, CSS, HTML, Material UI, Javascript",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h1>Experiences & Trainings</h1>
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
