import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Incident Pattern Analyzer (Major Project)",
    description: "Backend system to track production incidents, detect recurring issues, and analyze service-level failure patterns.",
    bullets: [
      "Designed REST APIs to log and manage incidents with priority, service, and affected user data",
      "Implemented pattern detection using grouping (top recurring issues, failure-prone services)",
      "Built dashboard APIs for trends (incident spikes, resolution stats, service impact)",
      "Optimized queries with pagination, sorting, and indexing for large datasets",
      "Added global exception handling and structured logging for reliability"
    ],
    skills: ["Java", "Spring Boot", "MySQL", "REST API", "Backend Design"],
    demo: "https://www.example.com",
    source: "https://github.com/priyanshuu23",
  },
  {
    title: "ServiceNow Incident Automation Panel",
    description: "Utility panel to streamline incident tracking, updates, and workflow visibility in ServiceNow-like environments.",
    bullets: [
      "Designed structured workflow for incident lifecycle (Open → In Progress → Resolved)",
      "Implemented filtering and search for faster issue tracking and resolution",
      "Tracked incident activity logs and status transitions for debugging",
      "Improved visibility of recurring issues through categorized incident views"
    ],
    skills: ["ServiceNow", "Incident Management", "Workflow Design"],
    demo: "https://www.example.com",
    source: "https://github.com/priyanshuu23",
  },
  {
    title: "Production Issue Tracker (ServiceNow Use-Case)",
    description: "System to simulate real-world production support workflows with SLA-based incident handling.",
    bullets: [
      "Handled incident prioritization (P1, P2, P3) with SLA-based tracking logic",
      "Designed backend logic for assigning, updating, and resolving incidents",
      "Simulated real production scenarios including recurring failures and escalation",
      "Built structured data model to track affected services and users"
    ],
    skills: ["ServiceNow", "Production Support", "Incident Handling"],
    demo: "https://www.example.com",
    source: "https://github.com/priyanshuu23",
  },
  {
    title: "Creative Scrapyard (Android App)",
    description: "Android application for sharing and exploring creative ideas with structured content management.",
    bullets: [
      "Built Android app using Java with structured activity lifecycle handling",
      "Implemented CRUD operations for managing user-generated content",
      "Designed responsive UI for smooth navigation and usability",
      "Managed local data storage and retrieval efficiently"
    ],
    skills: ["Java", "Android", "XML", "SQLite"],
    demo: "https://www.example.com",
    source: "https://github.com/priyanshuu23",
  }
];

export const Projects = () => {
  const total = projects.length;

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <p className={styles.subtitle}>
        Backend-heavy projects demonstrating real technical depth
      </p>

      <div className={styles.projects}>
        {projects.map((project, i) => {
          let spanClass = "";

          // Smart balancing logic
          if (total === 5 && i >= 3) spanClass = styles.span2;
          if (total === 2) spanClass = styles.span2;

          return (
            <div key={i} className={spanClass}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};