import Header from "../header";
import "./experience.css";
import Assignment from "../assignment/assignment";
import { assignments } from "../data";

function Experience() {
  return (
    <>
      <section id="experience">
        <Header text="experience"></Header>
        {assignments.map((assignment) => {
          return (
            <Assignment
              key={assignment.company}
              company={assignment.company}
              role={assignment.role}
              year={assignment.year}
              description={assignment.description}
              tags={assignment.tags}
            ></Assignment>
          );
        })}
      </section>
    </>
  );
}

export default Experience;
