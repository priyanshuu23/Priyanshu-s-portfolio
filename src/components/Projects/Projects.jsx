import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Spring Boot REST API",
    description: "Production-ready CRUD REST API with JWT authentication and MySQL backend.",
    bullets: [
      "Implemented JWT authentication & role-based access control",
      "Designed optimized MySQL queries with joins and indexing",
      "Built scalable REST endpoints following MVC architecture",
    ],
    skills: ["Java", "Spring Boot", "MySQL", "JWT", "REST API"],
    demo: "https://www.example.com",
    source: "https://github.com/priyanshuu23",
  },
  {
    title: "Real-Time Chat Application",
    description: "Bi-directional messaging system with user sessions and concurrent user handling.",
    bullets: [
      "Implemented real-time communication using Socket.io",
      "Built user session management and message broadcasting",
      "Optimized server for handling multiple concurrent connections",
    ],
    skills: ["Node.js", "Socket.io", "MongoDB", "JavaScript"],
    demo: "https://www.example.com",
    source: "https://github.com/priyanshuu23",
  },
  {
    title: "Task Management System",
    description: "Real-time task tracker with Firebase authentication and live data sync.",
    bullets: [
      "Integrated Firebase Authentication for secure user access",
      "Implemented real-time data sync with Firestore",
      "Designed clean Angular UI with focus on usability",
    ],
    skills: ["Angular", "Firebase", "TypeScript", "HTML"],
    demo: "https://www.example.com",
    source: "https://github.com/priyanshuu23",
  },
  {
    title: "Social Media Web App",
    description: "Full-stack social platform with REST APIs, auth, and CRUD operations.",
    bullets: [
      "Designed REST APIs for user data, posts, and interactions",
      "Implemented authentication and protected routes",
      "Connected React frontend with Node.js + MongoDB backend",
    ],
    skills: ["React.js", "Node.js", "MongoDB", "REST API"],
    demo: "https://www.example.com",
    source: "https://github.com/priyanshuu23",
  },
];

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <p className={styles.subtitle}>Backend-heavy projects demonstrating real technical depth</p>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
