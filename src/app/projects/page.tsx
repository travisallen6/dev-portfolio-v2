import styles from './project.page.module.css';
import { projects } from '../common/config';
import Project from '../components/Project/Project';
import Section from '../components/Section/Section';

export default function Projects() {
  const projectCards = projects.map((project) => (
    <Project
      key={project.title}
      title={project.title}
      description={project.description}
      image={project.image}
      techUsed={project.techUsed}
      demoLink={project.demoLink}
      githubLink={project.githubLink}
    />
  ));

  return (
    <Section
      title="Projects"
      id="projects"
      className={styles.projects__container}
    >
      {projectCards}
    </Section>
  );
}
