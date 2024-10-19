import React from 'react'
import styles from './Infos.module.css'

export const Infos = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi,I'm  </h1>
            <h2 className={styles.nom}> Chahinez Bounoua </h2>
            <h3 className={styles.description}>I'm a full stack developer using </h3>
            <h5 className={styles.skill}> React and NodeJS </h5>
            <a href="#contact"  className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="../../../assets/imgP.jpg" alt="" className={styles.imgPER} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </section>
  )
}
