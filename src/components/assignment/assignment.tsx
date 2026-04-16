import { FC } from "react";
import Header from "../header";
import "./experience.css";

type AssignmentProps = {
  company: string;
  role: string;
  year: string;
  description: string;
  tags?: string[];
};

const Assignment: FC<AssignmentProps> = ({
  company,
  role,
  year,
  description,
  tags,
}) => {
  return (
    <>
      <section id="experience">
        <Header text="experience"></Header>

        {/* TODO: lägg till koden som Eni skickade här */}
      </section>
    </>
  );
};

export default Assignment;
