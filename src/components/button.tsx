import { FC } from "react";
import "./components.css";

type ButtonProps = { text: string; link?: string; type?: "button" | "submit" };

const Button: FC<ButtonProps> = ({ text, link, type = "button" }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <button type={type} className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
