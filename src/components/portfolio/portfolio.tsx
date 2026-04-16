import "./portfolio.css";
import Header from "../header";
import Project from "../project/project";
import { projects } from "../data";

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <Header text="portfolio"></Header>
        {projects.map((project) => {
          return (
            <Project
              key={project.projectName}
              image={project.image}
              projectName={project.projectName}
              description={project.description}
              link={project.link}
            ></Project>
          );
        })}
      </section>
    </>
  );
}

export default Portfolio;
