import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Process from "./sections/Process";
import Services from "./sections/Services";
import Destinations from "./sections/Destinations";
function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Process />
        <Services />
        <Destinations />
      </main>
    </div>
  );
}

export default App;