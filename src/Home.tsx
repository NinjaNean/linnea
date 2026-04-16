import Menu from "./components/menu/menu";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Experience from "./components/experience/experience";

function Home() {
  return (
    <>
      <Menu></Menu>
      <Hero></Hero>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Home;
