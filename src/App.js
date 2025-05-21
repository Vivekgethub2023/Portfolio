import Navbar from "./component/Navbar";
import About from "./component/About";
import Footer from "./component/Footer";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
