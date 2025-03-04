import { FC } from "react";
import Button from "../button";
import "./project.css";

type ProjectProps = { image: string; projectName: string; description: string; link: string };

const Project: FC<ProjectProps> = ({ image, projectName, description, link }) => {
  return (
    <>
      <section id="project">
        <img src={image} alt="" />

        <div>
          <h2>{projectName}</h2>
          <p>{description}</p>
          <Button text="Visit Site" link={link}></Button>
        </div>
      </section>
    </>
  );
};

export default Project;
