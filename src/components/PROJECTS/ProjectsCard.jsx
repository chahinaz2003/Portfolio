import React from 'react';
import styles from './ProjectsCard.module.css'; 

const ProjectCard = ({ title, imgSrc, description, skills, demo, source }) => {
  return (
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <ul className={styles.projectSkills}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.projectLinks}>
        <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.demoLink}>Demo</a>
        <a href={source} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>Source Code</a>
      </div>
    </div>
  );
};

export default ProjectCard;
