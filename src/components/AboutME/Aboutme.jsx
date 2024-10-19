import React from 'react'
import styles from './Aboutme.module.css'

export const Aboutme = () => {
  return (
    <div className={styles.container}>
    <section id="about" className={styles.aboutme}>
      <h2 className='titre'>About Me</h2>
      <ul className={styles.aboutItems}>
      <li className={styles.block}>
        <h3>Frontend Developer</h3>
        <p>As a Front-End Developer, I specialize in creating dynamic and user-friendly websites using React. I focus on building responsive designs that seamlessly adapt to any device, ensuring a smooth user experience. My work is also centered around optimizing performance, delivering sites that are both fast and efficient, no matter the scale.</p>
      </li>
      <li className={styles.block}>
        <h3>Backend Developer</h3>
        <p>I possess extensive experience in designing and developing high-performance back-end systems. My expertise lies in creating optimized and scalable APIs using Node.js, ensuring efficiency and speed. Over the years, I have honed my ability to build systems that can handle large-scale applications with precision and reliability.</p>
      </li>
      </ul>

     </section>
     </div>
  )
}
