import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import Projects from "./components/Projects";
import FloatingNav from "./utils/FloatingNav";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Projects />
      <div className="flex flex-col min-h-[calc(70vh-80px)] justify-end">
        <Contact />
        <Footer />
      </div>
      <FloatingNav />
    </>
  );
}

export default App;
