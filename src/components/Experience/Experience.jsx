import React from 'react'
import skills from '../../data/skills.json'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import history from '../../data/history.json'
import styles from './Experience.module.css'

const iconMap = {
    FaHtml5: <FaHtml5 />,
    FaCss3Alt: <FaCss3Alt />,
    FaJs: <FaJs />,
    FaReact: <FaReact />,
    FaNodeJs: <FaNodeJs />,
    SiExpress: <SiExpress />,
    SiMongodb: <SiMongodb />
};

export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill,id)=>{
                    return <div key={id} className={styles.skill}>
                        <div className={styles.skillImg}>{iconMap[skill.icon]} </div>
                        <p>{skill.title}</p>
                    </div>
                })
                }</div>
            <ul className={styles.history}> 
                {
                    history.map((historyItem,id)=>{
                        return <li key={id} className={styles.historyItem}>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate},${historyItem.endDate}`}</p>
                                <ul>{historyItem.experience.map((experience,id)=>{
                                    return <li key={id}>{experience}</li>
                                })}</ul>

                            </div>
                        </li>
                    })       
                             }
            </ul>
        </div>
        

    </section>
  )
}
