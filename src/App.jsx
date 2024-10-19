import styles from "./App.module.css";
import { Aboutme } from "./components/AboutME/Aboutme";
import { Contact } from "./components/CONTACT/Contact";
import { Experience } from "./components/Experience/Experience";
import { Infos } from "./components/InfosPersonnel/Infos";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/PROJECTS/Projects";

function App() {
  return (
    <div className={styles.App}>
      
      <div className={styles['first-section']}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.infos}>
          <Infos />
        </div>
      </div>
      
      <div className={styles.section2} id="about">
        <Aboutme />
      </div>
      <Experience/>

      <Projects/>

      <Contact/>

      
      
    </div>
  );
}

export default App;
