import { FC } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "./data";
import "./components.css";

type HeaderProps = { text: string };

const Header: FC<HeaderProps> = ({ text }) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  // Map text keys to translation keys
  const textMap: { [key: string]: keyof typeof t } = {
    "about me": "about_me",
    portfolio: "portfolio",
    "contact me": "contact_me",
  };

  const translatedText = textMap[text]
    ? t[textMap[text] as keyof typeof t]
    : text;

  return <h1 className="header">{translatedText}</h1>;
};

export default Header;
