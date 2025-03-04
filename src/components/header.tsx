import { FC } from "react";
import "./components.css";

type HeaderProps = { text: string };

const Header: FC<HeaderProps> = ({ text }) => {
  return <h1 className="header">{text}</h1>;
};

export default Header;
