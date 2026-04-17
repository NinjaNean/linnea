import Menu from "./components/menu/menu";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function Home() {
  return (
    <>
      <Menu></Menu>
      <Hero></Hero>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Home;
