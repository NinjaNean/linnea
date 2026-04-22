import "./portfolio.css";
import Header from "../header";
import Project from "../project/project";
import { projects, translations } from "../data";
import { useLanguage } from "../../context/LanguageContext";

function Portfolio() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <>
      <section id="portfolio">
        <Header text="portfolio"></Header>
        {projects.map((project) => {
          const description =
            language === "sv" ? project.sweDescription : project.engDescription;
          return (
            <Project
              key={project.projectName}
              image={project.image}
              projectName={project.projectName}
              description={description}
              link={project.link}
              tags={project.tags}
              buttonText={t.visit_site}
            ></Project>
          );
        })}
      </section>
    </>
  );
}

export default Portfolio;
