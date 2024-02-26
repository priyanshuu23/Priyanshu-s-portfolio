import React from "react";
import styles from "./Experience.module.css";

const ExperienceItem = ({ jobProfile, companyName, duration, workDescription, skills, logo , certificate }) => {
  return (
    <div className={styles.xpSkelleton}>
      <div className={styles.companyDetails}>
        <div className={styles.companyHead}>
        <div className={styles.logo}>
            <img src={logo} alt="Company Logo" className={styles.logo} />
        </div>
          <div className={styles.about}>
            <h1 className={styles.jobProfile}>{jobProfile}</h1>
            <h2 className={styles.componyName}>{companyName}</h2>
            <h1 className={styles.duration}>{duration}</h1>
          </div>
        </div>
        <div className={styles.aboutText}>
          <p className={styles.work}>{workDescription}</p> <br />
          <a href={certificate} target="_blank"><p1>View Certificate</p1></a>
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
      logo: "../../../assets/history/codeclause.png",
      certificate: "https://onedrive.live.com/?authkey=%21AD%5FcaRaT1M2LcuY&cid=4747028FD57E5130&id=4747028FD57E5130%21310&parId=4747028FD57E5130%21309&o=OneUp"
    },
    {
      jobProfile: "Volunteering internship",
      companyName: "Muskurahat Foundation",
      workDescription: "🌟 Muskurahat Foundation is a non-profit organization dedicated to improving the lives of underprivileged communities through education, healthcare, and community development. We focus on empowering individuals and fostering sustainable change, operating through a network of dedicated volunteers and professionals committed to making a difference 😊.  As a Volunteer Intern at Muskurahat Foundation, you'll actively contribute to our mission while gaining valuable experience in the non-profit sector. You'll work closely with our team to support various projects aimed at uplifting marginalized communities and promoting social welfare. This opportunity allows you to make a tangible impact while developing essential skills and networking with like-minded individuals. Join us in creating smiles and transforming lives!",
      skills: "Skills : Community Engagement, Event Coordination, Fundraising, Social Media Management,Interpersonal Communication, Team Collaboration",
      logo:"../../../assets/history/muskurahatFoundation.png",
      certificate:"https://internshala.com/student/certificate/111184537/38205C18-0982-DD83-B14F-9A14FFDBA4A9"
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
            logo={item.logo}
            certificate={item.certificate}
          />
        ))}
      </div>
    </div>
  );
};
