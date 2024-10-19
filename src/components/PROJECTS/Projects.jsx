import React from 'react';
import styles from './Projects.module.css'; 
import projectsData from '../../data/projects.json'; 
import ProjectCard from './ProjectsCard'; // Import the new component

export const Projects = () => {
  return (
    <section id='projects' className={styles.projectsSection}>
      <h2 className={styles.titre}>Projects</h2>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            skills={project.skills}
            demo={project.demo}
            source={project.source}
          />
        ))}
      </div>
    </section>
  );
};
