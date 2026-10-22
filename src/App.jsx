import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import FloatingNavbar from "./utils/FloatingNavbar";

function App() {
  return (
    <div className="grain relative min-h-screen bg-bg">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-60 focus:rounded-full focus:bg-fg focus:px-5 focus:py-3 focus:text-sm focus:text-bg"
      >
        Skip to work
      </a>

      <Navbar />

      {/* Who I am, where I've worked, the proof, then what I can be hired
          for. Every fact mirrors the resume PDF in /public. */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Capabilities />
        <Contact />
      </main>

      <Footer />
      <FloatingNavbar />
    </div>
  );
}

export default App;
