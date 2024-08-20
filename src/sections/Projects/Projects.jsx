import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/logo111.png';
import freshBurger from '../../assets/newslogo.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/NavneetPathak420/blogapp_second"
          h3="Blogger"
          p="Upload some Memories"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/NavneetPathak420/mynewsman-website"
          h3="My-NewsMan"
          p="Daily News Website"
        />
        
      </div>
    </section>
  );
}

export default Projects;
