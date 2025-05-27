import betterWebbImg from "../assets/bättrewebb.jpg";
import yumyumImg from "../assets/yumyum.jpg";
import lekladan from "../assets/lekladan.jpg";

type projectType = { image: string; projectName: string; description: string; link: string };

const projects: projectType[] = [
  {
    image: lekladan,
    projectName: "LEKLÅDAN",
    description:
      "Leklådan was my first project where I used a database. It's a playful website with summer toys. This project gave me hands-on experience with storing and retrieving data using Firebase, and building an interactive interface with JavaScript.",
    link: "https://ninjanean.github.io/lekladan/",
  },
  {
    image: betterWebbImg,
    projectName: "BÄTTRE WEBB",
    description:
      "One of my first school projects was Better Web, a website for a fictional conference for frontend developers. The website contained information about the program, speakers and tickets. The focus was on making a simple and clear page with HTML and CSS.",
    link: "https://ninjanean.github.io/battre-webb/",
  },
  {
    image: yumyumImg,
    projectName: "YUM YUM GIM MI SUM",
    description:
      "I created a website for a food truck where users can order dumplings. The page has functions for menu, shopping cart, ETA and receipt. I used APIs to manage the shopping cart, delivery times and receipts, which gave me experience working with dynamic data and interactivity.",
    link: "https://ninjanean.github.io/YumYumGimMeSum/",
  },
];

export default projects;
