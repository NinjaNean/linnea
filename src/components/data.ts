import betterWebbImg from "../assets/bättrewebb.jpg";
import yumyumImg from "../assets/yumyum.jpg";
import lekladan from "../assets/lekladan.jpg";

type projectType = {
  image: string;
  projectName: string;
  engDescription: string;
  sweDescription: string;
  link: string;
  tags: string[];
};

export const translations = {
  en: {
    about_me: "about me",
    portfolio: "portfolio",
    contact_me: "contact me",
    about_text_1: "Hi! I'm Linnéa, a passionate frontend developer.",
    about_text_2:
      "I love crafting clean, user-friendly interfaces and bringing designs to life with modern technologies like HTML, CSS, and TypeScript.",
    about_text_3:
      "Currently, I'm expanding my skills in Angular and exploring the world of UI/UX design. I'm always eager to learn and take on new challenges — let's build something great together!",
    contact_name: "NAME *",
    contact_phone: "PHONE NUMBER",
    contact_email: "EMAIL *",
    contact_message: "YOUR MESSAGE *",
    contact_send_button: "Send Message",
    name_placeholder: "Type your name",
    phone_placeholder: "Type your phone number",
    email_placeholder: "Type your email address",
    message_placeholder: "Type your message here",
    error_name: "Please enter your name.",
    error_email: "Please enter your email address.",
    error_email_invalid: "Please enter a valid email address.",
    error_message: "Please enter a message.",
    error_message_length: "Message should be at least 10 characters.",
    error_phone: "Phone number may contain only digits, spaces, +, and -.",
    nav_about: "About",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    hero_title: "Frontend Developer",
    hero_button: "Contact Me",
    visit_site: "Visit Site",
  },
  sv: {
    about_me: "om mig",
    portfolio: "portfolio",
    contact_me: "kontakta mig",
    about_text_1:
      "Hej! Jag heter Linnéa och är en entusiastisk frontendutvecklare.",
    about_text_2:
      "Jag älskar att skapa rena, användbara gränssnitt och föra designer till liv med moderna tekniker som HTML, CSS och TypeScript.",
    about_text_3:
      "För närvarande utökar jag mina kunskaper i Angular och utforskar UI/UX-designens värld. Jag är alltid villig att lära mig och ta på mig nya utmaningar — låt oss bygga något fantastiskt tillsammans!",
    contact_name: "NAMN *",
    contact_phone: "TELEFONNUMMER",
    contact_email: "E-POST *",
    contact_message: "MEDDELANDE *",
    contact_send_button: "Skicka meddelande",
    name_placeholder: "Skriv ditt namn",
    phone_placeholder: "Skriv ditt telefonnummer",
    email_placeholder: "Skriv din e-postadress",
    message_placeholder: "Skriv ditt meddelande här",
    error_name: "Vänligen ange ditt namn.",
    error_email: "Vänligen ange din e-postadress.",
    error_email_invalid: "Vänligen ange en giltig e-postadress.",
    error_message: "Vänligen ange ett meddelande.",
    error_message_length: "Meddelandet bör vara minst 10 tecken.",
    error_phone:
      "Telefonnumret kan endast innehålla siffror, mellanslag, +, och -.",
    nav_about: "Om",
    nav_portfolio: "Portfolio",
    nav_contact: "Kontakt",
    hero_title: "Frontendutvecklare",
    hero_button: "Kontakta mig",
    visit_site: "Besök sida",
  },
};

export const projects: projectType[] = [
  {
    image: lekladan,
    projectName: "LEKLÅDAN",
    engDescription:
      "Leklådan was my first project where I used a database. It's a playful website with summer toys. This project gave me hands-on experience with storing and retrieving data using Firebase, and building an interactive interface with JavaScript.",
    sweDescription:
      "Leklådan var mitt första projekt där jag använde en databas. Det är en lekfull webbplats med sommarleksaker. Det här projektet gav mig praktisk erfarenhet av att lagra och hämta data med Firebase och bygga ett interaktivt gränssnitt med JavaScript.",
    link: "https://ninjanean.github.io/lekladan/",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
  },
  {
    image: betterWebbImg,
    projectName: "BÄTTRE WEBB",
    engDescription:
      "One of my first school projects was Better Web, a website for a fictional conference for frontend developers. The website contained information about the program, speakers and tickets. The focus was on making a simple and clear page with HTML and CSS.",
    sweDescription:
      "Ett av mina första skolprojekt var Bättre Webb, en webbplats för en fiktiv konferens för frontendsutvecklare. Webbplatsen innehöll information om programmet, talare och biljetter. Fokus låg på att skapa en enkel och tydlig sida med HTML och CSS.",
    link: "https://ninjanean.github.io/battre-webb/",
    tags: ["HTML", "CSS"],
  },
  {
    image: yumyumImg,
    projectName: "YUM YUM GIM MI SUM",
    engDescription:
      "I created a website for a food truck where users can order dumplings. The page has functions for menu, shopping cart, ETA and receipt. I used a API to manage the shopping cart, delivery times and receipts, which gave me experience working with dynamic data and interactivity.",
    sweDescription:
      "Jag skapade en webbplats för en matbil där användare kan beställa dumplings. Sidan har funktioner för meny, varukorg, ETA och kvitto. Jag använde ett API för att hantera varukorgen, leveranstider och kvitton, vilket gav mig erfarenhet av att arbeta med dynamisk data och interaktivitet.",
    link: "https://ninjanean.github.io/YumYumGimMeSum/",
    tags: ["HTML", "CSS", "JavaScript", "API"],
  },
];
