import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import the icons
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <section id='contact' className={styles.contactSection}>
      <h2 className={styles.contactTitle}>My Contact</h2>
      <div>
        <ul className={styles.contactList}>
          <li>
            <a href="mailto:c.bounoua@esi-sba.dz" className={styles.contactLink}>
              <FaEnvelope /> c.bounoua@esi-sba.dz
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <FaGithub /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
