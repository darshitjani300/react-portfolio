import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Projects />
      <div className="flex flex-col min-h-[calc(100vh-80px)] justify-end">
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
