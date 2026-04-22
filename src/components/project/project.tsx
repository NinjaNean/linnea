import { FC } from "react";
import Button from "../button";
import "./project.css";

type ProjectProps = {
  image: string;
  projectName: string;
  description: string;
  link: string;
  tags: string[];
  buttonText: string;
};

const Project: FC<ProjectProps> = ({
  image,
  projectName,
  description,
  link,
  tags,
  buttonText,
}) => {
  return (
    <>
      <section id="project">
        <img src={image} alt="" />

        <div>
          <h2>{projectName}</h2>
          <p>{description}</p>
          <div>
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <Button text={buttonText} link={link}></Button>
        </div>
      </section>
    </>
  );
};

export default Project;
