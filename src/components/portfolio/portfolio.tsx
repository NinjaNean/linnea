import "./portfolio.css";
import Header from "../header";
import Project from "../project/project";
import data from "../data";

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <Header text="portfolio"></Header>
        {data.map((i) => {
          return (
            <Project
              key={i.projectName}
              image={i.image}
              projectName={i.projectName}
              description={i.description}
              link={i.link}
            ></Project>
          );
        })}
      </section>
    </>
  );
}

export default Portfolio;
