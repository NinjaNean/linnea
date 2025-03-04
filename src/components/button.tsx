import { FC } from "react";
import "./components.css";

type ButtonProps = { text: string; link?: string };

const Button: FC<ButtonProps> = ({ text, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
