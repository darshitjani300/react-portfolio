import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import FloatingNavbar from "./utils/FloatingNavbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <div className="flex flex-col min-h-[calc(70vh-80px)] justify-end">
        <Contact />
        <Footer />
      </div>
      <FloatingNavbar />
    </>
  );
}

export default App;
