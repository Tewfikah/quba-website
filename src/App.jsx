import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Process from "./sections/Process";
import Services from "./sections/Services";
import Destinations from "./sections/Destinations";
import About from "./sections/About";
import Contact from "./sections/Contact";
import FAQ from "./sections/FAQ";
import Apply from "./sections/Apply";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
     
      <main className="pt-20">
        <Hero />
        <Process />
        <Services />
        <Destinations />
        <About />
        <Contact />
        <FAQ />
        <Apply />
       
      </main>
        <Footer />
    </div>
  );
}

export default App;